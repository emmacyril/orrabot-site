import { Orra } from "./Orra";
import { ThemeToggle } from "./ThemeToggle";
import { REPO } from "@/lib/content";

export function Nav() {
  return (
    <header className="nav">
      <div className="wrap">
        <a className="logo" href="#top"><Orra color="#FF6B3D" />OrraBot</a>
        <nav className="nav-links" aria-label="Sections">
          <a href="#download">Download</a>
          <a href="#demo">Demo</a>
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#faq">FAQ</a>
        </nav>
        <div className="nav-right">
          <a className="btn btn-quiet nav-gh" href={REPO}>GitHub</a>
          <ThemeToggle />
          <a className="btn btn-primary" href="#download">Download</a>
        </div>
      </div>
    </header>
  );
}
