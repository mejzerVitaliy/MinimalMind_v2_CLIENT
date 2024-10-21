import BackBtn from '@/components/atoms/BackBtn';
import SignInForm from '@/components/templates/SignInForm'
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
    title: "MinimalMind | Sign In",
    description: "Create account in MinimalMind!",
};

const SignInPage = () => {
    return (
        <main className='w-full h-full grid place-items-center'>
            <SignInForm />
            <BackBtn backTo='/'/>
        </main>
    )
}

export default SignInPage