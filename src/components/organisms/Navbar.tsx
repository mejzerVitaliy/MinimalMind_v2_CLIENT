'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import BurgerBtn from '../atoms/BurgerBtn'
import { Provider, useSelector } from 'react-redux'
import { RootState, store } from '@/store/store'
import BurgerMenu from './BurgerMenu'
import NavMenu from '../molecules/NavMenu'

const Navbar = () => {
    return (
        <Provider store={store}>
            <nav className='w-full h-[50px] md:h-[50px] sticky top-0 z-20 px-2 flex items-center bg-gray-600 '>
                <NavMenu/>
            </nav>
        </Provider>
        
    )
}

export default Navbar