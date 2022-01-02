import React from 'react';

import '../CSS/common.css';
import Slider from '../function/imgslider/Slider/Slider';
const Rolling = () => {
    return (
    <>
        <div class="main_rolling_pc">
        <div class="visualRoll">
            <ul class="viewImgList">
                <li className="imglist0">
                    <div class="roll_content">
                    <Slider/>
                    </div>
                </li>
            </ul>
        </div>
    </div>
<div class="main_rolling_mobile">
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide">
                <a href="#"><img src="/image/mainslide_mob01.jpg" alt="여행정보"/></a>
            </div>
            <div class="swiper-slide">
                <a href="#"><img src="/image/mainslide_mob02.jpg" alt="여행정보"/></a>
            </div>
            <div class="swiper-slide">
                <a href="#"><img src="/image/mainslide_mob03.jpg" alt="여행정보"/></a>
            </div>
            <div class="swiper-pagination"></div>
        </div>
    </div>
</div>
</>
    );
};

export default Rolling;