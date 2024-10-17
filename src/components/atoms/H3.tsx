import React, { ReactNode } from 'react'

const H3:React.FC<{children: string | ReactNode, className?:string}> = ({children, className}) => {
    return (
        <h2 className={` m-0 text-[14px] ${className}`}>
            {children}
        </h2>
    )
}

export default H3