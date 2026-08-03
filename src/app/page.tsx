import {
  ArrowUpRight,
  Blocks,
  DatabaseZap,
  Download,
  FileText,
  Linkedin,
  Mail,
  MessageSquareText,
  Rocket,
  Send,
  Smartphone,
  Workflow,
} from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";
import { WorkVisual } from "@/components/work-visuals";
import { featuredProject, mobileProjects, profile, stackGroups, strengths, systemDesigns } from "@/data/portfolio";

const iconMap = [FileText, Workflow, Smartphone, DatabaseZap, Rocket];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      <ScrollReveal />
      <SiteHeader />
      <HeroSection />
      <SelectedWork />
      <SystemDesignSection />
      <StrengthsSection />
      <StackSection />
      <ContactSection />
    </main>
  );
}

function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-3 font-black text-ink">
          <span className="grid h-9 w-9 place-items-center rounded-md bg-ink text-sm text-paper">{profile.initials}</span>
          <span>{profile.name}</span>
        </a>
        <div className="hidden items-center gap-6 text-sm text-muted md:flex">
          <a className="transition hover:text-ink" href="#work">
            Work
          </a>
          <a className="transition hover:text-ink" href="#systems">
            System design
          </a>
          <a className="transition hover:text-ink" href="#stack">
            Stack
          </a>
          <a className="transition hover:text-ink" href="#contact">
            Contact
          </a>
        </div>
        <a
          href={profile.linkedin}
          className="inline-flex items-center gap-2 rounded-md border border-ink bg-ink px-4 py-2 text-sm font-semibold text-paper transition hover:-translate-y-0.5 hover:bg-moss focus:outline-none focus:ring-2 focus:ring-coral focus:ring-offset-2 focus:ring-offset-paper"
        >
          <Linkedin size={16} />
          LinkedIn
        </a>
      </nav>
    </header>
  );
}

function HeroSection() {
  return (
    <section id="top" className="relative mx-auto grid max-w-7xl gap-12 px-4 pb-20 pt-14 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:pb-28 lg:pt-20">
      <div className="reveal">
        <p className="max-w-max rounded-md border border-line bg-paper-deep px-3 py-2 text-sm font-semibold text-muted">
          Mobile, AI and backend product engineer: {profile.location}
        </p>
        <h1 className="mt-8 max-w-4xl text-[clamp(3rem,8vw,7.8rem)] font-black leading-[0.9] text-ink">
          {profile.headline}
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-8 text-muted sm:text-xl">{profile.intro}</p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <a
            href="#work"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-coral px-5 py-3 font-bold text-ink transition hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-ink focus:ring-offset-2 focus:ring-offset-paper"
          >
            See selected work
            <ArrowUpRight size={18} />
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center justify-center gap-2 rounded-md border border-line bg-paper px-5 py-3 font-bold text-ink transition hover:-translate-y-0.5 hover:border-ink focus:outline-none focus:ring-2 focus:ring-coral focus:ring-offset-2 focus:ring-offset-paper"
          >
            <Mail size={18} />
            Start a conversation
          </a>
        </div>
      </div>
      <HeroArtifact />
    </section>
  );
}

