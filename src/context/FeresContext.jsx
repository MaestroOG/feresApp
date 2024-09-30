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

    const value = {
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
        setAddCardPop
    }

    return (
        <FeresContext.Provider value={value}>
            {props.children}
        </FeresContext.Provider>
    )
}

export default FeresContextProvider