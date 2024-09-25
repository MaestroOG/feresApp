import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import FoodTopBar from '../components/FoodComps/FoodTopBar'
import FoodIntroBox from '../components/FoodComps/FoodIntroBox'
import FoodOptions from '../components/FoodComps/FoodOptions'
import OrderQuantityBtn from '../components/FoodComps/OrderQuantityBtn'
import ExtraNote from '../components/FoodComps/ExtraNote'
import ExtraNotePopUp from '../components/FoodComps/ExtraNotePopUp'
import { FeresContext } from '../context/FeresContext'

const Food = () => {
    const { notePop, setNotePop } = useContext(FeresContext)
    return (
        <div className='bg-[#E7E7E7] h-screen'>
            <FoodTopBar />
            <FoodIntroBox />
            <FoodOptions />
            <FoodOptions />
            <ExtraNote onClick={() => setNotePop(true)} />
            {notePop ? <ExtraNotePopUp /> : null}


            {!notePop ? <OrderQuantityBtn /> : null}

        </div>
    )
}

export default Food