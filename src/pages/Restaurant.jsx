import React, { useContext, useState, useRef, useEffect } from 'react'
import { assets } from '../assets/assets';
import { Link, useNavigate, useParams } from 'react-router-dom'
import { FeresContext } from '../context/FeresContext';
import PickupPopup from '../components/RestaurantComps/PickupPopup';
import DeliveredPopup from '../components/RestaurantComps/DeliveredPopup';
import MenuCard from '../components/RestaurantComps/MenuCard';
import SuccessPopup from '../components/SuccessPopup';
import { NewOrderPopUp } from '../components/RestaurantComps/NewOrderPopUp';
import FoodSearchPopUp from '../components/RestaurantComps/FoodSearchPopUp';
import FoodPopUp from '../components/RestaurantComps/FoodPopUp';
import SharePopUp from '../components/RestaurantComps/SharePopUp';
import AddBi from '../components/RestaurantComps/AddBi';
import AddBii from '../components/RestaurantComps/AddBii';
import './Restaurant.css'
import Food from './Food';
import MealsCategoriesAndItems from '../components/RestaurantComps/MealsCategoriesAndItems';

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

    const { foodPopup, setSharePop, sharePop, addToCart } = useContext(FeresContext)
    const { foodSearch, setFoodSearch } = useContext(FeresContext)
    const [deliverPop, setDeliverPop] = useState(false)
    const [pickupPop, setPickupPop] = useState(false)
    const [foodDetailShow, setFoodDetailShow] = useState(false)
    const [itemFoodPopup, setitemFoodPopup] = useState(null)
    const [selectedDate, setSelectedDate] = useState('')
    const [selectedItem, setSelectedItem] = useState([])
    const [successPop, setSuccessPop] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    const handleDateLabelClick = () => {
        // Trigger click event on the hidden time input
        dateInputRef.current.click();
    };

    const handleDateChange = (e) => {
        setSelectedDate(e.target.value)
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
    const handleClick = (index, item) => {
        setitemFoodPopup(item)
        // Add the clicked card's index to the array if it's not already there
        if (!selectedItem.includes(index)) {
            setSelectedItem((prevSelectedItems) => [...prevSelectedItems, index]);
        }
        addToCart(item);

        setItems([...items, item])
        console.log(items);

        console.log("Added");
        setFoodDetailShow(true)
    };

    useEffect(() => {
        const handleScroll = () => {
            // Check if the page has been scrolled 50px or more
            if (window.scrollY > 207) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    useEffect(() => {
        fetchRestInfo();
        fetchMenuItems();
        // addCategories()
    }, [])

    useEffect(() => {
        console.log(items)
    }, [items])

    return (
        <>
            <div className='pb-32'>
                {!foodDetailShow ? <div>
                    {/* Feature */}
                    <div className={`relative`}>
                        {isLoading ? <div>Loading...</div> : (
                            <img src={restInfo && restInfo.store_detail.cover_image_url ? restInfo.store_detail.cover_image_url : assets.cover_placeholder} alt="" />
                        )}
                    </div>
                    <div className={`flex items-center justify-between px-4 py-6 fixed top-0 w-full transition-all z-40 ${scrolled ? 'bg-white' : 'bg-transparent'}`}>
                        <button className={`p-3 rounded-xl ${scrolled ? 'bg-transparent border border-[#EEEEEE]' : 'bg-[#06060666]'}`}>
                            <img src={assets.arrow_left} alt="" className={`${scrolled ? 'invert' : ''}`} />
                        </button>
                        <div className='flex items-center gap-2'>
                            <button className={`p-3 rounded-xl ${scrolled ? 'bg-transparent border border-[#EEEEEE]' : 'bg-[#06060666]'}`}>
                                <img src={assets.add_team} alt="" className={`${scrolled ? 'invert' : ''}`} />
                            </button>
                            <button className={`p-3 rounded-xl ${scrolled ? 'bg-transparent border border-[#EEEEEE]' : 'bg-[#06060666]'}`}>
                                <img src={assets.share} alt="" className={`${scrolled ? 'invert' : ''}`} />
                            </button>
                            <button className={`p-3 rounded-xl ${scrolled ? 'bg-transparent border border-[#EEEEEE]' : 'bg-[#06060666]'}`}>
                                <img src={assets.search} alt="" className={`${!scrolled ? 'invert' : ''}`} />
                            </button>
                        </div>

                    </div>

                    {/* Restaurant Title */}

                    <div className='bg-white'>
                        <div className="flex items-center justify-between pt-5 px-4">
                            <div className='flex items-center gap-2'>
                                <img src={assets.logo_placeholder} alt="" />
                                {isLoading ? <div>Loading...</div> : restInfo && <h2 className={`transition-all text-xl font-bold text-[#2F2F3F] ${scrolled ? 'fixed left-20 top-9 z-50' : ''}`}>{restInfo.store_detail.name}</h2>}
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
                                <label className='text-base text-[#1E1E1E]'>{restInfo && restInfo.store_detail.delivery_time + " mins"}</label>

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
                                <div className='flex items-center gap-2' onClick={() => setSuccessPop(true)}>
                                    <img src={assets.discount_tag} alt="" />
                                    <p className='text-xs text-[#2F2F3F]'>{restInfo && restInfo.store_detail.store_discount ? restInfo.store_detail.store_discount : "0"}% off on their entire menu</p>
                                </div>
                            </div>
                            <div onClick={() => navigate('/restaurantsupport')}>
                                <img src={assets.arrow_right} alt="" />
                            </div>
                        </div>

                        <MealsCategoriesAndItems />

                        {/* Delivered By Feres Popup*/}

                        {pickupPop ? <PickupPopup /> : null}

                        {deliverPop ? <DeliveredPopup /> : null}

                        {/* Add To Basket Button */}

                        {/* <NewOrderPopUp /> */}

                        {foodSearch ? <FoodSearchPopUp /> : null}


                        {/* Food Popup */}

                        {successPop && <SuccessPopup image={assets.success_img} title={"Get 30% off everything up to EBT 150.00"} desc={"The maximum discount for preorders is EBT 150, usable once, and valid until February 22, 2024."} />}

                        {sharePop ? <SharePopUp /> : null}

                        {items.length === 0 ? <AddBi items={items} /> : <AddBii items={items} />}
                    </div>
                </div> : <div><Food itemFoodPopup={itemFoodPopup} /></div>}
            </div>
        </>
    )
}

export default Restaurant