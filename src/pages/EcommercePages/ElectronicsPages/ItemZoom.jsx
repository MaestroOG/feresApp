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
    const [zoom, setZoom] = useState(10)

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
    const handlePlusClick = () => {
        if (zoom <= 100) {
            setZoom(prev => prev + 10)
        }
    }

    const handleMinusClick = () => {
        if (zoom > 10) {
            setZoom(prev => prev - 10)
        }
    }

    useEffect(() => {
        fetchImages()
    }, [])

    useEffect(() => {
        console.log(zoom)
    }, [zoom])
    return (
        <div className='h-screen w-full'>
            <div className='max-w-[398px] h-[800px] flex mx-4 my-5 overflow-hidden flex-col justify-between rounded-xl bg-[#00000008] py-3'>
                {loading && <Loader />}
                {cardImgSrc && <>
                    <Container className={'flex items-center justify-between'}>
                        <img src={assets.cancel_icon} alt="" onClick={() => navigate(-1)} />
                        <p className='text-[#2F2F3F] text-lg font-medium'>{zoom}%</p>
                    </Container>
                    <img src={cardImgSrc[current]} alt="" style={{
                        scale: '1.' + zoom.toString()
                    }} width={'398px'} height={'514px'} className={`object-cover`} />
                    <Container className={'flex items-end justify-between'}>
                        <img src={assets.search_minus} alt="" onClick={handleMinusClick} />
                        <img src={assets.search_add} alt="" onClick={handlePlusClick} />
                    </Container>
                </>}
            </div>
        </div>
    )
}

export default ItemZoom