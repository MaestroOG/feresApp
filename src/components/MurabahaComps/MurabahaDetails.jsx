import React from 'react'
import MurabahaNav from './MurabahaNav'
import Container from '../Container'
import { assets } from '../../assets/assets'
import InstallmentMonthPopup from './InstallmentMonthPopup'
import ConfirmInstallmentPopup from './ConfirmInstallmentPopup'
import VerifyMurabaha from './VerifyMurabaha'

const MurabahaDetails = () => {
    const data = [
        { id: 23216, storeName: "KFC Eastlands", amount: "ETB 600" },
    ];
    return (
        <>
            <div>
                <div className='mb-[7px]'>
                    <MurabahaNav />
                </div>
                <img src='/murabahabanner.png' alt="" className='mx-auto mb-5' />
                <Container>
                    <div className='flex items-center justify-between mb-[18px]'>
                        <h2 className='text-[#767578] text-lg'>Status</h2>
                        <h2 className='text-[#E8A928] text-lg'>Pending</h2>
                    </div>
                    <div className='flex items-center justify-between mb-[18px]'>
                        <h2 className='text-[#767578] text-lg'>Cost</h2>
                        <h2 className='text-[#2F2F3F] text-lg'>ETB 600.00</h2>
                    </div>
                    <div className='flex items-center justify-between mb-[18px]'>
                        <h2 className='text-[#767578] text-lg'>Profit</h2>
                        <h2 className='text-[#2F2F3F] text-lg'>ETB 6.00</h2>
                    </div>
                    <div className='flex items-center justify-between mb-[18px]'>
                        <h2 className='text-[#767578] text-lg'>Rate</h2>
                        <h2 className='text-[#2F2F3F] text-lg'>1%</h2>
                    </div>
                    <hr className='w-11/12 mx-auto mb-5' />
                    <div className='flex items-center justify-between mb-5'>
                        <h2 className='text-[#2F2F3F] text-lg font-extrabold'>Total Amount</h2>
                        <h2 className='text-[#2F2F3F] text-lg font-extrabold'>ETB 606.00</h2>
                    </div>
                </Container>
                <Container>
                    <form>
                        <div className='w-full mb-5 flex items-center justify-between bg-[#F8F8F8] px-5 py-[18px] outline-none rounded-[13px] transition-all focus-within:border focus-within:border-[#0AB247] focus-within:bg-white'>
                            <input type="number" className='bg-transparent border-none outline-none w-full placeholder:text-[#8E8E93]' placeholder='Enter advance' />
                            <h2 className='text-[#8E8E93] text-lg'>(ETB)</h2>
                        </div>
                        <div className='w-full mb-5 flex items-center justify-between bg-[#F8F8F8] px-5 py-[18px] outline-none rounded-[13px] transition-all focus-within:border focus-within:border-[#0AB247] focus-within:bg-white'>
                            <input type="text" className='bg-transparent border-none outline-none w-full placeholder:text-[#8E8E93]' placeholder='Select installment months' />
                            <img src={assets.arrow_down} alt="" />
                        </div>
                    </form>
                </Container>
                <div className="px-4 rounded-[13px]">
                    <div className=" overflow-x-auto no-scrollbar">
                        <table className="min-w-full border-collapse border border-gray-200 rounded-[13px]">
                            <thead className='rounded-t-[13px]'>
                                <tr className="bg-gray-50 text-left text-sm font-medium text-gray-600">
                                    <th className="px-[17px] py-3 border-b border-gray-200 truncate">Install Date</th>
                                    <th className="px-[17px] py-3 border-b border-gray-200 truncate">Install No</th>
                                    <th className="px-[17px] py-3 border-b border-gray-200 truncate">Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((item, index) => (
                                    <tr
                                        key={index}
                                        className="hover:bg-gray-50 text-sm text-gray-800 border-b border-gray-200"
                                    >
                                        <td className="px-[17px] py-3 truncate">{item.id}</td>
                                        <td className="px-[17px] py-3 truncate">{item.storeName}</td>
                                        <td className="px-[17px] py-3 truncate">{item.amount}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className='fixed bottom-0 left-0 w-full py-5 px-4'>
                    <button className='w-full rounded-full bg-[#0AB247] text-white font-semibold text-lg px-4 py-[15px]'>Confirm</button>
                </div>
            </div>
            {/* <InstallmentMonthPopup /> */}
            {/* <ConfirmInstallmentPopup /> */}
            <VerifyMurabaha />
        </>
    )
}

export default MurabahaDetails