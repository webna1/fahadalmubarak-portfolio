import { useReveal } from '../hooks/useReveal'

export default function Contact() {
  useReveal()

  return (
    <section className="sec contact" id="contact">
      <div className="blob" />
      <div className="wrap">
        <span className="kicker reveal" style={{ justifyContent: 'center' }}>
          <em>(04)</em> Contact
        </span>
        <h2 className="reveal" data-d="1">Let&apos;s build something.</h2>
        <a className="mail reveal" data-d="2" href="mailto:fahadlupered@gmail.com" data-hot>
          fahadlupered@gmail.com <span className="arr">↗</span>
        </a>
        <p className="alt reveal" data-d="3">
          OPEN TO FULL-STACK ROLES, FREELANCE BUILDS &amp; SAAS COLLABORATIONS
        </p>
      </div>
    </section>
  )
}
