import SignInForm from '@/components/templates/SignInForm'
import { Metadata } from 'next';
import Link from 'next/link';
import React from 'react'

export const metadata: Metadata = {
    title: "MinimalMind | Sign In",
    description: "Create account in MinimalMind!",
};

const SignInPage = () => {
    return (
        <main className='w-full h-full grid place-items-center'>
            <SignInForm />
            <Link href={'/'} className='fixed top-4 left-4'>
                <svg
                    width="44"
                    height="44"
                    viewBox="0 0 44 44"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M7.33337 22L6.62627 21.2929L5.91916 22L6.62627 22.7071L7.33337 22ZM34.8334 23C35.3857 23 35.8334 22.5523 35.8334 22C35.8334 21.4477 35.3857 21 34.8334 21V23ZM17.6263 10.2929L6.62627 21.2929L8.04048 22.7071L19.0405 11.7071L17.6263 10.2929ZM6.62627 22.7071L17.6263 33.7071L19.0405 32.2929L8.04048 21.2929L6.62627 22.7071ZM7.33337 23H34.8334V21H7.33337V23Z"
                        fill='#fff'
                    />
                </svg>
            </Link>
            
        </main>
    )
}

export default SignInPage