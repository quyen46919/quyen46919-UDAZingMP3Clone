import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.scss";
// import { data, filterData } from "../../data/test";
import {
  faPause,
  faHeart,
  faDotCircle,
} from "@fortawesome/free-solid-svg-icons";

function Song(props) {
  const { data } = props;
  return (
    <div className="SongList">
      <p className="Song__Title">Gợi ý kết quả</p>
      {data.map((item, index) => (
        <div className="Song">
          <div className="Song__left">
            <div className="Song__left--photo">
              <div className="Song__left--posi">
                <img src={item.avatar} alt="" className="Song__left--image" />
                <span className="Song__left--pause">
                  <FontAwesomeIcon icon={faPause} />
                </span>
              </div>
            </div>
            <div className="Song__left--des">
              <p className="Song__left--name">{item.Title}</p>
              <p className="Song__left--author">{item.author}</p>
            </div>
          </div>
          <div className="Song__right">
            <span className="Song__right--hear">
              <FontAwesomeIcon icon={faHeart} />
            </span>
            <span className="Song__right--dot">
              <FontAwesomeIcon icon={faDotCircle} />
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Song;
