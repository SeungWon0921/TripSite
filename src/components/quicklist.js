import React from 'react';
import '../CSS/common.css';

const QuickList = () => {
    return(
        <div class="quick_area">
        <ul class="quick_list">
            <li><a href="tel:02-1111-1111"><h3>전화 문의</h3><p>02-1111-1111</p></a></li>
            <li><a href="#"><h3>카카오톡 <em>상담</em></h3><p>1:1상담</p></a></li>
            <li><a href="#"><h3 class="to_content">오시는길</h3></a></li>
        </ul>
        <p class="to_top"><a href="#">TOP</a></p>
    </div>
    );
};

export default QuickList;