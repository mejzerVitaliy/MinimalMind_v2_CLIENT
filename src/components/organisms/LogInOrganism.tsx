'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import Cookies from 'js-cookie'
import H2 from '../atoms/H2'
import FormInput from '../molecules/FormInput'
import H3 from '../atoms/H3'
import PasswordInput from '../molecules/PasswordInput'
import P from '../atoms/P'
import { useRouter } from 'next/navigation'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useLazyCheckUserAuthQuery } from '@/api/CreateUserApi'

export interface LogInTypes{
    login: string;
    password: string;
}

const LogInOrganism = () => {
    const router = useRouter();
    const [id, setId] = useState<string>();
    const [triggerCheckUserAuth] = useLazyCheckUserAuthQuery()

    const {
        register,
        handleSubmit,
        formState: {errors, isSubmitting, isValid, isSubmitted}
    } = useForm<LogInTypes>({ mode: 'all' });

    const onSubmitLogIn: SubmitHandler<LogInTypes> = async (data) => {
        try {
            const user = await triggerCheckUserAuth(data).unwrap()
            if (user) {
                Cookies.set('UserID', user.id, { expires: 365 })
                router.push('/')
            } else {
                console.error('Invalid login or password')
            }
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <section>
            <section className='w-full grid place-items-center'>
                <div className=' flex flex-col text-left mb-3'>
                    <H3>Login</H3>
                    <FormInput
                        type='text'
                        placeholder='Input your login'
                        register={register('login', {
                            required: 'Login is required.'
                        })}
                    />
                </div>
                
                <div className=' flex flex-col text-left mb-3'>
                    <H3>Password</H3>
                    <PasswordInput
                        placeholder='Input your password'
                        register={register('password', {
                            required: 'Password is required.'
                        })}
                    />
                </div>

                <Link href={'/signIn'} title='To SignIn page' className='hover:scale-105 transition-transform'>
                    <P>Don't have an account? Sign In!</P>
                </Link>

            </section>

            <section className='w-full grid place-items-center'>
                <button
                    type='submit'
                    disabled={!isValid || isSubmitting || isSubmitted}
                    onClick={handleSubmit(onSubmitLogIn)}
                    className='w-[250px] lg:w-[300px] h-[30px] rounded-3xl  bg-gray-500'
                >
                    <H2>Log In</H2>
                </button>
            </section>
        </section>
    )
}

export default LogInOrganism