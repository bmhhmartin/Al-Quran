import React from 'react';
import CopyRight from '../components/CopyRight/CopyRight';
import Header from '../components/Header/Header';
import SurahDetails from '../components/SurahDetails/SurahDetails';

const DetailsPage = () => {
    return (
        <>
            <Header></Header>
            <SurahDetails></SurahDetails>
            <CopyRight></CopyRight>
        </>
    );
};

export default DetailsPage;