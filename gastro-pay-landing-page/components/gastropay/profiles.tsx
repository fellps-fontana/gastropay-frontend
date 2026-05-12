'use client'

import { motion } from 'framer-motion'
import { Scale, UtensilsCrossed, Store } from 'lucide-react'

const profiles = [
  {
    icon: Scale,
    title: 'Restaurantes self-service',
    description: 'Controle total das comandas por peso ou item. Cada bandeja gera um QR Code unico para pagamento na saida.',
  },
  {
    icon: UtensilsCrossed,
    title: 'Restaurantes a la carte',
    description: 'O cliente fecha a conta pelo celular sem precisar chamar o garcom. O caixa so valida.',
  },
  {
    icon: Store,
    title: 'Pracas de alimentacao',
    description: 'Multiplos boxes, uma solucao centralizada. Cada praca tem seu painel independente.',
  },
]

export function Profiles() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-3xl sm:text-4xl text-[#1a1a1a]">
            Para quem e o GastroPay
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {profiles.map((profile, index) => (
            <motion.div
              key={profile.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="p-8 rounded-2xl bg-[#f8f6f1] border border-[#e5e7eb] text-center"
              style={{ borderWidth: '0.5px' }}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#1a7f5a]/10 mb-5">
                <profile.icon className="w-8 h-8 text-[#1a7f5a]" strokeWidth={1.5} />
              </div>
              <h3 className="text-base font-medium text-[#1a1a1a] mb-2">
                {profile.title}
              </h3>
              <p className="text-[#4b5563] leading-relaxed">
                {profile.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
