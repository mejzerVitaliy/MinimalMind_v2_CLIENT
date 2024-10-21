import React from 'react'
import H1 from '../atoms/H1'

const Header = () => {
    return (
        <header className='w-full h-[40px] md:h-[60px] grid place-items-center bg-gray-600 '>
            <H1>MinimalMind</H1>
        </header>
    )
}

export default Header