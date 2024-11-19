import React, { useEffect, useState } from 'react'

const CountDownTimer = ({ initialTimeInSeconds }) => {
    const [time, setTime] = useState(() => {
        // Retrieve the timer value from localStorage or use the prop
        const savedTime = localStorage.getItem("countdownTimer");
        return savedTime ? parseInt(savedTime, 10) : initialTimeInSeconds * 60;
    });

    useEffect(() => {
        // Save the initial time in localStorage if not already set
        if (!localStorage.getItem("countdownTimer")) {
            localStorage.setItem("countdownTimer", initialTimeInSeconds * 60);
        }

        const timer = setInterval(() => {
            setTime((prevTime) => {
                if (prevTime > 0) {
                    const newTime = prevTime - 1;
                    localStorage.setItem("countdownTimer", newTime); // Save updated time to localStorage
                    return newTime;
                } else {
                    clearInterval(timer); // Stop the timer at 0
                    localStorage.removeItem("countdownTimer"); // Clear timer from localStorage
                    return 0;
                }
            });
        }, 1000);

        return () => clearInterval(timer); // Cleanup interval on unmount
    }, [initialTimeInSeconds]);

    const formatTime = (timeInSeconds) => {
        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = timeInSeconds % 60;
        return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    };

    return <div className='text-[#2F2F3F] text-4xl font-medium'>{formatTime(time)}</div>;
}

export default CountDownTimer