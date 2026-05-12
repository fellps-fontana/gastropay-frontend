'use client'

import { motion } from 'framer-motion'

function PhoneMockup() {
  return (
    <div 
      className="relative"
      style={{ 
        transform: 'rotate(5deg)',
        filter: 'drop-shadow(0 24px 48px rgba(0,0,0,0.10))'
      }}
    >
      {/* Phone Frame - 30% larger */}
      <div className="w-80 sm:w-[340px] h-[580px] sm:h-[650px] border-2 border-[#1a1a1a] rounded-[44px] bg-white p-3">
        {/* Screen */}
        <div className="w-full h-full rounded-[36px] bg-[#f8f6f1] overflow-hidden flex flex-col">
          {/* Status Bar */}
          <div className="px-4 py-2 flex justify-between items-center text-xs text-[#1a1a1a]">
            <span>9:41</span>
            <div className="flex gap-1">
              <div className="w-4 h-2 bg-[#1a1a1a] rounded-sm" />
            </div>
          </div>
          
          {/* Content */}
          <div className="flex-1 px-5 py-4 flex flex-col">
            {/* Header */}
            <div className="text-center mb-5">
              <p className="text-sm text-[#4b5563] font-medium">Mesa 12</p>
              <p className="text-xs text-[#9ca3af]">Comanda #0042</p>
            </div>
            
            {/* Items List */}
            <div className="space-y-4 flex-1">
              <div className="flex justify-between items-center text-[15px]">
                <span className="text-[#1a1a1a]">Frango Grelhado</span>
                <span className="text-[#4b5563] font-medium">R$ 32,00</span>
              </div>
              <div className="flex justify-between items-center text-[15px]">
                <span className="text-[#1a1a1a]">Suco de Laranja</span>
                <span className="text-[#4b5563] font-medium">R$ 9,00</span>
              </div>
              <div className="flex justify-between items-center text-[15px]">
                <span className="text-[#1a1a1a]">Sobremesa</span>
                <span className="text-[#4b5563] font-medium">R$ 14,00</span>
              </div>
              
              {/* Divider */}
              <div className="border-t border-dashed border-[#d1d5db] my-4" />
              
              {/* Total */}
              <div className="flex justify-between items-center">
                <span className="font-semibold text-[#1a1a1a] text-base">Total</span>
                <span className="font-bold text-xl text-[#1a7f5a]">R$ 55,00</span>
              </div>
            </div>
            
            {/* QR Code Placeholder */}
            <div className="flex flex-col items-center my-5">
              <div className="w-28 h-28 border-2 border-dashed border-[#9ca3af] rounded-lg flex items-center justify-center bg-white">
                <span className="text-xs text-[#9ca3af] text-center px-2">QR Code Pix</span>
              </div>
            </div>
            
            {/* Button */}
            <button className="w-full py-3.5 bg-[#1a7f5a] text-white text-sm font-medium rounded-xl">
              Copiar chave Pix
            </button>
          </div>
        </div>
      </div>
      
      {/* Notch */}
      <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-7 bg-[#1a1a1a] rounded-full" />
    </div>
  )
}

export function Hero() {
  return (
    <section className="min-h-screen pt-[120px] pb-20 px-6 flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <h1 
              className="font-serif text-[38px] md:text-[52px] lg:text-[72px] text-[#1a1a1a] text-balance"
              style={{ lineHeight: '1.05' }}
            >
              Seu cliente paga antes de chegar no caixa.
            </h1>
            <p 
              className="mt-5 text-[18px] text-[#4b5563] max-w-[480px] mb-8"
              style={{ lineHeight: '1.7' }}
            >
              GastroPay transforma a comanda fisica em uma experiencia de pagamento digital via Pix — sem app, sem fila, sem atrito.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contato"
                className="inline-flex justify-center bg-[#1a7f5a] text-white px-7 py-3.5 rounded-full text-base font-medium hover:bg-[#1a7f5a]/90 transition-colors"
              >
                Solicitar acesso antecipado
              </a>
              <a
                href="#como-funciona"
                className="inline-flex justify-center items-center gap-2 text-[#1a1a1a] px-7 py-3.5 rounded-full text-base font-medium hover:bg-[#1a1a1a]/5 transition-colors"
              >
                Ver como funciona
                <span aria-hidden="true">↓</span>
              </a>
            </div>
          </motion.div>

          {/* Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            className="flex justify-center lg:justify-end"
          >
            <PhoneMockup />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
