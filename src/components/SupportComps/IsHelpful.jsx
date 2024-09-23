import React, { useContext } from 'react'
import IsHelpfulBtnSolid from './IsHelpfulBtnSolid'
import IsHelpfulBtnLight from './IsHelpfulBtnLight'
import { assets } from '../../assets/assets'
import { FeresContext } from '../../context/FeresContext'

const IsHelpful = () => {
    const { helpfulBtn } = useContext(FeresContext)
    return (
        <div className='fixed bottom-0 left-0 w-full flex flex-col items-center'>
            <h2 className='text-[#2F2F3F] font-bold text-lg mb-4'>Was this helpful?</h2>
            {
                helpfulBtn === 'solid' ? (
                    <div className='flex flex-row items-center mb-4 gap-5 w-[80%] mx-auto justify-center'>
                        <img src={assets.thumbs_up_green} alt="" />
                        <p className='font-normal text-[#2F2F3F] text-lg'>Thank you for your feedback</p>
                    </div>
                ) : (
                    helpfulBtn === 'light' ? (
                        <>
                            <div className='w-[80%]'>
                                <p className='text-[#2F2F3F] text-base font-normal text-center mb-4'>We apologize for the inconvenience and would appreciate it if you could reach out to us.</p>
                            </div>
                            <IsHelpfulBtnSolid />
                            <IsHelpfulBtnLight />
                        </>
                    ) : (
                        <>
                            <IsHelpfulBtnSolid />
                            <IsHelpfulBtnLight />
                        </>
                    )
                )
            }
            {

            }

        </div>
    )
}

export default IsHelpful