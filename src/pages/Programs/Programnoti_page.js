import React from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Program_NotiContainer from '../../containers/Programnoti_container';
import QuickList from '../../components/quicklist';
const Program_notiPage = () => {
    return(
        <>
            <Header/>
            <Program_NotiContainer/>
            <Footer/>
            <QuickList/>
        </>
    );
};  

export default Program_notiPage;