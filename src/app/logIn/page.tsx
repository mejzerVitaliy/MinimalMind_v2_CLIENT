import BackBtn from '@/components/atoms/BackBtn';
import LogInForm from '@/components/templates/LogInForm';
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
    title: "MinimalMind | Sign In",
    description: "Log in into your account in MinimalMind!",
};

const LogInPage = () => {
    return (
        <main className='w-full h-full grid place-items-center'>
            <LogInForm />
            <BackBtn backTo='/'/>
        </main>
    )
}

export default LogInPage