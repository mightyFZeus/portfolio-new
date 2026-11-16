import { ArrowUpRight } from "lucide-react";
import { mobileProjects, profile } from "@/data/portfolio";
import styles from "./project-list.module.css";

export function ProjectList() {
  return (
    <section id="work" className="work-section section-shell section-space" aria-labelledby="work-title">
      <div className="section-heading" data-reveal="up">
        <div>
          <p className="eyebrow">Selected work</p>
          <h2 id="work-title">Mobile projects<span className="accent">.</span></h2>
        </div>
      </div>
      <ol className={styles.list}>
        {mobileProjects.map((project, index) => (
          <li key={project.title} className={styles.row}>
            <span className={styles.number} aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
            <div className={styles.identity}>
              <p className={styles.category}>{project.category}</p>
              <h3>{project.title}</h3>
              <span className={"project-status" + (project.status === "Live" ? " is-live" : "")}>
                <span aria-hidden="true" />{project.status === "Live" ? "Live" : "In testing"}
              </span>
            </div>
            <div className={styles.description}>
              <p>{project.summary}</p>
              {project.focus.length > 0 && (
                <div className="project-tags">{project.focus.map(tag => <span key={tag}>{tag}</span>)}</div>
              )}
            </div>
            <div className={`project-links ${styles.links}`}>
              {project.links.length ? project.links.map(link => {
                const store = link.label.startsWith("iOS") ? "App Store" : "Google Play";
                return (
                  <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} on ${store}`}>
                    {store}<ArrowUpRight size={15} aria-hidden="true" />
                  </a>
                );
              }) : (
                <a href={`mailto:${profile.email}?subject=${encodeURIComponent(project.title + " testing access")}`} aria-label={`Request testing access for ${project.title}`}>
                  Request testing access<ArrowUpRight size={15} aria-hidden="true" />
                </a>
              )}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
