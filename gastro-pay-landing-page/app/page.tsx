import { Header } from '@/components/gastropay/header'
import { Hero } from '@/components/gastropay/hero'
import { Slogan, SloganSecondary } from '@/components/gastropay/slogan'
import { HowItWorks } from '@/components/gastropay/how-it-works'
import { Differentials } from '@/components/gastropay/differentials'
import { Comparison } from '@/components/gastropay/comparison'
import { Profiles } from '@/components/gastropay/profiles'
import { CTA } from '@/components/gastropay/cta'
import { Footer } from '@/components/gastropay/footer'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Slogan />
      <HowItWorks />
      <Differentials />
      <Comparison />
      <SloganSecondary />
      <Profiles />
      <CTA />
      <Footer />
    </main>
  )
}
