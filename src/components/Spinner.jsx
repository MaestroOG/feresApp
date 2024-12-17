import React from "react";

const Spinner = ({ isWhite = false }) => {
    return (
        <div className="flex items-center justify-center">
            <div
                className="w-5 h-5 border-4 border-solid rounded-full animate-spin"
                style={{
                    borderTopColor: isWhite ? 'white' : "#0AB247", // Custom color for the spinner
                    borderRightColor: isWhite ? 'white' : "#0AB247",
                    borderBottomColor: isWhite ? 'white' : "#0AB247",
                    borderLeftColor: "transparent", // Make one side transparent
                }}
            ></div>
        </div>
    );
};

export default Spinner;
