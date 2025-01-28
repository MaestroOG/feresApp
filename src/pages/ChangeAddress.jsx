import React, { useState } from 'react'
import ChangeAddressNav from '../components/ChangeAddressComps/ChangeAddressNav'
import AddressMap from '../components/ChangeAddressComps/AddressMap'
import AddressSaveBtns from '../components/ChangeAddressComps/AddressSaveBtns'
import AddressForm from '../components/ChangeAddressComps/AddressForm'
import { usePost } from '../servies/usePost'
import { useSelector } from 'react-redux'
import Spinner from '../components/Spinner'
import { useNavigate } from 'react-router-dom'


const ChangeAddress = () => {
    const [address, setAddress] = useState('');
    const [fullAdd, setFullAdd] = useState(null)
    const [title, setTitle] = useState('')
    const { post, loading, error } = usePost()
    const user = useSelector(state => state.userAuth.user)
    const navigate = useNavigate()

    const saveAddress = async () => {
        const endpoint = '/api/user/save_address';
        try {
            const data = await post(endpoint, {
                user_id: user?.user_id,
                title: title,
                address: address,
                location: [fullAdd?.navigation_points[0]?.location?.latitude, fullAdd?.navigation_points[0]?.location?.longitude]

            })

            if (data?.success) {
                navigate(-1)
            }
        } catch (err) {
            console.log(err.message)
        }
    }
    return (
        <div>
            <ChangeAddressNav />
            <AddressMap fullAdd={fullAdd} setFullAdd={setFullAdd} setAddress={setAddress} address={address} />
            {/* <AddressSaveBtns /> */}
            <AddressForm title={title} setTitle={setTitle} />
            <div className='fixed bottom-0 left-0 w-full px-4 py-5 bg-white'>
                <button className='px-4 py-5 w-full mx-auto rounded-full bg-[#0AB247] text-white font-semibold' onClick={saveAddress}>{loading ? <Spinner isWhite={true} /> : 'Save address'}</button>
            </div>
        </div>
    )
}

export default ChangeAddress