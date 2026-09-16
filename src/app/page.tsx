import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Cloud,
  Code2,
  Database,
  Download,
  Github,
  Linkedin,
  Link2,
  Mail,
  Plus,
  Workflow,
} from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SiteHeader } from "@/components/site-header";
import { KineticType } from "@/components/kinetic-type";
import {
  backendSkills,
  codingWorkflow,
  mobileProjects,
  profile,
  stackGroups,
  strengths,
  systemDesigns,
} from "@/data/portfolio";

type Project = (typeof mobileProjects)[number];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <ScrollReveal />
      <SiteHeader />
      <main id="main">
        <HeroSection />
        <SelectedWork />
        <AboutSection />
        <BackendSection />
        <AIWorkflowSection />
        <SystemDesignSection />
      </main>
      <ContactSection />
    </>
  );
}

function HeroSection() {
  return (
    <section id="top" className="hero section-shell">
      <div className="hero-copy reveal">
        <p className="role-label">
          <span className="status-dot" />
          Senior React Native Developer
        </p>
        <h1>
          Bolarin
          <br />
          Olabisi<span className="accent">.</span>
        </h1>
        <p className="hero-intro">
          I take mobile products from idea to launch,
          <br className="desktop-break" /> and keep improving them.
        </p>
        <p className="hero-location">
          Based in Lagos. Building with teams everywhere.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#work">
            Explore my work <ArrowDown size={17} />
          </a>
          <a className="text-link" href={"mailto:" + profile.email}>
            Let&apos;s talk <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
      <KineticType />
      <div className="hero-bottom reveal-delay">
        <p>4+ years of building, shipping, and refining.</p>
        <div>
          <span>React Native</span>
          <span>iOS &amp; Android</span>
          <span>Product ownership</span>
        </div>
      </div>
    </section>
  );
}

function SelectedWork() {
  const featured = [mobileProjects[4], mobileProjects[2]];
  const other = [
    mobileProjects[0],
    mobileProjects[3],
    mobileProjects[1],
    mobileProjects[5],
  ];
  return (
    <section id="work" className="work-section section-shell section-space">
      <div className="section-heading" data-reveal="up">
        <div>
          <p className="eyebrow">Selected work</p>
          <h2>
            Small screens.
            <br />
            Real impact.
          </h2>
        </div>
        <p>
          Rewards, wellbeing, and everything in between. <br />A few of the
          mobile products I&apos;ve worked on.
        </p>
      </div>
      <div className="featured-grid">
        {featured.map((project, index) => (
          <FeaturedProject
            key={project.title}
            project={project}
            index={index}
          />
        ))}
      </div>
      <div className="more-work-heading">
        <h3>More mobile work</h3>
        <span>04 projects</span>
      </div>
      <div className="project-list">
        {other.map((project, index) => (
          <CompactProject key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}

function ProjectStatus({ status }: { status: string }) {
  return (
    <span
      className={
        "project-status " + (status === "Live" ? "is-live" : "is-testing")
      }
    >
      <span />
      {status === "Live" ? "Live" : "In testing"}
    </span>
  );
}

function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="project-links">
      {project.links.length ? (
        project.links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={project.title + ": " + link.label}
          >
            {link.label.includes("TestFlight")
              ? "TestFlight"
              : link.label.startsWith("iOS")
                ? "App Store"
                : "Google Play"}
            <ArrowUpRight size={15} />
          </a>
        ))
      ) : (
        <a
          href={
            "mailto:" +
            profile.email +
            "?subject=" +
            encodeURIComponent(project.title + " testing access")
          }
        >
          Request testing access <ArrowUpRight size={15} />
        </a>
      )}
    </div>
  );
}

