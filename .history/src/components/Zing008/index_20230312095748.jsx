import React from "react";
import { SongList } from "../../../src/test/data";
import { CgPlayButtonO } from "react-icons/cg";
import { FiMoreHorizontal } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import "./styles.scss";

export default function Zing008() {
  const sizeSong = 7;
  const songListSize = SongList.slice(0, sizeSong);
  return (
    <div className="home__song-list">
      {SongList.map((song) => (
        <div className="home__song">
          <div className="home__song--img">
            <img name={song.name} src={song.thumbnail} />
            <FiMoreHorizontal className="home__song--icon-more"></FiMoreHorizontal>

            <CgPlayButtonO className="home__song--icon-play"></CgPlayButtonO>
            <AiOutlineHeart className="home__song--icon-heart"></AiOutlineHeart>
          </div>
          <div className="home__song--content">
            <h3>{song.name}</h3>
            <p>{song.author}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
