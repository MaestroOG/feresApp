import React, { useEffect, useRef } from 'react'
import { assets } from '../assets/assets'
import { json, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { usePost } from '../servies/usePost'
import { loginUser } from '../redux/slices/userAuthSlice'
import { setCartItemData , setCartCount } from '../redux/slices/cartDetail'

const Navbar = () => {
    const { post } = usePost()
    const dispatch = useDispatch()
    const userDetail = useSelector((state) => state.userAuth.user)
    const cartItemData = useSelector((state) => state.cartDetails.cartItemData)
    const cartCount = useSelector((state) => state.cartDetails.cartCount)
    const last_location = localStorage.getItem("currentAddress") 
    const navigate = useNavigate()
    const initialized = useRef(false) // Ref to track if API call was made
    const store_id = cartItemData?.stores[0]?._id

    console.log(cartCount,'cart count ');
    

    useEffect(() => {
        const fetchUserDetail = async () => {
            try {
                let storedUser = userDetail
                let cartUniqueToken

                // If userDetail is not in Redux, attempt to get it from localStorage
                if (!storedUser) {
                    const storedUserData = localStorage.getItem('userData')
                    if (storedUserData) {
                        storedUser = JSON.parse(storedUserData)
                        dispatch(loginUser(storedUser))
                    }
                }

                // Ensure cart_unique_token is set, either from Redux or localStorage
                cartUniqueToken = storedUser?.cart_unique_token || localStorage.getItem('cart_unique_token')

                // Only proceed if we haven't initialized the fetch already
                if (cartUniqueToken && !initialized.current) {
                    initialized.current = true // Set flag to true after first API call

                    // Fetch updated user details or cart details from API
                    const userDetailsResponse = await post('/api/user/get_cart', {
                        cart_unique_token: cartUniqueToken,
                    })
                    dispatch(setCartItemData(userDetailsResponse.cart))
                    const itemCount = userDetailsResponse?.cart?.stores[0]?.items.filter((item)=>{
                            return item.quantity > 0
                    })
                    dispatch(setCartCount(itemCount?.length))
                    localStorage.setItem("cartCount", JSON.stringify(cartCount))
                    
                }
            } catch (error) {
                console.error("Error fetching user details:", error)
            }
        }

        // Call fetch function if it hasn’t been initialized
        if (!initialized.current) {
            fetchUserDetail()
        }
    }, [userDetail, dispatch, post])

    return (
        <div className='w-full flex items-center justify-between pt-6 px-2 sticky top-0 bg-white z-[70] '>
            {/* Top Bar */}
            <button>
                <img onClick={() => navigate(-1)} src={assets.arrow_left_02} className="border border-[#EEEEEE] p-2 rounded-lg" />
            </button>

            <div className='flex flex-col items-center justify-center'>
                <h3 className='text-sm font-medium'>Delivery to</h3>
                <div className='flex gap-2 items-center'>
                    <h3 className='text-[#0AB247] text-sm font-medium' onClick={() => { navigate('/selectlocation') }}>
                        {last_location?.split(" ")?.slice(0, 4)?.join(" ") || "select location"}
                    </h3>
                    <img src={assets.down_arrow} />
                </div>
            </div>

            <button className='relative'>
                <img src={assets.shopping_basket} className="border border-[#EEEEEE] p-2 rounded-lg" onClick={() => navigate(`/cart/${store_id}`)} />
                <p className='absolute text-[10px] text-white bg-[#E92D53] font-bold px-1 rounded-full top-[18%] left-[54%]'>{cartCount}</p>
            </button>
        </div>
    )
}

export default Navbar
