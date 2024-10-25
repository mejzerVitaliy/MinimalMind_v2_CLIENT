'use client'
import { store } from '@/store/store'
import React from 'react'
import { Provider } from 'react-redux'
import SignInOrganism from './SignInOrganism'

const FormProvider = () => {
    return (
        <Provider store={store}>
            <SignInOrganism/>
        </Provider>
    )
}

export default FormProvider