import React from 'react'
import H1 from '../atoms/H1'
import FormInput from '../molecules/FormInput'
import H2 from '../atoms/H2'
import H3 from '../atoms/H3'
import P from '../atoms/P'
import Link from 'next/link'
import PasswordInput from '../molecules/PasswordInput'

import LogInOrganism from '../organisms/LogInOrganism'
import FormProvider from '../organisms/FormProvider'

const LogInForm = () => {
    return (
        <form className='w-[100%] sm:w-[50%] md:w-[45%] lg:w-[35%]  flex flex-col justify-evenly px-2 py-6  bg-[#1f1f1fc5] '>
            <H1 className='text-center'>Log In</H1>
            <FormProvider>
                <LogInOrganism/>
            </FormProvider>
        </form>
    )
}

export default LogInForm