import React, { useEffect, useState } from 'react'
import Container from '../../../components/Container'
import { assets } from '../../../assets/assets'
import { useNavigate, useParams } from 'react-router-dom'
import { usePost } from '../../../servies/usePost'
import Loader from '../../../components/Loader'

const ItemZoom = () => {
    const { id } = useParams();
    const [cardImgSrc, setCardImgSrc] = useState([]);
    const navigate = useNavigate();
    const { post, loading } = usePost()

    const fetchImages = async () => {
        const endpoint = '/api/e-commerce/get_item_detial'
        try {
            const data = await post(endpoint, {
                item_id: id
            })

            if (data && data?.success) {
                setCardImgSrc(data?.item?.image_url)
                console.log(cardImgSrc)
            }
        } catch (error) {
            console.log(error.message)
        }
    }

    const [current, setCurrent] = useState(0)

    const prevSlide = () => {
        if (current === 0) {
            setCurrent(cardImgSrc.length - 1)
        } else {
            setCurrent(current - 1)
        }
    }

    const nextSlide = () => {
        if (current === cardImgSrc.length - 1) {
            setCurrent(0)
        } else {
            setCurrent(current + 1)
        }
    }

    useEffect(() => {
        fetchImages()
    }, [])
    return (
        <div className='flex items-center justify-center h-screen w-full'>
            <div className='w-[398px] h-[811px] flex flex-col justify-between rounded-xl bg-[#00000008] py-3'>
                {loading && <Loader />}
                {cardImgSrc && <>
                    <Container className={'flex items-center justify-between'}>
                        <img src={assets.cancel_icon} alt="" onClick={() => navigate(-1)} />
                        <p className='text-[#2F2F3F] text-lg font-medium'>10%</p>
                    </Container>
                    <img src={cardImgSrc[current]} alt="" onClick={nextSlide} className='w-[398px] h-[514px] object-contain' />
                    <Container className={'flex items-end justify-between'}>
                        <img src={assets.search_minus} alt="" />
                        <img src={assets.search_add} alt="" />
                    </Container>
                </>}
            </div>
        </div>
    )
}

export default ItemZoom