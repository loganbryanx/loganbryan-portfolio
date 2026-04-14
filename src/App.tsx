import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

type IconProps = {
  className?: string;
};

type NavLink = {
  label: string;
  href: string;
};

type Shard = {
  id: number;
  x: string;
  y: string;
  size: number;
  duration: number;
  delay: number;
};

type StatCardProps = {
  icon: React.ComponentType<IconProps>;
  value: string;
  label: string;
};

type CapabilityCardProps = {
  icon: React.ComponentType<IconProps>;
  title: string;
  description: string;
};

type FlowStep = {
  title: string;
  detail: string;
  icon: React.ComponentType<IconProps>;
};

type ContactMethod = {
  label: string;
  value: string;
  href: string;
  icon: React.ComponentType<IconProps>;
};

const codeLines = [
  'const system = await deploy({ scale: true, region: "global" })',
  'verify(signature, publicKey) && authorize(request)',
  'SELECT * FROM projects WHERE impact > 9000 ORDER BY relevance DESC;',
  'interface Engineer { ships: boolean; scales: boolean; reasons: boolean }',
  'OpenAPI -> Generated Client -> Service Layer -> API -> Domain',
  'webhook.idempotencyKey ??= crypto.randomUUID()',
  'cache.set(key, value, { ttl: 300, tags: ["catalog", "pricing"] })',
  'await pipeline.observe(metrics).trace(events).protect(surface)',
  'render(frontend) && harden(backend) && optimize(database)',
  'EXPLAIN ANALYZE SELECT * FROM opportunities WHERE remote = true;',
];

const shards: Shard[] = Array.from({ length: 16 }, (_, index) => ({
  id: index,
  x: `${(index * 7) % 100}%`,
  y: `${(index * 13) % 100}%`,
  size: 40 + (index % 5) * 18,
  duration: 8 + (index % 6),
  delay: (index % 5) * 0.4,
}));

const links: NavLink[] = [
  { label: 'Cambrian', href: '#project' },
  { label: 'Architecture', href: '#architecture' },
  { label: 'Flow', href: '#flow' },
  { label: 'Contact', href: '#contact' },
  { label: 'GitHub', href: 'https://github.com/loganbryanx' },
];

const contactMethods: ContactMethod[] = [
  {
    label: 'Email',
    value: 'loganbdev@proton.me',
    href: 'mailto:loganbdev@proton.me',
    icon: MailIcon,
  },
  {
    label: 'GitHub',
    value: 'github.com/loganbryanx',
    href: 'https://github.com/loganbryanx',
    icon: GithubIcon,
  },
  {
    label: 'Resume',
    value: 'Download text resume',
    href: '/logan-bryan-resume.txt',
    icon: DownloadIcon,
  },
  {
    label: 'Cambrian Music',
    value: 'cambrianmusic.com',
    href: 'https://cambrianmusic.com',
    icon: GlobeIcon,
  },
];

const capabilityCards: CapabilityCardProps[] = [
  {
    icon: GlobeIcon,
    title: 'Full-stack product systems',
    description: 'I build interfaces, services, and integrations as one connected surface instead of isolated tickets.',
  },
  {
    icon: ShieldIcon,
    title: 'Security-aware delivery',
    description: 'Auth, webhook integrity, replay protection, and sane operational controls are designed in early.',
  },
  {
    icon: CpuIcon,
    title: 'Architecture under load',
    description: 'I focus on latency, reliability, generated clients, and API seams that survive product scale.',
  },
  {
    icon: SparklesIcon,
    title: 'Polish with intent',
    description: 'Frontend work gets motion and visual contrast, but the system model stays clean underneath.',
  },
];

