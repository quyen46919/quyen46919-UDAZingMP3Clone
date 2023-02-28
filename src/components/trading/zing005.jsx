import React from "react";
const Trading = () => {
  const songs = [
    {
      id: 1,
      name: "nhac",
      thumbnail:
        "https://www.google.com/imgres?imgurl=https%3A%2F%2Favatar-ex-swe.nixcdn.com%2Fplaylist%2F2022%2F10%2F11%2Fd%2F4%2F8%2F5%2F1665486043600_500.jpg&imgrefurl=https%3A%2F%2Fwww.nhaccuatui.com%2Ftop100%2Ftop-100-nhac-tre.m3liaiy6vVsF.html&tbnid=H3p3EjSZdvgrCM&vet=12ahUKEwiIsoTaqrj9AhVQAN4KHfkUDE4QMygKegUIARDpAQ..i&docid=i-aEb15x3EaMvM&w=500&h=500&itg=1&q=nhac%20tre&ved=2ahUKEwiIsoTaqrj9AhVQAN4KHfkUDE4QMygKegUIARDpAQ",
    },
    {
      id: 2,
      name: "nhac",
      thumbnail:
        "https://www.google.com/imgres?imgurl=https%3A%2F%2Favatar-ex-swe.nixcdn.com%2Fplaylist%2F2022%2F10%2F11%2Fd%2F4%2F8%2F5%2F1665486043600_500.jpg&imgrefurl=https%3A%2F%2Fwww.nhaccuatui.com%2Ftop100%2Ftop-100-nhac-tre.m3liaiy6vVsF.html&tbnid=H3p3EjSZdvgrCM&vet=12ahUKEwiIsoTaqrj9AhVQAN4KHfkUDE4QMygKegUIARDpAQ..i&docid=i-aEb15x3EaMvM&w=500&h=500&itg=1&q=nhac%20tre&ved=2ahUKEwiIsoTaqrj9AhVQAN4KHfkUDE4QMygKegUIARDpAQ",
    },
    {
      id: 3,
      name: "nhac",
      thumbnail:
        "https://www.google.com/imgres?imgurl=https%3A%2F%2Favatar-ex-swe.nixcdn.com%2Fplaylist%2F2022%2F10%2F11%2Fd%2F4%2F8%2F5%2F1665486043600_500.jpg&imgrefurl=https%3A%2F%2Fwww.nhaccuatui.com%2Ftop100%2Ftop-100-nhac-tre.m3liaiy6vVsF.html&tbnid=H3p3EjSZdvgrCM&vet=12ahUKEwiIsoTaqrj9AhVQAN4KHfkUDE4QMygKegUIARDpAQ..i&docid=i-aEb15x3EaMvM&w=500&h=500&itg=1&q=nhac%20tre&ved=2ahUKEwiIsoTaqrj9AhVQAN4KHfkUDE4QMygKegUIARDpAQ",
    },
  ];
  return (
    <div className="song-list">
      {songs.map((song) => {
        <Trading id={song.id} name={song.name} thumbnail={song.thumbnail} />;
      })}
    </div>
  );
};

export default Trading;
