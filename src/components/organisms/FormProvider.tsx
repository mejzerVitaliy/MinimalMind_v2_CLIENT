'use client'
import { store } from '@/store/store'
import React, { ReactNode } from 'react'
import { Provider } from 'react-redux'

const FormProvider:React.FC<{children: ReactNode}> = ({children}) => {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}

export default FormProvider