const flowSteps: FlowStep[] = [
  {
    title: 'Observe the signal',
    detail: 'Start with product constraints, domain events, and the metrics that actually drive decisions.',
    icon: RadioIcon,
  },
  {
    title: 'Shape the contract',
    detail: 'Turn the system boundary into an explicit API, generated client, and typed service layer.',
    icon: LayersIcon,
  },
  {
    title: 'Harden the edges',
    detail: 'Add auth, validation, idempotency, and failure handling before the integration becomes expensive.',
    icon: ShieldIcon,
  },
  {
    title: 'Ship the surface',
    detail: 'Render the frontend with enough clarity that the architecture reads through the experience.',
    icon: TerminalSquareIcon,
  },
];

function runPortfolioSanityChecks() {
  const assertions: Array<[boolean, string]> = [
    [codeLines.length >= 8, 'Expected at least 8 code ribbon lines.'],
    [links.length >= 3, 'Expected at least 3 navigation links.'],
    [links.every((link) => typeof link.href === 'string' && link.href.length > 0), 'Every link needs a valid href.'],
    [shards.every((shard) => shard.size > 0), 'Every shard needs a positive size.'],
  ];

  const failed = assertions.find(([ok]) => !ok);
  if (failed) {
    throw new Error(`Portfolio sanity check failed: ${failed[1]}`);
  }
}

if (import.meta.env.DEV) {
  runPortfolioSanityChecks();
}

function IconBase({ children, className = 'h-5 w-5' }: { children: React.ReactNode; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      {children}
    </svg>
  );
}

function GithubIcon({ className }: IconProps) {
  return (
    <IconBase className={className}>
      <path d="M9 18c-4 1.2-4-2-6-2" />
      <path d="M15 22v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6.2 0-1.4-.5-2.5-1.3-3.4.1-.3.6-1.7-.1-3.4 0 0-1.1-.4-3.6 1.3a12.4 12.4 0 0 0-6 0C6.5 3 5.4 3.4 5.4 3.4c-.7 1.7-.2 3.1-.1 3.4-.8.9-1.3 2-1.3 3.4 0 4.8 2.7 5.9 5.5 6.2-.6.6-.6 1.2-.5 2V22" />
    </IconBase>
  );
}

function GlobeIcon({ className }: IconProps) {
  return (
    <IconBase className={className}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3a14 14 0 0 1 0 18" />
      <path d="M12 3a14 14 0 0 0 0 18" />
    </IconBase>
  );
}

function LockIcon({ className }: IconProps) {
  return (
    <IconBase className={className}>
      <rect x="5" y="11" width="14" height="10" rx="2" />
      <path d="M8 11V8a4 4 0 0 1 8 0v3" />
    </IconBase>
  );
}

function CpuIcon({ className }: IconProps) {
  return (
    <IconBase className={className}>
      <rect x="7" y="7" width="10" height="10" rx="2" />
      <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3" />
      <path d="M10 10h4v4h-4z" />
    </IconBase>
  );
}

function BinaryIcon({ className }: IconProps) {
  return (
    <IconBase className={className}>
      <path d="M7 7h.01M7 12h.01M7 17h.01M17 7c-1.7 0-3 1.3-3 3 0 1.1.6 2.1 1.5 2.6A3 3 0 0 0 14 15c0 1.7 1.3 3 3 3s3-1.3 3-3c0-1.1-.6-2.1-1.5-2.6A3 3 0 0 0 20 10c0-1.7-1.3-3-3-3Z" />
    </IconBase>
  );
}

function SparklesIcon({ className }: IconProps) {
  return (
    <IconBase className={className}>
      <path d="M12 2l1.4 4.6L18 8l-4.6 1.4L12 14l-1.4-4.6L6 8l4.6-1.4L12 2Z" />
      <path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15Z" />
      <path d="M5 14l.8 2.2L8 17l-2.2.8L5 20l-.8-2.2L2 17l2.2-.8L5 14Z" />
    </IconBase>
  );
}

function ShieldIcon({ className }: IconProps) {
  return (
    <IconBase className={className}>
      <path d="M12 3l7 3v5c0 4.5-3 8.4-7 10-4-1.6-7-5.5-7-10V6l7-3Z" />
      <path d="M9.5 12.5l1.8 1.8 3.6-4.1" />
    </IconBase>
  );
}

