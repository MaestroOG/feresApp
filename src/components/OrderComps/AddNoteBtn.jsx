import React from 'react'
import { assets } from '../../assets/assets'

const AddNoteBtn = () => {
    return (
        <div className='px-4 flex gap-2 mt-5'>
            <img src={assets.message_01} alt="" />
            <p className='text-base font-medium text-[#2F2F3F]'>Add a note</p>
        </div>
    )
}

export default AddNoteBtn