import React from 'react'
import { assets } from '../../assets/assets'
import { useDispatch } from 'react-redux'
import { setShowModel } from '../../redux/slices/modelToggleSlice'
import { setSelectedFood } from '../../redux/slices/selectedFoodSlice'

const MenuList = ({ products }) => {
    const dispatch = useDispatch()
    console.log(products)
    return (
        <>
            <div className='bg-[#FFD335] p-2 rounded-lg text-[#2F2F3F] text-xs font-medium w-max mt-6 mb-1'>Trending</div>
            {products?.map((item) => <div>
                <div className='my-4'>
                    <div className='flex items-center justify-between' onClick={() => {
                        dispatch(setShowModel(true))
                        dispatch(setSelectedFood(item))
                    }}>
                        <div className='flex flex-col gap-1'>
                            <h2 className='text-[#2F2F3F] text-sm font-medium'>{item?.name}</h2>
                            <p className='text-[#AEAEAE] font-normal text-sm w-[90%]'>{item?.details}</p>
                            <div className='flex items-center gap-2'>
                                <p className='text-[#AEAEAE] text-sm'>{`ETB 170`}</p>
                                <p className='text-[#0AB247] text-sm font-bold'>{`ETB ${item?.price}`}</p>
                            </div>
                        </div>
                        <div className='relative flex items-center justify-center'>
                            <img src={item?.image_url[0]} alt="" className='rounded-2xl' width={'130px'} />
                            {/* <button className='border border-[#0AB247] bg-white p-2 rounded-full text-[#0AB247] text-sm font-medium absolute bottom-1 right-9'>Add</button> */}
                        </div>
                    </div>
                </div>
                <hr className='my-3' />
            </div>)}
        </>
    )
}

export default MenuList