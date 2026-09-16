"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Download, Menu, X } from "lucide-react";
import { profile } from "@/data/portfolio";

const links = [
  ["Work", "#work"],
  ["About", "#about"],
  ["Backend", "#backend"],
  ["Workflow", "#workflow"],
  ["Systems", "#systems"],
  ["Contact", "#contact"],
] as const;

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-10% 0px -30% 0px", threshold: 0 },
    );
    ["#top", ...links.map(([, href]) => href)].forEach((href) => {
      const section = document.querySelector(href);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <header className="site-header">
      <div className="section-shell header-inner">
        <a
          className="wordmark"
          href="#top"
          aria-label="Bolarin Olabisi, home"
          onClick={() => setMenuOpen(false)}
        >
          <span className="sr-only">Bolarin Olabisi</span>bo<span>.</span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              aria-current={activeSection === href ? "location" : undefined}
            >
              {label}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <a className="resume-link" href={profile.cv} download>
            <Download size={16} />
            Resume
          </a>
          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <nav
          id="mobile-nav"
          className="mobile-nav"
          aria-label="Mobile navigation"
        >
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              aria-current={activeSection === href ? "location" : undefined}
              onClick={() => setMenuOpen(false)}
            >
              {label}
              <ArrowUpRight size={18} />
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
