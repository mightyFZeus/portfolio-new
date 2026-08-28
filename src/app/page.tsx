import {
  ArrowUpRight,
  DatabaseZap,
  Download,
  FileText,
  Linkedin,
  Mail,
  Rocket,
  Smartphone,
  Workflow,
} from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";
import { mobileProjects, profile, stackGroups, strengths, systemDesigns } from "@/data/portfolio";

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
          <span className="leading-tight">
            {profile.name}
            <span className="block text-xs font-semibold text-muted">{profile.role}</span>
          </span>
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
          Senior React Native developer: {profile.location}
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
  const releaseItems = [
    ["Navigation", "typed"],
    ["State", "persisted"],
    ["QA", "device tested"],
  ];

  return (
    <div className="reveal-delay relative">
      <div className="hero-device-stage relative overflow-hidden rounded-lg border border-line bg-paper-deep p-4 shadow-artifact sm:p-5">
        <div className="relative z-10 flex items-center justify-between gap-4">
          <span className="inline-flex items-center gap-2 rounded-md border border-line bg-paper px-3 py-2 text-sm font-black text-ink">
            <Smartphone size={16} />
            Senior RN
          </span>
          <span className="font-mono text-xs font-semibold text-muted">release train 4.8</span>
        </div>

        <div className="relative z-10 mt-6 min-h-[430px] sm:min-h-[455px]">
          <HeroPhone variant="secondary" />
          <HeroPhone variant="primary" />

          <div className="release-card absolute bottom-0 left-0 right-0 z-20 rounded-lg border border-line bg-paper p-4 shadow-artifact sm:left-auto sm:right-0 sm:w-64">
            <div className="flex items-center justify-between">
              <p className="text-sm font-black text-ink">Ready for handoff</p>
              <Rocket size={17} className="text-coral" />
            </div>
            <div className="mt-4 space-y-3">
              {releaseItems.map(([label, value]) => (
                <div key={label} className="flex items-center justify-between gap-3 text-sm">
                  <span className="flex items-center gap-2 font-semibold text-muted">
                    <span className="h-2 w-2 rounded-full bg-moss" />
                    {label}
                  </span>
                  <span className="font-black text-ink">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 grid grid-cols-2 gap-3 text-sm text-muted sm:grid-cols-4">
        {["React Native", "Expo", "RTK Query", "App Store"].map((item) => (
          <span key={item} className="rounded-md border border-line bg-paper px-3 py-2 text-center font-semibold">
            {item}
          </span>
        ))}
      </div>
      <div className="mt-3 grid gap-3 sm:grid-cols-3">
        {[
          ["4+ years", "React Native work"],
          ["5+ apps", "store releases"],
          ["Live apps", "iOS and Android"],
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

function HeroPhone({ variant }: { variant: "primary" | "secondary" }) {
  const isPrimary = variant === "primary";

  return (
    <div
      className={`hero-phone ${
        isPrimary
          ? "hero-phone-primary relative z-10 mx-auto h-[370px] w-[194px] sm:h-[410px] sm:w-[216px]"
          : "hero-phone-secondary absolute left-0 top-12 hidden h-[310px] w-[164px] sm:block"
      } rounded-[2rem] border-[8px] border-ink bg-ink p-2 shadow-artifact`}
    >
      <div className="h-full overflow-hidden rounded-[1.45rem] bg-paper">
        <div className="flex items-center justify-between border-b border-line px-4 py-3">
          <span className="h-1.5 w-10 rounded-full bg-line" />
          <span className={`h-6 w-6 rounded-full ${isPrimary ? "bg-coral" : "bg-moss"}`} />
        </div>

        {isPrimary ? (
          <div className="p-4">
            <div className="overflow-hidden rounded-md bg-ink p-3.5 text-paper">
              <p className="text-xs font-semibold text-paper/65">Bvndle</p>
              <p className="mt-3 text-2xl font-black leading-none">Rewards</p>
              <p className="mt-2 text-xs text-paper/65">wallet, KYC, pay</p>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-2">
              <span className="h-16 rounded-md bg-coral/70" />
              <span className="h-16 rounded-md bg-moss/70" />
            </div>
            <div className="mt-4 space-y-2">
              <span className="block h-3 w-4/5 rounded-full bg-line" />
              <span className="block h-3 w-3/5 rounded-full bg-line" />
              <span className="block h-10 rounded-md border border-line bg-paper-deep" />
            </div>
          </div>
        ) : (
          <div className="p-3">
            <div className="rounded-md bg-moss p-3 text-paper">
              <p className="text-xs font-semibold text-paper/75">Nara</p>
              <p className="mt-2 text-xl font-black leading-none">Wellbeing</p>
            </div>
            <div className="mt-3 space-y-2">
              <span className="block h-10 rounded-md bg-paper-deep" />
              <span className="block h-10 rounded-md bg-gold/45" />
              <span className="block h-10 rounded-md bg-blue/30" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function SelectedWork() {
  return (
    <section id="work" className="border-t border-line bg-paper-deep py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl" data-reveal="up">
          <p className="font-semibold text-coral">Selected work</p>
          <h2 className="mt-3 text-[clamp(2.2rem,5vw,4.8rem)] font-black leading-none text-ink">
            React Native apps shipped into real release cycles.
          </h2>
          <p className="mt-6 max-w-2xl leading-7 text-muted">
            Finance, therapy, football, moments, and super-app work, with live store links where the products are public.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {mobileProjects.map((project, index) => (
            <MobileProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
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
        <div className="max-w-4xl" data-reveal="up">
          <p className="font-semibold text-coral">System design</p>
          <h2 className="mt-3 text-[clamp(2.1rem,4.5vw,4.2rem)] font-black leading-none text-ink">
            Architecture notes, kept as a growing index.
          </h2>
          <p className="mt-6 max-w-2xl leading-7 text-muted">
            Small boards for service flows, data movement, tradeoffs, and the product constraints behind each system.
          </p>
        </div>
        <div className="mt-10 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {systemDesigns.map((design, index) => (
            <SystemDesignCard key={design.href} design={design} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SystemDesignCard({ design, index }: { design: (typeof systemDesigns)[number]; index: number }) {
  return (
    <a
      href={design.href}
      target="_blank"
      rel="noreferrer"
      aria-label={`Open ${design.title}`}
      className="group flex min-h-56 flex-col overflow-hidden rounded-lg border border-line bg-paper-deep p-4 transition hover:-translate-y-1 hover:border-ink hover:bg-paper hover:shadow-artifact focus:outline-none focus:ring-2 focus:ring-coral focus:ring-offset-2 focus:ring-offset-paper"
      data-reveal="up"
      data-reveal-delay={String(index * 70)}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="inline-flex items-center gap-2 rounded-md border border-line bg-paper px-2 py-1 text-xs font-bold italic text-muted">
            <span className="text-ink">{String(index + 1).padStart(2, "0")}</span>
            {design.type}
          </p>
          <h3 className="mt-4 text-xl font-black leading-tight text-ink">{design.title}</h3>
        </div>
        <SystemMap index={index} />
      </div>
      <p className="system-card-summary mt-3 text-sm leading-6 text-muted">{design.summary}</p>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {design.tags.map((tag) => (
          <span key={tag} className="mobile-tag rounded-md bg-paper px-2 py-1 text-xs font-semibold italic text-muted shadow-inset">
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-auto flex items-center justify-between border-t border-line pt-3 text-xs font-black text-ink">
        <span>Open board</span>
        <span className="grid h-7 w-7 place-items-center rounded-md bg-ink text-paper transition group-hover:bg-moss">
          <ArrowUpRight size={14} />
        </span>
      </div>
    </a>
  );
}

function SystemMap({ index }: { index: number }) {
  const accent = index % 2 === 0 ? "bg-coral" : "bg-blue";
  const softAccent = index % 2 === 0 ? "bg-coral/25" : "bg-blue/25";

  return (
    <div className="system-map relative h-16 w-24 shrink-0 overflow-hidden rounded-md border border-ink bg-ink text-paper" aria-hidden="true">
      <span className="system-path absolute left-[28%] top-[33%] h-px w-[42%] bg-paper/35" />
      <span className="system-path absolute bottom-[34%] left-[30%] h-px w-[40%] bg-paper/35" />
      <span className={`system-node absolute left-2 top-2 h-3 w-8 rounded-sm border border-paper/20 ${softAccent}`} />
      <span className="system-node absolute right-2 top-2 h-3 w-7 rounded-sm border border-paper/20 bg-paper/10" />
      <span className="system-node absolute bottom-2 left-3 h-3 w-7 rounded-sm border border-paper/20 bg-paper/10" />
      <span className={`system-node absolute bottom-2 right-3 h-3 w-8 rounded-sm border border-paper/20 ${accent}`} />
      <span className={`absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full ${accent}`} />
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
              Senior mobile work is architecture, feel, and follow-through.
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
              React Native first, with the release tools around it.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-[1.25fr_0.9fr_0.9fr]">
            {stackGroups.map((group, index) => (
              <div
                key={group.title}
                className={`rounded-lg border border-line bg-paper-deep p-5 ${index === 0 ? "sm:col-span-2 xl:col-span-1 xl:bg-ink xl:text-paper" : ""}`}
                data-reveal="up"
              >
                <h3 className={`text-xl font-black ${index === 0 ? "text-ink xl:text-paper" : "text-ink"}`}>{group.title}</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className={`rounded-md px-3 py-1.5 text-sm font-semibold shadow-inset ${index === 0 ? "bg-paper text-muted xl:bg-paper/10 xl:text-paper/75" : "bg-paper text-muted"}`}
                    >
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
          <p className="font-semibold">Available for senior React Native work.</p>
          <h2 className="mt-3 max-w-3xl text-[clamp(2.2rem,5vw,5.6rem)] font-black leading-none">
            Bring me the mobile app build.
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
