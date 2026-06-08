import { useReveal } from '../hooks/useReveal'
import { useCountUp } from '../hooks/useCountUp'

export default function About() {
  useReveal()
  useCountUp()

  return (
    <section className="sec" id="about">
      <div className="wrap">
        <div className="about-grid">
          <div>
            <span className="kicker reveal"><em>(01)</em> About</span>
            <p className="about-lead reveal" data-d="1">
              A full-stack developer who cares about the <span className="hl">last 10%</span> — the part where products start to feel real.
            </p>
            <div className="about-body reveal" data-d="2">
              <p>I build with React, Next.js, and Supabase. I've shipped branded websites for restaurants, furniture companies, and creative agencies — and built two production apps from scratch.</p>
              <p>I specialize in bilingual Arabic / English UX and modern dark-themed interfaces, with an eye for performance and the small interactions that make software feel considered.</p>
            </div>
            <div className="about-tags reveal" data-d="3">
              {['Arabic-first UX', 'RTL / LTR', 'SaaS', 'Client work', 'Performance', 'Dark theming'].map(t => (
                <span key={t}>{t}</span>
              ))}
            </div>
          </div>
          <div className="stats reveal" data-d="2">
            <div className="stat">
              <span className="num" data-count="7">0</span>
              <span className="lbl">Projects Shipped</span>
            </div>
            <div className="stat">
              <span className="num" data-count="2">0</span>
              <span className="lbl">SaaS Products</span>
            </div>
            <div className="stat">
              <span className="num" data-count="2">0</span>
              <span className="lbl">Languages — AR / EN</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
