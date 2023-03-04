import React from "react";
// import PropTypes from "prop-types";
// import Song from "../Song";
import "./styles.scss";
import { BiPlayCircle } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
function SongList(props) {
  const SongList = [
    {
      id: 1,
      name: "nhạc trẻ mới nhất hiện",
      title: "nhạc hay đầy hứa hẹn",
      thumbnail:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/3/f/9/f/3f9f8810dd3f650b9feb00bf470032ce.jpg",
    },
    {
      id: 2,
      name: "nhạc trẻ mới nhất hiện",
      title: "nhạc hay đầy hứa hẹn",
      author: "nguyen minh hau",
      thumbnail:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/4/3/b/1/43b1a01b4a9a11cd4d03392c0904e072.jpg",
    },
    {
      id: 3,
      name: "nhạc trẻ mới nhất hiện nay",
      title: "nhạc hay đầy hứa hẹn",
      author: "nguyen minh hau",
      thumbnail:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/images/b/0/4/c/b04c5a560ddbade0b9af9e36b165907e.jpg",
    },
    {
      id: 4,
      name: "nhạc trẻ mới nhất hiện nay",
      title: "nhạc hay đầy hứa hẹn",
      author: "nguyen minh hau",
      thumbnail:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/4/2/5/3/425334e6f252b8c34d74d16177a5eb9d.jpg",
    },
    {
      id: 5,
      name: "nhạc trẻ mới nhất hiện nay",
      title: "nhạc hay đầy hứa hẹn",
      thumbnail:
        "https://photo-resize-zmp3.zmdcdn.me/https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/9/b/1/9/9b19d88c21fb391db19979a8eda60bc8.jpg/cover/4/3/b/1/43b1a01b4a9a11cd4d03392c0904e072.jpg",
      author: "nguyen minh hau",
    },
  ];
  return (
    <>
      <div className="song__list">
        <h3>Lua chon hom nay</h3>
        <div className="song__card">
          {SongList.map((song) => (
            <div className="song__card-container">
              <div className="song__card-container--img">
                <img src={song.thumbnail} alt={song.name} />

                <AiOutlineHeart className="song__card-container--heart"></AiOutlineHeart>

                <BiPlayCircle className="song__card-container--play"></BiPlayCircle>

                <BsThreeDots className="song__card-container--dots"></BsThreeDots>
              </div>
              <div className="song__card-container--text">
                <p className="song__card-container--text-name">{song.name}</p>
                <span className="song__card-container--text-author">
                  {song.author}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default SongList;
