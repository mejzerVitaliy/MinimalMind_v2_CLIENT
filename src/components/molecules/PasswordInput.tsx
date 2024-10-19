'use client'
import React, { useState } from 'react'
import OpenedEye from '../atoms/OpenedEye'
import FormInput from './FormInput'
import ClosedEye from '../atoms/ClosedEye'

const PasswordInput: React.FC<{ placeholder: string }> = ({ placeholder }) => {
    const [visibility, setVisibility] = useState<boolean>(false)

    const togglePasswordVisibility = () => {
        setVisibility(!visibility)
    }

    return (
        <div className='relative'>
            <FormInput
                type={!visibility? 'password' : 'text'}
                placeholder={placeholder}
            />   
            <button onClick={togglePasswordVisibility} type="button" className='absolute bottom-1 right-1'>
                {visibility ? <OpenedEye/> : <ClosedEye/>}
            </button>
        </div>
    )
}

export default PasswordInput