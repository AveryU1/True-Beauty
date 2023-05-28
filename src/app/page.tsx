import Image from 'next/image'
import { Navbar } from './components/Navbar'
import Clients from './components/Clients'
import Benefits from './components/Benefits'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Clients />
      <Benefits />
    </main>
  )
}
