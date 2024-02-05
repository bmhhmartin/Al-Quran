import React from 'react';

const CopyRight = () => {
    const getCurrentYear = () => {
        return new Date().getFullYear();
    };
    return (
        <div className='copyright'>
            Copyright&copy;<a target="_blank" href="https://bmhhmartin.com/">bmhhmartin</a>{getCurrentYear()}.All Right Reserved
        </div>
    );
};

export default CopyRight;