import Image from 'next/image'
import { Navbar } from './components/Navbar'
import Clients from './components/Clients'
import Benefits from './components/Benefits'
import Footer from './components/Footer'
import Source from './components/Source'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Clients />
      <Benefits />
      <Source />
      <Footer />
    </main>
  )
}
