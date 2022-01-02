import React from 'react';
import '../CSS/common.css';
import {Link} from 'react-router-dom';

const LoginContainer = () => {
    return(
        <div id="container">
        <div class="bodytext_area box_inner">
            <div class="login_wrap">
                <h1 class="loginTit">
                    <Link to="/"><img src="/image/tit_login.png" alt="TOURIST IN TOUR"/></Link>
                    <ul class="login_list">
                        <li class="kakao"><a href="#"><strong>카카오톡</strong> 로그인</a></li>
                        <li class="naver"><a href="#"><strong>네이버</strong> 로그인</a></li>
                        <li class="facebook"><a href="#"><strong>페이스북</strong> 로그인</a></li>
                        <li class="email"><a href="#"><strong>이메일</strong>로그인</a></li>
                    </ul>
                    <div class="btnonoff_line">
                        <div class="switch"></div>
                        <p><a href="#" class="btn_onoff">로그인 유지</a></p>
                    </div>
                </h1>
            </div>
        </div>
    </div>
    );
};

export default LoginContainer;