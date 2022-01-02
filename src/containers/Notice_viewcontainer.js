import React from 'react';
import '../CSS/common.css';

const Notice_viewContainer = () => {
    return(
    <div id="container">
            <div class="location_area customer">
                <div class="box_inner">
                    <h2 class="tit_page">TOURIST <span class="in">in</span> TOUR</h2>
                    <p class="location">공지사항 <span class="path">/</span> 고객센터</p>
                    <ul class="page_menu clear">
                        <li><a href="#" class="on">공지사항</a></li>
                        <li><a href="#">문의하기</a></li>
                    </ul>
                </div>
            </div>
            <div class="bodytext_area box_inner">
                <ul class="bbsview_list">
                    <li class="bbs_title">박물관 미션 투어 응모 당첨자 발표</li>
                    <li class="bbs_date">작성일 <span>2021.08.22</span></li>
                    <li class="bbs_hit">조회수: <span>100</span></li>
                    <li class="bbs_content">
                        <div class="editor_content">
                            안녕하세요. 믿을 수 있는 여행정보, 투어리스트투어입니다.
                            <br/>
                            안녕하세요. 믿을 수 있는 여행정보, 투어리스트투어입니다.
                            <br/>
                            안녕하세요. 믿을 수 있는 여행정보, 투어리스트투어입니다.
                            <br/>
                            안녕하세요. 믿을 수 있는 여행정보, 투어리스트투어입니다.
                            <br/>
                            안녕하세요. 믿을 수 있는 여행정보, 투어리스트투어입니다.
                            <br/>
                            안녕하세요. 믿을 수 있는 여행정보, 투어리스트투어입니다.
                            <br/>
                            안녕하세요. 믿을 수 있는 여행정보, 투어리스트투어입니다.
                            <br/>
                            안녕하세요. 믿을 수 있는 여행정보, 투어리스트투어입니다.
                            <br/>
                            안녕하세요. 믿을 수 있는 여행정보, 투어리스트투어입니다.
                            <br/>
                            안녕하세요. 믿을 수 있는 여행정보, 투어리스트투어입니다.
                            <br/>
                        </div>
                    </li>
                </ul>
                <p class="btn_line txt_right">
                    <a href="#" class="btn_bbs">목록</a>
                </p>
                <ul class="near_list mt20">
                    <li>
                        <h4 class="prev">이전글</h4><a href="#">추석 연휴 티켓/투어 배송 및 직접 수령 안내</a>
                    </li>
                    <li>
                        <h4 class="next">다음글</h4><a href="#">이번 여름 휴가 제주갈까? 미션 투어(여행 경비 50만원 지원)</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Notice_viewContainer;