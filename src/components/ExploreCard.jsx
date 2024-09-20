import React from 'react'

const ExploreCard = ({ name, img }) => {
    return (
        <div className='flex flex-col items-center justify-center rounded-sm'>
            <div className='mt-9 bg-[#F3F4F6] px-[18px] py-[33px] w-[110px]'>
                <img src={img} className="object-cover aspect-square" />
            </div>
            <h3 className='text-center mt-3 text-base font-medium'>{name}</h3>
        </div>
    )
}

export default ExploreCard