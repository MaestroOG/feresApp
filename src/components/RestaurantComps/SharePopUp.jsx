import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import { FeresContext } from '../../context/FeresContext'

const SharePopUp = () => {
    const { setSharePop } = useContext(FeresContext)
    return (
        <div className='z-30 w-full fixed bottom-0 left-0 bg-[#FAFAFAED] rounded-tr-[13px] rounded-tl-[13px] py-4'>
            {/* Top Info + Nav */}
            <div className='flex items-center justify-between px-3'>
                <div className='flex items-center gap-3'>
                    <img src={assets.kfc_share_logo} alt="" />
                    <div>
                        <h2 className='text-[#060606] text-base font-bold'>KFC Eastlight store</h2>
                        <p className='text-[#3C3C4399] text-sm'>Feres App</p>
                    </div>
                </div>
                <img src={assets.close} alt="" onClick={() => setSharePop(false)} />
            </div>
            <hr className='my-4 mx-auto' />

            {/* Share Sheet 1 */}
            <div className='flex items-center gap-3 px-2'>
                <div className='flex flex-col items-center'>
                    <img src={assets.air_drop} alt="" />
                    <p className='text-black text-[11px] whitespace-nowrap'>AirDrop</p>
                </div>
                <div className='flex flex-col items-center'>
                    <img src={assets.photo_app} alt="" />
                    <p className='text-black text-[11px] whitespace-nowrap'>Jane Cooper</p>
                </div>
                <div className='flex flex-col items-center'>
                    <img src={assets.photo_app} alt="" />
                    <p className='text-black text-[11px] whitespace-nowrap'>Jane Cooper</p>
                </div>
                <div className='flex flex-col items-center'>
                    <img src={assets.photo_app} alt="" />
                    <p className='text-black text-[11px] whitespace-nowrap'>Jane Cooper</p>
                </div>
                <div className='flex flex-col items-center'>
                    <img src={assets.photo_app} alt="" />
                    <p className='text-black text-[11px] whitespace-nowrap'>Jane Cooper</p>
                </div>
            </div>
            <hr className='my-6 mx-auto' />

            {/* Share Sheet 2 */}
            <div className='flex items-center gap-3 px-2'>
                <div className='flex flex-col items-center'>
                    <img src={assets.air_drop} alt="" />
                    <p className='text-black text-[11px] mx-auto'>AirDrop</p>
                </div>
                <div className='flex flex-col items-center'>
                    <img src={assets.air_drop} alt="" />
                    <p className='text-black text-[11px] mx-auto'>AirDrop</p>
                </div>
                <div className='flex flex-col items-center'>
                    <img src={assets.air_drop} alt="" />
                    <p className='text-black text-[11px] mx-auto'>AirDrop</p>
                </div>
                <div className='flex flex-col items-center'>
                    <img src={assets.air_drop} alt="" />
                    <p className='text-black text-[11px] mx-auto'>AirDrop</p>
                </div>
                <div className='flex flex-col items-center'>
                    <img src={assets.air_drop} alt="" />
                    <p className='text-black text-[11px] mx-auto'>AirDrop</p>
                </div>
            </div>

            {/* Options */}
            <div className='px-2 mt-5'>
                <div className='bg-white flex items-center justify-between px-[16px] py-[13px] rounded-xl w-[97%] mx-auto'>
                    <p className='text-black text-[17px]'>Copy Link</p>
                    <img src={assets.copy_icon} alt="" />
                </div>

                <div className='mt-4 bg-white rounded-xl'>
                    <div className='bg-white flex items-center justify-between px-[16px] py-[13px] w-[97%] mx-auto'>
                        <p className='text-black text-[17px]'>Add to Reading List</p>
                        <img src={assets.glassses_icon} alt="" />
                    </div>
                    <hr />
                    <div className='bg-white flex items-center justify-between px-[16px] py-[13px] rounded-tr-xl rounded-tl-xl w-[97%] mx-auto'>
                        <p className='text-black text-[17px]'>Add Bookmark</p>
                        <img src={assets.book_icon} alt="" />
                    </div>
                    <hr />
                    <div className='bg-white flex items-center justify-between px-[16px] py-[13px] rounded-tr-xl rounded-tl-xl w-[97%] mx-auto'>
                        <p className='text-black text-[17px]'>Add to Favorites</p>
                        <img src={assets.fav_star_icon} alt="" />
                    </div>
                    <hr />
                    <div className='bg-white flex items-center justify-between px-[16px] py-[13px] rounded-tr-xl rounded-tl-xl w-[97%] mx-auto'>
                        <p className='text-black text-[17px]'>Find on Page</p>
                        <img src={assets.share_search_icon} alt="" />
                    </div>
                </div>
                <div className='mt-4'>
                    <p className='text-[#007AFF] text-[17px] px-5'>Edit Actions...</p>
                </div>
            </div>
        </div>
    )
}

export default SharePopUp