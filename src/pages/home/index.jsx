import Sidebar from '../../components/Sidebar';
import './styles.scss';
import React from 'react';
import NewMusic from './../../components/NewMusic/index';

Home.propTypes = {};

function Home(props) {
    return (
        <div className="home">
            <Sidebar />
            <NewMusic />
        </div>
    );
}

export default Home;
