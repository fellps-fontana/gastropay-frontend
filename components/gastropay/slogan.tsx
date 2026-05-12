'use client'

import { motion } from 'framer-motion'

export function Slogan() {
  return (
    <section className="py-24 px-6 bg-[#1f2d28]">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white font-medium leading-tight"
        >
          Do prato ao Pix. Simples assim.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-6 text-lg"
          style={{ color: 'rgba(255, 255, 255, 0.85)' }}
        >
          Tecnologia que respeita o ritmo do restaurante — e do cliente.
        </motion.p>
      </div>
    </section>
  )
}

export function SloganSecondary() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1a1a1a] leading-tight"
        >
          Menos fila. Mais mesa virada.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-6 text-[#4b5563] text-lg max-w-2xl mx-auto"
        >
          Cada minuto que seu cliente passa na fila do caixa e um minuto que outra mesa poderia estar sendo ocupada.
        </motion.p>
      </div>
    </section>
  )
}
