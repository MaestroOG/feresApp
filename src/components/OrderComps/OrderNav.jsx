import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../../assets/assets'
import { FeresContext } from '../../context/FeresContext'
import { useNavigate, useParams } from 'react-router-dom'

const OrderNav = () => {
    const navigate = useNavigate();
    const { setDelOrderVisible } = useContext(FeresContext)
    const [restInfo, setRestInfo] = useState(null)
    const [loading, setLoading] = useState(true)
    const { id } = useParams();

    const body = {
        store_id: id
    }

    const fetchRest = async () => {
        try {
            const response = await fetch(import.meta.env.VITE_API_URI + '/admin/get_store_data', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': '*/*',
                },
                body: JSON.stringify(body)
            })

            const data = await response.json();
            setRestInfo(data)
            setLoading(false)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchRest();
    }, [])
    return (
        <div className='flex items-center justify-between px-4 py-7'>
            <img src={assets.arrow_left} alt="" className='invert' onClick={() => navigate(-1)} />
            {loading ? <div>Loading...</div> : <h2 className='text-[#2F2F3F] text-2xl font-bold'>{restInfo?.store_detail.name}</h2>}
            <img src={assets.delete_02} alt="" onClick={() => setDelOrderVisible(true)} />
        </div>
    )
}

export default OrderNav