import React, { ReactNode } from 'react'

const H1:React.FC<{children: string | ReactNode, className?: string}> = ({children, className}) => {
    return (
        <h1 className={`text-[24px] font-playwrite md:text-[30px] font-bold ${className}`}>
            {children}
        </h1>
    )
}

export default H1