import Image from 'next/image'

import { Socials } from '@/components/Socials'

import cords from '@/images/cords/hero_cords.svg'

export function Footer() {
  return (
    <div className='flex justify-center lg:justify-between items-end px-8 lg:pg-14 xl:px-20'>
      <div className='flex lg:flex-col gap-8 lg:gap-4 pb-12'>
        <Socials />
      </div>
      <div className='hidden lg:block relative -right-24'>
        <Image src={cords} alt='Cords' height={250} width={1000}/>
      </div>
    </div>
  )
}