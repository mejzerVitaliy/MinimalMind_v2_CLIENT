import React from 'react'
import H1 from '../atoms/H1'
import FormInput from '../molecules/FormInput'
import H2 from '../atoms/H2'
import H3 from '../atoms/H3'
import P from '../atoms/P'
import Link from 'next/link'
import PasswordInput from '../molecules/PasswordInput'

const LogInForm = () => {
    return (
        <form className='w-[100%] sm:w-[50%] md:w-[45%] h-[65%] lg:h-[70%] flex flex-col justify-evenly px-2  bg-[#1f1f1fc5] '>
            <H1 className='text-center'>Log In</H1>
            <section className='w-full grid place-items-center'>
                <div className=' flex flex-col text-left mb-3'>
                    <H3>Login</H3>
                    <FormInput
                        type='text'
                        placeholder='Input your login'
                    />
                </div>
                
                <div className=' flex flex-col text-left mb-3'>
                    <H3>Password</H3>
                    <PasswordInput placeholder='Input your password'/>
                </div>

                <Link href={'/signIn'} title='To SignIn page'>
                    <P>Don't have an account? Sign In!</P>
                </Link>

            </section>

            <section className='w-full grid place-items-center'>
                <button className='w-[250px] lg:w-[300px] h-[30px] rounded-3xl  bg-gray-500'>
                    <H2>Sign In</H2>
                </button>
            </section>
            
        </form>
    )
}

export default LogInForm