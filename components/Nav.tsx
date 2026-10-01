import { Orra } from "./Orra";
import { ThemeToggle } from "./ThemeToggle";

export function Nav() {
  return (
    <header className="nav">
      <div className="wrap">
        <a className="logo" href="/"><Orra color="#FF6B3D" />OrraBot</a>
        <nav className="nav-links" aria-label="Sections">
          <a href="/download">Download</a>
          <a href="/#demo">Demo</a>
          <a href="/#features">Features</a>
          <a href="/#pricing">Pricing</a>
          <a href="/docs">Help</a>
          <a href="/contact">Contact</a>
        </nav>
        <div className="nav-right">
          <a className="btn btn-quiet nav-gh" href="/docs">Help centre</a>
          <ThemeToggle />
          <a className="btn btn-primary" href="/download">Download</a>
        </div>
      </div>
    </header>
  );
}
