import React, { useState } from "react";

const PinInput = () => {
    const [pin, setPin] = useState(Array(6).fill(""));

    const handleChange = (value, index) => {
        if (value.length > 1) return;

        const newPin = [...pin];
        newPin[index] = value;
        setPin(newPin);

        if (value && index < pin.length - 1) {
            document.getElementById(`pin-input-${index + 1}`).focus();
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === "Backspace" && !pin[index] && index > 0) {
            document.getElementById(`pin-input-${index - 1}`).focus();
        }
    };

    return (
        <div className="flex space-x-[10px] mb-[30px]">
            {pin.map((_, index) => (
                <input
                    key={index}
                    id={`pin-input-${index}`}
                    type="password"
                    maxLength="1"
                    value={pin[index]}
                    onChange={(e) => handleChange(e.target.value, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    className="w-[58px] h-[58px] text-center bg-[#F8F8F8] transition-all outline-none focus:ring-2 focus:bg-white focus:ring-green-500 rounded-[13px] text-lg"
                />
            ))}
        </div>
    );
};

export default PinInput;
