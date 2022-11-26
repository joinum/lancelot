import Image from 'next/image'

import { Socials } from '@/components/Socials'

import logo from '@/images/logo.svg'

import cords from '@/images/cords/hero_cords.svg'

export function Hero() {
  return (
    <div className="pb-16 text-center w-full px-8 lg:px-14 xl:px-20">
      <div 
        className="animate-bounce pt-24">
          <Image
            src={logo}
            width={700}
            height={250} 
          />
      </div>
        <h1 className="mx-auto max-w-4xl font-display text-5xl tracking-tight text-white font-extrabold sm:text-7xl">
          Jornadas de Informática
        </h1>
        <p className="mx-auto mt-10 max-w-2xl text-2xl tracking-[5px] text-white uppercase font-bold">
          Junho de 2023
        </p>
      <div>
      </div>
      <div className="hidden xl:flex pt-24 justify-between items-center">
        <div className="flex flex-col space-y-6 w-auto">
          <Socials />
        </div>
        <div >
          <div className="pt-6 flex flex-col items-center gap-y-8 sm:flex-row sm:gap-x-12 sm:gap-y-0">
            <div className="absolute -right-8 -mt-8 h-auto w-[1000px]"> 
              <Image src={cords} alt="hero cords"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
