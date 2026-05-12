'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const trustIndicators = [
  { icon: '🔒', text: 'Dados protegidos' },
  { icon: '⚡', text: 'Resposta em ate 24h' },
  { icon: '🍽️', text: '+40 restaurantes na fila' },
]

export function CTA() {
  const [formData, setFormData] = useState({
    restaurant: '',
    email: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setIsSubmitted(true)
  }

  return (
    <section id="contato" className="py-24 px-6 bg-primary">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-3xl sm:text-4xl text-white leading-tight">
            Pronto para modernizar seu restaurante?
          </h2>
          <p className="mt-4 text-white/80 text-lg">
            Estamos em fase de acesso antecipado. Cadastre seu interesse e entraremos em contato.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10"
        >
          {isSubmitted ? (
            <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-serif text-2xl text-white mb-2">Obrigado pelo interesse!</h3>
              <p className="text-white/80">Entraremos em contato em breve.</p>
            </div>
          ) : (
            <>
              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center items-center gap-4 mb-5">
                {trustIndicators.map((item, index) => (
                  <div key={item.text} className="flex items-center gap-2">
                    <span className="text-sm">{item.icon}</span>
                    <span className="text-xs text-white/80">{item.text}</span>
                    {index < trustIndicators.length - 1 && (
                      <span className="hidden sm:block w-px h-4 bg-white/30 ml-4" />
                    )}
                  </div>
                ))}
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Nome do restaurante"
                  value={formData.restaurant}
                  onChange={(e) => setFormData({ ...formData, restaurant: e.target.value })}
                  required
                  className="w-full px-5 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all"
                />
                <input
                  type="email"
                  placeholder="Seu e-mail"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-5 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all"
                />
                <button
                  type="submit"
                  className="w-full px-7 py-3.5 rounded-full bg-white text-primary font-medium hover:bg-white/90 transition-colors"
                >
                  Quero acesso antecipado
                </button>
              </form>
            </>
          )}
        </motion.div>
      </div>
    </section>
  )
}
