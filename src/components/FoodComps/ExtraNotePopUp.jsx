import React, { useContext } from 'react'
import { FeresContext } from '../../context/FeresContext'

const ExtraNotePopUp = () => {
    const { notePop, setNotePop } = useContext(FeresContext)
    return (
        <div className='h-[94vh] w-full bg-white fixed bottom-0 left-0 rounded-xl px-3' onClick={() => setNotePop(false)}>
            <div className='flex items-center justify-between px-3 pt-6 pb-4'>
                <button className='text-lg text-[#1E1E1E]'>Cancel</button>
                <h3 className='text-lg text-[#1E1E1E] font-bold'>Add a Note</h3>
                <button className='text-lg text-[#0AB247] font-bold'>Done</button>
            </div>

            <hr />
            <div className='flex flex-col h-full items-center py-6 rounded-lg my-2'>
                <textarea name="" id="" placeholder='Write your review here' className='placeholder:text-[#C4C4C4] placeholder:text-base mt-1 w-full px-1 h-full border-none outline-none'></textarea>
            </div>
        </div>
    )
}

export default ExtraNotePopUp