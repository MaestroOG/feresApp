import React, { useContext, useRef } from 'react'
import { assets } from '../../assets/assets'
import { FeresContext } from '../../context/FeresContext';

const UploadPhotoPopup = () => {
    const fileInputRef = useRef(null);
    const { setDelItemPhoto, setPicturePop } = useContext(FeresContext)

    const handleDivClick = () => {
        fileInputRef.current.click(); // Programmatically click the hidden input
    };

    const handleButtonClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            // Check if the file is an image
            if (file.type.startsWith("image/")) {
                const imageUrl = URL.createObjectURL(file); // Create temporary URL
                setDelItemPhoto({
                    name: file.name,
                    size: (file.size / 1024).toFixed(2) + " KB", // Convert size to KB
                    preview: imageUrl,
                });
            } else {
                // Handle non-image files if necessary
                setDelItemPhoto({
                    name: file.name,
                    size: (file.size / 1024).toFixed(2) + " KB",
                    preview: '',
                });
                alert("Please upload an image file.");
            }
        }
        setPicturePop(false)
    };
    return (
        <div className='h-screen w-full bg-[#06060626] fixed top-0 left-0 z-50'>
            <div className='fixed w-full bottom-0 left-0 h-[266px] bg-white rounded-t-xl py-3'>
                <img src={assets.popup_bar} alt="" className='mx-auto' />
                <div className='flex items-center w-[64%] justify-between ml-auto mt-[10px] pr-4'>
                    <p className='text-[#2F2F3F] text-xl font-bold'>Upload Photo</p>
                    <img src={assets.close} alt="" onClick={() => setPicturePop(false)} />
                </div>
                <hr className='my-5' />
                <div className='flex items-center gap-4 px-4 py-2 my-5' onClick={handleButtonClick}>
                    <img src={assets.camera_01} alt="" />
                    <p className='text-[#2B2A2F] text-xl'>Take photo</p>
                    <input
                        type="file"
                        ref={fileInputRef}
                        accept="image/*"
                        capture="environment"  // Use "user" for front camera if needed
                        style={{ display: "none" }}
                        onChange={handleFileChange}
                    />
                </div>
                <div className='flex items-center gap-4 px-4 py-2 my-5' onClick={handleDivClick}>
                    <img src={assets.image_02} alt="" />
                    <p className='text-[#2B2A2F] text-xl'>Upload from gallery</p>
                    <input
                        type="file"
                        ref={fileInputRef}
                        style={{ display: "none" }}
                        onChange={handleFileChange}
                        accept="image/*" // Restrict file type to images only
                    />
                </div>
            </div>
        </div>
    )
}

export default UploadPhotoPopup