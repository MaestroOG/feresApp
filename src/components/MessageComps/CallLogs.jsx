import React from 'react'
import { calls } from './calls'
import { assets } from '../../assets/assets'

const CallLogs = () => {
    return (
        <>
            {calls.map((calls) => (
                <div className='flex items-center justify-between px-4 mb-7' key={calls.id}>
                    <div className='flex items-center gap-3'>
                        <div>
                            <img src={calls.img} alt="" />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <h3 className='text-base text-[#2F2F3F] font-medium'>{calls.name}</h3>
                            <div className='flex items-center gap-1'>
                                {calls.isIncoming ? <img src={assets.arrow_up_right_01} alt="" /> : <img src={assets.arrow_down_left_01} alt="" />}
                                <p className='text-sm text-[#767578]'>{calls.message}</p>
                            </div>
                        </div>
                    </div>
                    <img src={assets.call_green} alt="" />
                </div>
            ))}
        </>
    )
}

export default CallLogs