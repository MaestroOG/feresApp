import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom'
import { FeresContext } from '../context/FeresContext';
import PickupPopup from '../components/RestaurantComps/PickupPopup';
import DeliveredPopup from '../components/RestaurantComps/DeliveredPopup';
import MenuCard from '../components/RestaurantComps/MenuCard';
import SuccessPopup from '../components/SuccessPopup';
import { NewOrderPopUp } from '../components/RestaurantComps/NewOrderPopUp';
import FoodSearchPopUp from '../components/RestaurantComps/FoodSearchPopUp';
import FoodPopUp from '../components/RestaurantComps/FoodPopUp';

const Restaurant = () => {

    const navigate = useNavigate()
    const { deliverPopup, setDeliverPopup } = useContext(FeresContext)
    const [categoryBtn, setCategoryBtn] = useState('all')
    const { foodPopup, setFoodPopup } = useContext(FeresContext)
    const { foodSearch, setFoodSearch, foodSelected } = useContext(FeresContext)
    const [deliverPop, setDeliverPop] = useState(false)
    const [pickupPop, setPickupPop] = useState(false)

    return (
        <div>
            {/* Feature */}
            <div className='relative'>
                <img src={assets.restaurant_featured} alt="" />
                <button className='absolute top-[10%] left-[4%] bg-[#06060666] p-3 rounded-xl'>
                    <img onClick={() => navigate(-1)} src={assets.arrow_left_02} alt="" className='invert' />
                </button>
                <div className='absolute top-[10%] right-[4%]'>
                    <button className='bg-[#06060666] p-3 rounded-xl ml-4'>
                        <img src={assets.add_team} alt="" />
                    </button>
                    <button className='bg-[#06060666] p-3 rounded-xl ml-4'>
                        <img src={assets.share} alt="" />
                    </button>
                    <button className='bg-[#06060666] p-3 rounded-xl ml-4' onClick={() => setFoodSearch(true)}>
                        <img className='invert' src={assets.search} alt="" />
                    </button>
                </div>
            </div>

            {/* Restaurant Title */}
            <div className='bg-white'>
                <div className="flex items-center justify-between pt-5 px-4">
                    <div className='flex items-center gap-2'>
                        <img src={assets.kfc_logo} alt="" />
                        <h2 className='text-xl font-bold text-[#2F2F3F]'>KFC Eastlight</h2>
                    </div>
                    <div className='flex items-center gap-1' onClick={() => navigate('/review')}>
                        <img src={assets.star} alt="" />
                        <p className='text-base font-normal'>4.5 (50 reviews)</p>
                    </div>
                </div>
                <div className='px-4 mt-5 flex items-center gap-5'>
                    <div className='flex items-center gap-2' onClick={() => setDeliverPop(true)}>
                        <img src={assets.scooter_img} alt="" />
                        <p className='text-base text-[#646464]' unselectable='on'>Delivery</p>
                    </div>
                    <div className='flex items-center gap-2' onClick={() => setPickupPop(true)}>
                        <img src={assets.location_user} alt="" />
                        <p className='text-base text-[#646464]'>Pickup</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <img src={assets.calendar} alt="" />
                        <p className='text-base text-[#646464]'>Schedule</p>
                    </div>
                </div>

                {/* Delivery Details */}
                <div className='mt-7 px-4'>
                    <div className='flex items-center gap-2 mb-4'>
                        <img src={assets.clock_green} alt="" />
                        <p className='text-base text-[#1E1E1E]'>31 Minutes</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <img src={assets.location_green} alt="" />
                        <p className='text-base text-[#1E1E1E]'>Royal Ln. Mesa, New Jersey 45463</p>
                    </div>
                </div>

                {/* Help Cirlce */}
                <div className='mt-7 px-4 flex items-center justify-between gap-4'>
                    <div className='flex flex-col gap-4'>
                        <div className='flex items-center gap-2'>
                            <img src={assets.scooter_green} alt="" />
                            <p className='text-xs text-[#2F2F3F]'>EBT 150</p>
                        </div>
                        <div className='flex items-center gap-2' onClick={() => navigate('/restaurantsupport')}>
                            <img src={assets.help_circle} alt="" />
                            <p className='text-xs text-[#2F2F3F]'>Allergies and contact details</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <img src={assets.discount_tag} alt="" />
                            <p className='text-xs text-[#2F2F3F]'>30% off on their entire menu</p>
                        </div>
                    </div>
                    <div onClick={() => navigate('/restaurantsupport')}>
                        <img src={assets.arrow_right} alt="" />
                    </div>
                </div>

                {/* Categories */}
                <div className='px-4 mt-7 sticky top-0 bg-white py-5'>
                    <div className='flex items-center justify-between'>
                        <h2 className='text-[#2F2F3F] text-lg'>Categories</h2>
                        <p className='text-[#979797] text-base' onClick={() => navigate('/restaurant/categories')}>View all</p>
                    </div>


                    {/* Category Buttons */}

                    <div className='mt-6 flex gap-3'>
                        <button className={`${categoryBtn == 'all' ? ' bg-[#0AB247] text-white' : 'border border-[#EEEEEE] text-[#AEAEAE]'} rounded-xl px-[10px] py-[5px]`} onClick={() => setCategoryBtn('all')}>All</button>
                        <button className={`${categoryBtn == 'trending' ? ' bg-[#0AB247] text-white' : 'border border-[#EEEEEE] text-[#AEAEAE]'} rounded-xl px-[10px] py-[5px]`} onClick={() => setCategoryBtn('trending')}>Trending meals</button>
                        <button className={`${categoryBtn == 'sandwiches' ? ' bg-[#0AB247] text-white' : 'border border-[#EEEEEE] text-[#AEAEAE]'} rounded-xl px-[10px] py-[5px]`} onClick={() => setCategoryBtn('sandwiches')}>Sandwiches</button>
                    </div>

                </div>

                {/* Delivered By Feres Popup*/}

                {pickupPop ? <PickupPopup /> : null}

                {deliverPop ? <DeliveredPopup /> : null}

                {/* Add To Basket Button */}

                {/* Menu */}

                <div className='px-4 mt-7 mb-28'>
                    <h2 className='text-[#2F2F3F] font-medium text-lg mb-4'>{
                        categoryBtn == 'all' ? 'All Menu' : categoryBtn == 'trending' ? 'Trending Menu' : categoryBtn == 'sandwiches' ? 'Sandwiches' : null
                    }</h2>
                    <MenuCard image={assets.burger_img} title={"Beef Burger"} desc={"beef patties, comb the ground beef, salt, pepper, Worcestershire.."} onClick={() => setFoodPopup('beef')} className={`${foodSelected === 'Beef Burger' ? 'border border-[#0AB247]' : null}`} />
                    <MenuCard image={assets.orange_juice_img} title={"Fresh orange juice"} desc={"beef patties, comb the ground beef, salt, pepper, Worcestershire.."} onClick={() => setFoodPopup('orange')} className={`${foodSelected === 'Fresh orange juice' ? 'border border-[#0AB247]' : null}`} />
                    <MenuCard image={assets.mango_juice_img} title={"Fresh mango juice"} desc={"beef patties, comb the ground beef, salt, pepper, Worcestershire.."} onClick={() => setFoodPopup('mango')} className={`${foodSelected === 'Fresh mango juice' ? 'border border-[#0AB247]' : null}`} />
                    <MenuCard image={assets.ice_cream_img} title={"Ice cream"} desc={"beef patties, comb the ground beef, salt, pepper, Worcestershire.."} onClick={() => setFoodPopup('cream')} className={`${foodSelected === 'Ice cream' ? 'border border-[#0AB247]' : null}`} />
                </div>

                {/* <NewOrderPopUp /> */}

                {foodSearch ? <FoodSearchPopUp /> : null}


                {/* Food Popup */}

                {
                    foodPopup === 'beef' ? <>
                        <FoodPopUp text={"Beef Burger"} img={assets.burger_img_lg} />
                    </> : foodPopup === 'orange' ? <> <FoodPopUp text={"Fresh orange juice"} img={assets.burger_img_lg} /></> : foodPopup === 'mango' ? <> <FoodPopUp img={assets.burger_img_lg} text={"Fresh mango juice"} /> </> : foodPopup === 'cream' ? <> <FoodPopUp text={"Ice cream"} img={assets.burger_img_lg} /> </> : null
                }

                {/* Success Popup */}
                {/* <SuccessPopup image={assets.success_img_2} title={"Get 30% off everything up to EBT 150.00"} desc={"The maximum discount for preorders is EBT 150, usable once, and valid until February 22, 2024."} /> */}

                <div className='bg-white px-2 py-4 fixed bottom-0 w-full z-10'>
                    <button onClick={() => navigate('/order')} className='flex items-center justify-center bg-[#0AB247] text-white w-full rounded-full p-4 px-5'>
                        <div className='flex items-center text-center gap-2'>
                            {/* <img src={assets.shopping_basket} alt="" className='invert' /> */}
                            Add To Basket
                        </div>
                        {/* <div className='text-white text-lg font-medium'>ETB140.00</div> */}
                    </button>
                </div>

            </div>
        </div>
    )
}

export default Restaurant