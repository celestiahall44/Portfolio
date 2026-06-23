const featuredProjects = [
  {
    title: "Conversion-focused marketing site",
    summary:
      "A responsive launch site for a B2B product with a modular design system, animated storytelling, and CMS-driven content blocks.",
    impact: "+28% demo requests after redesign",
    stack: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
  },
  {
    title: "Analytics dashboard interface",
    summary:
      "A data-heavy admin experience with keyboard-friendly filters, reusable charts, and a compact component architecture for fast iteration.",
    impact: "Cut internal reporting time by 40%",
    stack: ["React", "Recharts", "Zustand", "Accessibility"],
  },
  {
    title: "E-commerce product experience",
    summary:
      "A polished storefront flow focused on mobile performance, flexible merchandising sections, and friction-free add-to-cart interactions.",
    impact: "Lifted mobile revenue per visitor by 17%",
    stack: ["Next.js", "Stripe", "Server Actions", "Performance"],
  },
];

const strengths = [
  "Design systems that stay consistent as products grow",
  "Responsive UI with strong hierarchy and clean motion",
  "Accessible interactions and keyboard-friendly flows",
  "Performance-minded frontend architecture",
];

const process = [
  {
    label: "Design-aware development",
    description:
      "I translate product direction into layouts that feel intentional, readable, and conversion-ready.",
  },
  {
    label: "Component-driven execution",
    description:
      "I build reusable UI primitives first so product teams can move faster without visual drift.",
  },
  {
    label: "Measurement and iteration",
    description:
      "I focus on outcomes like performance, engagement, and clarity instead of shipping visuals in isolation.",
  },
];

