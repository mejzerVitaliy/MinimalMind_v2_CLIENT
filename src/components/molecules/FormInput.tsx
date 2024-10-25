import React from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'

interface InputTypes{
    type: string,
    placeholder?: string,
    register?: UseFormRegisterReturn
}

const FormInput: React.FC<InputTypes> = ({type, placeholder, register}) => {
    return (
        <input
            required
            type={type}
            autoComplete='off'
            className=' w-[250px] lg:w-[300px] h-[25px] m-0 bg-transparent border-b-white border-b placeholder:text-[14px] placeholder:text-[#ffffff37] text-[14px] md:text-[16px] lg:text-[18px] text-white outline-0 '
            placeholder={placeholder}
            {...register}
        />
    )
}

export default FormInput