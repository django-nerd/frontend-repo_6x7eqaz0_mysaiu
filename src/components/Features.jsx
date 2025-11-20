import { Search, Home, MessageSquare, ShieldCheck, Camera, CreditCard } from 'lucide-react'

const items = [
  { icon: Search, title: 'Smart Search', desc: 'Filter by location, price range, property type, and more.' },
  { icon: Home, title: 'Manage Listings', desc: 'Owners can add, edit, or remove properties with images.' },
  { icon: Camera, title: 'Photo Uploads', desc: 'Upload multiple images for each property with a primary cover.' },
  { icon: MessageSquare, title: 'Messaging', desc: 'Contact owners directly and manage your inbox.' },
  { icon: CreditCard, title: 'Payments', desc: 'Track deposits and bookings securely.' },
  { icon: ShieldCheck, title: 'Admin Panel', desc: 'Verify listings, manage users, and monitor transactions.' },
]

export default function Features() {
  return (
    <section className="py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Key Features</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-slate-800/60 border border-slate-700/60 rounded-xl p-6 hover:border-blue-500/40 transition-colors">
              <Icon className="w-6 h-6 text-blue-300" />
              <h3 className="mt-3 text-white font-semibold">{title}</h3>
              <p className="mt-2 text-blue-100/80 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
