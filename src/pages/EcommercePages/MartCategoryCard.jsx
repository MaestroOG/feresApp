import React, { useContext } from 'react'
import Container from '../../components/Container'
import { useParams } from 'react-router-dom'
import { FeresContext } from '../../context/FeresContext'
import { useNavigate } from 'react-router-dom'

const MartCategoryCard = ({ category,product_info,promoPer }) => {
    const navigate = useNavigate()
    const { id } = useParams()
    const { setEcat } = useContext(FeresContext)
    const handleClick = (name) => {
        setEcat(name)
        navigate(`/ecommerce/mart/martproduct/${id}`)
    };


      
    return (
        <div>
            <Container className='flex items-center gap-3 overflow-auto no-scrollbar relative'>
                <div onClick={() => handleClick(category?.name)}>
                    <div className={`w-28 h-24 px-4 py-8 rounded-2xl flex items-center justify-center bg-[#F8F8F8] relative`}>
                {product_info && category._id == product_info[0]?._id && <div className='bg-[#0AB247] rounded-lg p-2 text-xs text-white absolute top-2 left-2'>-{promoPer}%</div>}

                        <img src={category?.featured_image} alt="" className='w-[90px] h-[55px] object-contain' />
                    </div>
                    <h1 className='text-[#2F2F3F] text-center mt-1'>{category?.name}</h1>

                </div>
            </Container>
        </div>
    )
}

export default MartCategoryCard