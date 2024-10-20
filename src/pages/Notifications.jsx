import React from 'react'
import NotificationNav from '../components/NotificationComps/NotificationNav'
import NoNotifWarn from '../components/NotificationComps/NoNotifWarn'
import NotificationCard from '../components/NotificationComps/NotificationCard'
import { notifications } from '../components/NotificationComps/notifications'
import { assets } from '../assets/assets'

const Notifications = () => {
    return (
        <div>
            <NotificationNav />
            {notifications.length === 0 ? <NoNotifWarn /> :
                <div className='mt-6'>
                    <NotificationCard img={assets.pie} successStat={true} name={"McDonald Order"} desc={"24 Jan 2024, 2:24 PM"} />
                    <NotificationCard img={assets.pie} successStat={false} name={"Abenezer mini market order"} desc={"24 Jan 2024, 2:24 PM"} />
                    <NotificationCard img={assets.pie} successStat={false} name={"KFC Eastlight order"} desc={"24 Jan 2024, 2:24 PM"} />
                    <NotificationCard img={assets.hot_price} isDetail={true} name={"Get 25% discount on your..."} desc={"24 Jan 2024, 2:24 PM"} />
                </div>
            }
            {/* <NoNotifWarn /> */}

        </div>
    )
}

export default Notifications