function ArrowRightIcon({ className }: IconProps) {
  return (
    <IconBase className={className}>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </IconBase>
  );
}

function LayersIcon({ className }: IconProps) {
  return (
    <IconBase className={className}>
      <path d="m12 3 9 5-9 5-9-5 9-5Z" />
      <path d="m3 12 9 5 9-5" />
      <path d="m3 16 9 5 9-5" />
    </IconBase>
  );
}

function RadioIcon({ className }: IconProps) {
  return (
    <IconBase className={className}>
      <circle cx="12" cy="12" r="2" />
      <path d="M16.2 7.8a6 6 0 0 1 0 8.4" />
      <path d="M7.8 16.2a6 6 0 0 1 0-8.4" />
      <path d="M19 5a10 10 0 0 1 0 14" />
      <path d="M5 19A10 10 0 0 1 5 5" />
    </IconBase>
  );
}

function TerminalSquareIcon({ className }: IconProps) {
  return (
    <IconBase className={className}>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="m8 9 3 3-3 3" />
      <path d="M13 15h3" />
    </IconBase>
  );
}

function MailIcon({ className }: IconProps) {
  return (
    <IconBase className={className}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </IconBase>
  );
}

function DownloadIcon({ className }: IconProps) {
  return (
    <IconBase className={className}>
      <path d="M12 3v11" />
      <path d="m7 11 5 5 5-5" />
      <path d="M5 21h14" />
    </IconBase>
  );
}

function NoiseGrid() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:42px_42px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(96,165,250,0.10),transparent_35%),radial-gradient(circle_at_20%_20%,rgba(249,115,22,0.14),transparent_25%),radial-gradient(circle_at_80%_30%,rgba(34,211,238,0.12),transparent_22%),radial-gradient(circle_at_50%_100%,rgba(14,165,233,0.12),transparent_30%)]" />
    </div>
  );
}

function FloatingShards() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {shards.map((shard) => (
        <motion.div
          key={shard.id}
          className="absolute rounded-2xl border border-cyan-400/20 bg-white/[0.03] backdrop-blur-sm"
          style={{
            left: shard.x,
            top: shard.y,
            width: shard.size,
            height: shard.size * 1.6,
            transform: 'rotate(25deg)',
          }}
          animate={{
            y: [0, -24, 12, 0],
            x: [0, 8, -6, 0],
            opacity: [0.15, 0.5, 0.22, 0.15],
            rotate: [25, 32, 18, 25],
          }}
          transition={{ duration: shard.duration, repeat: Infinity, ease: 'easeInOut', delay: shard.delay }}
        />
      ))}
    </div>
  );
}

function CodeRibbon({ reverse = false, top = '20%' }: { reverse?: boolean; top?: string }) {
  const repeated = useMemo(() => [...codeLines, ...codeLines], []);

  return (
    <div className="pointer-events-none absolute left-[-10%] right-[-10%] overflow-hidden" style={{ top }}>
      <motion.div
        className="flex gap-8 whitespace-nowrap font-mono text-[11px] uppercase tracking-[0.35em] text-cyan-300/40"
        animate={{ x: reverse ? ['-30%', '0%'] : ['0%', '-30%'] }}
        transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
        style={{ transform: `perspective(1000px) rotateX(74deg) rotateZ(${reverse ? '-8deg' : '8deg'})` }}
      >
        {repeated.map((line, index) => (
          <span key={`${line}-${index}`}>{line}</span>
        ))}
      </motion.div>
    </div>
  );
}

