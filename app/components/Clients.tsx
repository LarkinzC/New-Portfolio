import React from 'react'
import { InfiniteMovingCards } from './ui/InfiniteMovingCards'
import { companies, testimonials } from '@/data'
import { div } from 'three/webgpu'

const Clients = () => {
  return (
    <div className='py-20'>
    <h1 className='heading'>
        Kind words from {' '}
        <span className='text-purple'>Enamored coworkers</span>
    </h1>
        <div className='flex flex-col items-center max-lg:mt-10 pt-10'>
            <InfiniteMovingCards 
                items={testimonials}
                direction='right'
                speed='slow'
                />
             <h1 className='heading py-20'>
        Companies I derive {' '}
        <span className='text-purple'>inspiration</span>
    </h1>
        <div className='flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt10'>
            {companies.map(({id, img, name, nameImg}) => (
                <div key={id} className='flex md:max-w-60 max-w-32 gap-2'>
                    <img 
                        src={img}
                        alt={name}
                        className='md:w-24 w-20'
                    />
                    <img 
                        src={nameImg || null}
                        alt={name}
                        className='md:w-24 w-20'
                    />
                </div>

            ))}
        </div>
        </div>
    </div>
  )
}

export default Clients