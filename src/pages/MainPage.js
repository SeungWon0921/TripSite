import React from 'react';
import Header from '../components/header';
import MainContainer from '../containers/maincontainer';
import Footer from '../components/footer';
import QuickList from '../components/quicklist';

function MainPage() {
    return(
        <>
        <Header/>
        <MainContainer/>
        <Footer/>
        <QuickList/>
        </>
    );
};

export default MainPage;