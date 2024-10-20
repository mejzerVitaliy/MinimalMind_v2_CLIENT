import React, { useEffect, useState } from 'react'
import BurgerBtn from '../atoms/BurgerBtn'
import Link from 'next/link'
import BurgerMenu from '../organisms/BurgerMenu'
import { useSelector } from 'react-redux'
import { RootState } from '@/store/store'

const NavMenu = () => {
    const [isBurger, setIsBurger] = useState<boolean>(false)
    const burgerState = useSelector((state:RootState) => state.burgerSlice.isOpened)

    useEffect(() => {
        setIsBurger(burgerState)
    }, [burgerState])
    
    return (
        <section className='w-full flex justify-between items-center'>
            
            <BurgerBtn />

            <Link href={'/logIn'} className='size-[30px] grid place-items-center '>
                <svg xmlns="http://www.w3.org/2000/svg" className='w-[25px] h-[25px] md:w-[35px] md:h-[35px] ' viewBox="0 -960 960 960"  fill="#FFFFFF">
                    <path d="M480-120v-80h280v-560H480v-80h280q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H480Zm-80-160-55-58 102-102H120v-80h327L345-622l55-58 200 200-200 200Z" />
                </svg>
            </Link>
                        
            {isBurger && <BurgerMenu/>}
        
        </section>
    )
}

export default NavMenu