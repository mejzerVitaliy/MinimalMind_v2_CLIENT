import React from 'react'
import H2 from '../atoms/H2'
import H3 from '../atoms/H3'
import Link from 'next/link'

const HomeContent = () => {
    return (
        <main className='w-full h-full fixed grid place-items-center p-2'>
            <section className=' p-4 bg-yellow-800 rounded-tl-xl rounded-br-xl'>
                <H2 className='font-playwrite text-center'>
                    Welcome to the kingdom of your thoughts - MinimalMind!
                </H2>

                <hr className='m-3' />

                <H3 className='text-right'>
                    Do you have too many thoughts and don't know how to deal with them? There is a solution - write them down!
                </H3>

                <H3>
                    The world of technology does not stand still, and now you don't need a pen and paper, because there is MinimalMind!
                </H3>   

                <section className='w-full my-3 grid place-items-center'>
                    <Link className='px-4 animate-bounce hover:bg-slate-800 transition-colors  bg-black rounded-2xl' href={'/signIn'}>
                        <button>
                            <H2>Get strarted!</H2>
                        </button>
                    </Link>  
                </section>
                
            </section>
             
            
        </main>
    )
}

export default HomeContent