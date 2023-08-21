import React, { useEffect, useState } from 'react';
import '../style/css/components/ImgSlider.css';

export default function ImgSlider({ pictures }) {
    const ImgLength = pictures.length;
    const [counter, setCounter] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
        setCounter((prevCounter) => (prevCounter % ImgLength) + 1);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="sliderBody">
        <div className="slider">
            <div className="slides">
            {Array.from({ length: ImgLength }).map((_, index) => (
                <input
                    key={index + 1}
                    type="radio"
                    name="radio-btn"
                    id={`radio${index + 1}`}
                    checked={counter === index + 1}
                    readOnly
                />
            ))}

            {pictures.map((img, index) => (
                <div key={index} className={index > 0 ? "slide" : "slide first"}>
                    <img src={img} alt="" />
                </div>
            ))}

            <div className="navigation-auto">
                {Array.from({ length: ImgLength }).map((_, index) => (
                    <div key={index + 1} className={`auto-btn${index + 1}`} />
                ))}
            </div>
            </div>
        </div>
        </div>
    );
}
