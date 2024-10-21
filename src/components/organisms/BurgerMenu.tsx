import React from 'react'
import H2 from '../atoms/H2'
import { useDispatch } from 'react-redux'
import { toggleBurger } from '@/slices/burgerMenuSlice'
import Link from 'next/link'

const BurgerMenu = () => {
    const dispatch = useDispatch()
    
    return (
        <section
            onClick={(e) => {
                if (e.currentTarget === e.target) dispatch(toggleBurger());
            }}
            className='w-full h-full fixed top-0 bottom-0 z-40 bg-[#00000087] animate-[modalBackgroundAnim_.5s_ease-in_1]'
        >
            <section className={`w-[250px] overflow-hidden z-50 h-full fixed left-0 bg-[#4e4e4e] animate-[openBurgerAnim_.4s_ease-in-out_1]`}>
                <ul>
                    <Link className='w-full h-auto flex items-center hover:bg-slate-800 transition-all p-2 border-b border-solid border-white ' href={'/'}>
                        <li className=' flex items-center gap-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF">
                                <path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"/>
                            </svg>
                            <H2 className="text-white">Home</H2>    
                        </li>
                    </Link>

                    <Link className='w-full h-auto flex items-center hover:bg-slate-800 transition-all p-2 border-b border-solid border-white ' href={'/'}>
                        <li className=' flex items-center gap-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF">
                                <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q65 0 123 19t107 53l-58 59q-38-24-81-37.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160q133 0 226.5-93.5T800-480q0-18-2-36t-6-35l65-65q11 32 17 66t6 70q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm-56-216L254-466l56-56 114 114 400-401 56 56-456 457Z"/>
                            </svg>
                            <H2 className="text-white">My notes</H2>
                        </li>
                    </Link>

                    <Link className='w-full h-auto flex items-center hover:bg-slate-800 transition-all p-2 border-b border-solid border-white ' href={'/'}>
                        <li className=' flex items-center gap-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF">
                                <path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z"/>
                            </svg>
                            <H2 className="text-white">Liked notes</H2>
                        </li>
                    </Link>

                    <Link  className=' min-w-[250px] max-w-[300px] h-auto p-2 fixed bottom-0 flex items-center hover:bg-slate-800 transition-all border-t border-solid border-white ' href={'/logIn'}  >
                        <li className=' flex items-center gap-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" className='w-[25px] h-[25px] fill-white ' viewBox="0 -960 960 960" >
                                <path d="M480-120v-80h280v-560H480v-80h280q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H480Zm-80-160-55-58 102-102H120v-80h327L345-622l55-58 200 200-200 200Z" />
                            </svg>
                            <H2>Log In</H2>
                        </li>
                    </Link>

                </ul>
            </section>
        </section>
    )
}

export default BurgerMenu