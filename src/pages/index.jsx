import Head from 'next/head'

import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>JOIN Job Platform</title>
        <meta
          name="description"
        />
      </Head>
      <div className="bg-gradient-to-l min-h-screen from-primary via-secondary to-primary overflow-x-hidden flex flex-col justify-between">
        <Header />
        <main className='pb-44 sm:pb-0'>
          <Hero />
        </main>
        <Footer />
      </div>
    </>
  )
}
