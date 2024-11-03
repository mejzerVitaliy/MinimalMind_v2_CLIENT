import React from 'react'
import H1 from '../atoms/H1'
import FormProvider from '../organisms/FormProvider'
import SignInOrganism from '../organisms/SignInOrganism'

const SignInForm = () => {
    return (
        <form className='w-[100%] sm:w-[50%] md:w-[45%] lg:w-[35%]  flex flex-col justify-evenly px-2 py-8  bg-[#1f1f1fc5] '>
            <H1 className='text-center'>Sign In</H1>
            <FormProvider>
                <SignInOrganism/>
            </FormProvider>
        </form>
    )
}

export default SignInForm