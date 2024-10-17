import React, { ReactNode } from 'react'

const P:React.FC<{children: string | ReactNode, className?:string}> = ({children, className}) => {
    return (
        <p className={` text-[12px] ${className}`}>
            {children}
        </p>
    )
}

export default P