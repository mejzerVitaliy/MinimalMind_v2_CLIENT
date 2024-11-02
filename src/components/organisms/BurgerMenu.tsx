'use client'
import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import H2 from '../atoms/H2'
import { useDispatch } from 'react-redux'
import { toggleBurger } from '@/slices/burgerMenuSlice'
import Link from 'next/link'
import H3 from '../atoms/H3'
import { useGetUserByIdQuery } from '@/api/CreateUserApi'
import { useRouter } from 'next/navigation'
import { User } from '@/types/UserModel'

const BurgerMenu = () => {
    const dispatch = useDispatch()
    const router = useRouter();
    const [UserID, setUserID] = useState<string | null>(Cookies.get('UserID') || null)
    
    
    const { data, isLoading, isError } = useGetUserByIdQuery(UserID || "", { skip: !UserID });

    useEffect(() => {
        setUserID(Cookies.get('UserID') || null);
    }, []);
    

    return (
        <section
            onClick={(e) => {
                if (e.currentTarget === e.target) dispatch(toggleBurger());
            }}
            className='w-full h-full fixed top-0 bottom-0 z-40 bg-[#00000087] animate-[modalBackgroundAnim_.5s_ease-in_1]'
        >
            <section className={`w-[300px] overflow-hidden z-50 h-full fixed left-0 bg-[#4e4e4e] animate-[openBurgerAnim_.4s_ease-in-out_1]`}>
                <button className='absolute top-2 right-2' onClick={()=>dispatch(toggleBurger())} >
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
                </button>

                <section className='w-full h-[80px] flex items-center border-b border-solid  px-2 bg-slate-950'>
                    <div className='w-full flex items-end'>
                        <svg xmlns="http://www.w3.org/2000/svg" className='size-[60px]' viewBox="0 -960 960 960" fill={data ? "ORANGE" :"#FFFFFF"}><path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z"/></svg>
                        <H3>{data ? data.login : 'You are don`t auth'}</H3>
                    </div>
                </section>

                <ul>
                    <Link className='w-full h-auto flex items-center hover:bg-slate-800 transition-all p-2 ' href={'/'}>
                        <li className=' flex items-center gap-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF">
                                <path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"/>
                            </svg>
                            <H2 className="text-white">Home</H2>    
                        </li>
                    </Link>

                    <Link className='w-full h-auto flex items-center hover:bg-slate-800 transition-all p-2' href={data ? '/myNotes' :'/logIn'}>
                        <li className=' flex items-center gap-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF">
                                <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q65 0 123 19t107 53l-58 59q-38-24-81-37.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160q133 0 226.5-93.5T800-480q0-18-2-36t-6-35l65-65q11 32 17 66t6 70q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm-56-216L254-466l56-56 114 114 400-401 56 56-456 457Z"/>
                            </svg>
                            <H2 className="text-white">My notes</H2>
                        </li>
                    </Link>

                    <Link className='w-full h-auto flex items-center hover:bg-slate-800 transition-all p-2' href={data ? '/likedNotes' :'/logIn'}>
                        <li className=' flex items-center gap-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF">
                                <path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z"/>
                            </svg>
                            <H2 className="text-white">Liked notes</H2>
                        </li>
                    </Link>

                    {!data
                        ? <Link className=' w-[300px] h-auto p-2 fixed bottom-0 flex items-center hover:bg-slate-800 transition-all border-t border-solid border-white ' href={'/logIn'}  >
                            <li className=' flex items-center gap-3' >
                                <svg xmlns="http://www.w3.org/2000/svg" className='w-[25px] h-[25px] fill-white ' viewBox="0 -960 960 960" >
                                    <path d="M480-120v-80h280v-560H480v-80h280q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H480Zm-80-160-55-58 102-102H120v-80h327L345-622l55-58 200 200-200 200Z" />
                                </svg>
                                <H2>Log In</H2>
                            </li>
                        </Link>
                        :
                        <div
                            className=' w-[300px] h-auto p-2 fixed bottom-0 flex items-center hover:bg-slate-800 transition-all border-t border-solid border-white '
                            onClick={() => {
                                setUserID(null)
                                Cookies.remove('UserID')
                                router.refresh()
                                router.push('/logIn')
                            }}
                        >
                            <li className=' flex items-center gap-3'>
                                <svg xmlns="http://www.w3.org/2000/svg" className='size-[25px] fill-red-600' viewBox="0 -960 960 960"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z"/></svg>
                                <H2 className='text-red-600'>Log Out</H2>
                            </li>  
                        </div>
                    }

                </ul>
            </section>
        </section>
    )
}

export default BurgerMenu