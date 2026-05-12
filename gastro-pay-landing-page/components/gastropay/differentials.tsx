'use client'

import { motion } from 'framer-motion'
import { Smartphone, Zap, BarChart3, Users, Settings, FileText } from 'lucide-react'

const differentials = [
  {
    icon: Smartphone,
    title: 'Sem app para o cliente',
    description: 'Funciona direto no navegador. Zero instalacao, zero cadastro obrigatorio.',
    highlighted: true,
  },
  {
    icon: Zap,
    title: 'Pix nativo',
    description: 'Integracao com o sistema financeiro brasileiro. Confirmacao instantanea para o restaurante.',
    highlighted: false,
  },
  {
    icon: BarChart3,
    title: 'Painel em tempo real',
    description: 'Acompanhe comandas abertas, pagas e pendentes em um dashboard limpo e responsivo.',
    highlighted: false,
  },
  {
    icon: Users,
    title: 'Reduz filas no caixa',
    description: 'Clientes que ja pagaram pelo celular passam pelo caixa em segundos, apenas para validacao.',
    highlighted: false,
  },
  {
    icon: Settings,
    title: 'Zero hardware adicional',
    description: 'Nao e necessario nenhum equipamento novo. Apenas QR Codes impressos nas comandas existentes.',
    highlighted: false,
  },
  {
    icon: FileText,
    title: 'CRM integrado',
    description: 'Historico de comandas, metricas de faturamento e relatorios financeiros em um unico lugar.',
    highlighted: false,
  },
]

export function Differentials() {
  return (
    <section id="diferenciais" className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-3xl sm:text-4xl text-foreground">
            Diferenciais
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Por que restaurantes escolhem o GastroPay.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {differentials.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative p-6 rounded-2xl transition-colors ${
                item.highlighted
                  ? 'bg-[#f0faf5] border-[1.5px] border-[#1a7f5a]'
                  : 'bg-white border border-border/50 hover:border-primary/20'
              }`}
            >
              {item.highlighted && (
                <span className="absolute -top-3 left-6 px-3 py-1 bg-[#1a7f5a] text-white text-[11px] font-medium rounded-full">
                  Principal vantagem
                </span>
              )}
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 ${
                item.highlighted ? 'bg-[#1a7f5a]/10' : 'bg-accent/10'
              }`}>
                <item.icon 
                  className={`w-6 h-6 ${item.highlighted ? 'text-[#1a7f5a]' : 'text-primary'}`} 
                  strokeWidth={1.5} 
                />
              </div>
              <h3 className="font-medium text-foreground text-lg mb-2">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