function HeroArtifact() {
  return (
    <div className="reveal-delay relative">
      <div className="rounded-lg border border-line bg-paper p-3 shadow-artifact">
        <div className="grid gap-3 md:grid-cols-[1fr_0.78fr]">
          <div className="rounded-md bg-ink p-5 text-paper">
            <div className="flex items-center justify-between">
              <p className="font-mono text-xs text-paper/65">current focus</p>
              <MessageSquareText size={18} />
            </div>
            <p className="mt-8 text-4xl font-black leading-none">Documents that answer back with receipts.</p>
            <div className="mt-8 space-y-3">
              {["upload", "process", "retrieve", "stream"].map((step) => (
                <div key={step} className="flex items-center gap-3 rounded-md border border-paper/20 px-3 py-2 text-sm">
                  <span className="h-2 w-2 rounded-full bg-coral" />
                  {step}
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-3">
            <div className="rounded-md border border-line bg-paper-deep p-4">
              <Blocks className="text-moss" />
              <p className="mt-5 text-lg font-black">Product-minded architecture</p>
              <p className="mt-2 text-sm leading-6 text-muted">APIs, queues, storage, and status are designed as one product surface.</p>
            </div>
            <div className="rounded-md border border-line bg-paper-deep p-4">
              <Send className="text-blue" />
              <p className="mt-5 text-lg font-black">Mobile flow discipline</p>
              <p className="mt-2 text-sm leading-6 text-muted">Typed routes, persisted state, native interactions, and screens that keep moving.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 grid grid-cols-2 gap-3 text-sm text-muted sm:grid-cols-4">
        {["React Native", "Go APIs", "AI systems", "App Store"].map((item) => (
          <span key={item} className="rounded-md border border-line bg-paper px-3 py-2 text-center font-semibold">
            {item}
          </span>
        ))}
      </div>
      <div className="mt-3 grid gap-3 sm:grid-cols-3">
        {[
          ["4+ years", "mobile and backend"],
          ["10k+ users", "healthtech scale"],
          ["5+ apps", "store releases"],
        ].map(([value, label]) => (
          <div key={value} className="rounded-md border border-line bg-paper-deep px-4 py-3">
            <p className="text-xl font-black text-ink">{value}</p>
            <p className="mt-1 text-xs font-semibold uppercase tracking-normal text-muted">{label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function SelectedWork() {
  const project = featuredProject;

  return (
    <section id="work" className="border-t border-line bg-paper-deep py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl" data-reveal="up">
          <p className="font-semibold text-coral">Selected work</p>
          <h2 className="mt-3 text-[clamp(2.2rem,5vw,4.8rem)] font-black leading-none text-ink">
            Six mobile products, one AI/backend build.
          </h2>
        </div>

        <div className="mt-14 border-t border-line pt-12">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between" data-reveal="up">
            <div>
              <p className="font-semibold text-coral">Mobile projects</p>
              <h3 className="mt-3 max-w-3xl text-[clamp(2rem,4vw,3.8rem)] font-black leading-none text-ink">
                React Native work across finance, therapy, football, moments, and super-app flows.
              </h3>
            </div>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {mobileProjects.map((project, index) => (
              <MobileProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>

        <article className="mt-20 grid gap-8 border-t border-line pt-12 lg:grid-cols-[0.86fr_1.14fr] lg:items-center" data-reveal="up" data-reveal-delay="80">
          <div data-reveal="left" data-reveal-delay="130">
            <p className="text-sm font-semibold text-muted">{project.category}</p>
            <div className="mt-3 flex flex-wrap items-center gap-3">
              <h3 className="text-3xl font-black text-ink sm:text-4xl">{project.title}</h3>
              <a
                href={project.href}
                className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-line text-muted transition hover:border-ink hover:text-ink focus:outline-none focus:ring-2 focus:ring-coral focus:ring-offset-2 focus:ring-offset-paper-deep"
                aria-label={`Open ${project.title} live project`}
              >
                <ArrowUpRight size={18} />
              </a>
            </div>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">{project.summary}</p>
            <ul className="mt-7 space-y-3">
              {project.points.map((point) => (
                <li key={point} className="flex gap-3 text-muted">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-coral" />
                  <span className="leading-7">{point}</span>
                </li>
              ))}
            </ul>
            <div className="mt-7 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span key={item} className="rounded-md border border-line bg-paper px-3 py-1.5 text-sm font-semibold text-muted">
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div data-reveal="right" data-reveal-delay="180">
            <WorkVisual visual="rag" />
          </div>
        </article>
      </div>
    </section>
  );
}

function MobileProjectCard({ project, index }: { project: (typeof mobileProjects)[number]; index: number }) {
  return (
    <article className="group rounded-lg border border-line bg-paper p-5 transition hover:-translate-y-1 hover:shadow-artifact" data-reveal="up" data-reveal-delay={String((index % 3) * 70)}>
      <div className="flex items-start justify-between gap-4">
        <PhoneMini index={index} />
        <span className="rounded-md border border-line bg-paper-deep px-3 py-1.5 text-sm font-bold text-ink">{project.status}</span>
      </div>
      <h4 className="mt-6 text-2xl font-black text-ink">{project.title}</h4>
      <p className="mt-3 leading-7 text-muted">{project.summary}</p>
      <div className="mt-6 flex flex-wrap gap-2">
        {project.focus.map((item) => (
          <span key={item} className="mobile-tag rounded-md bg-paper-deep px-2.5 py-1 text-xs font-semibold italic text-muted shadow-inset">
            {item}
          </span>
        ))}
      </div>
      <div className="mt-6 flex flex-wrap gap-2">
        {project.links.length > 0 ? (
          project.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="inline-flex items-center gap-1.5 rounded-md border border-ink bg-ink px-3 py-2 text-sm font-bold text-paper transition hover:-translate-y-0.5 hover:bg-moss focus:outline-none focus:ring-2 focus:ring-coral focus:ring-offset-2 focus:ring-offset-paper"
            >
              {link.label}
              <ArrowUpRight size={14} />
            </a>
          ))
        ) : (
          <span className="rounded-md border border-line bg-paper-deep px-3 py-2 text-sm font-bold text-muted">Testing access available</span>
        )}
      </div>
    </article>
  );
}

function PhoneMini({ index }: { index: number }) {
  const accents = ["bg-moss", "bg-coral", "bg-blue", "bg-gold", "bg-ink"];

  return (
    <div className="phone-mini h-32 w-24 rounded-[1.45rem] border-[7px] border-ink bg-paper-deep p-2 shadow-inset">
      <div className="mx-auto h-1 w-9 rounded-full bg-line" />
      <div className="mt-3 space-y-2">
        <div className={`h-8 rounded-md ${accents[index % accents.length]}`} />
        <div className="grid grid-cols-2 gap-1.5">
          <span className="h-5 rounded bg-paper" />
          <span className="h-5 rounded bg-paper" />
          <span className="h-5 rounded bg-paper" />
          <span className="h-5 rounded bg-paper" />
        </div>
        <div className="h-4 rounded bg-coral/40" />
      </div>
    </div>
  );
}

function SystemDesignSection() {
  return (
    <section id="systems" className="border-t border-line bg-paper py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
          <div data-reveal="left">
            <p className="font-semibold text-coral">System design</p>
            <h2 className="mt-3 text-[clamp(2.1rem,4.5vw,4.2rem)] font-black leading-none text-ink">
              The architecture thinking behind the build.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-muted">
              A few readonly design boards for how services, queues, integrations, and product states are reasoned through before implementation.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {systemDesigns.map((design, index) => (
              <SystemDesignCard key={design.href} design={design} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SystemDesignCard({ design, index }: { design: (typeof systemDesigns)[number]; index: number }) {
  return (
    <article className="group rounded-lg border border-line bg-paper-deep p-5 transition hover:-translate-y-1 hover:shadow-artifact" data-reveal="up" data-reveal-delay={String(index * 90)}>
      <SystemMap index={index} />
      <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm font-semibold text-coral">{design.type}</p>
        <span className="rounded-md border border-line bg-paper px-2.5 py-1 text-xs font-bold italic text-muted">diagram</span>
      </div>
      <h3 className="mt-3 text-2xl font-black text-ink">{design.title}</h3>
      <p className="mt-3 leading-7 text-muted">{design.summary}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {design.tags.map((tag) => (
          <span key={tag} className="mobile-tag rounded-md bg-paper px-2.5 py-1 text-xs font-semibold italic text-muted shadow-inset">
            {tag}
          </span>
        ))}
      </div>
      <a
        href={design.href}
        target="_blank"
        rel="noreferrer"
        aria-label={`Open ${design.title}`}
        className="mt-6 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md border border-ink bg-ink px-4 py-2.5 text-sm font-bold text-paper transition hover:-translate-y-0.5 hover:bg-moss focus:outline-none focus:ring-2 focus:ring-coral focus:ring-offset-2 focus:ring-offset-paper-deep"
      >
        Open diagram
        <ArrowUpRight size={16} />
      </a>
    </article>
  );
}

function SystemMap({ index }: { index: number }) {
  const accent = index % 2 === 0 ? "bg-coral" : "bg-blue";
  const softAccent = index % 2 === 0 ? "bg-coral/25" : "bg-blue/25";

  return (
    <div className="system-map relative h-44 overflow-hidden rounded-md border border-ink bg-ink p-4 text-paper">
      <span className="system-path absolute left-[30%] top-[32%] h-px w-[35%] bg-paper/35" />
      <span className="system-path absolute bottom-[33%] left-[32%] h-px w-[36%] bg-paper/35" />
      <span className={`system-node absolute left-4 top-5 rounded-md border border-paper/20 ${softAccent} px-3 py-2 text-xs font-bold`}>
        client
      </span>
      <span className="system-node absolute right-5 top-5 rounded-md border border-paper/20 bg-paper/10 px-3 py-2 text-xs font-bold">
        api
      </span>
      <span className="system-node absolute bottom-5 left-6 rounded-md border border-paper/20 bg-paper/10 px-3 py-2 text-xs font-bold">
        queue
      </span>
      <span className={`system-node absolute bottom-5 right-6 rounded-md border border-paper/20 ${accent} px-3 py-2 text-xs font-bold text-ink`}>
        store
      </span>
      <span className={`absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full ${accent}`} />
    </div>
  );
}

function StrengthsSection() {
  return (
    <section id="process" className="bg-ink py-20 text-paper sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div data-reveal="left">
            <p className="font-semibold text-coral">How I work</p>
            <h2 className="mt-3 text-[clamp(2.1rem,4.5vw,4.2rem)] font-black leading-none">
              I like the hard middle of mobile, AI and backend work.
            </h2>
          </div>
          <div className="divide-y divide-paper/20 border-y border-paper/20">
            {strengths.map((strength, index) => {
              const Icon = iconMap[index];
              return (
                <div key={strength.title} className="grid gap-4 py-7 sm:grid-cols-[64px_1fr]" data-reveal="up" data-reveal-delay={String(index * 60)}>
                  <div className="grid h-12 w-12 place-items-center rounded-md bg-paper text-ink">
                    <Icon size={22} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black">{strength.title}</h3>
                    <p className="mt-2 max-w-2xl leading-7 text-paper/70">{strength.body}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function StackSection() {
  return (
    <section id="stack" className="border-t border-line bg-paper py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <div data-reveal="left">
            <p className="font-semibold text-coral">Working stack</p>
            <h2 className="mt-3 text-[clamp(2.1rem,4vw,4rem)] font-black leading-none text-ink">
              Mobile, backend, and AI tools.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {stackGroups.map((group) => (
              <div key={group.title} className="rounded-lg border border-line bg-paper-deep p-5" data-reveal="up">
                <h3 className="text-xl font-black text-ink">{group.title}</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="rounded-md bg-paper px-3 py-1.5 text-sm font-semibold text-muted shadow-inset">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <footer id="contact" className="border-t border-line bg-coral py-14 text-ink" data-reveal="up">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 sm:px-6 lg:flex-row lg:items-end lg:justify-between lg:px-8">
        <div>
          <p className="font-semibold">Available for serious product work.</p>
          <h2 className="mt-3 max-w-3xl text-[clamp(2.2rem,5vw,5.6rem)] font-black leading-none">
            Bring me the mobile or backend build.
          </h2>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:pb-2">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md bg-ink px-5 py-3 font-bold text-paper transition hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-paper focus:ring-offset-2 focus:ring-offset-coral"
          >
            <Mail size={18} />
            Email
          </a>
          <a
            href={profile.linkedin}
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md border border-ink px-5 py-3 font-bold transition hover:-translate-y-0.5 hover:bg-paper focus:outline-none focus:ring-2 focus:ring-paper focus:ring-offset-2 focus:ring-offset-coral"
          >
            <Linkedin size={18} />
            LinkedIn
          </a>
          <a
            href={profile.cv}
            download
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md border border-ink/35 bg-paper/35 px-5 py-3 font-bold transition hover:-translate-y-0.5 hover:border-ink hover:bg-paper focus:outline-none focus:ring-2 focus:ring-paper focus:ring-offset-2 focus:ring-offset-coral"
          >
            <Download size={18} />
            Download CV
          </a>
        </div>
      </div>
    </footer>
  );
}
