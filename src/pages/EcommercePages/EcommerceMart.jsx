import React, { useEffect, useState } from 'react'
import { assets } from '../../assets/assets'
import Container from '../../components/Container';
import { Link, useNavigate, useParams } from 'react-router-dom';
import MartCategoryCard from './MartCategoryCard';
import EcommerceAddBasket from './EcommerceAddBasket';
import { usePost } from '../../servies/usePost';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedResturant } from '../../redux/slices/selectedResturantSlice';
import { setCartItemData } from '../../redux/slices/cartDetail';

const EcommerceMart = () => {

    const dispatch = useDispatch()
    const { id } = useParams()
    const [scrolled, setScrolled] = useState(false)
    const navigate = useNavigate();
    const loginUser = useSelector((state) => state.userAuth.user)
    const cartItemData = useSelector((state) => state.cartDetails.cartItemData);


    const [cartInfo, setCartInfo] = useState(null)

    const [products, setProducts] = useState(null)
    const [storeInfo, setStoreInfo] = useState(null)

    const { post, loading, error } = usePost();
    const fetchProductsAndStoreInfo = async () => {
        try {
            const productsEndpoint = '/api/e-commerce/get_products_in_category';
            const productsData = await post(productsEndpoint, { category_id: id });
            setProducts(productsData);

            if (productsData?.products?.length > 0) {
                const storeEndpoint = '/api/food/get_items_by_store_id';
                const storeData = await post(storeEndpoint, { store_id: productsData.products[0].store_id });
                setStoreInfo(storeData);
                dispatch(setSelectedResturant(storeData))
                console.log(storeData);
            } else {
                console.log('No products available');
            }
        } catch (error) {
            console.error(error.message);
        }
    };

    const getCart = async () => {
        const endpoint = '/api/user/get_cart';
        try {
            const data = await post(endpoint, {
                cart_unique_token: loginUser.cart_unique_token
            })
            setCartInfo(data)
            dispatch(setCartItemData(data.cart))
        } catch (error) {
            console.log(error.message)
        }
    }

    const findCartItemQuantity = (item) => {
        // Find matching item by _id or image_url
        const cartItem = cartItemData?.stores[0]?.items?.find(
            (cartItem) =>
                cartItem._id === item._id
        )
        return cartItem ? cartItem.quantity : null
    }

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
            window.removeEventListener('scroll', handleScroll)
        };
    }, []);


    useEffect(() => {
        fetchProductsAndStoreInfo()
        getCart()
        console.log(cartItemData)
    }, [])
    return (
        <div className='pb-28'>
            {loading && <div className='text-center'>Loading...</div>}
            {error && <div>An Error Occurred</div>}
            {storeInfo && storeInfo?.success && <>
                <div className='relative'>
                    <img src={storeInfo?.store?.cover_image_url ? storeInfo?.store?.cover_image_url : assets.cover_placeholder} alt="" />
                </div>
                <div className={`flex items-center justify-between px-4 py-6 fixed top-0 w-full transition-all z-40 ${scrolled ? 'bg-white' : 'bg-transparent'}`}>
                    <button onClick={() => navigate(-1)} className={`p-3 rounded-xl ${scrolled ? 'bg-transparent border border-[#EEEEEE]' : 'bg-[#06060666]'}`}>
                        <img src={assets.arrow_left} alt="" className={`${scrolled ? 'invert' : ''}`} />
                    </button>
                    <div className='flex items-center gap-2'>
                        <button className={`p-3 rounded-xl ${scrolled ? 'bg-transparent border border-[#EEEEEE]' : 'bg-[#06060666]'}`}>
                            <img src={assets.share} alt="" className={`${scrolled ? 'invert' : ''}`} />
                        </button>
                        <button className={`p-3 rounded-xl ${scrolled ? 'bg-transparent border border-[#EEEEEE]' : 'bg-[#06060666]'}`}>
                            <img src={assets.search} alt="" className={`${!scrolled ? 'invert' : ''}`} />
                        </button>
                    </div>

                </div>
            </>}



            {/* Title */}
            <div className='bg-white'>
                {loading && <div>Loading...</div>}
                {error && <div>An Error Occurred</div>}
                {storeInfo && storeInfo?.success && <>
                    <div className="flex items-center justify-between pt-5 px-4">
                        <div className='flex items-center gap-2'>
                            <img src={storeInfo && storeInfo?.store?.image_url && storeInfo?.store?.image_url} alt="" className='object-cover' width={"23px"} height={"16px"} />
                            <h2 className={`transition-all text-xl font-bold text-[#2F2F3F] whitespace-nowrap ${scrolled ? 'fixed left-20 top-9 z-50' : ''}`}>{storeInfo?.store?.name.slice(0, 19)}</h2>
                        </div>
                        <div className='flex items-center gap-1' onClick={() => navigate(`/review/${storeInfo?.store?._id}`)}>
                            <img src={assets.star} alt="" />
                            <Link to={`/review/${storeInfo?.store?._id}`} className='text-base font-normal whitespace-nowrap'>{storeInfo?.store?.user_rate} ({storeInfo?.store?.user_rate_count} reviews)</Link>
                        </div>
                    </div>

                    {/* <Container className='mt-3'>
                        <p className='text-[#979797]'>Grocery, convenience store, supermarket</p>
                    </Container> */}

                    {/* Delivery Details */}
                    <div className='mt-7 px-4'>
                        <div className='flex items-center gap-2 mb-4'>
                            <img src={assets.clock_green} alt="" />
                            <label className='text-base text-[#1E1E1E]'>{storeInfo?.store?.delivery_time} minutes</label>

                        </div>
                        <div className='flex items-center gap-2'>
                            <img src={assets.location_green} alt="" />
                            <p className='text-base text-[#1E1E1E]'>{storeInfo?.store?.address} {storeInfo?.store?.store_Address}</p>
                        </div>
                    </div>
                </>}



                {loading && <div>Loading...</div>}
                {error && <div>An Error Occurred</div>}
                {products && products?.error_code && <div className='my-8 text-center'>No Products Available</div>}
                <>
                    <div className='flex items-center justify-between px-4 my-7'>
                        <h3 className='text-[18px] font-medium'>Categories</h3>
                        <Link to={`/ecommerce/mart/categories/${id}`} className='text-[#999999] font-medium'>View all</Link>
                    </div>
                    <div className='flex items-center gap-4 overflow-auto no-scrollbar'>
                        {products && products?.products.map(product => (
                            <div className='flex items-center gap-4'>
                                <MartCategoryCard category={product} />
                            </div>
                        ))}
                    </div>
                </>

                {products && products?.products.map(product => (
                    <>
                        <div className='flex items-center justify-between px-4 my-7'>
                            <h3 className='text-[18px] font-medium'>{product?.name.split(" ")[0]}</h3>
                            <Link className='text-[#999999] font-medium'>View all</Link>
                        </div>


                        <Container className={'flex items-center gap-4 overflow-auto no-scrollbar'}>
                            {/* <MartItemCard id={item?._id} cart={cartInfo?.cart} onClick={() => navigate(`/ecommerce/mart/martproduct/item/${item?._id}`)} key={item?._id} img={item?.image_url[0] && item?.image_url[0]} name={item?.name} price={item?.price} /> */}
                            {product?.no_items.map(item => (
                                <>
                                    <div key={item?._id} onClick={() => navigate(`/ecommerce/mart/martproduct/item/${item?._id}`)}>
                                        <div className='bg-[#F1F1F1] rounded-2xl w-[135px] h-[149px] relative flex items-center justify-center'>
                                            <img src={item?.image_url[0] && item?.image_url[0]} alt="" />
                                            <div className='bg-white p-3 rounded-full w-max absolute bottom-3 right-1'>
                                                {findCartItemQuantity(item) > 0 ? (
                                                    <span className="text-[#0AB247] font-bold">{findCartItemQuantity(item)}</span>
                                                ) : (
                                                    null
                                                )}
                                            </div>
                                        </div>
                                        <div className='my-2'>
                                            <p className='text-sm font-medium text-[#2F2F3F] w-[135px] whitespace-nowrap'>{item?.name.split(" ").slice(0, 3).join(" ")}</p>
                                            <p className='text-[#0AB247] font-bold text-sm'>EBT {item?.price}</p>
                                        </div>
                                    </div>
                                </>
                            ))}
                        </Container>
                    </>
                ))}



                {/* <div className='flex items-center justify-between px-4 my-7'>
                    <h3 className='text-[18px] font-medium'>Trending items </h3>
                    <Link className='text-[#999999] font-medium'>View all</Link>
                </div>

                <Container className={'flex items-center gap-4 overflow-auto no-scrollbar'}>
                    {trendingItems?.map(item => (
                        <MartTrendingCard key={item.id} img={item.img} name={item.name} oldPrice={item.oldPrice} price={item.price} />
                    ))}
                </Container> */}


                {/* <div className='flex items-center justify-between px-4 my-7'>
                    <h3 className='text-[18px] font-medium'>Top weekly items</h3>
                    <Link className='text-[#999999] font-medium'>View all</Link>
                </div>

                <Container className={'flex items-center gap-4 overflow-auto no-scrollbar'}>
                    {weeklyItems?.map(item => (
                        <MartItemCard key={item.id} img={item.img} name={item.name} price={item.price} />
                    ))}
                </Container> */}
            </div>


            {/* Add To Basket */}
            {cartItemData && <EcommerceAddBasket cart_price={cartItemData?.total_cart_price} cart_quantity={cartItemData?.total_item_count} to={`/ecommerce/cart/${id}`} />}

        </div>
    )
}

export default EcommerceMart

//     < img
// src = { assets.add_green }
// alt = ""
// onClick = {(e) => {
//     e.stopPropagation(); // Prevent parent div click
//     handleAddItem(item);
// }}
//                                                     />