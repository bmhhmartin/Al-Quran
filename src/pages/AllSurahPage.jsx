import React from 'react';
import Header from '../components/Header/Header';
import SurahList from '../components/SurahList/SurahList';
import Copyright from '../components/CopyRight/CopyRight';

const AllSurahPage = () => {
    return (
        <>
           <Header></Header> 
           <SurahList></SurahList>
           <Copyright></Copyright>
        </>
    );
};

export default AllSurahPage;