function StatCard({ icon: Icon, value, label }: StatCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8, rotateX: 8, rotateY: -8 }}
      transition={{ type: 'spring', stiffness: 220, damping: 18 }}
      className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl"
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div className="mb-4 inline-flex rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-3 text-cyan-300">
        <Icon className="h-5 w-5" />
      </div>
      <div className="text-3xl font-semibold text-white">{value}</div>
      <div className="mt-2 text-sm uppercase tracking-[0.25em] text-zinc-400">{label}</div>
    </motion.div>
  );
}

function CapabilityCard({ icon: Icon, title, description }: CapabilityCardProps) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl"
    >
      <div className="mb-4 inline-flex rounded-2xl border border-orange-400/20 bg-orange-400/10 p-3 text-orange-300">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-zinc-300">{description}</p>
    </motion.article>
  );
}

function LinkBreakField() {
  const broken = Array.from({ length: 8 }, (_, index) => index);

  return (
    <div className="relative h-52 overflow-hidden rounded-[28px] border border-white/10 bg-black/30 p-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(239,68,68,0.12),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(34,211,238,0.12),transparent_28%)]" />
      <div className="relative z-10 mb-4 flex items-center gap-3 text-zinc-200">
        <ShieldIcon className="h-5 w-5 text-cyan-300" />
        <span className="text-sm uppercase tracking-[0.3em] text-zinc-400">integrity checks</span>
      </div>
      <div className="relative z-10 grid grid-cols-2 gap-4 md:grid-cols-4">
        {broken.map((index) => (
          <motion.div
            key={index}
            className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-4"
            animate={{ y: [0, -6, 0], opacity: [0.75, 1, 0.8] }}
            transition={{ duration: 2.5 + index * 0.22, repeat: Infinity }}
          >
            <div className="mb-2 flex items-center justify-between text-zinc-300">
              <LockIcon className="h-4 w-4 text-cyan-300" />
              <span className="font-mono text-[10px] text-red-300/80">SIG_BREAK_{index + 1}</span>
            </div>
            <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="h-full bg-gradient-to-r from-cyan-400 via-orange-400 to-red-400"
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 1.7 + index * 0.12, repeat: Infinity, ease: 'linear' }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function ApiFlow() {
  return (
    <section id="flow" className="mt-20 rounded-[32px] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl md:p-10">
      <div className="mb-4 text-xs uppercase tracking-[0.35em] text-zinc-500">delivery flow</div>
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <h2 className="max-w-xl text-3xl font-semibold text-white md:text-4xl">A portfolio built like a system map, not a brochure.</h2>
          <p className="mt-5 max-w-xl text-base leading-8 text-zinc-300">
            The work pattern is consistent: reduce ambiguity, encode the contract, and ship interfaces that still read clearly after the product gets real traffic.
          </p>
        </div>
        <div className="grid gap-4">
          {flowSteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.08, duration: 0.45 }}
              className="rounded-[24px] border border-white/10 bg-black/20 p-5"
            >
              <div className="flex items-start gap-4">
                <div className="inline-flex rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-3 text-cyan-300">
                  <step.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-lg font-medium text-white">{step.title}</div>
                  <p className="mt-2 text-sm leading-7 text-zinc-300">{step.detail}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="px-6 py-8 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl md:p-10">
          <div className="text-xs uppercase tracking-[0.35em] text-zinc-500">contact</div>
          <h2 className="mt-5 max-w-xl text-3xl font-semibold text-white md:text-4xl">Need a builder who can move across product, backend, and architecture layers?</h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-zinc-300">
            Reach out if you need help shipping a frontend overhaul, tightening API boundaries, or getting a product surface into a more reliable operational shape.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="mailto:loganbdev@proton.me"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-cyan-300 px-6 py-3 text-sm font-medium uppercase tracking-[0.25em] text-slate-950 transition hover:bg-cyan-200"
            >
              <MailIcon className="h-4 w-4" />
              Start a conversation
            </a>
            <a
              href="/logan-bryan-resume.txt"
              download
              className="inline-flex items-center justify-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 text-sm font-medium uppercase tracking-[0.25em] text-zinc-100 transition hover:border-white/25"
            >
              <DownloadIcon className="h-4 w-4" />
              Download resume
            </a>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
          {contactMethods.map((method, index) => (
            <motion.a
              key={method.label}
              href={method.href}
              download={method.label === 'Resume' ? true : undefined}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ delay: index * 0.08, duration: 0.4 }}
              className="rounded-[28px] border border-white/10 bg-black/20 p-6 backdrop-blur-xl transition hover:border-cyan-400/25 hover:bg-white/[0.05]"
            >
              <div className="mb-4 inline-flex rounded-2xl border border-orange-400/20 bg-orange-400/10 p-3 text-orange-300">
                <method.icon className="h-5 w-5" />
              </div>
              <div className="text-xs uppercase tracking-[0.3em] text-zinc-500">{method.label}</div>
              <div className="mt-3 text-lg font-medium text-white">{method.value}</div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

function App() {
  return (
    <main className="relative isolate overflow-hidden">
      <section className="relative min-h-screen overflow-hidden px-6 pb-20 pt-6 sm:px-8 lg:px-12">
        <NoiseGrid />
        <FloatingShards />
        <CodeRibbon top="18%" />
        <CodeRibbon reverse top="76%" />

        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col">
          <header className="flex flex-col gap-6 rounded-[28px] border border-white/10 bg-white/[0.03] px-5 py-5 backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between sm:px-6">
            <div>
              <div className="text-xs uppercase tracking-[0.45em] text-zinc-500">logan bryan</div>
              <div className="mt-2 text-lg text-zinc-200">Engineer focused on systems, interfaces, and operational clarity.</div>
            </div>
            <nav className="flex flex-wrap gap-3 text-sm text-zinc-300">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 transition hover:border-cyan-400/30 hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </header>

          <div className="grid flex-1 items-center gap-14 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
              >
                <div className="inline-flex items-center gap-2 rounded-full border border-orange-400/20 bg-orange-400/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-orange-200">
                  <BinaryIcon className="h-4 w-4" />
                  portfolio signal
                </div>
                <h1 className="mt-8 max-w-4xl font-display text-5xl font-semibold leading-[0.92] text-white sm:text-6xl lg:text-7xl">
                  Building products that hold up from the first pixel to the last integration edge.
                </h1>
                <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-300 sm:text-xl">
                  I design and ship frontend systems, API layers, backend workflows, and deployment paths that stay understandable under pressure.
                </p>
              </motion.div>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#project"
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-cyan-300 px-6 py-3 text-sm font-medium uppercase tracking-[0.25em] text-slate-950 transition hover:bg-cyan-200"
                >
                  View featured work
                  <ArrowRightIcon className="h-4 w-4" />
                </a>
                <a
                  href="https://github.com/loganbryanx"
                  className="inline-flex items-center justify-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 text-sm font-medium uppercase tracking-[0.25em] text-zinc-100 transition hover:border-white/25"
                >
                  <GithubIcon className="h-4 w-4" />
                  GitHub profile
                </a>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="relative"
            >
              <div className="absolute inset-8 -z-10 rounded-full bg-cyan-400/20 blur-3xl" />
              <div className="rounded-[32px] border border-white/10 bg-slate-950/65 p-6 shadow-halo backdrop-blur-xl sm:p-8">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div>
                    <div className="text-xs uppercase tracking-[0.35em] text-zinc-500">runtime snapshot</div>
                    <div className="mt-2 text-xl font-semibold text-white">Systems Engineer / Product Builder</div>
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-emerald-200">
                    <span className="h-2 w-2 rounded-full bg-emerald-300" />
                    available
                  </div>
                </div>

                <div className="mt-6 space-y-4 font-mono text-sm text-zinc-300">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <div className="text-zinc-500">current.focus</div>
                    <div className="mt-2 text-cyan-200">frontend systems / generated APIs / backend reliability / cloud delivery</div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <div className="text-zinc-500">stack.pattern</div>
                    <div className="mt-2 text-orange-200">react + typescript + .net + sql + cloud infra + operational safeguards</div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <div className="text-zinc-500">ship.mode</div>
                    <div className="mt-2 text-white">measure, contract, automate, protect, then polish</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <StatCard icon={ShieldIcon} value="99.9%" label="Reliability Bias" />
            <StatCard icon={SparklesIcon} value="End to End" label="Frontend to Infra" />
          </div>
        </div>
      </section>

      <section id="project" className="px-6 py-8 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl md:p-10">
            <div className="text-xs uppercase tracking-[0.35em] text-zinc-500">featured system</div>
            <h2 className="mt-5 text-3xl font-semibold text-white md:text-4xl">Cambrian</h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-zinc-300">
              Product engineering across the experience stack: frontend architecture, API consumption patterns, backend integration seams, and deployment discipline. The goal is not just shipping features. The goal is shipping a coherent operating system for the product.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {capabilityCards.map((card) => (
                <CapabilityCard key={card.title} {...card} />
              ))}
            </div>
          </div>

          <LinkBreakField />
        </div>
      </section>

      <section id="architecture" className="px-6 py-8 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl rounded-[32px] border border-white/10 bg-black/20 p-8 backdrop-blur-xl md:p-10">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <div className="text-xs uppercase tracking-[0.35em] text-zinc-500">architecture bias</div>
              <h2 className="mt-5 text-3xl font-semibold text-white md:text-4xl">Interfaces should reveal the shape of the system behind them.</h2>
              <p className="mt-5 text-base leading-8 text-zinc-300">
                I prefer architectures with explicit boundaries, typed contracts, and enough observability that defects are explainable instead of mysterious.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5">
                <div className="mb-3 inline-flex rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-3 text-cyan-300">
                  <LayersIcon className="h-5 w-5" />
                </div>
                <div className="text-lg font-medium text-white">Generated clients</div>
                <p className="mt-2 text-sm leading-7 text-zinc-300">Avoid drift by generating client contracts and keeping data flow typed through the service layer.</p>
              </div>
              <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5">
                <div className="mb-3 inline-flex rounded-2xl border border-orange-400/20 bg-orange-400/10 p-3 text-orange-300">
                  <TerminalSquareIcon className="h-5 w-5" />
                </div>
                <div className="text-lg font-medium text-white">Operational guardrails</div>
                <p className="mt-2 text-sm leading-7 text-zinc-300">Automate the happy path, but also encode the failure modes before they turn into support work.</p>
              </div>
              <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5">
                <div className="mb-3 inline-flex rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-3 text-cyan-300">
                  <RadioIcon className="h-5 w-5" />
                </div>
                <div className="text-lg font-medium text-white">Signal over noise</div>
                <p className="mt-2 text-sm leading-7 text-zinc-300">Metrics, traces, and query behavior should support decisions, not just decorate dashboards.</p>
              </div>
              <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5">
                <div className="mb-3 inline-flex rounded-2xl border border-orange-400/20 bg-orange-400/10 p-3 text-orange-300">
                  <GlobeIcon className="h-5 w-5" />
                </div>
                <div className="text-lg font-medium text-white">Global thinking</div>
                <p className="mt-2 text-sm leading-7 text-zinc-300">Frontends, backends, databases, and deployment regions are part of one delivery graph.</p>
              </div>
            </div>
          </div>

          <ApiFlow />
        </div>
      </section>

      <ContactSection />

      <footer className="px-6 pb-16 pt-8 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 rounded-[28px] border border-white/10 bg-white/[0.03] px-6 py-6 text-sm text-zinc-400 backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between">
          <div>Logan Bryan. Systems-minded product engineering.</div>
          <div className="flex items-center gap-5">
            <a href="https://github.com/loganbryanx" className="transition hover:text-white">GitHub</a>
            <a href="#project" className="transition hover:text-white">Featured Work</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default App;
