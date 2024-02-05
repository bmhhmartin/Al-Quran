import React, { Fragment } from 'react'
import CopyRight from '../components/CopyRight/CopyRight'
import Dashboard from '../components/Dashboard/Dashboard'
import Header from '../components/Header/Header'

const HomePage = () => {
    return (
        <Fragment>
            <Header></Header>
            <Dashboard></Dashboard>
            <CopyRight></CopyRight>
        </Fragment>
    )
}

export default HomePage
