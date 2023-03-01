import React from 'react';
import PartnerList from '../../components/PartnerList';
import './styles.scss';

Home.propTypes = {};

function Home(props) {
    return <div className="home">
        This is homepage
        <PartnerList />
    </div>;
}

export default Home;
