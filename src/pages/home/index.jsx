import React from 'react';
import Sidebar from '../../components/Sidebar';
import './styles.scss';
import NewRelease from '../../components/NewRelease';

Home.propTypes = {};

function Home(props) {
  return (
    <div className="home">
      <Sidebar />
      <NewRelease />
    </div>
  );
}

export default Home;
