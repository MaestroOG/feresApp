import React, { useContext, useState, useRef, useEffect, useCallback } from 'react'
import { assets } from '../assets/assets';
import { useNavigate, useParams } from 'react-router-dom'
import { FeresContext } from '../context/FeresContext';
import PickupPopup from '../components/RestaurantComps/PickupPopup';
import DeliveredPopup from '../components/RestaurantComps/DeliveredPopup';
import SuccessPopup from '../components/SuccessPopup';
import FoodSearchPopUp from '../components/RestaurantComps/FoodSearchPopUp';
import FoodPopUp from '../components/RestaurantComps/FoodPopUp';
import SharePopUp from '../components/RestaurantComps/SharePopUp';
import AddBi from '../components/RestaurantComps/AddBi';
import AddBii from '../components/RestaurantComps/AddBii';
import './Restaurant.css'
import Food from './Food';
import MealsCategoriesAndItems from '../components/RestaurantComps/MealsCategoriesAndItems';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../components/OrderComps/datepicker-custom.css'
import 'react-time-picker/dist/TimePicker.css';
import CustomTimePicker from '../components/CustomTimePicker';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedResturant } from '../redux/slices/selectedResturantSlice';
import { usePost } from '../servies/usePost';
import { usePostRequest } from '../servies/usePostRequest';
import GroupOrder1 from '../components/GroupOrderComps/GroupOrder1';
import OrderDeadline from '../components/GroupOrderComps/OrderDeadline';
import InviteSharePopup from '../components/GroupOrderComps/InviteSharePopup';
import JoinQrPopup from '../components/GroupOrderComps/JoinQrPopup';
import Container from '../components/Container';
import TimeUpPopup from '../components/GroupOrderComps/TimeUpPopup';
import DelByHostPopup from '../components/GroupOrderComps/DelByHostPopup';
import { setCartItemData } from '../redux/slices/cartDetail';




