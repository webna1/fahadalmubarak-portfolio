import { useReveal } from '../hooks/useReveal'

const categories = [
  {
    n: '01', title: 'Frontend',
    chips: ['React 19', 'Next.js', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'Vite'],
  },
  {
    n: '02', title: 'Backend', delay: '1',
    chips: ['Supabase', 'PostgreSQL', 'Row-Level Security', 'API Routes'],
  },
  {
    n: '03', title: 'Design & UX', delay: '2',
    chips: ['Custom CSS Animations', 'RTL / LTR Bilingual', 'PWA', 'Dark Theming'],
  },
  {
    n: '04', title: 'Integrations', delay: '1',
    chips: ['Stripe', 'ZainCash', 'Resend', 'PostHog', 'Sentry', 'QR Scanning', 'Apple/Google Wallet'],
  },
  {
    n: '05', title: 'Tooling', delay: '2',
    chips: ['Vercel', 'Vitest', 'Playwright', 'Git'],
  },
]

export default function Skills() {
  useReveal()

  return (
    <section className="sec" id="skills">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <span className="kicker reveal"><em>(03)</em> Capabilities</span>
            <h2 className="reveal" data-d="1">The Stack</h2>
          </div>
          <div className="meta reveal" data-d="2">
            FRONTEND → BACKEND<br />DESIGN → INTEGRATIONS<br />SHIP → MONITOR
          </div>
        </div>
        <div className="skills">
          {categories.map((cat, i) => (
            <div className="skillcat reveal" key={i} data-d={cat.delay}>
              <div className="ct">
                <span className="n">{cat.n}</span>
                <h3>{cat.title}</h3>
              </div>
              <div className="chips">
                {cat.chips.map(c => <span className="chip" key={c}>{c}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
