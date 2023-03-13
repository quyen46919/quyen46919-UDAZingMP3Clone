import Sidebar from '../../components/Sidebar';
import NewMusic from './../../components/NewMusic/index';
import './styles.scss';
import React from 'react';

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
