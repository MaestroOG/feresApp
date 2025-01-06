import React, { useEffect, useState } from 'react'
import NotificationNav from './NotificationNav'
import { assets } from '../../assets/assets'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Spinner from '../Spinner'
import NoNotifWarn from './NoNotifWarn'

const DetailNotif = () => {
    const [details, setDetails] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const { id } = useParams()

    const getNotifications = async () => {
        const endpoint = import.meta.env.VITE_FARASANYA + '/getDescriptionById'
        try {
            setLoading(true)
            const response = await axios.post(endpoint, {
                id: id
            })
            if (response.data.success) {
                setDetails(response.data)
                setLoading(false)
            } else if (response.data.success === false || response.data.notifications.length === 0) {
                setError(true)
                setLoading(false)
                return;
            }
        } catch (error) {
            console.error(error.message)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getNotifications()
    }, [])

    const formatDate = (dateString) => {
        const date = new Date(dateString);

        const options = {
            day: "numeric",
            month: "long",
            year: "numeric",
            hour: "numeric",
            minute: "numeric",
            hour12: true,
        };

        return new Intl.DateTimeFormat("en-US", options).format(date);
    };

    if (error) {
        return (
            <div>
                <NotificationNav />
                <NoNotifWarn />
            </div>
        )
    }

    if (loading) {
        return (
            <div>
                <NotificationNav />
                <Spinner />
            </div>
        )
    }
    return (
        <div>
            <NotificationNav />
            <div className='px-4 mt-7'>
                <h3 className='text-[#2F2F3F] text-lg font-medium'>{details?.description?.name}</h3>
                <p className='text-[#ACACAC] text-base'>{details?.description?.updated_at && formatDate(details?.description?.updated_at)}</p>
                {details?.description?.image_url.length > 0 && <img src={details?.description?.image_url[0]} alt="" className='my-5 object-cover rounded-2xl' width={"398px"} height={"270px"} loading='lazy' />}
                <p className={`text-[#2F2F3F] text-base ${details?.description?.image_url.length === 0 && 'mt-5'}`}>{details?.description?.details}</p>
            </div>
        </div>
    )
}

export default DetailNotif