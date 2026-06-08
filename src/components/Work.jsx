import { useReveal } from '../hooks/useReveal'

const projects = [
  {
    slug: 'feat-1',
    color: 'oklch(0.62 0.19 290)',
    url: 'loyaltix.app',
    idx: '01 / featured',
    glyph: 'L',
    tag: 'SaaS Product',
    title: 'Loyaltix',
    desc: 'Multi-vendor white-label loyalty platform. Businesses create branded stamp-card programs; customers earn rewards via QR scan. Three roles: operator, vendor, customer.',
    stack: ['Next.js', 'TypeScript', 'Supabase', 'shadcn/ui', 'Stripe', 'ZainCash', 'Apple/Google Wallet', 'Arabic RTL'],
    href: 'https://webna1.github.io/loyaltixwebsites/',
  },
  {
    slug: 'feat-2',
    delay: '1',
    color: 'oklch(0.74 0.14 165)',
    url: 'gym-tracker.vercel.app',
    idx: '02 / featured',
    glyph: 'G',
    tag: 'Mobile Web App',
    title: 'Gym Tracker',
    desc: 'Fitness PWA for tracking workouts, PRs, and progress over time. Charts, streak counter, shareable workout cards, installable on mobile.',
    stack: ['Next.js', 'TypeScript', 'Supabase', 'Chart.js', 'PWA', 'OTP Auth'],
    href: 'https://gym-tracker-nine-henna.vercel.app/',
  },
  {
    slug: 'reg',
    color: 'oklch(0.70 0.17 255)',
    url: 'webna.agency',
    idx: '03',
    glyph: 'W',
    tag: 'Client Work · Agency Site',
    title: 'WEBNA',
    desc: 'Digital agency portfolio with custom cursor, 6-page structure, service and process showcase.',
    stack: ['React', 'Vite', 'Custom CSS', 'Advanced Animations'],
    href: 'https://webna1.github.io/webna/',
  },
  {
    slug: 'reg',
    delay: '1',
    color: 'oklch(0.66 0.20 350)',
    url: 'magicteam.github.io',
    idx: '04',
    glyph: 'M',
    tag: 'Client Work · Agency Site',
    title: 'MagicTeam',
    desc: 'Creative video production agency. Particle cursor, spark effects, multi-page with smooth transitions.',
    stack: ['React', 'Vite', 'Custom CSS', 'Particle Effects'],
    href: 'https://webna1.github.io/magic-team/',
  },
  {
    slug: 'reg',
    color: 'oklch(0.68 0.09 60)',
    url: 'alsheikh-furniture.github.io',
    idx: '05',
    glyph: 'A',
    tag: 'Client Work · Business Site',
    title: 'Al-Sheikh Furniture',
    desc: 'Multi-brand furniture company site. Two brand sub-pages, Arabic RTL default, Google Maps integration, scroll-reveal animations.',
    stack: ['React', 'Vite', 'Google Maps', 'Leaflet', 'Arabic RTL', 'GitHub Pages'],
    href: 'https://webna1.github.io/al-sheikh-furniture/',
  },
  {
    slug: 'reg',
    delay: '1',
    color: 'oklch(0.65 0.19 35)',
    url: 'menu.cubeburger.net',
    idx: '06',
    glyph: 'C',
    tag: 'Client Work · Restaurant Brand',
    title: 'Cube Burger',
    desc: 'Full brand site + interactive bilingual digital menu app. Language switching between Arabic RTL and English LTR.',
    stack: ['React', 'Vite', 'Tailwind CSS', 'Context API', 'Bilingual'],
    href: 'https://menu.cubeburger.net/',
  },
]

export default function Work() {
  useReveal()

  return (
    <section className="sec" id="work">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <span className="kicker reveal"><em>(02)</em> Portfolio</span>
            <h2 className="reveal" data-d="1">Selected Work</h2>
          </div>
          <div className="meta reveal" data-d="2">6 PROJECTS<br />2 SAAS · 4 CLIENT BUILDS<br />2022 — 2026</div>
        </div>
        <div className="proj-grid">
          {projects.map((p, i) => (
            <article
              key={i}
              className={`card ${p.slug} reveal`}
              style={{ '--c': p.color }}
              data-d={p.delay}
              data-hot
            >
              <div className="cover">
                <div className="cover-bg" />
                <div className="url"><span className="dot" /> {p.url}</div>
                <div className="idx">{p.idx}</div>
                <div className="glyph">{p.glyph}</div>
              </div>
              <div className="card-body">
                <span className="card-tag">{p.tag}</span>
                <h3 className="card-title">{p.title}</h3>
                <p className="card-desc">{p.desc}</p>
                <div className="stack">
                  {p.stack.map(s => <span key={s}>{s}</span>)}
                </div>
                <a
                  className="view"
                  href={p.href}
                  data-hot
                  {...(p.href !== '#' && { target: '_blank', rel: 'noopener noreferrer' })}
                >
                  View project <span className="arr">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
