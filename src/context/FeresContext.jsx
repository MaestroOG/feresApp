import { createContext, useState } from "react";

export const FeresContext = createContext();

const FeresContextProvider = (props) => {
    const [visible, setVisible] = useState(false);

    const value = {
        visible,
        setVisible
    }

    return (
        <FeresContext.Provider value={value}>
            {props.children}
        </FeresContext.Provider>
    )
}

export default FeresContextProvider