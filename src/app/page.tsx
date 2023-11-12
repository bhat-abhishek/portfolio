import Hero from '@/components/Hero/Hero'
import Projects from '@/components/Projects/Projects'
import Skills from '@/components/Skills/Skills'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='text-[#66fcf1] max-w-7xl mx-auto'>
     <Hero/>
     <Skills/>
     <Projects/>
    </main>
  )
}
