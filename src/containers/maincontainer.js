import React from 'react';
import '../CSS/common.css';
import {Link} from 'react-router-dom';
import Rolling from './Rolling';


const MainContainer = () => {
    return(
        // <!-- container -->
        <div id="container">
            <Rolling/>
            {/* <!-- 다시 찾는 인기 여행지 TOP 3 --> */}
                <div class="about_area">
                    <h2>다시 찾는 인기 여행지 <b>TOP 3</b></h2>
                    <div class="about_box">
                        <ul class="place_list box_inner clear">
                            <li><a href="#"><img src="/image/img_topplace01.jpg" alt="성패트릭 대성당" class="img_topplace"/></a><h3>성패트릭 대성당</h3><p class="text">바쁜 뉴욕안에서 정교하면서도 웅장한 기운에 침묵하게 되는 기도의 시간!</p><span class="view">VIEW</span></li>
                            <li><a href="#"><img src="/image/img_topplace02.jpg" alt="원주 뮤지엄 산" class="img_topplace"/></a><h3>원주 뮤지엄 산</h3><p class="text">전시된 유산들을 담아낸 건물에 신비로운 돌과 테마가 담겨져있다.</p><span class="view">VIEW</span></li>
                            <li><a href="#"><img src="/image/img_topplace03.jpg" alt="일본 만국박람회 기념공원" class="img_topplace"/></a><h3>일본 만국박람회 기념공원</h3><p class="text">오사카 센리 반파쿠에는 드넓은 대지에 정원과 들, 물과 함께하는 문화가 있다.</p><span class="view">VIEW</span></li>
                        </ul>
                    </div>
                </div>
            {/* <!-- 다시 찾는 인기 여행지 TOP 3 끝 --> */}
            {/* <!-- 상담 및 공지사항 --> */}
                <div class="appbbs_area">
                    <div class="appbbs_box box_inner clear">
                        <p class="app_line">
                            <a href="#">카카오톡 1:1 상담</a>
                            <a href="#">전화 상담 신청</a>
                        </p>
                        <div class="bbs_line">
                            <h3><Link to="/notice/list">NOTICE</Link></h3>
                            <ul class="notice_recent">
                                <li><Link to="/notice/view">이번 여름 휴가 제주 갈까? 미션 투어 (여행경비 50만원 지원)</Link></li>
                                <li><Link to="/notice/view">박물관 미션투어 응모 당첨자 발표</Link></li>
                                <li><Link to="/notice/view">추석 연휴 티켓/투어 및 직접 수령 안내</Link></li>
                                <li><Link to="/notice/view">하롱베이 서비스 OPEN! (여행정보, 가이드북, 가이드맵)</Link></li>
                                <li><Link to="/notice/view">"투어 리스트 인 투어" 서비스 점검 안내</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            {/* <!-- 상담 및 공지사항 끝 --> */}
        </div>
    );
};

export default MainContainer;