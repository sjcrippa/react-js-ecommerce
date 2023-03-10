import React from 'react'

export const MainLayout = ({children}) => {

    return (
        <div className='container d-flex row justify-content-center text-center bg-success mx-auto mt-5'>{children}</div>
    )
}
