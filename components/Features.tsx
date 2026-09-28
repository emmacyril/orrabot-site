import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import { Orra } from "./Orra";
import { FEATURES } from "@/lib/content";

function shotExists(name: string) {
  return fs.existsSync(path.join(process.cwd(), "public", "screenshots", `${name}.png`));
}

export function Features() {
  return (
    <section className="wrap" style={{ paddingBottom: "clamp(72px,9vw,120px)" }}>
      <div className="center">
        <h2 className="sec-title">Everything a bot needs to do the job</h2>
        <p className="sec-sub">Real screens from the app. The pieces that turn a chat into real work.</p>
      </div>
      <div className="grid3">
        {FEATURES.map((f) => (
          <div className="ft" key={f.title}>
            <Orra className="ic" color={f.color} />
            <h3>{f.title}</h3>
            <p>{f.text}</p>
            {shotExists(f.shot) && (
              <div className="shot">
                <Image src={`/screenshots/${f.shot}.png`} alt={`${f.title} in OrraBot`} fill sizes="(max-width: 620px) 100vw, (max-width: 980px) 50vw, 380px" />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
