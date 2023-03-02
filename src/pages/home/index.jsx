import React from 'react';
import Sidebar from '../../components/Sidebar';
import './styles.scss';

Home.propTypes = {};

function Home(props) {
  return (
    <div className="home">
      <Sidebar />
    </div>
  );
}

export default Home;
