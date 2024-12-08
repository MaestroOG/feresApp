import React, { useContext, useEffect, useRef, useState } from 'react'
import { assets } from '../../assets/assets'
import { FeresContext } from '../../context/FeresContext'
import { usePostRequest } from '../../servies/usePostRequest'
import { useDispatch, useSelector } from 'react-redux'
import { addItem } from '../../redux/slices/cartSlice'
import { setCartItemData } from '../../redux/slices/cartDetail'
import { FoodOptionCb } from '../FoodComps/FoodOptionCb'
import ExtraNotePopUp from '../FoodComps/ExtraNotePopUp'
import FoodOptions from '../FoodComps/FoodOptions'
import { usePost } from '../../servies/usePost'
import { setShowModel } from '../../redux/slices/modelToggleSlice'

const FoodPopUp = ({ img, text, itemFoodPopup }) => {

    const [fvrt, setFvrt] = useState(null)
    const loginUser = useSelector((state) => state.userAuth.user);
    const [note, setNote] = useState('')
    const [details, setDetails] = useState(null)
    const { post } = usePost()
    const closeRef = useRef()
    const handleMinusClick = () => {
        if (orderCount > 1) {
            setOrderCount(orderCount - 1)
        }
    }

    const handlePlusClick = () => {
        setOrderCount(orderCount + 1)
    }

    const getDetail = async () => {
        try {
            const data = await post('/get_item_modifier_by_item_id', {
                item_id: itemFoodPopup._id,
            })

            setDetails(data)
        } catch (error) {
            console.error(error.message)
        }
    }

    const toggleFavorite = async () => {
        try {
            const data = await post('/api/user/toggle_favourite_items', {
                "user_id": loginUser?.user_id,
                "item_id": itemFoodPopup?._id,
                "store_id": itemFoodPopup?.store_id
            })
            setFvrt(data)
        } catch (error) {
            console.log(error.message);

        }
    }




    const handleAddItem = async () => {
        closeRef.current.click()
        if (itemFoodPopup) {
            const requestBody = {
                cart_unique_token: loginUser.cart_unique_token,
                user_id: loginUser.user_id,
                server_token: loginUser.token,
                device_type: loginUser.device_type,
                destination: {
                    address: "2Q29+PV, አዲስ አበባ",
                    location: {
                        lat: 9.001826571711009,
                        lng: 38.76956474035978
                    }
                },
                item: {
                    _id: itemFoodPopup._id,
                    name: itemFoodPopup.name,
                    price: itemFoodPopup.price,
                    quantity: 1,
                    specification: itemFoodPopup.specifications || [],
                    unique_id: itemFoodPopup.unique_id,
                    product_id: itemFoodPopup.product_id,
                    image_url: itemFoodPopup.image_url ? itemFoodPopup.image_url[0] : "",
                    is_promotion_available: itemFoodPopup.is_promotion_available,
                    order_item_description: itemFoodPopup.details || "",
                    promotion: itemFoodPopup.promotion || 0,
                    total_quantity: itemFoodPopup.total_quantity,
                    sales_commission: 0,
                    shipment_commission: 0,
                    total_item_price: itemFoodPopup.price,
                    store_id: itemFoodPopup.store_id,
                },
            };
            postRequest('/api/user/new_add_item_in_cart', requestBody)
            // Dispatch both item and its quantity
            dispatch(addItem({ ...itemFoodPopup, quantity: orderCount }))
            const userDetailsResponse = await post('/api/user/get_cart', {
                cart_unique_token: loginUser.cart_unique_token,
            })
            dispatch(setCartItemData(userDetailsResponse.cart));
        }
        dispatch(setShowModel(false))
    }

    console.log(itemFoodPopup, "placing order");

    useEffect(() => {
        getDetail()
    }, [])

    // const { checkedItems } = useContext(FeresContext)
    const { loading, error, response, postRequest } = usePostRequest();
    const dispatch = useDispatch()
    const [orderCount, setOrderCount] = useState(1)
    const [totalSpecPrice, setTotalSpecPrice] = useState(0)
    const { foodPopup, setFoodPopup, foodSelected, setFoodSelected, checkedItems } = useContext(FeresContext)
    const [updatedModifiers, setUpdatedModifiers] = useState([])
    const [modifiersSum, setModifiersSum] = useState(0)

    useEffect(() => {
        const modifiers = details?.data[0]?.sub_modifiers || [];

        let totalSum = 0;
        let matchedModifiers = [];

        const updatedModifiers = modifiers.map((modifier) => {
            // Update `default` based on the value in `checkedItems`
            if (checkedItems[modifier._id]) {
                modifier.default = true;
                totalSum += modifier.price; // Add price only if default is true
                matchedModifiers.push(modifier);
            } else {
                modifier.default = false; // Ensure default is false if not checked
            }
            return modifier;
        });
        setUpdatedModifiers(updatedModifiers)
        setModifiersSum(totalSum)
        console.log("Total Sum:", totalSum);

    }, [checkedItems, details]);

    const handleShare = () => {
        const shareData = {
            title: 'Check this out!',
            text: 'Here is an interesting link for you:',
            url: 'https://example.com',
        };
    
        if (navigator.share) {
            navigator
                .share(shareData)
                .then(() => console.log('Successfully shared'))
                .catch((error) => console.error('Error sharing:', error));
        } else {
            navigator.clipboard.writeText(shareData.url)
                .then(() => alert('Link copied to clipboard!'))
                .catch((error) => console.error('Error copying link:', error));
        }
    };

    return (
        <div>
    {/* Background Overlay */}
    <div
        className={`${foodPopup || !foodSelected ? '' : 'hidden'} fixed inset-0 bg-black bg-opacity-50 z-[1000]`}
        onClick={() => setFoodPopup(false)}
    ></div>

    {/* Popup Component */}
    <div
        className={`${foodPopup || !foodSelected ? '' : 'hidden'} fixed bottom-0 left-0 right-0 z-[1005] bg-[grey] h-[85vh] flex flex-col rounded-tl-[16px] rounded-tr-[16px]`}
    >
        <div
            className="relative flex-[3] rounded-tl-[16px] rounded-tr-[16px]"
            style={{
                backgroundImage: `url(${itemFoodPopup?.image_url})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
            }}
        >
            <div className='w-full flex justify-between p-6'>
                <div>
            <img
                ref={closeRef}
                src={assets.cancel_icon}
                alt=""
                className="bg-white rounded-full"
                onClick={() => setFoodPopup(false)}
            />
            </div>
            <div className='flex h-fit gap-6'>
            <button className="bg-[#FFFFFF33] p-[10px] rounded-[10px] flex items-center justify-center" onClick={handleShare}>
                <img src={'/share-icon.svg'} />
            </button>
            <button
                onClick={() => toggleFavorite()}
                className="bg-[#FFFFFF33] p-[10px] rounded-[10px] flex items-center justify-center"
            >
                <img
                    src={
                        fvrt && fvrt?.message.startsWith('Item added')
                            ? assets.favourite_active
                            : assets.heart_icon
                    }
                    alt=""
                    width={'30px'}
                />
            </button>
            </div>
            </div>
        </div>
        <div className="bg-[#eaeaea] flex-[1]">
            <div className='px-4 py-4 rounded-bl-[16px] rounded-br-[16px] bg-[white]'>
            <h2 className="text-[#2F2F3F] text-xl font-bold mb-2">
                {itemFoodPopup?.name}
            </h2>
            <p className="text-[#767578] text-base">{itemFoodPopup?.details}</p>
            <div className="flex items-center gap-2 mt-3">
                <p className="text-[#9E9E9E] line-through text-base">ETB 170</p>
                <p className="text-[#0AB247] font-bold text-base">
                    {itemFoodPopup?.price}
                </p>
            </div></div>

            <div className='rounded-tl-[16px] rounded-tr-[16px] p-4 bg-white mt-[15px]'>
            <textarea
                className="mt-6 mb-5 text-base w-[100%] focus:outline-none"
                maxLength={100}
                style={{ maxHeight: '100px' }}
                placeholder="Add a note"
                value={note}
                onChange={(e) => setNote(e.target.value)}
            />
            <FoodOptions options={details} />
            <div className="flex items-center w-full justify-between" >
                <button className="border border-[#EEEEEE] py-[12px] px-[16px] rounded-3xl flex items-center justify-between w-[45%]">
                    <img
                        src={assets.minus_sign}
                        alt=""
                        onClick={handleMinusClick}
                    />
                    <p>{orderCount}</p>
                    <img
                        src={assets.plus_sign}
                        alt=""
                        onClick={handlePlusClick}
                    />
                </button>
                <button
                    className="bg-[#0AB247] py-[12px] px-[16px] rounded-3xl text-white w-[50%]"
                    onClick={() => {
                        handleAddItem();
                        setFoodSelected(text);
                    }}
                >
                    {`Add EBT ${
                        orderCount === 1
                            ? itemFoodPopup?.price
                            : (
                                  (modifiersSum + itemFoodPopup?.price) *
                                  orderCount
                              ).toFixed(2)
                    }`}
                </button>
            </div>
            </div>
        </div>
    </div>
</div>

    )
}

export default FoodPopUp