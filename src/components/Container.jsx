import React from 'react'

const Container = ({ children, className, onClick }) => {
    return (
        <div className={`${className} px-4`} onClick={onClick}>{children}</div>
    )
}

export default Container