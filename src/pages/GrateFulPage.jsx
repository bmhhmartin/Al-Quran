import React from 'react';
import CopyRight from '../components/CopyRight/CopyRight';
import GrateFul from '../components/GrateFul/GrateFul';
import Header from '../components/Header/Header';

const GrateFulPage = () => {
    return (
        <div>
            <Header></Header>
            <GrateFul></GrateFul>
            <CopyRight></CopyRight>
        </div>
    );
};

export default GrateFulPage;