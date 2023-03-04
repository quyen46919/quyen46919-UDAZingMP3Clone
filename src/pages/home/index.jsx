import React from "react";
import SongList from "../../components/SongList";
import "./styles.scss";

Home.propTypes = {};

function Home(props) {
  return <div className="home">{<SongList></SongList>}</div>;
}

export default Home;
