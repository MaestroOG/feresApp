import React from 'react'

const Container = ({ children, className }) => {
    return (
        <div className={`${className} px-4`}>{children}</div>
    )
}

export default Container