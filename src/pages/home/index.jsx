import React from 'react';
import Sidebar from '../../components/Sidebar';
import './styles.scss';
import SongListSlide from '../../components/SongListSlide';
import RecentList from '../../components/RecentList';

function Home(props) {
    return (
        <div className="home">
            <Sidebar />
            <SongListSlide />
            <RecentList />
        </div>
    );
}

export default Home;
