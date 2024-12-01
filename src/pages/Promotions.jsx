import React, { useContext, useEffect, useState } from 'react'
import PromotionNav from '../components/PromotionComps/PromotionNav'
import PromotionCard from '../components/PromotionComps/PromotionCard'
import SelectViewPopUp from '../components/PromotionComps/SelectViewPopUp'
import { FeresContext } from '../context/FeresContext'
import { usePost } from '../servies/usePost'

const Promotions = () => {
    const { selectView } = useContext(FeresContext)
    const { post, loading, error } = usePost();
    const [promotions, setPromotions] = useState(null)

    const getAllPromotions = async () => {
        try {
            const data = await post('/get_all_promotions', {})
            setPromotions(data)
            console.log(promotions);
        } catch (error) {
            console.error(error.message)
        }
    }

    useEffect(() => {
        getAllPromotions()
    }, [])
    return (
        <div>
            <PromotionNav header={"Promotions"} />
            <div className='px-3 mt-10'>
                {loading && <div>Loading...</div>}
                {error && <div>An Error Ocurred...</div>}
                {promotions && promotions.success && promotions?.promotions_list.map(promo => (
                    <PromotionCard promo={promo} />
                ))}
            </div>
            {selectView ? <SelectViewPopUp /> : null}
        </div>
    )
}

export default Promotions