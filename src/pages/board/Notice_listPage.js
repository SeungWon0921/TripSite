import React from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Notice_listContainer from '../../containers/Notice_listcontainer';
import QuickList from '../../components/quicklist';

const Notice_listPage = () => {
    return(
    <>
    <Header/>
    <Notice_listContainer/>
    <Footer/>
    <QuickList/>
    </>
    );
};

export default Notice_listPage;