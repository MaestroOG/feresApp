import React, { useContext } from 'react'
import { FeresContext } from '../../context/FeresContext'

const IsHelpfulBtn = () => {
    const { helpfulBtn, setHelpfulBtn } = useContext(FeresContext)
    return (
        <button className='w-[90%] border border-[#0AB247] bg-[#0AB247] p-[10px] py-[15px] text-white mb-3 rounded-[30px]' onClick={() => {
            setHelpfulBtn('solid')
        }}>
            {
                helpfulBtn === 'light' ? 'Chat with us' : 'Yes, I got my answer'
            }
        </button>
    )
}

export default IsHelpfulBtn