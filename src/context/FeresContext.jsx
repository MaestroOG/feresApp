import { createContext, useState } from "react";

export const FeresContext = createContext();

const FeresContextProvider = (props) => {
    const [visible, setVisible] = useState(false);
    const [customerReview, setCustomerReview] = useState(false);
    const [filterPop, setFilterPop] = useState(false);
    const [deliverPopup, setDeliverPopup] = useState(true);
    const [helpfulBtn, setHelpfulBtn] = useState('')
    const [notePop, setNotePop] = useState(false)
    const [delOrderVisible, setDelOrderVisible] = useState(false);
    const [selectDel, setSelectDel] = useState(false)
    const [orderNote, setOrderNote] = useState(false)
    const [riderNote, setRiderNote] = useState(false)
    const [tipBtn, setTipBtn] = useState('no')
    const [countryPop, setCountryPop] = useState(false)
    const [addCardPop, setAddCardPop] = useState(false)
    const [selectedOption, setSelectedOption] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('')
    const [discountOpt, setDiscountOpt] = useState('')
    const [discount, setDiscount] = useState('')
    const [foodPopup, setFoodPopup] = useState('')
    const [foodSearch, setFoodSearch] = useState(false)
    const [delRadio, setDelRadio] = useState('bike')
    const [customTip, setCustomTip] = useState(0)
    const [tipRidePop, setTipRidePop] = useState(false)
    const [foodSelected, setFoodSelected] = useState('')
    const [sharePop, setSharePop] = useState(false)
    const [rideInfoPop, setRideInfoPop] = useState(false)
    const [cancelOption, setCancelOption] = useState('');
    const [cancelReason, setCancelReason] = useState(false)
    const [searchTerm, setSearchTerm] = useState("")


    const handleDiscountChange = (event) => {
        setDiscountOpt(event.target.value)
        console.log(event.target.value);

    }

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
        console.log(event.target.value);
    };

    const handleDelRadioChange = (event) => {
        setDelRadio(event.target.value)
        console.log(event.target.value);
    }

    const value = {
        searchTerm,
        setSearchTerm,
        visible,
        setVisible,
        customerReview,
        setCustomerReview,
        filterPop,
        setFilterPop,
        deliverPopup,
        setDeliverPopup,
        helpfulBtn,
        setHelpfulBtn,
        notePop,
        setNotePop,
        delOrderVisible,
        setDelOrderVisible,
        selectDel,
        setSelectDel,
        orderNote,
        setOrderNote,
        riderNote,
        setRiderNote,
        tipBtn,
        setTipBtn,
        countryPop,
        setCountryPop,
        addCardPop,
        setAddCardPop,
        selectedOption,
        setSelectedOption,
        handleOptionChange,
        paymentMethod,
        setPaymentMethod,
        discountOpt,
        setDiscountOpt,
        handleDiscountChange,
        discount,
        setDiscount,
        foodPopup,
        setFoodPopup,
        foodSearch,
        setFoodSearch,
        delRadio,
        setDelRadio,
        handleDelRadioChange,
        customTip,
        setCustomTip,
        tipRidePop,
        setTipRidePop,
        foodSelected,
        setFoodSelected,
        sharePop,
        setSharePop,
        rideInfoPop,
        setRideInfoPop,
        cancelOption,
        setCancelOption,
        cancelReason,
        setCancelReason
    }

    return (
        <FeresContext.Provider value={value}>
            {props.children}
        </FeresContext.Provider>
    )
}

export default FeresContextProvider