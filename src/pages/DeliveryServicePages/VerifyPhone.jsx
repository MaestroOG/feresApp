import React, { useEffect, useRef, useState } from 'react'
import Container from '../../components/Container'
import { assets } from '../../assets/assets'

const VerifyPhone = () => {
    const [values, setValues] = useState(["", "", "", ""]);
    const [showSuccess, setShowSuccess] = useState(false);
    const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

    const [time, setTime] = useState(59)

    const handleChange = (e, index) => {
        const newValues = [...values];
        newValues[index] = e.target.value;
        setValues(newValues);

        // Move focus to the next input if it has a value
        if (
            e.target.value.length === e.target.maxLength &&
            index < inputRefs.length - 1
        ) {
            inputRefs[index + 1].current.focus();
        }

        // Check if all inputs have values
        if (newValues.every((val) => val !== "")) {
            setShowSuccess(true);
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === "Backspace" && e.target.value === "") {
            // Move to the previous input if available
            if (index > 0) {
                inputRefs[index - 1].current.focus();
            }
        }
    };

    useEffect(() => {
        if (time > 0) {
            const timer = setInterval(() => {
                setTime((prevCount) => prevCount - 1);
            }, 1000);

            // Clear the interval when the component unmounts or count reaches 0
            return () => clearInterval(timer);
        }
    }, [time]);
    return (
        <>
            <Container className={'py-5 flex items-center gap-[15vw]'}>
                <img src={assets.arrow_left} alt="" className='invert' />
                <h1 className='text-[#2F2F3F] text-xl font-bold'>Verify your mobile number</h1>
            </Container>

            <Container className={'mt-8'}>
                <h3 className='text-[#2F2F3F] text-xl text-center w-[90%] mx-auto mb-5'>Enter your one-time password sent to +44 9024677034</h3>
                <div className='w-full flex items-center justify-around mb-5'>
                    {inputRefs.map((ref, index) => (
                        <input
                            type="text"
                            ref={ref}
                            className='w-[85px] h-[67px] outline-none py-2 px-5 rounded-xl transition-all bg-[#F8F8F8] focus:border focus:border-[#0AB247] text-[#060606] text-2xl font-medium text-center'
                            maxLength={'1'}
                            onChange={(e) => handleChange(e, index)}
                            onKeyDown={(e) => handleKeyDown(e, index)}

                        />
                    ))}
                </div>

                <div className='flex items-center justify-center flex-col mt-8'>
                    <p className='text-[#2F2F3F]'>Didn’t receive SMS?</p>
                    {time > 0 ? <p className='text-[#2F2F3F] mt-3'>You can resend code in <span className='text-[#0AB247] font-medium'>{time}</span> s</p> : <span className='text-[#0AB247] font-medium mt-3'>Resend</span>}
                </div>
            </Container>
            {showSuccess && (
                <div className='text-center mt-20'>
                    Success! All inputs are filled.
                </div>
            )}
        </>
    )
}

export default VerifyPhone