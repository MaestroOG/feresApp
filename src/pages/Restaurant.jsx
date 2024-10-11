import React, { useContext, useState, useRef, useEffect } from 'react'
import { assets } from '../assets/assets';
import { useNavigate, useParams } from 'react-router-dom'
import { FeresContext } from '../context/FeresContext';
import PickupPopup from '../components/RestaurantComps/PickupPopup';
import DeliveredPopup from '../components/RestaurantComps/DeliveredPopup';
import MenuCard from '../components/RestaurantComps/MenuCard';
import SuccessPopup from '../components/SuccessPopup';
import { NewOrderPopUp } from '../components/RestaurantComps/NewOrderPopUp';
import FoodSearchPopUp from '../components/RestaurantComps/FoodSearchPopUp';
import FoodPopUp from '../components/RestaurantComps/FoodPopUp';
import SharePopUp from '../components/RestaurantComps/SharePopUp';

const Restaurant = () => {

    const { id } = useParams();

    const [items, setItems] = useState([])
    const [isLoading, setLoading] = useState(true)
    const [restInfo, setRestInfo] = useState(null)
    const [menuItems, setMenuItems] = useState(null)
    const dateInputRef = useRef(null);
    const navigate = useNavigate()
    const { deliverPopup, setDeliverPopup } = useContext(FeresContext)
    const [categories, setCategories] = useState([])
    const [categoryBtn, setCategoryBtn] = useState('All Menu');
    const { foodPopup, setSharePop, sharePop, addToCart } = useContext(FeresContext)
    const { foodSearch, setFoodSearch } = useContext(FeresContext)
    const [deliverPop, setDeliverPop] = useState(false)
    const [pickupPop, setPickupPop] = useState(false)
    const [selectedDate, setSelectedDate] = useState('')

    const [selectedTime, setSelectedTime] = useState('')
    const timeInputRef = useRef(null);

    const handleDateLabelClick = () => {
        // Trigger click event on the hidden time input
        dateInputRef.current.click();
    };

    const handleDateChange = (e) => {
        setSelectedDate(e.target.value)
    }

    const handleTimeLabelClick = () => {
        // Trigger click event on the hidden time input
        timeInputRef.current.click();
    };

    const handleTimeChange = (e) => {
        setSelectedTime(e.target.value)
    }

    const fetchRestInfo = async () => {
        const requestBody = {
            store_id: id
        }
        try {
            const res = await fetch(import.meta.env.VITE_API_URI + '/admin/get_store_data', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': '*/*',
                },
                body: JSON.stringify(requestBody)
            });

            if (!res.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await res.json();
            setRestInfo(data)
            // console.log(restInfo);
            setLoading(false)




        } catch (error) {
            console.error('Fetch error: ', error);
        }
    }

    const fetchMenuItems = async () => {
        const requestBody = {
            store_id: id
        }
        try {
            const res = await fetch(import.meta.env.VITE_API_URI + '/api/food/get_items_by_store_id', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': '*/*',
                },
                body: JSON.stringify(requestBody)
            });

            if (!res.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await res.json();

            setMenuItems(data)
            console.log(menuItems);
            setLoading(false);


        } catch (error) {
            console.error('Fetch error: ', error);
        }
    }

    const addItems = (item) => {
        const isItemInCart = items.find((cartItem) => cartItem._id === item._id); // check if the item is already in the cart

        if (isItemInCart) {
            setItems(
                items.map((cartItem) =>
                    [...cartItem]
                )
            );
        } else {
            setItems([...items, { ...item, quantity: 1 }]);
        }
    }

    useEffect(() => {
        fetchRestInfo();
        fetchMenuItems();
        // addCategories()
    }, [])

    useEffect(() => {
        console.log(items)
    }, [items])
    return (
        <div>
            {/* Feature */}
            <div className='relative'>
                {isLoading ? <div>Loading...</div> : (
                    <img src={restInfo && restInfo.store_detail.cover_image_url ? restInfo.store_detail.cover_image_url : assets.cover_placeholder} alt="" />
                )}
                <button className='absolute top-[10%] left-[4%] bg-[#06060666] p-3 rounded-xl'>
                    <img onClick={() => navigate(-1)} src={assets.arrow_left_02} alt="" className='invert' />
                </button>
                <div className='absolute top-[10%] right-[4%]'>
                    <button className='bg-[#06060666] p-3 rounded-xl ml-4'>
                        <img src={assets.add_team} alt="" />
                    </button>
                    <button className='bg-[#06060666] p-3 rounded-xl ml-4' onClick={() => setSharePop(true)}>
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
                        <img src={assets.logo_placeholder} alt="" />
                        {isLoading ? <div>Loading...</div> : restInfo && <h2 className='text-xl font-bold text-[#2F2F3F]'>{restInfo.store_detail.name}</h2>}
                    </div>
                    <div className='flex items-center gap-1' onClick={() => navigate('/review')}>
                        <img src={assets.star} alt="" />
                        <p className='text-base font-normal whitespace-nowrap'>{restInfo && restInfo.store_detail.user_rate} ({restInfo && restInfo.store_detail.user_rate_count} reviews)</p>
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
                        <label onClick={handleDateLabelClick} htmlFor='sched' className='text-base text-[#646464]'>{selectedDate ? selectedDate : "Schedule"}</label>
                        <input ref={dateInputRef} onChange={handleDateChange} type="date" name="" id="sched" className='absolute left-[-9999px]' />
                    </div>
                </div>
                {/* Delivery Details */}
                <div className='mt-7 px-4'>
                    <div className='flex items-center gap-2 mb-4'>
                        <img src={assets.clock_green} alt="" />
                        <label onClick={handleTimeLabelClick} className='text-base text-[#1E1E1E]'>{selectedTime ? selectedTime : restInfo && restInfo.store_detail.delivery_time + " mins"}</label>
                        <input type="time" name="" id="time" ref={timeInputRef} onChange={handleTimeChange} className='absolute left-[-9999px]' />
                    </div>
                    <div className='flex items-center gap-2'>
                        <img src={assets.location_green} alt="" />
                        <p className='text-base text-[#1E1E1E]'>{restInfo && restInfo.store_detail.store_Address}</p>
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
                            <p className='text-xs text-[#2F2F3F]'>{restInfo && restInfo.store_detail.store_discount ? restInfo.store_detail.store_discount : "0"}% off on their entire menu</p>
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

                    <div className='mt-6 flex gap-3 overflow-auto category-btns'>
                        {isLoading ? <div>Loading...</div> : menuItems && menuItems.store.products.map((product, index) => (
                            <button key={index} className={`${categoryBtn == product.name ? ' bg-[#0AB247] text-white' : 'border border-[#EEEEEE] text-[#AEAEAE]'} rounded-xl px-[10px] py-[5px] whitespace-nowrap`} onClick={() => setCategoryBtn(product.name)}>{product.name}</button>
                        ))}
                    </div>

                </div>

                {/* Delivered By Feres Popup*/}

                {pickupPop ? <PickupPopup /> : null}

                {deliverPop ? <DeliveredPopup /> : null}

                {/* Add To Basket Button */}

                {/* Menu */}

                <div className='px-4 mt-7 mb-28'>
                    <h2 className='text-[#2F2F3F] font-medium text-lg mb-4'>
                        All Menu</h2>
                    {isLoading ? <div>Loading...</div> : menuItems && menuItems.store.products.map((product) => (
                        product.items.map((item, index) => (
                            <MenuCard key={index} onClick={() => {
                                addItems(item)
                                console.log("Added")
                            }} title={item.name} price={item.price} desc={item.details && item.details} image={item.image_url.length > 0 ? item.image_url[0] : assets.item_placeholder} />
                        ))
                    ))}
                    {/* <h2 className='text-[#2F2F3F] font-medium text-lg mb-4'>{
                        categoryBtn
                    }</h2> */}
                    {/* <MenuCard image={assets.burger_img} title={"Beef Burger"} desc={"beef patties, comb the ground beef, salt, pepper, Worcestershire.."} onClick={() => {
                        // setFoodPopup('beef')
                        navigate('/food')
                    }} price={"140"} className={`${foodSelected === 'Beef Burger' ? 'border border-[#0AB247]' : null}`} /> */}
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
                <SuccessPopup image={assets.success_img_2} title={"Get 30% off everything up to EBT 150.00"} desc={"The maximum discount for preorders is EBT 150, usable once, and valid until February 22, 2024."} />

                {/* Share popup */}
                {sharePop ? <SharePopUp /> : null}

                <div className='bg-white px-2 py-4 fixed bottom-0 w-full z-10'>
                    <button onClick={() => {
                        addToCart(items)
                        navigate('/order')
                    }} className='flex items-center justify-center bg-[#0AB247] text-white w-full rounded-full p-4 px-5'>
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