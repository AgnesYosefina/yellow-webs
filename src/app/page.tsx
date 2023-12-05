import Image from 'next/image'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Profile from './components/Profile'
import Footer from './components/Footer'
import Visi from './components/Visi'

export default function Home() {
  return (
    <main className=' bg-black border-2 text-white'>
      <Navbar />
      <Hero />
      <Profile />
      <Visi/>
      <Footer/>

    </main>
  )
}
