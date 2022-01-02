import React from 'react';
import '../CSS/common.css';


const Notice_listContainer = () => {
    return(
        <div id="container">
            <div class="location_area customer">
                <div class="box_inner">
                    <h2 class="tit_page">TOURIST <span class="in">in</span> TOUR</h2>
                    <p class="location">공지사항 <span class="path">/</span> 고객센터</p>
                    <ul class="page_menu clear">
                        <li><a href="#" class="on">공지사항</a></li>
                        <li><a href="#" >문의하기</a></li>
                    </ul>
                </div>
            </div>
            <div class="bodytext_area box_inner">
                <form action="#" class="minisrch_form">
                    <fieldset>
                        <legend>검색</legend>
                        <input type="text" class="tbox" title="검색어를 입력하세요" placeholder="검색어를 입력하세요"/><a href="#" class="btn_srch">검색</a>
                    </fieldset>
                </form>
                <table class="bbsListTbl" summary="번호, 제목, 조회소, 작성일 등을 제공하는 표">
                    <caption class="hdd">공지사항 목록</caption>
                    <thead>
                        <tr>
                            <th scope="col">번호</th>
                            <th scope="col">제목</th>
                            <th scope="col">조회수</th>
                            <th scope="col">작성일</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>10</td>
                            <td class="tit_notice"><a href="#">이번 휴가 제주갈까? 미션 투어(여행경비 50만원 지원)</a></td>
                            <td>123</td>
                            <td>2021-08-22</td>
                        </tr>
                        <tr>
                            <td>9</td>
                            <td class="tit_notice"><a href="#">이번 휴가 제주갈까? 미션 투어(여행경비 50만원 지원)</a></td>
                            <td>123</td>
                            <td>2021-08-22</td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td class="tit_notice"><a href="#">이번 휴가 제주갈까? 미션 투어(여행경비 50만원 지원)</a></td>
                            <td>123</td>
                            <td>2021-08-22</td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td class="tit_notice"><a href="#">이번 휴가 제주갈까? 미션 투어(여행경비 50만원 지원)</a></td>
                            <td>123</td>
                            <td>2021-08-22</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td class="tit_notice"><a href="#">이번 휴가 제주갈까? 미션 투어(여행경비 50만원 지원)</a></td>
                            <td>123</td>
                            <td>2021-08-22</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td class="tit_notice"><a href="#">이번 휴가 제주갈까? 미션 투어(여행경비 50만원 지원)</a></td>
                            <td>123</td>
                            <td>2021-08-22</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td class="tit_notice"><a href="#">이번 휴가 제주갈까? 미션 투어(여행경비 50만원 지원)</a></td>
                            <td>123</td>
                            <td>2021-08-22</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td class="tit_notice"><a href="#">이번 휴가 제주갈까? 미션 투어(여행경비 50만원 지원)</a></td>
                            <td>123</td>
                            <td>2021-08-22</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td class="tit_notice"><a href="#">이번 휴가 제주갈까? 미션 투어(여행경비 50만원 지원)</a></td>
                            <td>123</td>
                            <td>2021-08-22</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td class="tit_notice"><a href="#">이번 휴가 제주갈까? 미션 투어(여행경비 50만원 지원)</a></td>
                            <td>123</td>
                            <td>2021-08-22</td>
                        </tr>
                    </tbody>
                </table>
                <div class="pagination">
                    <a href="#" class="firstpage pbtn"><img src="/image/btn_firstpage.png" alt="첫 페이지로 이동"/></a>
                    <a href="#" class="prevpage pbtn"><img src="/image/btn_prevpage.png" alt="이전 페이지로 이동"/></a>
                    <a href="#"><span class="pagenum currentPage">1</span></a>
                    <a href="#"><span class="pagenum">2</span></a>
                    <a href="#"><span class="pagenum">3</span></a>
                    <a href="#"><span class="pagenum">4</span></a>
                    <a href="#"><span class="pagenum">5</span></a>
                    <a href="#" class="nextpage pbtn"><img src="/image/btn_nextpage.png" alt="다음 페이지로 이동"/></a>
                    <a href="#" class="lastpage pbtn"><img src="/image/btn_lastpage.png" alt="마지막 페이지로 이동"/></a>
                </div>
            </div>
        </div>

    );
};

export default Notice_listContainer;