import React, { Fragment, lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Loader from '../components/Loader/Loader';
const DetailsPage = lazy(() => import('../pages/DetailsPage'));
const HomePage = lazy(() => import('../pages/HomePage'));
const SalatTimePage = lazy(() => import('../pages/SalatTimePage'));
const AllSurahPage = lazy(() => import('../pages/AllSurahPage'));
const SurahListenPage = lazy(() => import('../pages/SurahListenPage'));
const BanglaTranslationPage = lazy(() => import('../pages/BanglaTranslationPage'));
const GrateFulPage = lazy(() => import('../pages/GrateFulPage'));


const AppRoute = () => {
    return (
        <Fragment>
            <Suspense fallback={<Loader/>}>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/quran" element={<AllSurahPage />} />
                    <Route path="/details/:userID" element={<DetailsPage />} />
                    <Route path="/salat" element={<SalatTimePage />} />
                    <Route path="/listen" element={<SurahListenPage />} />
                    <Route path="/bangla-translation" element={<BanglaTranslationPage />} />
                    <Route path="/grateful" element={<GrateFulPage />} />
                </Routes>
            </Suspense>
        </Fragment>
    )
}

export default AppRoute
