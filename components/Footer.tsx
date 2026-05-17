import SocialLinks from "./SocialLinks";

const Footer = () => (
  <footer className="border-t border-ink/10 py-10 px-6 md:px-16">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-5">
      <p className="text-muted text-sm font-epilogue">© 2026 Omar Zeineddine</p>

      <SocialLinks />

      <a
        href="https://vlogit.app"
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted hover:text-accent text-sm transition-colors font-medium font-epilogue"
      >
        vlogit.app ↗
      </a>
    </div>
  </footer>
);

export default Footer;