function FeaturedProject({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <article
      className="featured-project"
      data-reveal="up"
      data-reveal-delay={String(index * 90)}
    >
      <div className="featured-project-top">
        <span className="featured-category">
          <span>0{index + 1}</span>
          {project.category}
        </span>
        <ProjectStatus status={project.status} />
      </div>
      <div className="project-title-row">
        <h3>{project.title}</h3>
      </div>
      <p className="project-description">{project.summary}</p>
      <div className="project-meta">
        <div className="project-tags">
          {project.focus.slice(0, 3).map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <ProjectLinks project={project} />
      </div>
    </article>
  );
}

function CompactProject({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <article
      className="compact-project"
      data-reveal="up"
      data-reveal-delay={String((index % 2) * 60)}
    >
      <div className="compact-project-top">
        <span className="project-index">0{index + 3}</span>
        <div>
          <h3>{project.title}</h3>
          <ProjectStatus status={project.status} />
        </div>
      </div>
      <p className="project-description">{project.summary}</p>
      <div className="project-meta">
        <div className="project-tags">
          {project.focus.slice(0, 2).map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <ProjectLinks project={project} />
      </div>
    </article>
  );
}

function AboutSection() {
  return (
    <section id="about" className="about-section section-space">
      <div className="section-shell about-grid">
        <div className="about-copy" data-reveal="up">
          <p className="eyebrow">A bit about me</p>
          <h2>
            Invested in
            <br />
            <span className="accent">the product.</span>
          </h2>
          <p>
            I&apos;m Bolarin, a senior React Native developer with 4+ years
            across healthtech, fintech, and consumer apps.
          </p>
          <p>
            For me, ownership starts with understanding the problem and helping
            the team decide what matters. It means making thoughtful trade-offs,
            taking responsibility for delivery, and staying involved after
            launch to see what needs to improve.
          </p>
          <p>
            At PSL, I led three mobile engineers delivering fintech products
            that enabled over NGN 20 million in credit for 100+ SMEs. That is
            the kind of outcome I want my work to contribute to.
          </p>
          <a href={profile.cv} download className="text-link">
            Download my CV <Download size={17} />
          </a>
          <aside id="lately" className="lately-note" data-reveal="up">
            <Cloud size={22} aria-hidden="true" />
            <div>
              <span>Lately</span>
              <p>I&apos;m learning cloud engineering.</p>
              <small>
                Getting deeper into how applications run beyond the code.
              </small>
            </div>
          </aside>
        </div>
        <div className="expertise" data-reveal="up">
          <p className="list-caption">What I bring to a team</p>
          {strengths.map((strength, index) => (
            <details
              key={strength.title}
              className="expertise-item"
              open={index === 0}
            >
              <summary>
                <span className="expertise-index">0{index + 1}</span>
                <h3>{strength.title}</h3>
                <Plus size={19} />
              </summary>
              <p>{strength.body}</p>
            </details>
          ))}
        </div>
      </div>
      <div id="stack" className="section-shell stack-section">
        <div className="stack-heading" data-reveal="up">
          <h3>My everyday toolkit.</h3>
          <span>React Native at the core.</span>
        </div>
        <div className="stack-groups">
          {stackGroups.map((group) => (
            <div key={group.title} className="stack-group" data-reveal="up">
              <h4>{group.title}</h4>
              <div>
                {group.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BackendSection() {
  const icons = [Code2, Database, Workflow];
  return (
    <section
      id="backend"
      className="backend-section section-shell section-space"
    >
      <div className="backend-copy" data-reveal="up">
        <p className="eyebrow">Backend engineering</p>
        <h2>Beyond the app.</h2>
        <p>
          I also build the services behind the screens: APIs, data,
          authentication, and the connections that keep a product running.
        </p>
        <p className="backend-experience">
          At NaraTherapy, that included Go APIs for journaling and mood
          tracking, Stripe subscriptions, and calendar scheduling.
        </p>
      </div>
      <div className="backend-skills">
        {backendSkills.map((skill, index) => {
          const Icon = icons[index];
          return (
            <div
              className="backend-skill"
              key={skill.title}
              data-reveal="up"
              data-reveal-delay={String(index * 60)}
            >
              <Icon size={21} aria-hidden="true" />
              <div>
                <h3>{skill.title}</h3>
                <p>{skill.description}</p>
                <div className="project-tags">
                  {skill.tools.map((tool) => (
                    <span key={tool}>{tool}</span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function AIWorkflowSection() {
  return (
    <section
      id="workflow"
      className="workflow-section section-shell section-space"
      aria-labelledby="workflow-title"
    >
      <div className="workflow-intro">
        <div data-reveal="up">
          <p className="eyebrow">AI development &amp; agentic coding</p>
          <h2 id="workflow-title">
            AI in the product.
            <br />
            <span className="accent">Codex in the workflow.</span>
          </h2>
        </div>
        <div className="workflow-context" data-reveal="up">
          <p>
            I build AI features into products, including the chatbot experience
            in NaraTherapy. That work connects conversational interfaces with
            the mobile app and its backend services.
          </p>
          <p>
            I also use Codex as a coding partner. It helps with exploration,
            implementation, and iteration; I own the product decisions, review,
            and quality of what ships.
          </p>
        </div>
      </div>
      <div className="workflow-heading" data-reveal="up">
        <h3>How I work with coding agents</h3>
        <span>Codex + engineering judgment</span>
      </div>
      <ol className="workflow-steps" aria-label="My agentic coding workflow">
        {codingWorkflow.map((step, index) => (
          <li
            key={step.title}
            className="workflow-step"
            data-reveal="up"
            data-reveal-delay={String(index * 50)}
          >
            <div className="workflow-step-marker" aria-hidden="true">
              <span>0{index + 1}</span>
              <ArrowRight size={17} />
            </div>
            <h4>{step.title}</h4>
            <p>{step.body}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

function SystemDesignSection() {
  return (
    <section
      id="systems"
      className="section-shell systems-section section-space"
    >
      <div className="systems-heading" data-reveal="up">
        <div>
          <p className="eyebrow">Behind the screens</p>
          <h2>Thinking in systems.</h2>
        </div>
        <p>A growing collection of architecture explorations.</p>
      </div>
      <div className="system-list">
        {systemDesigns.map((design, index) => {
          const Icon = index === 0 ? CalendarDays : Link2;
          return (
            <a
              className="system-row"
              key={design.title}
              href={design.href}
              target="_blank"
              rel="noopener noreferrer"
              data-reveal="up"
            >
              <span className="system-index">0{index + 1}</span>
              <Icon className="system-icon" size={23} />
              <div className="system-text">
                <h3>{design.title}</h3>
                <p>{design.tags.slice(0, 3).join(" / ")}</p>
              </div>
              <span className="system-type">Architecture board</span>
              <span className="system-arrow">
                <ArrowUpRight size={21} />
              </span>
            </a>
          );
        })}
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <footer id="contact" className="contact-section">
      <div className="section-shell">
        <div className="contact-main" data-reveal="up">
          <div>
            <p className="role-label">
              <span className="status-dot" />
              Open to senior React Native opportunities
            </p>
            <h2>
              Good apps start
              <br />
              with a conversation<span className="accent">.</span>
            </h2>
          </div>
          <a
            className="contact-arrow"
            href={"mailto:" + profile.email}
            aria-label="Email Bolarin Olabisi"
          >
            <ArrowUpRight />
          </a>
        </div>
        <div className="contact-links">
          <a className="email-link" href={"mailto:" + profile.email}>
            <Mail size={18} />
            {profile.email}
          </a>
          <div>
            <a href={profile.github} target="_blank" rel="noopener noreferrer">
              <Github size={17} />
              GitHub <ArrowUpRight size={14} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={17} />
              LinkedIn <ArrowUpRight size={14} />
            </a>
            <a href={profile.cv} download>
              <Download size={17} />
              Download CV
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <a href="#top" className="footer-name">
            Bolarin Olabisi<span className="accent">.</span>
          </a>
          <span>Lagos, Nigeria / Working worldwide</span>
          <a href="#top">
            Back to top <ArrowRight size={15} className="back-to-top-icon" />
          </a>
        </div>
      </div>
    </footer>
  );
}
