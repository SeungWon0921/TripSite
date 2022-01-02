import React from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import JoinContainer from '../../containers/Joincontainer';
import QuickList from '../../components/quicklist';

const JoinPage = () => {
    return(
        <>
            <Header/>
            <JoinContainer/>
            <Footer/>
            <QuickList/>
        </>
    );
};

export default JoinPage;