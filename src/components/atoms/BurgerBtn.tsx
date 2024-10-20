import { toggleBurger } from '@/slices/burgerMenuSlice'
import React from 'react'
import { useDispatch } from 'react-redux'

const BurgerBtn = () => {
    const dispatch = useDispatch()

    return (
        <button onClick={()=>dispatch(toggleBurger())}>
            <svg className='w-[30px] h-[30px]' fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" >
                <path d="M144-264v-72h672v72H144Zm0-180v-72h672v72H144Zm0-180v-72h672v72H144Z" />
            </svg>
        </button>
    )
}

export default BurgerBtn