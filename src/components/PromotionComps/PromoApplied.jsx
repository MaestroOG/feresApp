import React, { useContext } from 'react'
import PromotionNav from './PromotionNav'
import { FeresContext } from '../../context/FeresContext'
import SelectViewPopUp from './SelectViewPopUp'
import AppliedPromoCard from './AppliedPromoCard'

const PromoApplied = () => {
    const { selectView } = useContext(FeresContext)
    return (
        <div>
            <PromotionNav header={"Applied promotion"} />
            <div className='px-3 mt-6'>
                <AppliedPromoCard />
            </div>

            {selectView ? <SelectViewPopUp /> : null}
        </div>
    )
}

export default PromoApplied