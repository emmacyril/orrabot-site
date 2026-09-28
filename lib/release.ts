import { LATEST } from "./content";

export type Downloads = {
  version: string | null;
  macArm: string; macIntel: string; windows: string; deb: string; appImage: string;
};

type Asset = { name: string; browser_download_url: string };

/** Direct links to the newest published installers, refreshed hourly. Falls back to the releases page. */
export async function getDownloads(): Promise<Downloads> {
  const fallback: Downloads = { version: null, macArm: LATEST, macIntel: LATEST, windows: LATEST, deb: LATEST, appImage: LATEST };
  try {
    const res = await fetch("https://api.github.com/repos/emmacyril/orrabot/releases/latest", {
      headers: { Accept: "application/vnd.github+json" },
      next: { revalidate: 3600 },
    });
    if (!res.ok) return fallback;
    const rel = (await res.json()) as { tag_name?: string; assets?: Asset[] };
    if (!/^v\d/.test(rel.tag_name ?? "")) return fallback; // only app releases (v0.1.86-orra.1), never tool mirrors
    const find = (re: RegExp) => rel.assets?.find((a) => re.test(a.name))?.browser_download_url ?? LATEST;
    return {
      version: rel.tag_name?.replace(/^v/, "").replace(/-orra.*$/, "") ?? null,
      macArm: find(/arm64\.dmg$/),
      macIntel: find(/x64\.dmg$/),
      windows: find(/setup\.exe$/),
      deb: find(/\.deb$/),
      appImage: find(/\.AppImage$/),
    };
  } catch {
    return fallback;
  }
}
