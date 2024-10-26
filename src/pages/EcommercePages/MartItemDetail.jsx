import React from 'react'
import Container from '../../components/Container'
import { assets } from '../../assets/assets'

const MartItemDetail = () => {
    return (
        <div>
            {/* Top Bar */}
            <Container className={'py-5 flex items-center justify-between'}>
                <img src={assets.arrow_left} alt="" className='invert' />
                <h1 className='text-[#2F2F3F] text-[23px] font-bold'>Product details</h1>
                <button className='border border-[#EEEEEE] rounded-xl p-2'>
                    <img src={assets.favourite} alt="" />
                </button>
            </Container>

            {/* Details */}
            <Container>
                <div className='bg-[#F1F1F1] rounded-2xl'>
                    <img src={assets.funtuna_egg_featured} alt="" />
                </div>


                {/* Detail Text */}
                <div className='flex items-center justify-between mt-5'>
                    <h1 className='text-[#2F2F3F] text-2xl font-medium'>Funtuna Eggs x30</h1>
                    <div className='flex items-center gap-2'>
                        <img src={assets.star} alt="" />
                        <p className='text-lg font-medium text-[#2F2F3F]'>4.5 <span className='text-[#CCCCCC]'>(3)</span></p>
                    </div>
                </div>

                {/* Price */}
                <div className='flex items-center gap-2 my-3'>
                    <p className='text-[#0AB247] text-lg font-bold'>EBT 140.00</p>
                    <p className='text-sm text-[#767578]'>(Incl. VAT)</p>
                </div>

                {/* Description */}
                <div className='text-[#767578]'>Lorem ipsum dolor sit amet consectetur. amet amet volutpat aliquam adipiscing id dignissim. Id non lectus cras imperdiet faucibus semper enim.</div>

                {/* Item */}
                <div className='my-3 text-[#0AB247] font-medium'>
                    Egg x30
                </div>

                {/* Delivery Info */}
                <div className='flex items-center gap-2 my-5'>
                    <img src={assets.delivery_truck_green} alt="" />
                    <p className='text-[#2F2F3F]'>Ready for delivery by 05 April order in 19hrs 58mins</p>
                </div>

                {/* Extra Note (Optional) */}
                <div>
                    <h3 className='text-lg'>Note to store (optional)</h3>
                    <div className='w-[398px] h-[142px] bg-[#F8F8F8] p-3 my-3 rounded-2xl transition-all focus-within:border focus-within:border-[#0AB247] focus-within:bg-white'>
                        <textarea name="" id="" className='w-full border-none outline-none h-full overflow-auto bg-transparent placeholder:text-[#767578]' placeholder='Leave a note for the store'></textarea>
                    </div>
                </div>
            </Container>


            {/* Bottom Buttons */}
            <Container className={'py-4 fixed w-full bottom-0 left-0 bg-white flex items-center justify-between gap-3 rounded-[13px]'}>
                <div className='w-[158px] h-[58px] flex items-center justify-between border border-[#EEEEEE] px-3 rounded-2xl'>
                    <img src={assets.minus_sign} alt="" />
                    <img src={assets.separator} alt="" className='h-[57px]' />
                    <p className='font-medium text-[#2F2F3F]'>1</p>
                    <img src={assets.separator} alt="" className='h-[57px]' />
                    <img src={assets.plus_sign} alt="" />
                </div>

                <div className='w-1/2'>
                    <button className='text-white font-medium text-lg flex items-center justify-center gap-2 bg-[#0AB247] w-full p-4 rounded-lg'>
                        <img src={assets.shopping_basket} alt="" className='invert' />
                        <p>Add To Basket</p>
                    </button>
                </div>
            </Container>
        </div>
    )
}

export default MartItemDetail