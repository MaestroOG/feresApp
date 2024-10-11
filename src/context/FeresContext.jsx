import { createContext, useState, useEffect } from "react";

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
    const [cartItems, setCartItems] = useState(localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [])

    const addToCart = (item) => {
        const isItemInCart = cartItems.find((cartItem) => cartItem._id === item._id); // check if the item is already in the cart

        if (isItemInCart) {
            setCartItems(
                cartItems.map((cartItem) => // if the item is already in the cart, increase the quantity of the item
                    cartItem._id === item._id
                        ? { ...cartItem, quantity: cartItem.quantity + 1 }
                        : cartItem // otherwise, return the cart item
                )
            );
        } else {
            setCartItems([...cartItems, { ...item, quantity: 1 }]); // if the item is not in the cart, add the item to the cart
        }
    }

    const clearCart = () => {
        setCartItems([]); // set the cart items to an empty array
    };

    const getCartTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0); // calculate the total price of the items in the cart
    };

    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems]);

    useEffect(() => {
        const cartItems = localStorage.getItem("cartItems");
        if (cartItems) {
            setCartItems(JSON.parse(cartItems));
        }
    }, []);


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
        cartItems,
        setCartItems,
        clearCart,
        addToCart,
        getCartTotal,
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