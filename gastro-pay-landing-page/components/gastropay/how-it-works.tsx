'use client'

import { motion } from 'framer-motion'
import { QrCode, Smartphone, CheckCircle } from 'lucide-react'

const steps = [
  {
    icon: QrCode,
    title: 'Comanda com QR Code',
    description: 'O garcom entrega a comanda fisica com um QR Code unico impresso. Sem nenhuma configuracao pelo cliente.',
  },
  {
    icon: Smartphone,
    title: 'Cliente escaneia e paga',
    description: 'O cliente escaneia o QR Code com a camera do celular. Uma pagina web exibe tudo que consumiu e o QR Code Pix para pagamento. Sem app, sem cadastro.',
  },
  {
    icon: CheckCircle,
    title: 'Caixa valida e libera',
    description: 'O restaurante recebe a confirmacao em tempo real no painel GastroPay. O caixa valida com um clique e o cliente sai sem filas.',
  },
]

export function HowItWorks() {
  return (
    <section id="como-funciona" className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-3xl sm:text-4xl text-[#1a1a1a]">
            Como funciona
          </h2>
          <p className="mt-4 text-[#4b5563] text-lg">
            Tres passos simples para transformar o pagamento do seu restaurante.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#1a7f5a]/10 mb-6">
                <step.icon className="w-7 h-7 text-[#1a7f5a]" strokeWidth={1.5} />
              </div>
              <div className="mb-2 text-[11px] font-medium text-[#1a7f5a] uppercase tracking-wide">
                Passo {index + 1}
              </div>
              <h3 className="font-serif text-xl text-[#1a1a1a] mb-3">
                {step.title}
              </h3>
              <p className="text-[#4b5563] leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
