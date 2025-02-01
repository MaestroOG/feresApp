import React from 'react'

const ExploreCard = ({ name, img, onClick, className }) => {
    return (
        <div className={`flex flex-col items-center justify-center w-screen ${className}`} onClick={onClick}>
            <div className='mt-5 bg-[#F3F4F6] px-[18px] py-[33px] w-[110px] rounded-[13px]'>
                <img src={img} className="ml-3 object-cover rounded-lg" width={"50px"} height={"50px"} />
            </div>
            <h3 className='text-center mt-3 text-base font-medium'>{name}</h3>
        </div>
    )
}

export default ExploreCard