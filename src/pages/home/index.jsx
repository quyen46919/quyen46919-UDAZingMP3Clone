import React from 'react';
import Sidebar from '../../components/Sidebar';
import Headers from '../../components/Header';
import './styles.scss';

Home.propTypes = {};

function Home(props) {
    return (
        <div className="home">
            <Sidebar />
            <Headers />
        </div>
    );
}

export default Home;
