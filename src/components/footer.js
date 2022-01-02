import React from 'react';
import '../CSS/common.css';

const Footer = () => {
    return(
        <footer>
            <div class="foot_area box_inner">
                <ul class="foot_list clear">
                    <li><a href="#">이용약관</a></li>
                    <li><a href="#">개인정보취급방침</a></li>
                </ul>
                <h2>투어리스트인투어</h2>
                <p class="addr">서울특별시 종로구 혜화동 9길 청운빌딩 5층 <span class="gubun">/</span> <span class="br_line">대표전화 <span class="space0">010-5542-3078</span> <span class="gubun">/</span> <span class="br_line">E-mail : <span class="space0">hyumapr1@gmail.com</span></span></span></p>
                <p class="copy box_inner">Copyright(c) TouristInTour all right reserved</p>
                <ul class="snslink">
                    <li><a href="#">blog</a></li>
                    <li><a href="#">facebook</a></li>
                    <li><a href="#">instagram</a></li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;

