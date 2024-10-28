import React from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'

interface InputTypes{
    type: string,
    placeholder?: string,
    register?: UseFormRegisterReturn,
    error: boolean
}

const FormInput: React.FC<InputTypes> = ({type, placeholder, register, error}) => {
    return (
        <input
            required
            type={type}
            autoComplete='off'
            className={`w-[250px] lg:w-[300px] h-[25px] m-0 bg-transparent autofill:bg-transparent ${error ? 'border-b-red-600' : 'border-b-white'} border-b placeholder:text-[14px] placeholder:text-[#ffffff37] text-[14px] md:text-[16px] lg:text-[18px] text-white outline-0 `}
            placeholder={placeholder}
            {...register}
        />
    )
}

export default FormInput