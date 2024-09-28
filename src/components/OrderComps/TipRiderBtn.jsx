import React from 'react'

const TipRiderBtn = ({ className, text }) => {
    return (
        <button className={`${className ? className : ''} rounded-[10px] py-[8px] px-[10px]`}>{text}</button>
    )
}

export default TipRiderBtn