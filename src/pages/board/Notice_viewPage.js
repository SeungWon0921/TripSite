import React from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Notice_viewContainer from '../../containers/Notice_viewcontainer';
import QuickList from '../../components/quicklist';

const Notice_viewPage = () => {
    return(
    <>
    <Header/>
    <Notice_viewContainer/>
    <Footer/>
    <QuickList/>
    </>
    );
};

export default Notice_viewPage;