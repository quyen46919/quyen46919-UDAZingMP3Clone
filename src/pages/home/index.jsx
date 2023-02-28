import React, { useState } from 'react';
import './styles.scss';
import PartnerList from '../../components/PartnerList'

Home.propTypes = {};

function Home(props) {

    return <div className="home">
        <PartnerList />
    </div>;
}

export default Home;
