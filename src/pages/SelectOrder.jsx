import React from 'react'
import SelectOrderNav from '../components/SelectOrderComps/SelectOrderNav'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import SelectOrderCards from '../components/SelectOrderComps/SelectOrderCards'

const SelectOrder = () => {
    const navigate = useNavigate();
    return (
        <div>
            <SelectOrderNav />
            {/* Timeline */}
            <div>
                <h1 className='text-[#2F2F3F] text-lg font-medium px-3 my-7'>January 2024</h1>
                <SelectOrderCards img={assets.pie} name={"MCDonald order"} desc={"24 Jan 2024, 2:24 PM"} successStat={true} />
                <SelectOrderCards img={assets.pie} name={"Abenezer mini market order"} desc={"24 Jan 2024, 2:24 PM"} successStat={false} />
                <SelectOrderCards img={assets.pie} name={"KFC Eastlight order"} desc={"24 Jan 2024, 2:24 PM"} successStat={false} />
            </div>
        </div>
    )
}

export default SelectOrder