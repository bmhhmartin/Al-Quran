import React,{Suspense, lazy} from 'react';
import CopyRight from '../components/CopyRight/CopyRight';
import Header from '../components/Header/Header';
import SurahAudioList from '../components/SurahAudioList/SurahAudioList';

const SurahListenPage = () => {
    return (
        <div>
            <Header></Header>
            <SurahAudioList></SurahAudioList>
            <CopyRight></CopyRight>
        </div>
    );
};

export default SurahListenPage;