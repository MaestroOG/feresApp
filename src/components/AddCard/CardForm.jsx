import React, { useContext, useState } from 'react'
import { assets } from '../../assets/assets';
import { FeresContext } from '../../context/FeresContext';

const CardForm = () => {
    const { setCountryPop, addCardPop, setAddCardPop } = useContext(FeresContext)
    const [cardNum, setCardNum] = useState("");
    const [cardType, setCardType] = useState("");

    const [expiryDate, setExpiryDate] = useState("")

    const handleExpiryChange = (e) => {
        let value = e.target.value.replace(/\//g, ""); // Remove any existing slashes
        // Add slash after every 2 characters
        if (value.length > 2) {
            value = value.substring(0, 2) + "/" + value.substring(2, 4);
        }
        setExpiryDate(value);
    };
    return (
        <form className='mt-7'>
            <div className='bg-[#F8F8F8] rounded-[13px] py-[10px] px-[20px] flex items-center justify-between gap-3 relative focus-within:border focus-within:border-[#0AB247] focus-within:bg-white transition-all ease-in'>
                <div className='flex items-center gap-3'>
                    <img src={cardNum.length == 0 ? assets.card_place_img : cardType === 'visa' ? assets.visa : cardType === 'master' ? assets.mastercard : assets.card_place_img} alt="" className='transition-all' />
                    <input type="number" className='border-none outline-none bg-transparent w-full peer' maxLength={"20"} value={cardNum} onChange={(e) => {
                        if (cardNum.startsWith("2") || cardNum.startsWith("5")) {
                            setCardType('master')
                        } else if (cardNum.startsWith("4", 0)) {
                            setCardType('visa')
                        }
                        setCardNum(e.target.value)
                    }} />
                    <span className='text-[#767578] text-base absolute left-[4.5rem] peer-focus:text-xs peer-focus:text-[#A0A0A0] peer-focus:-top-[2px] transition-all'>Card number</span>
                </div>
                {cardNum.length > 0 ? <img src={assets.cancel_circle} alt="" onClick={() => setCardNum("")} /> : null}
            </div>
            <div className='flex items-center gap-3 w-full'>
                <div className='w-1/2 mt-6 bg-[#F8F8F8] rounded-[13px] py-[10px] px-[20px] flex items-center justify-between gap-3 relative focus-within:border focus-within:border-[#0AB247] focus-within:bg-white transition-all ease-in'>
                    <input type="number" className='peer border-none outline-none bg-transparent w-full peer' maxLength={"5"} value={expiryDate} onChange={handleExpiryChange} />
                    <span className='text-[#767578] text-base absolute left-5 peer-focus:text-xs peer-focus:text-[#A0A0A0] peer-focus:-top-[2px] transition-all'>Expiry date</span>
                </div>
                <div className='w-1/2 mt-6 bg-[#F8F8F8] rounded-[13px] py-[10px] px-[20px] flex items-center justify-between gap-3 relative focus-within:border focus-within:border-[#0AB247] focus-within:bg-white transition-all ease-in'>
                    <input type="password" className='peer border-none outline-none bg-transparent w-full peer' maxLength={"3"} />
                    <span className='text-[#767578] text-base absolute left-5 peer-focus:text-xs peer-focus:text-[#A0A0A0] peer-focus:-top-[2px] transition-all'>CVV</span>
                </div>
            </div>
            <div className='bg-[#F8F8F8] rounded-[13px] py-[10px] px-[20px] flex items-center justify-between gap-3 mt-7'>
                <div className='flex items-center gap-3'>
                    <img src={assets.country_flag} alt="" />
                    <input placeholder='United Kingdom' className='bg-transparent border-none outline-none' onClick={() => setCountryPop(true)} />
                </div>
                <img src={assets.arrow_down} alt="" />
            </div>
            <div className='mt-5 px-3 flex items-center gap-2'>
                <input type="checkbox" name="" id="" />
                <span className='text-[#2F2F3F] text-base'>Save card</span>
            </div>

            <div className='bg-white fixed bottom-0 left-0 py-4 px-2 w-full flex items-center justify-center'>
                <button className={`${cardNum.length > 12 ? 'bg-[#0AB247] text-white' : 'bg-[#F8F8F8] text-[#767578]'} rounded-[30px] w-[95%] p-[16px] font-medium text-lg`} onClick={(e) => {
                    e.preventDefault()
                    setAddCardPop(true)
                }}>Apply</button>
            </div>
        </form>
    )
}

export default CardForm