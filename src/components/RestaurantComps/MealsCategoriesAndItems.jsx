import React, { useContext, useState, useEffect, useRef } from 'react';
import { assets } from '../../assets/assets';
import MenuList from './MenuList';
import { FeresContext } from '../../context/FeresContext';
import TableList from './TableList';
import { usePost } from '../../servies/usePost';
import { setCartItemData } from '../../redux/slices/cartDetail';
import { useSelector , useDispatch} from 'react-redux';


const MealsCategoriesAndItems = ({ categoryItems, store_id }) => {
    const dispatch = useDispatch()
    const { tableList, setTableList } = useContext(FeresContext);
    const cartItemData = useSelector((state) => state.cartDetails.cartItemData)
    const loginUser = useSelector((state) => state.userAuth.user)
    const [scrollActive, setScrollActive] = useState(false);
    const [activeButtonIndex, setActiveButtonIndex] = useState(0);
    const headingRefs = useRef([]);
    const { post } = usePost();
    const [trendingItems, setTrendingItems] = useState([]);

    // Handle IntersectionObserver to sync scrolling
    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '-50% 0px -50% 0px', // Detect when heading is near the center
            threshold: 0,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                const index = headingRefs.current.indexOf(entry.target);
                if (entry.isIntersecting) {
                    setActiveButtonIndex(index);

                    // Scroll the button bar to make the active button visible
                    document.querySelector('.category-buttons-container')?.scrollTo({
                        left: document.querySelectorAll('.category-buttons-container button')[index].offsetLeft - 20,
                        behavior: 'smooth',
                    });
                }
            });
        }, observerOptions);

        headingRefs.current.forEach((heading) => {
            if (heading) observer.observe(heading);
        });

        return () => {
            headingRefs.current.forEach((heading) => {
                if (heading) observer.unobserve(heading);
            });
        };
    }, []);

    // Fetch trending items
    useEffect(() => {
        const getTrendingItems = async () => {
            const data = await post('/api/food/get_trending_items', { store_id });
            setTrendingItems(data.trending_items);
        };

        if (store_id) {
            getTrendingItems();
        }
    }, [store_id]);

    // Handle button click
    const handleButtonClick = (index) => {
        headingRefs.current[index]?.scrollIntoView({
            behavior: 'smooth',
            block: 'start', // Align the top of the heading to the top of the viewport
        });
        setActiveButtonIndex(index);

        // Scroll the button bar to make the active button visible
        document.querySelector('.category-buttons-container')?.scrollTo({
            left: document.querySelectorAll('.category-buttons-container button')[index].offsetLeft - 20,
            behavior: 'smooth',
        });
    };

    const handleAddItem = async (item) => {
        const requestBody = {
            cart_unique_token: loginUser.cart_unique_token,
            user_id: loginUser.user_id,
            // user_id: "621fc0e0c2545594abfd644e",
            server_token: loginUser.token,
            // server_token: "0Iqb69j2rP7x4yY7ZGeRst5pfnyp8vfZ",
            device_type: loginUser.device_type,
            destination: {
                address: "",
                location: {
                    lat: 9.001826571711009,
                    lng: 38.76956474035978
                }
            },
            item: {
                _id: item._id,
                name: item.name,
                price: item.price,
                quantity: 1,
                specification: item.specifications || [],
                unique_id: item.unique_id,
                product_id: item.product_id,
                image_url: item.image_url ? item.image_url[0] : "",
                is_promotion_available: item.is_promotion_available,
                order_item_description: item.details || "",
                promotion: item.promotion || 0,
                total_quantity: item.total_quantity,
                sales_commission: 0,
                shipment_commission: 0,
                total_item_price: item.price * 1,
                store_id: item.store_id,
            }
        }


        console.log(requestBody, "here is a data of unexpected cart ");

        const data = await post('/api/user/new_add_item_in_cart', requestBody)
        const userDetailsResponse = await post('/api/user/get_cart', {
            cart_unique_token: loginUser.cart_unique_token,
        })
        dispatch(setCartItemData(userDetailsResponse.cart))
    }

    const findCartItemQuantity = (item) => {
        const cartItem = cartItemData?.stores[0]?.items?.find(
            (cartItem) => cartItem._id === item._id
        );
        return cartItem ? cartItem.quantity : null;
    };

    return (
        <div className='relative'>
            {/* Table Or List Row */}
            <div className='px-4 pt-9 pb-4 flex items-center justify-between'>
                <h2 className='text-[#2F2F3F] text-xl font-medium'>Meals Categories</h2>
                <div className='border border-[#EEEEEE] flex items-center rounded-2xl'>
                    <div
                        className={`${tableList ? 'bg-[#EBF9EE]' : ''} p-3 rounded-tl-2xl rounded-bl-2xl transition-all`}
                        onClick={() => setTableList(true)}
                    >
                        <img
                            src={tableList ? assets.dashboard_square_green : assets.dashboard_square_black}
                            alt=""
                            className='w-full transition-all'
                        />
                    </div>
                    <div
                        className={`${!tableList ? 'bg-[#EBF9EE]' : ''} p-3 rounded-tr-2xl rounded-br-2xl transition-all`}
                        onClick={() => setTableList(false)}
                    >
                        <img
                            src={!tableList ? assets.list : assets.list_black}
                            alt=""
                            className='w-full transition-all'
                        />
                    </div>
                </div>
            </div>

            {/* Category Buttons */}
            <div className='px-3 flex items-center gap-4 overflow-auto no-scrollbar sticky top-24 z-20 bg-white pb-3 category-buttons-container'>
                {categoryItems?.map((button, index) => (
                    <button
                        key={index}
                        className={`${activeButtonIndex === index ? 'active' : 'inactive'
                            } rounded-full p-3 whitespace-nowrap text-lg`}
                        onClick={() => handleButtonClick(index)}
                    >
                        {button?.name}
                    </button>
                ))}
            </div>

            {/* Trending Items Row */}
            <div className='px-4 mt-9 flex items-center justify-between'>
                <h2 className='text-[#2F2F3F] text-xl font-bold'>Most Trending</h2>
                <div className='flex items-center gap-1'>
                    <p className='text-[#979797] font-medium'>View all</p>
                    <img src={assets.arrow_right} alt="" className='w-6' />
                </div>
            </div>

             {/* Trending Items Row */}
             <div className='px-4 my-7 flex items-center overflow-auto no-scrollbar flex-shrink-0 z-10'>
                <div className='flex'>
                    {trendingItems?.map((item) => (
                        <div key={item?.product_id} className='min-w-[170px]'>
                            <div className='relative w-max'>
                                <img
                                    src={item?.image_url[0]}
                                    alt=""
                                    className='w-[155px] h-[144px] rounded-[13px] object-cover'
                                />
                                <div className='bg-[#0AB247] rounded-lg p-2 text-xs text-white absolute top-2 left-2'>-35%</div>
                                <div className='rounded-full bg-white p-2 absolute bottom-2 right-2'>
                                    {findCartItemQuantity(item) ? (
                                        <div className='flex items-center justify-center rounded-full h-[20px] w-[20px]'>
                                            <span className='text-sm font-bold text-[#0AB247]'>
                                                {findCartItemQuantity(item)}
                                            </span>
                                        </div>
                                    ) : (
                                        <img
                                            src={assets.add_green}
                                            alt="Add"
                                            onClick={() => handleAddItem(item)}
                                        />
                                    )}
                                </div>
                            </div>
                            <div className='my-1'>
                                <h4 className='text-[#2F2F3F] text-sm w-40 mb-1'>{item?.name}</h4>
                                <div className='flex items-center gap-2'>
                                    <p className='text-[#AEAEAE] text-sm'>ETB 170</p>
                                    <p className='text-[#0AB247] text-sm font-bold'>{`ETB ${item?.price}`}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Items Menu Table Or List */}
            <div className='px-4 mt-6'>
                {!tableList
                    ? categoryItems?.map((cateItems, index) => (
                        <div className='mt-3' key={index}>
                            <h3
                                ref={(el) => (headingRefs.current[index] = el)}
                                className='heading-class text-xl font-bold text-[#2F2F3F]'
                            >
                                {cateItems?.name}
                            </h3>
                            <MenuList
                                key={'item.id'}
                                img={'item.img'}
                                name={'item.name'}
                                desc={'item.desc'}
                                products={cateItems?.items}
                            />
                        </div>
                    ))
                    : categoryItems.map((cateItems, index) => (
                        <div key={index} className='my-5'>
                            <h3
                                ref={(el) => (headingRefs.current[index] = el)}
                                className='heading-class text-xl font-bold text-[#2F2F3F]'
                            >
                                {cateItems?.name}
                            </h3>
                            <div className='flex items-center gap-2 overflow-auto no-scrollbar flex-shrink-0 my-7'>
                                <TableList products={cateItems?.items} />
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default MealsCategoriesAndItems;
