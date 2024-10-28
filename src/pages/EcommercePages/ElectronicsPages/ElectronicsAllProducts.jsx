import React, { useContext } from 'react'
import Container from '../../../components/Container'
import { assets } from '../../../assets/assets'
import EcommerceAddBasket from '../EcommerceAddBasket'
import ElectronicFilterPopup from './ElectronicFilterPopup'
import { FeresContext } from '../../../context/FeresContext'

const ElectronicsAllProducts = () => {
    const { filterPop, setFilterPop } = useContext(FeresContext)
    return (
        <div>
            {/* Top Bar */}
            <Container className={'py-5 flex items-center justify-between'}>
                <img src={assets.arrow_left} alt="" className='invert' />
                <h1 className='text-[#2F2F3F] text-[23px] font-bold'>Mobile phone</h1>
                <button className='border border-[#EEEEEE] rounded-xl p-2'>
                    <img src={assets.filter_horizontal} alt="" onClick={() => setFilterPop(true)} />
                </button>
            </Container>

            <Container className={'grid grid-cols-3 gap-6'}>
                {Array(5).fill().map((_, index) => (
                    <div key={index}>
                        <div className='w-[120px] h-[149px] rounded-2xl flex items-center justify-center bg-[#F1F1F1] relative'>
                            <img src={assets.redmi_phone} alt="" />
                            <div className='w-[40px] h-[40px] rounded-full bg-white flex items-center justify-center absolute bottom-2 right-2'>
                                <img src={assets.add_green} alt="" />
                            </div>
                        </div>
                        <div>
                            <h1 className='text-[#2F2F3F] w-[120px]'>XIAOMI redmi 13C</h1>
                            <div className='flex items-center gap-2 mt-1'>
                                <p className='text-[#979797] line-through whitespace-nowrap'>ETB 140</p>
                                <p className='text-[#0AB247] font-bold whitespace-nowrap'>ETB 140</p>
                            </div>
                        </div>
                    </div>
                ))}
            </Container>

            {filterPop && <ElectronicFilterPopup />}
            <EcommerceAddBasket />
        </div>
    )
}

export default ElectronicsAllProducts