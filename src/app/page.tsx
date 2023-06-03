import Image from 'next/image'
import { Navbar } from './components/Navbar'
import { HeroHeader } from './components/HeroHeader'
import { AboutUs } from './components/AboutUs'
import OurCosmetics from './components/OurCosmetics'
import { Testimonials } from './components/Testimonials'

export default function Home() {
  return (
    <main className='mx-5'>
      <Navbar />
      <HeroHeader/>
      <AboutUs/>
      <OurCosmetics/>
      <Testimonials/>
    </main>
  )
}
