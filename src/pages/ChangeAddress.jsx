import React from 'react'
import ChangeAddressNav from '../components/ChangeAddressComps/ChangeAddressNav'
import AddressMap from '../components/ChangeAddressComps/AddressMap'
import AddressSaveBtns from '../components/ChangeAddressComps/AddressSaveBtns'
import AddressForm from '../components/ChangeAddressComps/AddressForm'


const ChangeAddress = () => {

    return (
        <div>
            <ChangeAddressNav />
            <AddressMap />
            <AddressSaveBtns />
            <AddressForm />
            <div className='fixed bottom-0 left-0 w-full px-4 py-5 bg-white'>
                <button className='px-4 py-5 w-full mx-auto rounded-full bg-[#0AB247] text-white font-semibold'>Save address</button>
            </div>
        </div>
    )
}

export default ChangeAddress