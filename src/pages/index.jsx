import Head from 'next/head'

import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'

export default function Home() {
  return (
    <>
      <Head>
        <title>JOIN Job Platform</title>
        <meta
          name="description"
        />
      </Head>
      <div className="bg-gradient-to-l h-screen from-primary via-secondary to-primary">
        <Header />
        <main>
          <Hero />
        </main>
        </div>
    </>
  )
}
