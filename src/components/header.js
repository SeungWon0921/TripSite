import React from 'react';
import '../CSS/common.css';
import {Link} from 'react-router-dom'


const Header = () => {
    return(
        <header id="header">
            <div class="header_area box_inner clear">
                <h1><Link to="/">Tourist in tour</Link></h1>
                {/* <!-- 모바일 메뉴 그리기 --> */}
                <p class="openMOgnb"><Link to="#"><b class="hdd">메뉴열기</b><span></span><span></span><span></span></Link></p>
                {/* <!-- 모바일 메뉴 그리기 끝 --> */}
                {/* <!-- 상단메뉴 --> */}
                <div class="header_cont">
                    <ul class="util clear">
                        <li><Link to="/login">로그인</Link></li>
                        <li><Link to="/join">회원가입</Link></li>
                    </ul>
                    <nav>
                        <ul class="gnb clear">
                            <li class="gnb1">
                                <Link to="#" class="openAll1">여행정보</Link>
                                <div class="gnb_depth gnb_depth2_1">
                                    <ul class="submenu_list">
                                        <li><Link to="/domestic">국내</Link></li>
                                        <li><Link to="/abroad">해외</Link></li>
                                    </ul>
                                </div>
                            </li>
                            <li class="gnb2">
                                <Link to="#" class="openAll2">고객센터</Link>
                                <div class="gnb_depth gnb_depth2_2">
                                    <ul class="submenu_list">
                                        <li><Link to="/notice/list">공지사항</Link></li>
                                        <li><Link to="/notice">문의하기</Link></li>
                                    </ul>
                                </div>
                            </li>
                            <li class="gnb3">
                                <a href="/commodity_tour" class="openAll3">상품투어</a>
                                <div class="gnb_depth gnb_depth2_3">
                                    <ul class="submenu_list">
                                        <li><a href="/info_program">프로그램 소개</a></li>
                                        <li><a href="/trip_data">여행자료</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li class="gnb4">
                                <Link to="/ticketguide" class="openAll4">티켓/가이드</Link>
                                <div class="gnb_depth gnb_depth2_4">
                                    <ul class="submenu_list">
                                        <li><Link to="/plane">항공</Link></li>
                                        <li><Link to="/hotel">호텔</Link></li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </nav>
                </div>
                {/* <!-- 상단메뉴 끝 --> */}
            </div>
        </header>
    );
};

export default Header;
