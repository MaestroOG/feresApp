import React, { useContext, useEffect } from 'react'
import { assets } from '../assets/assets'
import FoodTopBar from '../components/FoodComps/FoodTopBar'
import FoodIntroBox from '../components/FoodComps/FoodIntroBox'
import FoodOptions from '../components/FoodComps/FoodOptions'
import OrderQuantityBtn from '../components/FoodComps/OrderQuantityBtn'
import ExtraNote from '../components/FoodComps/ExtraNote'
import ExtraNotePopUp from '../components/FoodComps/ExtraNotePopUp'
import { FeresContext } from '../context/FeresContext'

const Food = ({ itemFoodPopup }) => {
    const { notePop, setNotePop } = useContext(FeresContext)


    console.log("here is a item for food popup", itemFoodPopup);
    return (
        <div className='bg-[#E7E7E7] h-screen'>
            <FoodTopBar itemImg={itemFoodPopup?.image_url} />
            <FoodIntroBox itemName={itemFoodPopup?.name} itemPrice={itemFoodPopup?.price} itemDesc={itemFoodPopup?.details} />
            <FoodOptions />
            <FoodOptions />
            <ExtraNote onClick={() => setNotePop(true)} />
            {notePop ? <ExtraNotePopUp placeholder={"Write your review here"} /> : null}


            {!notePop ? <OrderQuantityBtn itemFoodPopup={itemFoodPopup} /> : null}

        </div>
    )
}

export default Food