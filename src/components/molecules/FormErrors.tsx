import React, { ReactNode } from 'react'

const FormErrors:React.FC<{children: ReactNode | string}> = ({children}) => {
    return (
        <div className='absolute top-0 w-[80%] p-2 bg-red-600 border border-solid text-black grid place-items-center animate-[isErrorAnim_linear_.5s_1] '>
            <article>
                {children}
            </article>
        </div>
    )
}

export default FormErrors