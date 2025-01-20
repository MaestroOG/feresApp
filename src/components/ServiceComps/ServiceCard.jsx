import React, { useEffect, useRef, useState } from 'react'
import { assets } from '../../assets/assets';
import { usePost } from '../../servies/usePost';
import { useLocation } from 'react-router-dom';
import Spinner from '../Spinner';

const ServiceCard = ({ to }) => {

    const [ads, setAds] = useState([]);
    const { loading, error, post } = usePost()
    const location = useLocation();
    const cardImgRef = useRef(null)

    const getAds = async () => {
        try {
            const endpoint = '/api/e-commerce/get_category_slides'
            const data = await post(endpoint, {
                ads_for: location.pathname === '/ecommerce' ? 2 : 1
            })
            if (data && data.success) {
                setAds(data.images.filter(image => image.is_ads_visible === true))
                console.log(ads)
            }
        } catch (error) {
            console.log(error.message)
        }
    }

    const cardImgSrc = [assets.service_card_img, assets.service_card_img_3]

    const [current, setCurrent] = useState(0)

    const nextSlide = () => {
        if (current === ads?.length - 1) {
            setCurrent(0)
        } else {
            setCurrent(current + 1)
        }
    }

    useEffect(() => {
        getAds()
    }, [])

    useEffect(() => {
        const clickButton = () => {
            if (cardImgRef.current) {
                cardImgRef.current.click();
            }
        };
        const interval = setInterval(clickButton, 2000);
        return () => clearInterval(interval);
    }, []);

    if (loading) {
        return <Spinner />
    }

    if (error) {
        return <h1>Something went wrong</h1>
    }

    if (ads.length === 0) {
        return;
    }
    return (
        <div className='my-8 px-4'>

            {/* Left */}
            <div className='bg-[#0AB247] w-[47%] min-h-[158px] clipped flex flex-col justify-center absolute left-[2%] px-3 pr-5 py-[18px] rounded-tl-3xl rounded-bl-3xl z-10'>
                {ads?.map(ad => (
                    <p className='text-[#FFE5A4] font-medium text-base'>{ad?.ads_detail ? ad?.ads_detail : 'No Description Available'}</p>
                ))}
                <button className='bg-white text-[#0AB247] rounded-[30px] p-[10px] py-[7px] w-[77px] mt-3' onClick={to}>View all</button>
            </div>

            {/* Right */}
            <div className='relative w-[53%] ml-auto clipped_2'>
                <div className='overflow-hidden relative'>
                    <div className={`flex gap-0 transition ease-out duration-300`} style={{
                        transform: `translateX(-${current * 100}%)`,
                    }}>
                        {ads?.map((s, index) => (
                            <img ref={cardImgRef} loading='lazy' src={s?.image_for_banner} key={index} className="h-[158px] w-[250px] rounded-tr-3xl rounded-br-3xl object-cover" onClick={nextSlide} />
                        ))}
                    </div>
                </div>
                <img src={assets.feres_logo} className="absolute right-[6%] top-4" />
            </div>
        </div>
    )
}

export default ServiceCard
