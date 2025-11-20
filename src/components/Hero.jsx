import { Building2 } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-600/20 via-blue-900/20 to-slate-900"></div>
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 text-center">
        <div className="mx-auto w-20 h-20 rounded-2xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center mb-6">
          <Building2 className="w-10 h-10 text-blue-300" />
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight">
          M S P Construction and Properties
        </h1>
        <p className="mt-4 md:mt-6 text-blue-100/90 text-lg md:text-xl max-w-3xl mx-auto">
          Property consultation and all type of paperwork in industrial plots of UPSIDA, GNIDA, YEIDA.
        </p>
      </div>
    </section>
  )
}
