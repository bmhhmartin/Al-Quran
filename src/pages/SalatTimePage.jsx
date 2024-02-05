import React from 'react';
import CopyRight from '../components/CopyRight/CopyRight';
import Header from '../components/Header/Header';
import SalatTime from '../components/SalatTime/SalatTime';

const SalatTimePage = () => {
    return (
        <div>
            <Header></Header>
            <SalatTime></SalatTime>
            <CopyRight></CopyRight>
        </div>
    );
};

export default SalatTimePage;