import React from 'react'

interface InputTypes{
    type: string,
    placeholder?: string
}

const FormInput: React.FC<InputTypes> = ({type, placeholder}) => {
    return (
        <input
            required
            type={type}
            className=' w-[250px] h-[25px] m-0 bg-transparent border-b-white border-b placeholder:text-[14px] placeholder:text-[#ffffff37] text-[14px] text-white outline-0 '
            placeholder={placeholder} 
        />
    )
}

export default FormInput