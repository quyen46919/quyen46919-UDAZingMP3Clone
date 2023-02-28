import React from "react";

function Zing008(props) {
  const SongList = [
    {
      id: 1,
      name: "3 giay nho 1 doi thuong",
      thumbnail: "/",
      author: "Thien Tu",
    },
    {
      id: 2,
      name: "3 giay nho 1 doi thuong",
      thumbnail: "/",
      author: "Thien Tu",
    },
    {
      id: 3,
      name: "3 giay nho 1 doi thuong",
      thumbnail: "/",
      author: "Thien Tu",
    },
    {
      id: 4,
      name: "3 giay nho 1 doi thuong",
      thumbnail: "/",
      author: "Thien Tu",
    },
  ];
  return (
    <div className="song-list">
      {SongList.map((song) => (
        <img key={song.id} id={song.id} name={song.name} src={song.thumbnail} />
      ))}
    </div>
  );
}

export default Zing008;
