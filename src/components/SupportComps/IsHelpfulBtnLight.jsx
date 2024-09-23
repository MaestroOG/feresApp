import React, { useContext } from 'react'
import { FeresContext } from '../../context/FeresContext'

const IsHelpfulBtnLight = () => {
    const { helpfulBtn, setHelpfulBtn } = useContext(FeresContext)
    return (
        <button className='w-[90%] border border-[#0AB247] bg-white p-[10px] py-[15px] text-[#0AB247] mb-3 rounded-[30px]' onClick={() => setHelpfulBtn('light')}>
            {
                helpfulBtn ? 'No thank you' : 'No, add more information'
            }
        </button>
    )
}

export default IsHelpfulBtnLight