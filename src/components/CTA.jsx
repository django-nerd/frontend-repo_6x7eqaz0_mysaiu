export default function CTA() {
  return (
    <section className="py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="rounded-2xl bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 p-8 md:p-10 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white">Ready to explore properties?</h3>
          <p className="mt-2 text-blue-100/90">Use the test page to verify backend and database connectivity.</p>
          <a href="/test" className="inline-block mt-6 bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2.5 px-5 rounded-lg transition-colors">
            Open Test Page
          </a>
        </div>
      </div>
    </section>
  )
}
