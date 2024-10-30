import React, { useEffect, useState } from 'react';
import { timePicker } from 'analogue-time-picker';
import './timepicker-custom.css';  // Import your custom CSS

const CustomTimePicker = ({ onTimeConfirm, onClose }) => {
    const [showTime, setShowTime] = useState();
    const [hour, setHour] = useState("1");
    const [minute, setMinute] = useState("00");

    useEffect(() => {
        setShowTime(
            timePicker({
                element: document.getElementById("clock"),
                mode: 12,
                width: "300px",
                time: { hour: 1, minute: 0 },
            })
        );
    }, []);

    const handleClick = () => {
        const object = showTime.getTime();
        setHour(object.hour);
        setMinute(object.minute);
        if (onTimeConfirm) {
            onTimeConfirm(`${object.hour}:${object.minute}`);
        }
    };

    return (
        <div className="modal fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center z-[999]">
            <div className="modal-content bg-white rounded-t-lg flex flex-col ">
                <div id="clock" className="rounded-t-lg"></div>
                <div className="flex justify-end gap-3 mt-2 mr-4">
                    <button onClick={onClose} className="text-black rounded">Cancel</button>
                    <button onClick={handleClick} className="text-green-500 rounded">OK</button>
                </div>
            </div>
        </div>
    );
};

export default CustomTimePicker;
