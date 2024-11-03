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
    const [invalidData, setInvalidData] = useState<boolean>(false);
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
                setInvalidData(true)
                setTimeout(() => {
                    setInvalidData(false)
                }, 3000)
            }
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <section>
            <section className='w-full grid place-items-center'>
                <div className=' flex flex-col text-left mb-5'>
                    <H3>Login</H3>
                    <FormInput
                        error={!!errors.login}
                        type='text'
                        placeholder='Input your login'
                        register={register('login', {
                            required: 'Login is required.'
                        })}
                    />
                    {errors.login && <P className="text-center text-red-600">{errors.login.message}</P>}
                </div>
                
                <div className=' flex flex-col text-left mb-5'>
                    <H3>Password</H3>
                    <PasswordInput
                        error={!!errors.password}
                        placeholder='Input your password'
                        register={register('password', {
                            required: 'Password is required.'
                        })}
                    />
                    {errors.password && <P className="text-center text-red-600">{errors.password.message}</P>}
                </div>

                <Link href={'/signIn'} title='To SignIn page' className='hover:scale-105 transition-transform my-6 '>
                    <P>Don't have an account? Sign In!</P>
                </Link>

            </section>

            <section className='w-full grid place-items-center'>
                <button
                    type='submit'
                    disabled={!isValid || isSubmitting}
                    onClick={handleSubmit(onSubmitLogIn)}
                    className='w-[250px] lg:w-[300px] h-[30px] rounded-3xl  bg-gray-500'
                >
                    <H2>Log In</H2>
                </button>
                {invalidData && <H3 className="text-center text-red-600">Invalid login or password.</H3>}
            </section>
        </section>
    )
}

export default LogInOrganism