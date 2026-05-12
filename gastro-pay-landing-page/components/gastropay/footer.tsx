'use client'

import { GastroPayIcon } from './logo'

export function Footer() {
  return (
    <footer className="py-12 px-6 bg-background border-t border-border/50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2 text-dark">
            <GastroPayIcon className="w-10 h-8" />
            <span className="font-serif text-lg">GastroPay</span>
          </div>

          {/* Tagline */}
          <p className="text-muted-foreground text-sm">
            Pagamento ágil para restaurantes.
          </p>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Privacidade
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Termos
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/50 text-center">
          <p className="text-muted-foreground text-sm">
            © 2025 GastroPay. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
