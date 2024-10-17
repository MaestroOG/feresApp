import React from 'react'
import Menu from '../components/ServiceComps/Menu'
import ProfileTop from '../components/ProfileComps/ProfileTop'
import LanguageOp from '../components/ProfileComps/LanguageOp'
import OtherOps from '../components/ProfileComps/OtherOps'

const Profile = () => {
    return (
        <div className='bg-gray-50 w-full min-h-screen pb-20'>
            <ProfileTop />
            <LanguageOp />
            <OtherOps />
            <Menu />
        </div>
    )
}

export default Profile