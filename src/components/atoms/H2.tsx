import React, { ReactNode } from 'react'

const H2:React.FC<{children: string | ReactNode, className?:string}> = ({children, className}) => {
    return (
        <h2 className={` m-0 text-[18px] font-playwrite ${className}`}>
            {children}
        </h2>
    )
}

export default H2