import React from 'react'

const Loader = ({ fadingOut }) => {
    return (
        <div
            className={`fixed inset-0 flex items-center justify-center bg-white z-50 transition-opacity duration-500 ${fadingOut ? "opacity-0" : "opacity-100"
                }`}
        >
            <div className="w-12 h-12 border-4 border-gray-300 border-t-[#0AB247] rounded-full animate-spin"></div>
        </div>
    );
};


export default Loader