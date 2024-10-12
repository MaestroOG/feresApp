import React, { useEffect, useState } from 'react'
import { assets } from '../../assets/assets'
import { useParams } from 'react-router-dom';

const CategoryMid = () => {
    const { id } = useParams();
    const [categories, setCategories] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [activeButtons, setActiveButtons] = useState({});

    // Handle button click to toggle its active state
    const handleButtonClick = (id) => {
        setActiveButtons((prevState) => ({
            ...prevState,
            [id]: !prevState[id], // Toggle the active state for the clicked button
        }));
    };
    const fetchCategories = async () => {
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

            setCategories(data)
            console.log(categories);
            setIsLoading(false);


        } catch (error) {
            console.error('Fetch error: ', error);
        }
    }

    useEffect(() => {
        fetchCategories();
        // console.log(Object.keys(activeButtons).length === 0 && activeButtons.constructor === Object)
    }, [])
    return (
        <div className='px-4 mt-6'>
            <h3 className='text-[#767578] text-lg'>Choose one out of these categories and apply</h3>
            {Object.keys(activeButtons).length === 0 && activeButtons.constructor === Object ? <div className='bg-[#E92D530F] my-4 flex items-center gap-2 rounded-[13px] p-[16px]'>
                <img src={assets.alert_red} alt="" />
                <p className='text-[#E92D53] font-medium'>Choose one out those categories and apply</p>
            </div> : null}
            <div className='mt-4'>
                {isLoading ? <div className='text-center'>Loading...</div> : categories && categories.store.products.map((product) => (
                    <button onClick={() => handleButtonClick(product._id)} key={product._id} className={`${activeButtons[product._id] ? 'bg-[#0AB247] text-white' : ''} font-medium text-base border border-[#EEEEEE] rounded-[30px] px-[15px] py-[10px] w-max mr-3 my-2`}>{product.name}</button>
                ))}
            </div>
            {/* ${activeButton === index ? 'bg-[#0AB247] text-white' : ''}
            grid grid-cols-3 items-center gap-[10px] mt-3 w-5/6 */}
        </div>
    )
}

export default CategoryMid