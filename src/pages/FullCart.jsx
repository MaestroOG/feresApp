import React, { useContext } from 'react'
import FullCartNav from '../components/FullCartComps/FullCartNav'
import EmptyCartWarn from '../components/FullCartComps/EmptyCartWarn'
import FullCartCards from '../components/FullCartComps/FullCartCards'
import { fullCartItems } from '../components/FullCartComps/fullCartItems'
import FullCartCheckout from '../components/FullCartComps/FullCartCheckout'
import DeleteGroupOrderPopup from '../components/FullCartComps/DeleteGroupOrderPopup'
import { FeresContext } from '../context/FeresContext'

const FullCart = () => {
    const { deleteGroupOrder } = useContext(FeresContext)
    return (
        <div className='w-full'>
            <FullCartNav />
            <div className='flex flex-col gap-3 mx-auto items-center w-11/12 mt-5'>
                {fullCartItems.length === 0 ? <EmptyCartWarn /> : fullCartItems.map((item) => (
                    <FullCartCards key={item.id} img={item.img} name={item.name} itemCount={item.itemCount} distance={item.distance} price={item.price + ".00"} />
                ))}
            </div>
            {fullCartItems.length > 0 && <FullCartCheckout />}
            {deleteGroupOrder && <DeleteGroupOrderPopup />}
        </div>
    )
}

export default FullCart