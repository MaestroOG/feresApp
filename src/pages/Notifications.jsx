import React, { useEffect, useState } from 'react'
import NotificationNav from '../components/NotificationComps/NotificationNav'
import NoNotifWarn from '../components/NotificationComps/NoNotifWarn'
import NotificationCard from '../components/NotificationComps/NotificationCard'
import { assets } from '../assets/assets'
import axios from 'axios'
import Spinner from '../components/Spinner'

const Notifications = () => {
    const [notifications, setNotifications] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const getNotifications = async () => {
        const endpoint = import.meta.env.VITE_FARASANYA + '/getNotifications'
        try {
            setLoading(true)
            const response = await axios.post(endpoint)
            if (response.data.success) {
                setNotifications(response.data)
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

    if (loading) {
        return (
            <div>
                <NotificationNav />
                <Spinner />
            </div>
        )
    }

    if (error) {
        return (<div>
            <NotificationNav />
            <NoNotifWarn />
        </div>
        )
    }
    return (
        <div>
            <NotificationNav />
            {notifications && notifications?.notifications.map(not => (
                <NotificationCard id={not?._id} key={not?._id} img={assets.pie} isDetail={true} name={not?.name} desc={not?.details} />
            ))}

        </div>
    )
}

export default Notifications