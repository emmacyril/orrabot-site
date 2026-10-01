import { RELEASES } from "./content";

export type Downloads = {
  version: string | null;
  page: string;
  macArm: string; macIntel: string; windows: string; deb: string; appImage: string; android: string;
};

type Asset = { name: string; browser_download_url: string };
type Release = { tag_name?: string; draft?: boolean; prerelease?: boolean; html_url?: string; assets?: Asset[] };

const API = "https://api.github.com/repos/emmacyril/orrabot-releases/releases?per_page=30";

/** App releases only (v0.1.90, v0.1.90-orra.1); never tool mirrors such as browser-engine-v*. */
const isAppRelease = (r: Release) => !r.draft && /^v\d+\.\d+\.\d+/.test(r.tag_name ?? "");

/** Direct links to the newest published installers, refreshed hourly. Falls back to the releases page. */
export async function getDownloads(): Promise<Downloads> {
  const fallback: Downloads = {
    version: null, page: RELEASES,
    macArm: RELEASES, macIntel: RELEASES, windows: RELEASES, deb: RELEASES, appImage: RELEASES, android: RELEASES,
  };
  try {
    const res = await fetch(API, {
      headers: { Accept: "application/vnd.github+json" },
      next: { revalidate: 600 },
    });
    if (!res.ok) return fallback;
    const list = (await res.json()) as Release[];
    const rel = Array.isArray(list) ? (list.find((r) => isAppRelease(r) && !r.prerelease) ?? list.find(isAppRelease)) : undefined;
    if (!rel) return fallback;
    const page = rel.html_url ?? RELEASES;
    const assets = (rel.assets ?? []).filter((a) => !/\.(blockmap|yml|yaml|sha256|sig|zip)$/i.test(a.name));
    const find = (...res: RegExp[]) => {
      for (const re of res) {
        const hit = assets.find((a) => re.test(a.name));
        if (hit) return hit.browser_download_url;
      }
      return page;
    };
    return {
      version: rel.tag_name?.replace(/^v/, "").replace(/-orra.*$/, "") ?? null,
      page,
      macArm: find(/(arm64|aarch64|apple).*\.dmg$/i, /universal.*\.dmg$/i),
      macIntel: find(/(x64|x86_64|intel).*\.dmg$/i, /universal.*\.dmg$/i, /\.dmg$/i),
      windows: find(/setup.*\.exe$/i, /\.exe$/i, /\.msi$/i),
      deb: find(/\.deb$/i),
      appImage: find(/\.appimage$/i),
      android: find(/\.apk$/i),
    };
  } catch {
    return fallback;
  }
}
