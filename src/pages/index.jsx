import Head from 'next/head'

import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'

export default function Home() {
  return (
    <>
      <Head>
        <title>JOIN 23'</title>
        <meta
          name="description"
        />
      </Head>
      <div className="bg-gradient-to-l min-h-screen from-primary via-secondary to-primary overflow-x-hidden flex flex-col">
        <Header />
        <main className="grow flex">
          <Hero />
        </main>
      </div>
    </>
  )
}
