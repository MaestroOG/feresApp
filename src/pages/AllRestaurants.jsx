import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import SearchBar from '../components/SearchBar'
import WaitWarn from '../components/AllRestaurantComps/WaitWarn'
import RecommendedRests from '../components/AllRestaurantComps/RecommendedRests'
import AllRestCard from '../components/AllRestaurantComps/AllRestCard'
import { FeresContext } from '../context/FeresContext'
import WaitPopUp from '../components/AllRestaurantComps/WaitPopUp'
import FilterPopUp from '../components/SearchComps/FilterPopUp'
import FilterResCard from '../components/AllRestaurantComps/FilterResCard'
import axios from 'axios'
import Spinner from '../components/Spinner'
import Loader from '../components/Loader'

const AllRestaurants = () => {

    const { visible, filterPop, restFilter, setRestFilter, setVisible } = useContext(FeresContext)
    const [notifications, setNotifications] = useState(null)
    const [loading, setLoading] = useState(false)
    const [notLoad, setNotLoad] = useState(false)
    const [error, setError] = useState(false)
    const [details, setDetails] = useState(null)

    const getNotifications = async () => {
        const endpoint = import.meta.env.VITE_FARASANYA + '/getNotifications'
        try {
            setNotLoad(true)
            const response = await axios.post(endpoint)
            if (response.data.success) {
                setNotifications(response.data)
                setNotLoad(false)
            } else if (response.data.success === false || response.data.notifications.length === 0) {
                setError(true)
                setNotLoad(false)
                return;
            }
        } catch (error) {
            console.error(error.message)
        } finally {
            setNotLoad(false)
        }
    }

    const getNotificationDetails = async (id) => {
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
        setRestFilter(null)
        getNotifications()
    }, [])

    if (error) {
        return <h1>{error}</h1>
    }

    if (notLoad) {
        return <Loader />
    }
    return (
        <>
            <div className={`${visible ? 'blur-sm' : ''}`}>
                <Navbar />
                <SearchBar isFixed={true} />
                {loading && <Spinner />}
                {notifications && notifications?.notifications.map(not => (
                    <WaitWarn onClick={() => {
                        getNotificationDetails(not?._id)
                        setVisible(true)
                    }} name={not?.name} />
                ))}

                {restFilter ? <FilterResCard /> :
                    <>
                        <RecommendedRests />
                        <AllRestCard />
                    </>
                }
            </div>
            {visible && <WaitPopUp loading={loading} details={details?.description} />}
            {filterPop && <FilterPopUp />}
        </>
    )
}

export default AllRestaurants