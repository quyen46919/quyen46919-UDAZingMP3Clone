import React from "react";
import { CgPlayButtonO } from "react-icons/cg";
import { FiMoreHorizontal } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";
import { SongList } from "../../test/data";
import { SwiperSlide } from "swiper/react";
import Slide from "../Slide/Slide";
import "./styles.scss";

export default function Zing008() {
  const ListSize = 7;
  const SongListSize = SongList.slice(0, ListSize);
  return (
    // <div className="home__song-list">
    //   {SongList.map((song) => (
    //     <div className="home__song">
    //       <div className="home__song--img">
    //         <img name={song.name} src={song.thumbnail} />
    //         <FiMoreHorizontal className="home__song--icon-more"></FiMoreHorizontal>

    //         <CgPlayButtonO className="home__song--icon-play"></CgPlayButtonO>
    //         <AiOutlineHeart className="home__song--icon-heart"></AiOutlineHeart>
    //       </div>
    //       <div className="home__song--content">
    //         <h3>{song.name}</h3>
    //         <p>{song.author}</p>
    //       </div>
    //     </div>
    //   ))}
    // </div>
    <Slide
      className="home__song-list"
      slidesPerView={5}
      renderSlide={SongListSize.map((song, index) => {
        return (
          <SwiperSlide key={index}>
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
          </SwiperSlide>
        );
      })}
    ></Slide>
  );
}