export default function PortfolioPage() {
  return (
    <main className="relative overflow-hidden bg-[var(--surface)] text-[var(--ink)]">
      <div className="absolute inset-x-0 top-0 -z-10 h-[42rem] bg-[radial-gradient(circle_at_top_left,_rgba(28,166,159,0.18),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(245,126,65,0.16),_transparent_32%),linear-gradient(180deg,_#f7f3eb_0%,_#f3ede2_48%,_#fffdf8_100%)]" />
      <div className="absolute left-[-8rem] top-32 -z-10 h-64 w-64 rounded-full bg-[rgba(28,166,159,0.15)] blur-3xl" />
      <div className="absolute right-[-5rem] top-96 -z-10 h-72 w-72 rounded-full bg-[rgba(245,126,65,0.14)] blur-3xl" />

      <section className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 pb-16 pt-6 sm:px-10 lg:px-12">
        <header className="flex items-center justify-between border-b border-[rgba(27,31,35,0.08)] pb-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--muted)]">
              Frontend Portfolio
            </p>
            <h1 className="mt-2 text-lg font-semibold text-[var(--ink)]">
              Celestia
            </h1>
          </div>
          <nav className="hidden gap-6 text-sm text-[var(--muted)] md:flex">
            <a href="#projects" className="transition hover:text-[var(--ink)]">
              Projects
            </a>
            <a href="#strengths" className="transition hover:text-[var(--ink)]">
              Strengths
            </a>
            <a href="#contact" className="transition hover:text-[var(--ink)]">
              Contact
            </a>
          </nav>
        </header>

        <div className="grid flex-1 items-center gap-16 py-14 lg:grid-cols-[1.2fr_0.8fr] lg:py-20">
          <div className="max-w-3xl">
            <p className="inline-flex rounded-full border border-[rgba(27,31,35,0.1)] bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--muted)] backdrop-blur">
              Available for frontend roles
            </p>
            <h2 className="mt-8 max-w-4xl text-5xl font-semibold tracking-[-0.05em] text-balance sm:text-6xl lg:text-7xl">
              Building polished interfaces that make products feel clear,
              fast, and worth using.
            </h2>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-[var(--muted)] sm:text-xl">
              Frontend developer focused on React, Next.js, TypeScript, and
              product-minded UI work. I build responsive experiences that balance
              visual quality, accessibility, and measurable business impact.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-full bg-[var(--ink)] px-6 py-3 text-sm font-semibold text-[var(--surface)] transition hover:translate-y-[-1px] hover:bg-[var(--accent)]"
              >
                View selected work
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-[rgba(27,31,35,0.14)] bg-white/70 px-6 py-3 text-sm font-semibold text-[var(--ink)] backdrop-blur transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                Start a conversation
              </a>
            </div>

            <dl className="mt-14 grid gap-4 sm:grid-cols-3">
              <div className="rounded-[1.75rem] border border-[rgba(27,31,35,0.08)] bg-white/80 p-5 shadow-[0_20px_80px_rgba(37,41,46,0.08)] backdrop-blur">
                <dt className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--muted)]">
                  Focus
                </dt>
                <dd className="mt-3 text-lg font-semibold">Frontend product work</dd>
              </div>
              <div className="rounded-[1.75rem] border border-[rgba(27,31,35,0.08)] bg-white/80 p-5 shadow-[0_20px_80px_rgba(37,41,46,0.08)] backdrop-blur">
                <dt className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--muted)]">
                  Stack
                </dt>
                <dd className="mt-3 text-lg font-semibold">React, Next.js, TypeScript</dd>
              </div>
              <div className="rounded-[1.75rem] border border-[rgba(27,31,35,0.08)] bg-white/80 p-5 shadow-[0_20px_80px_rgba(37,41,46,0.08)] backdrop-blur">
                <dt className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--muted)]">
                  Priorities
                </dt>
                <dd className="mt-3 text-lg font-semibold">Clarity, speed, accessibility</dd>
              </div>
            </dl>
          </div>

          <aside className="grid gap-5">
            <div className="rounded-[2rem] border border-[rgba(27,31,35,0.08)] bg-[var(--ink)] p-8 text-[var(--surface)] shadow-[0_24px_100px_rgba(26,32,44,0.22)]">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/55">
                Why teams hire me
              </p>
              <ul className="mt-6 space-y-4 text-base leading-7 text-white/82">
                {strengths.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[var(--accent-2)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[2rem] border border-[rgba(27,31,35,0.08)] bg-white/82 p-8 shadow-[0_24px_100px_rgba(26,32,44,0.08)] backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--muted)]">
                Job search ready
              </p>
              <p className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[var(--ink)]">
                Designed to help recruiters understand value quickly.
              </p>
              <p className="mt-4 text-base leading-7 text-[var(--muted)]">
                This portfolio emphasizes outcomes, technical range, and a clear
                point of view instead of generic filler sections.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section id="projects" className="mx-auto w-full max-w-7xl px-6 py-16 sm:px-10 lg:px-12 lg:py-24">
        <div className="flex max-w-2xl flex-col gap-4">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[var(--muted)]">
            Selected Work
          </p>
          <h3 className="text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
            Projects framed around outcomes, not just screenshots.
          </h3>
          <p className="text-base leading-8 text-[var(--muted)] sm:text-lg">
            Replace these sample case studies with your real projects, metrics,
            and links before applying. The structure is already tuned for hiring conversations.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <article
              key={project.title}
              className="group rounded-[2rem] border border-[rgba(27,31,35,0.08)] bg-white p-7 shadow-[0_24px_100px_rgba(26,32,44,0.08)] transition hover:-translate-y-1 hover:shadow-[0_30px_120px_rgba(26,32,44,0.14)]"
            >
              <p className="text-sm font-semibold text-[var(--accent)]">
                {project.impact}
              </p>
              <h4 className="mt-5 text-2xl font-semibold tracking-[-0.03em]">
                {project.title}
              </h4>
              <p className="mt-4 text-base leading-7 text-[var(--muted)]">
                {project.summary}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-[rgba(28,166,159,0.09)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--accent)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        id="strengths"
        className="mx-auto grid w-full max-w-7xl gap-8 px-6 py-16 sm:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:px-12 lg:py-24"
      >
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[var(--muted)]">
            Working Style
          </p>
          <h3 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
            A frontend approach built for modern product teams.
          </h3>
        </div>

        <div className="grid gap-5">
          {process.map((item, index) => (
            <div
              key={item.label}
              className="rounded-[2rem] border border-[rgba(27,31,35,0.08)] bg-white/85 p-7 shadow-[0_24px_100px_rgba(26,32,44,0.06)] backdrop-blur"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--accent)]">
                0{index + 1}
              </p>
              <h4 className="mt-3 text-2xl font-semibold tracking-[-0.03em]">
                {item.label}
              </h4>
              <p className="mt-3 text-base leading-7 text-[var(--muted)]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto w-full max-w-7xl px-6 pb-24 pt-8 sm:px-10 lg:px-12">
        <div className="rounded-[2.5rem] border border-[rgba(27,31,35,0.08)] bg-[linear-gradient(135deg,_#1b1f23_0%,_#29343d_100%)] p-8 text-white shadow-[0_30px_120px_rgba(12,18,28,0.28)] sm:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-white/55">
            Contact
          </p>
          <div className="mt-6 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <h3 className="text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
                Ready to join a team shipping thoughtful frontend products.
              </h3>
              <p className="mt-5 text-base leading-8 text-white/70 sm:text-lg">
                Replace the placeholder details below with your real email,
                GitHub, LinkedIn, and resume link before sharing this portfolio.
              </p>
            </div>

            <div className="grid gap-3 text-sm text-white/78 sm:text-base">
              <p>Email: yourname@example.com</p>
              <p>GitHub: github.com/your-profile</p>
              <p>LinkedIn: linkedin.com/in/your-profile</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}