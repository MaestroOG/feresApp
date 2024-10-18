import React, { useContext } from 'react'
import PromotionNav from '../components/PromotionComps/PromotionNav'
import PromotionCard from '../components/PromotionComps/PromotionCard'
import SelectViewPopUp from '../components/PromotionComps/SelectViewPopUp'
import { FeresContext } from '../context/FeresContext'

const Promotions = () => {
    const { selectView } = useContext(FeresContext)
    return (
        <div>
            <PromotionNav header={"Promotions"} />
            <div className='px-3 mt-10'>
                <PromotionCard />
            </div>
            {selectView ? <SelectViewPopUp /> : null}
        </div>
    )
}

export default Promotions