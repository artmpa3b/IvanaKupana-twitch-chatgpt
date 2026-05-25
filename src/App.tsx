import { Button } from './components/ui/button'

const navLinks = ['Studio', 'About', 'Journal', 'Reach Us']

export default function App() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground" style={{ fontFamily: 'var(--font-body)' }}>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 z-0 h-full w-full object-cover"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4"
      />

      <nav className="relative z-10 mx-auto flex w-full max-w-7xl items-center justify-between px-8 py-6">
        <a className="text-3xl tracking-tight text-foreground" href="#" style={{ fontFamily: "'Instrument Serif', serif" }}>
          Velorah<sup className="text-xs">®</sup>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <a className="text-sm text-foreground" href="#">Home</a>
          {navLinks.map((link) => (
            <a key={link} className="text-sm text-muted-foreground transition-colors hover:text-foreground" href="#">
              {link}
            </a>
          ))}
        </div>

        <Button className="liquid-glass rounded-full px-6 py-2.5 text-sm text-foreground hover:scale-[1.03]">Begin Journey</Button>
      </nav>

      <section className="relative z-10 flex min-h-[calc(100vh-88px)] flex-col items-center justify-center px-6 pb-40 pt-32 py-[90px] text-center">
        <h1
          className="animate-fade-rise max-w-7xl text-5xl font-normal leading-[0.95] tracking-[-2.46px] sm:text-7xl md:text-8xl"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Where <em className="not-italic text-muted-foreground">dreams</em> rise <em className="not-italic text-muted-foreground">through the silence.</em>
        </h1>

        <p className="animate-fade-rise-delay mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          We&apos;re designing tools for deep thinkers, bold creators, and quiet rebels. Amid the chaos, we build digital spaces for sharp focus and inspired work.
        </p>

        <Button className="liquid-glass animate-fade-rise-delay-2 mt-12 cursor-pointer rounded-full px-14 py-5 text-base text-foreground hover:scale-[1.03]">
          Begin Journey
        </Button>
      </section>
    </main>
  )
}
