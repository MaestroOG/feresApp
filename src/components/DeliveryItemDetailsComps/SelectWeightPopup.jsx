import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import { FeresContext } from '../../context/FeresContext'

const SelectWeightPopup = () => {
    const { setSelectWeight, weightValue, setWeightValue } = useContext(FeresContext)

    const handleChange = (e) => {
        setWeightValue(e.target.value)
    }
    return (
        <div className='h-screen w-full bg-[#06060626] fixed top-0 left-0 z-50'>
            <div className='fixed w-full bottom-0 left-0 h-[386px] bg-white rounded-t-xl py-3'>
                <img src={assets.popup_bar} alt="" className='mx-auto' />
                <div className='flex items-center w-[70%] justify-between ml-auto mt-[10px] pr-4'>
                    <p className='text-[#2F2F3F] text-xl font-bold'>Select your weight</p>
                    <img src={assets.close} alt="" onClick={() => setSelectWeight(false)} />
                </div>
                <hr className='my-5' />
                <div className='flex items-center justify-between px-4 py-2 my-5'>
                    <p className='text-[#2F2F3F] text-xl'>Small</p>
                    <input type="radio" name='weight' onChange={handleChange} value={'Small'} checked={weightValue === 'Small'} />
                </div>
                <div className='flex items-center justify-between px-4 py-2 my-5'>
                    <p className='text-[#2F2F3F] text-xl'>Medium</p>
                    <input type="radio" name='weight' onChange={handleChange} value={'Medium'} checked={weightValue === 'Medium'} />
                </div>
                <div className='flex items-center justify-between px-4 py-2 my-5'>
                    <p className='text-[#2F2F3F] text-xl'>Large</p>
                    <input type="radio" name='weight' onChange={handleChange} value={'Large'} checked={weightValue === 'Large'} />
                </div>
                <div className='flex items-center justify-between px-4 py-2 my-5'>
                    <p className='text-[#2F2F3F] text-xl'>Extra large</p>
                    <input type="radio" name='weight' onChange={handleChange} value={'Extra large'} checked={weightValue === 'Extra large'} />
                </div>
            </div>
        </div>
    )
}

export default SelectWeightPopup