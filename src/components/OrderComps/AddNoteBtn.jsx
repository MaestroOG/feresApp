import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import { FeresContext } from '../../context/FeresContext'

const AddNoteBtn = () => {
    const { setOrderNote } = useContext(FeresContext)
    return (
        <div className='px-4 flex gap-2 pt-5 bg-white pb-5' onClick={() => setOrderNote(true)}>
            <img src={assets.message_01} alt="" />
            <p className='text-base font-medium text-[#2F2F3F]'>Add a note</p>
        </div>
    )
}

export default AddNoteBtn