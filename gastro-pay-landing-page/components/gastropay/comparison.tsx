'use client'

import { motion } from 'framer-motion'

const withoutSteps = [
  'Cliente termina de comer',
  'Chama o garcom para fechar a conta',
  'Garcom traz a comanda impressa',
  'Cliente vai ate o caixa',
  'Espera na fila — em media 8 minutos',
]

const withSteps = [
  'Cliente termina de comer',
  'Escaneia o QR Code da comanda',
  'Ve o que consumiu e paga pelo Pix',
  'Chega ao caixa com pagamento confirmado',
  'Validacao em 1 clique — sai em segundos',
]

export function Comparison() {
  return (
    <section className="py-24 px-6 bg-[#f8f6f1]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="font-serif text-[40px] text-[#1a1a1a]">
            Como muda na pratica
          </h2>
          <p className="mt-4 text-base text-[#6b7280]">
            Do jeito antigo para o jeito GastroPay.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="grid md:grid-cols-[1fr_auto_1fr] gap-8 md:gap-4"
        >
          {/* Without GastroPay */}
          <div className="flex flex-col">
            <span className="inline-flex self-start px-3 py-1.5 rounded-full bg-[#fee2e2] text-[#991b1b] text-xs font-medium mb-6">
              Sem GastroPay
            </span>
            <div className="space-y-0">
              {withoutSteps.map((step, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex flex-col items-center">
                    <div className="w-6 h-6 rounded-full border-2 border-[#ef4444] flex items-center justify-center shrink-0">
                      <span className="text-xs text-[#ef4444] font-medium">{index + 1}</span>
                    </div>
                    {index < withoutSteps.length - 1 && (
                      <div className="w-px h-8 bg-[#fecaca]" />
                    )}
                  </div>
                  <div className="pt-0.5 pb-8">
                    <p className="text-[#374151] text-sm leading-relaxed">{step}</p>
                    {index === withoutSteps.length - 1 && (
                      <span className="inline-flex mt-2 px-2 py-1 rounded bg-[#fee2e2] text-[#991b1b] text-[11px] font-medium">
                        ~8 min
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="hidden md:flex flex-col items-center justify-center">
            <div className="w-px h-full bg-[#e5e7eb] relative" style={{ minHeight: '300px' }}>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border border-[#e5e7eb] flex items-center justify-center">
                <span className="text-xs font-medium text-[#9ca3af]">VS</span>
              </div>
            </div>
          </div>

          {/* Mobile divider */}
          <div className="md:hidden flex items-center justify-center py-4">
            <div className="h-px flex-1 bg-[#e5e7eb]" />
            <div className="mx-4 w-10 h-10 rounded-full bg-white border border-[#e5e7eb] flex items-center justify-center">
              <span className="text-xs font-medium text-[#9ca3af]">VS</span>
            </div>
            <div className="h-px flex-1 bg-[#e5e7eb]" />
          </div>

          {/* With GastroPay */}
          <div className="flex flex-col">
            <span className="inline-flex self-start px-3 py-1.5 rounded-full bg-[#dcfce7] text-[#166534] text-xs font-medium mb-6">
              Com GastroPay
            </span>
            <div className="space-y-0">
              {withSteps.map((step, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex flex-col items-center">
                    <div className="w-6 h-6 rounded-full border-2 border-[#1a7f5a] flex items-center justify-center shrink-0">
                      <span className="text-xs text-[#1a7f5a] font-medium">{index + 1}</span>
                    </div>
                    {index < withSteps.length - 1 && (
                      <div className="w-px h-8 bg-[#bbf7d0]" />
                    )}
                  </div>
                  <div className="pt-0.5 pb-8">
                    <p className="text-[#374151] text-sm leading-relaxed">{step}</p>
                    {index === withSteps.length - 1 && (
                      <span className="inline-flex mt-2 px-2 py-1 rounded bg-[#dcfce7] text-[#166534] text-[11px] font-medium">
                        ~30 seg
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Footer text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center text-sm text-[#6b7280] mt-12"
        >
          Menos tempo no caixa. Mais tempo na mesa.
        </motion.p>
      </div>
    </section>
  )
}
