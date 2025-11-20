import Hero from './components/Hero'
import Features from './components/Features'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_50%)]"></div>

      <header className="relative z-10">
        <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="text-white font-semibold tracking-tight">MSP Real Estate</a>
          <div className="flex items-center gap-4 text-sm">
            <a href="/" className="text-blue-100 hover:text-white">Home</a>
            <a href="/test" className="text-blue-100 hover:text-white">Test</a>
          </div>
        </nav>
      </header>

      <main className="relative z-10">
        <Hero />
        <Features />
        <CTA />
      </main>

      <Footer />
    </div>
  )
}

export default App
