import React from 'react'
import { assets } from '../../assets/assets'
import { useDispatch } from 'react-redux'
import { setShowModel } from '../../redux/slices/modelToggleSlice'
import { setSelectedFood } from '../../redux/slices/selectedFoodSlice'
import { addItem } from '../../redux/slices/cartSlice'
import { usePost } from '../../servies/usePost'

const MenuList = ({ products }) => {
    const { post } = usePost()
    const dispatch = useDispatch()

    const handleAddItem = async (item) => {

        const requestBody = {
            cart_unique_token: "i5H3Gacl5CPbcOSY4Wip",
            user_id: "665ff60f83157cfd6e1b0b48",
            server_token: "co47wswKut7emZp2qOUWdEWVDbZvVTDl",
            device_type: "android",
            destination: {
                address: "2Q29+PV, አዲስ አበባ",
                location: {
                    lat: 9.001826571711009,
                    lng: 38.76956474035978
                }
            },
            item: {
                _id: item._id,
                name: item.name,
                price: item.price,
                quantity: orderCount,
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
                total_item_price: item.price * orderCount,
                store_id: item.store_id,
            }
        };
        const data = await post('/api/user/new_add_item_in_cart', requestBody)

    }

    return (
        <>
            <div className='bg-[#FFD335] p-2 rounded-lg text-[#2F2F3F] text-xs font-medium w-max mt-6 mb-1'>Trending</div>
            {products?.map((item) => <div>
                <div className='my-4'>
                    <div className='flex items-center justify-between' onClick={() => {
                        dispatch(setShowModel(true))
                        dispatch(setSelectedFood(item))
                    }}>
                        <div className='flex flex-col gap-1 flex-[3]'>
                            <h2 className='text-[#2F2F3F] text-sm font-medium'>{item?.name}</h2>
                            <p className='text-[#AEAEAE] font-normal text-sm w-[90%]'>{item?.details}</p>
                            <div className='flex items-center gap-2'>
                                <p className='text-[#AEAEAE] text-sm'>{`ETB 170`}</p>
                                <p className='text-[#0AB247] text-sm font-bold'>{`ETB ${item?.price}`}</p>
                            </div>
                        </div>
                        <div className='relative flex items-end pb-3 justify-center flex-[1] h-[117px] rounded-lg' style={{ backgroundImage: `url(${item?.image_url[0]})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
                            <button className='border border-[#0AB247] bg-white p-2 w-[70px] rounded-full text-[#0AB247] text-sm font-medium' onClick={(e) => {
                                e.stopPropagation()
                                handleAddItem(item)

                            }}>Add</button>
                        </div>
                    </div>
                </div>
                <hr className='my-3' />
            </div>)}
        </>
    )
}

export default MenuList