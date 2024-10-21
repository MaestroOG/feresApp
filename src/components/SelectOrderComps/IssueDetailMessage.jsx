import React, { useRef, useState } from 'react'
import OrderIssuesNav from './OrderIssuesNav'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom';

const IssueDetailMessage = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const fileInputRef = useRef(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
    };


    const handleImageClick = () => {
        fileInputRef.current.click();
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (selectedFile) {
            console.log("Uploading file:", selectedFile);
        } else {
            console.log("No file selected.");
        }
    };
    return (
        <div>
            <OrderIssuesNav />
            <h3 className='text-[#2F2F3F] text-2xl font-bold px-4 py-3 w-[85%] mt-3'>I was charged twice for the same trip</h3>

            {/* Textarea */}

            <form onSubmit={handleSubmit} className='px-4 mt-5'>
                <div className='bg-[#F8F8F8] rounded-xl px-4 py-3 h-60 relative focus-within:border focus-within:border-[#0AB247] focus-within:bg-white transition-all'>
                    <textarea name="" id="" placeholder='Describe your issue' className='w-full h-full overflow-auto text-[#767578] text-lg bg-transparent border-none outline-none'></textarea>
                    <input
                        type="file"
                        ref={fileInputRef}
                        className="hidden"
                        onChange={handleFileChange} // Handle the file change
                    />
                    <img src={assets.document_attachment} alt="" className='absolute bottom-4 right-5' onClick={handleImageClick} />
                </div>
            </form>

            {selectedFile && (
                <div className='my-7 px-4 flex items-center justify-between'>
                    <div className='flex items-center gap-4'>
                        <img src={assets.image_01} alt="" />
                        <p className='text-[#2F2F3F] font-medium'>{selectedFile.name}</p>
                    </div>
                    <img src={assets.cancel_icon} alt="" onClick={() => setSelectedFile(null)} />
                </div>
            )}
            <div className='px-4 mt-6'>
                <p className='text-[#2F2F3F] text-lg font-bold'>Order</p>
                <div className='flex items-center justify-between my-4'>
                    <div className='flex items-center gap-3'>
                        <div className='bg-[#F8F8F8] rounded-full p-4'>
                            <img src={assets.pie} alt="" className='w-6' />
                        </div>
                        <div>
                            <h3 className='text-[#2F2F3F] text-base font-medium'>MCDonald order</h3>
                            <p className='text-[#ACACAC] text-base'>24 Jan 2024, 2:24 PM</p>
                        </div>
                    </div>
                    <img src={assets.arrow_right} alt="" />
                </div>
            </div>

            {/* Send Message */}
            <Link to={'/feressupport'} className='fixed bottom-0 left-0 w-full bg-white px-3 py-5'>
                <button className='bg-[#0AB247] text-white w-full rounded-full p-4 text-lg font-medium'>Send message</button>
            </Link>
        </div>
    )
}

export default IssueDetailMessage