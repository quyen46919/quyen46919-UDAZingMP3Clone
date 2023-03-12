import React from "react";
import { CgPlayButtonO } from "react-icons/cg";
import { FiMoreHorizontal } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";
import "./styles.scss";
export default function Zing008() {
  const SongList = [
    {
      id: 1,
      name: "Ơ Vậy là yêu chưa ?",
      thumbnail:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/c/6/8/1/c681a476fea04ced2507de9ee98eaca2.jpg",
      author: "Thien Tu",
    },
    {
      id: 2,
      name: "Bí Mật Nhỏ",
      thumbnail:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/0/4/c/1/04c1bf0f08a5ba8c42ee2fd26e76fd4e.jpg",
      author: "Bray",
    },
    {
      id: 3,
      name: "Nơi Kí Ức Bắt Đầu",
      thumbnail:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/9/d/7/3/9d732b36ada16dd3eef0d64f487dc1c3.jpg",
      author: "Thien Tu",
    },
    {
      id: 4,
      name: "Hoa cưới",
      thumbnail:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/6/7/4/5/67457e22235fbfed0bcfa2d432e61486.jpg",
      author: "Thien Tu",
    },
    {
      id: 5,
      name: "3 giay nho 1 doi thuongasdasdas",
      thumbnail:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/6/7/4/5/67457e22235fbfed0bcfa2d432e61486.jpg",
      author: "Thien Tu",
    },
  ];
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
