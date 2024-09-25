import { createContext, useState } from "react";

export const FeresContext = createContext();

const FeresContextProvider = (props) => {
    const [visible, setVisible] = useState(false);
    const [customerReview, setCustomerReview] = useState(false);
    const [filterPop, setFilterPop] = useState(false);
    const [deliverPopup, setDeliverPopup] = useState(true);
    const [helpfulBtn, setHelpfulBtn] = useState('')
    const [notePop, setNotePop] = useState(false)

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
        setNotePop
    }

    return (
        <FeresContext.Provider value={value}>
            {props.children}
        </FeresContext.Provider>
    )
}

export default FeresContextProvider