import React from 'react'
import { useNavigate } from 'react-router-dom';

const PendingTable = () => {
    const navigate = useNavigate()
    const data = [
        { id: 23216, storeName: "KFC Eastlands", amount: "ETB 600" },
        { id: 23216, storeName: "KFC Eastlands", amount: "ETB 600" },
        { id: 23216, storeName: "KFC Eastlands", amount: "ETB 600" },
        { id: 23216, storeName: "KFC Eastlands", amount: "ETB 600" },
    ];
    return (
        <div className="px-4 rounded-[13px]">
            <div className=" overflow-x-auto no-scrollbar">
                <table className="min-w-full border-collapse border border-gray-200 rounded-[13px]">
                    <thead className='rounded-t-[13px]'>
                        <tr className="bg-gray-50 text-left text-sm font-medium text-gray-600">
                            <th className="px-[17px] py-3 border-b border-gray-200 truncate">Req ID</th>
                            <th className="px-[17px] py-3 border-b border-gray-200 truncate">Store Name</th>
                            <th className="px-[17px] py-3 border-b border-gray-200 truncate">Amount</th>
                            <th className="px-[17px] py-3 border-b border-gray-200 truncate">Action</th>
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
                                <td className="px-[17px] py-3 truncate">
                                    <button onClick={() => navigate('/murabahadetails')} className="px-4 py-2 text-green-700 bg-green-100 rounded hover:bg-green-200">
                                        Select
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default PendingTable