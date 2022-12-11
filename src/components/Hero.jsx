import Image from 'next/image'

import { Socials } from '@/components/Socials'

import logo from '@/images/logo.svg'
import cords from '@/images/cords/hero_cords.svg'

export function Hero() {
  return (
    <div className="text-center w-full px-8 lg:px-14 xl:px-20 flex flex-col justify-between">
      <div>
        <div className="animate-bounce pt-24">
          <Image
            src={logo}
            width={602}
            height={215} 
          />
        </div>
        <h1 className="mx-auto max-w-4xl font-display text-5xl tracking-tight text-white font-extrabold sm:text-7xl">
          Jornadas de Informática
        </h1>
        <p className="mx-auto mt-10 max-w-2xl text-2xl tracking-[5px] text-white uppercase font-bold">
          Junho de 2023
        </p>
      </div>
      <div className='flex justify-center lg:justify-between items-end'>
        <div className='flex lg:flex-col gap-8 lg:gap-4 pb-12'>
          <Socials />
        </div>
        <div className='hidden lg:block relative -right-24'>
          <Image src={cords} alt='Hero cords' height={250} width={1000}/>
        </div>
      </div>
    </div>
  )
}
