import React from 'react';
import './styles.scss';
import PartnerList from '../../components/PartnerList'

Home.propTypes = {};

function Home(props) {
    return <div className="home">
        This is homepage
        <PartnerList />
    </div>;
}

export default Home;
