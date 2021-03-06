import React, {useState} from 'react';
import './Slider.css';
import dataSlider from './dataSlider';
import '../../../CSS/common.css';
export default function Slider() {

    const [slideIndex, setSlideIndex] = useState(1)

    const moveDot = index => {
        setSlideIndex(index)
    }

    return (
        <div className="container-slider">
            {dataSlider.map((obj, index) => {
                return (
                    <div
                    key={obj.id}
                    className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
                    >
                        <img 
                        src={process.env.PUBLIC_URL + `/image/mainslide${index + 1}.jpg`} className="background" 
                        />
                        <p class="roll_textline">BE TOURLIST FOR BETTER LIFE</p>
                    </div>
                )
            })}

            <div className="container-dots">
                {Array.from({length: 3}).map((item, index) => (
                    <div 
                    onClick={() => moveDot(index + 1)}
                    className={slideIndex === index + 1 ? "dot active" : "dot"}
                    ></div>
                ))}
            </div>
        </div>
    )
}
