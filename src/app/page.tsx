import Image from 'next/image'
import { Navbar } from './components/Navbar'
import { HeroHeader } from './components/HeroHeader'
import { AboutUs } from './components/AboutUs'
import OurCosmetics from './components/OurCosmetics'
import { Testimonials } from './components/Testimonials'
import Clients from './components/Clients'
import Benefits from './components/Benefits'
import Footer from './components/Footer'
import Source from './components/Source'

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroHeader/>
      <Clients />
      <Benefits />
      <AboutUs/>
      <OurCosmetics/>
      <Source />
      <Testimonials/>
      <Footer />
    </main>
  )
}
