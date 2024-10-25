import React from 'react'
import { assets } from '../../assets/assets'
import { useDispatch } from 'react-redux'
import { setShowModel } from '../../redux/slices/modelToggleSlice'
import { setSelectedFood } from '../../redux/slices/selectedFoodSlice'
import { addItem } from '../../redux/slices/cartSlice'

const MenuList = ({ products }) => {
    const dispatch = useDispatch()

    return (
        <>
            <div className='bg-[#FFD335] p-2 rounded-lg text-[#2F2F3F] text-xs font-medium w-max mt-6 mb-1'>Trending</div>
            {products?.map((item) => <div>
                <div className='my-4'>
                    <div className='flex items-center justify-between' onClick={() => {
                        dispatch(setShowModel(true))
                        dispatch(setSelectedFood(item))
                    }}>
                        <div className='flex flex-col gap-1 flex-[3]'>
                            <h2 className='text-[#2F2F3F] text-sm font-medium'>{item?.name}</h2>
                            <p className='text-[#AEAEAE] font-normal text-sm w-[90%]'>{item?.details}</p>
                            <div className='flex items-center gap-2'>
                                <p className='text-[#AEAEAE] text-sm'>{`ETB 170`}</p>
                                <p className='text-[#0AB247] text-sm font-bold'>{`ETB ${item?.price}`}</p>
                            </div>
                        </div>
                        <div className='relative flex items-end pb-3 justify-center flex-[1] h-[117px] rounded-lg' style={{ backgroundImage: `url(${item?.image_url[0]})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
                            <button className='border border-[#0AB247] bg-white p-2 w-[70px] rounded-full text-[#0AB247] text-sm font-medium' onClick={(e) => {
                                e.stopPropagation()

                                dispatch(addItem({ ...item, quantity: 1 }))
                            }}>Add</button>
                        </div>
                    </div>
                </div>
                <hr className='my-3' />
            </div>)}
        </>
    )
}

export default MenuList