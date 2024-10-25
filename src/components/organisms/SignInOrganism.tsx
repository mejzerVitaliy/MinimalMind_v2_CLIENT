'use client'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import Cookies from 'js-cookie'
import { v4 as uuidv4 } from 'uuid';
import H3 from '../atoms/H3'
import FormInput from '../molecules/FormInput'
import PasswordInput from '../molecules/PasswordInput'
import Link from 'next/link'
import P from '../atoms/P'
import H2 from '../atoms/H2'
import { useCreateUserMutation } from '@/api/CreateUserApi'
import { useRouter } from 'next/router';

export interface inputsTypes {
    login: string;
    password: string;
    password2: string;
}

const SignInOrganism: React.FC = () => {

    const {
        register, 
        handleSubmit,
        formState: { errors, isValid, isSubmitting },
        getValues
    } = useForm<inputsTypes>({ mode: 'all' })
    
    const [createUser, { error }] = useCreateUserMutation();
    error && console.error(error)


    const secondPasswordValidation = async (value: string) => {
        const password1 = getValues("password");
        return value === password1 || "Passwords don't match";
    };

    const onSubmitSignIn: SubmitHandler<inputsTypes> = async (data:inputsTypes) => {
        const newUser = {
            login: data.login,
            password: data.password,
            id: uuidv4()
        };
        try {
            await createUser(newUser);
            Cookies.set('UserID', newUser.id, { expires: 365 })
        } catch (error) {
            console.error("Error creating user:", error);
        }
    }

    return (
        <section >
            <section className='w-full grid place-items-center'>
                <div className=' flex flex-col text-left mb-3'>
                    <H3>Login</H3>
                    <FormInput
                        type='text'
                        placeholder='Create username'
                        register={register('login', {
                            required: 'Login is required!',
                            // validate: loginValidation
                        }) }
                    />
                </div>
                
                <div className=' flex flex-col text-left mb-3'>
                    <H3>Password</H3>
                    <PasswordInput
                        placeholder='Create password'
                        register={register('password', {
                            required: 'Password is required',
                            pattern: {
                                value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*_-])[A-Za-z\d!@#$%^&*_-]{6,20}$/,
                                message: 'Password must be longer than 6 characters, include minimum one uppercase and lowercase letter, one number and special symbol.'
                            }
                        })}
                    />
                </div>
                
                <div className=' flex flex-col text-left mb-3'>
                    <H3>Repeat password</H3>
                    <PasswordInput
                        placeholder='Repeat password'
                        register={register('password2', {
                            required: 'This input is required',
                            validate: secondPasswordValidation
                        })}
                    />
                </div>

                <Link href={'/logIn'} title='To logIn page' className='hover:scale-105 transition-transform'>
                    <P>Already have an account? Log In!</P>
                </Link>

            </section>

            <section className='w-full grid place-items-center'>
                <button
                    type='submit'
                    className='w-[250px] lg:w-[300px] h-[30px] rounded-3xl  bg-gray-500 disabled:bg-red-700 '
                    disabled={!isValid || isSubmitting}
                    onClick={
                        handleSubmit(onSubmitSignIn)
                    }
                >
                    <H2>Sign In</H2>
                </button>
            </section>
        </section>
    )
}

export default SignInOrganism