const Restaurant = () => {

    const { id } = useParams();
    const dispatch = useDispatch()
    const [items, setItems] = useState([])
    const [isLoading, setLoading] = useState(true)
    const [restInfo, setRestInfo] = useState(null)
    const [menuItems, setMenuItems] = useState(null)
    const dateInputRef = useRef(null);
    const navigate = useNavigate()
    const { deliverPopup, setDeliverPopup } = useContext(FeresContext)
    const [categories, setCategories] = useState([])
    const { loading, error, response, postRequest } = usePostRequest();
    const { post } = usePost()
    const { foodPopup, setSharePop, sharePop, addToCart } = useContext(FeresContext)
    const { foodSearch, setFoodSearch } = useContext(FeresContext)
    const [deliverPop, setDeliverPop] = useState(false)
    const [pickupPop, setPickupPop] = useState(false)
    const [foodDetailShow, setFoodDetailShow] = useState(false)
    const [itemFoodPopup, setitemFoodPopup] = useState(null)
    const [selectedItem, setSelectedItem] = useState([])
    const [successPop, setSuccessPop] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
    const [isTimePickerOpen, setIsTimePickerOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState('16:00');
    const selectedResturant = useSelector((state) => state.selectedResturant.selectedResturant);
    const showModel = useSelector((state) => state.modelToggle.showModel);
    const selectedFood = useSelector((state) => state.selectedFood.selectedFood);
    const cartItemData = useSelector((state) => state.cartDetails.cartItemData)
    const [showQr, setShowQr] = useState(false)
    const [firstGroup, setFirstGroup] = useState(false)
    const [ordDeadline, setOrdDeadline] = useState(false)
    const [inviteShare, setInviteShare] = useState(false)
    const [isItemAdded, setIsItemAdded] = useState()
    const loginUser = useSelector((state) => state.userAuth.user)


    const [deadline, setDeadline] = useState('any')




    const handleDateClick = () => {
        if (ordDeadline) setOrdDeadline(false)
        setIsDatePickerOpen(true);
    };

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const handleDateConfirm = () => {
        setIsDatePickerOpen(false);
        setIsTimePickerOpen(true);
    };

    const handleTimeConfirm = (time) => {
        setSelectedTime(time);
        setIsTimePickerOpen(false);

        if (!ordDeadline) {
            setOrdDeadline(true)
        }
    };

    const handleTimeClose = () => {
        setIsTimePickerOpen(false);
    };

    const formattedDate = selectedDate
        ? {
            year: selectedDate.getFullYear(),
            day: selectedDate.toLocaleDateString('en-US', { weekday: 'short' }),
            monthDay: selectedDate.toLocaleDateString('en-US', { day: 'numeric', month: 'short' }),
        }
        : { year: '2024', day: 'Thu', monthDay: '22 Feb' }; // Default text when no date is selected

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
            setLoading(false)




        } catch (error) {
            console.error('Fetch error: ', error);
        }
    }

    const fetchCart = () => {
        const cartDetailsResponse = post('/api/user/get_cart', { cart_unique_token: loginUser.cart_unique_token })
        dispatch(setCartItemData(cartDetailsResponse.cart))
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
            dispatch(setSelectedResturant(data))
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
        fetchCart()
    }, [loginUser])

    // const addItemInCart = useCallback((data) => {
    //     setIsItemAdded(data)
    // }, [])

    return (
        <>
            <div className='pb-16'>
                {!showModel ? <div>
                    {/* Feature */}
                    <div className={`relative`}>
                        {isLoading ? <div>Loading...</div> : (
                            <img src={restInfo && restInfo.store_detail.cover_image_url ? restInfo.store_detail.cover_image_url : assets.cover_placeholder} alt="" />
                        )}
                    </div>
                    <div className={`flex items-center justify-between px-4 py-6 fixed top-0 w-full transition-all z-40 ${scrolled ? 'bg-white' : 'bg-transparent'}`}>
                        <button onClick={() => navigate(-1)} className={`p-3 rounded-xl ${scrolled ? 'bg-transparent border border-[#EEEEEE]' : 'bg-[#06060666]'}`}>
                            <img src={assets.arrow_left} alt="" className={`${scrolled ? 'invert' : ''}`} />
                        </button>
                        <div className='flex items-center gap-2'>
                            <button onClick={() => setFirstGroup(true)} className={`p-3 rounded-xl ${scrolled ? 'bg-transparent border border-[#EEEEEE]' : 'bg-[#06060666]'}`}>
                                <img src={assets.add_team} alt="" className={`${scrolled ? 'invert' : ''}`} />
                            </button>
                            <button className={`p-3 rounded-xl ${scrolled ? 'bg-transparent border border-[#EEEEEE]' : 'bg-[#06060666]'}`}>
                                <img src={assets.share} alt="" className={`${scrolled ? 'invert' : ''}`} onClick={() => setSharePop(true)} />
                            </button>
                            <button className={`p-3 rounded-xl ${scrolled ? 'bg-transparent border border-[#EEEEEE]' : 'bg-[#06060666]'}`}>
                                <img src={assets.search} alt="" className={`${!scrolled ? 'invert' : ''}`} onClick={() => setFoodSearch(true)} />
                            </button>
                        </div>
                    </div>

                    <Container className={'absolute top-[23%] w-full'}>
                        <div className='bg-[#E8E8E8] rounded-2xl p-3 flex items-center justify-between'>
                            <div className='flex items-center gap-1'>
                                <img src={assets.rice_bowl_green} alt="" />
                                <p className='text-[#0AB247] text-sm font-medium'>Group order</p>
                            </div>
                            <div className='flex items-center gap-1' onClick={() => setInviteShare(true)}>
                                <img src={assets.add_team} alt="" className='invert' />
                                <p className='text-[#0D343F] text-sm font-medium'>Invite</p>
                            </div>
                        </div>
                    </Container>

                    {/* Restaurant Title */}

                    <div className='bg-white'>
                        <div className="flex items-center justify-between pt-5 px-4">
                            <div className='flex items-center gap-2'>
                                <img src={assets.logo_placeholder} alt="" />
                                {isLoading ? <div>Loading...</div> : restInfo && <h2 className={`transition-all text-xl font-bold text-[#2F2F3F] ${scrolled ? 'fixed left-20 top-9 z-50' : ''}`}>{restInfo.store_detail.name.slice(0, 11)}..</h2>}
                            </div>
                            <div className='flex items-center gap-1' onClick={() => navigate(`/review/${id}`)}>
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
                                <label htmlFor='sched' className='text-base text-[#646464]'>{selectedDate ? selectedDate.toDateString() : "Schedule"}</label>
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

                        <MealsCategoriesAndItems categoryItems={selectedResturant?.store?.products} />

                        {/* Delivered By Feres Popup*/}

                        {pickupPop ? <PickupPopup /> : null}

                        {deliverPop ? <DeliveredPopup /> : null}

                        {/* Add To Basket Button */}

                        {/* <NewOrderPopUp /> */}

                        {foodSearch ? <FoodSearchPopUp itemFoodPopup={selectedFood} /> : null}


                        {/* Food Popup */}

                        {successPop && <SuccessPopup image={assets.success_img} title={"Get 30% off everything up to EBT 150.00"} desc={"The maximum discount for preorders is EBT 150, usable once, and valid until February 22, 2024."} />}

                        {sharePop ? <SharePopUp /> : null}

                        <AddBi items={items} cartResponse={cartItemData} loading={loading} total_item_count={cartItemData?.items_quantity} total_cart_price={cartItemData?.total_cart_price} />

                        {/* {foodPopup ? <FoodPopUp /> : null} */}

                        {/* Date Picker Modal */}
                        {isDatePickerOpen && (
                            <div className="modal fixed top-0 left-0 w-full h-full bg-gray-800 z-[100] bg-opacity-50 flex justify-center items-center">
                                <div className="modal-content bg-white rounded-lg flex flex-col">
                                    <div className='flex-[2] bg-[#0AB247] p-4 text-white rounded-t-lg w-[100%]'>
                                        <h4 className='bold text-16'>{formattedDate.year}</h4>
                                        <h2>{`${formattedDate.day}, ${formattedDate.monthDay}`}</h2>
                                    </div>
                                    <div className='flex-[4] p-5'>
                                        <DatePicker
                                            selected={selectedDate}
                                            onChange={handleDateChange}
                                            inline
                                            minDate={new Date()}  /* Disable previous dates */
                                        />
                                        <div className="flex justify-end gap-3 mt-2 mr-4">
                                            <button onClick={() => setIsDatePickerOpen(false)} className="text-black rounded">Cancel</button>
                                            <button onClick={handleDateConfirm} className="text-green-500 rounded">OK</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Time Picker Modal */}
                        {isTimePickerOpen && (
                            <CustomTimePicker onTimeConfirm={handleTimeConfirm}
                                onClose={handleTimeClose} />
                        )}
                    </div>
                </div> : <div><Food itemFoodPopup={selectedFood} /></div>}
            </div>

            {firstGroup && <GroupOrder1 setIsOpen={setFirstGroup} onEdit={() => {
                setFirstGroup(false)
                setOrdDeadline(true)
            }} onQr={() => {
                setFirstGroup(false)
                setShowQr(true)
            }} onInvite={() => {
                setFirstGroup(false)
                setInviteShare(true)
            }} />}

            {ordDeadline && <OrderDeadline selectedDate={selectedDate} handleSetClick={handleDateClick} time={deadline} setTime={setDeadline} onCancel={() => {
                setOrdDeadline(false)
            }} onConfirm={() => {
                setOrdDeadline(false)
                setFirstGroup(true)
            }} />}

            {showQr && <JoinQrPopup onCancel={() => setShowQr(false)} />}


            {inviteShare && <InviteSharePopup onCancel={() => setInviteShare(false)} />}

            {/* <TimeUpPopup /> */}
            {/* <DelByHostPopup /> */}
        </>
    )
}

export default Restaurant
