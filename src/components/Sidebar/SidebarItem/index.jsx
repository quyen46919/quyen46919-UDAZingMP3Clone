import React from 'react';
import { Play } from '../../Icons';
import './styles.scss';

function SidebarItem(props) {
  const { id, title, icon, isPlay, isLive, handleActiveItem, activeItem } =
    props;

  return (
    <li
      className={`item ${activeItem === id ? 'item--active' : ''}`}
      onClick={() => handleActiveItem(id)}
    >
      <a
        href="#!"
        className="item__link"
      >
        <img
          src={icon}
          alt={title}
        />
        <p className="item__link--title">{title}</p>
        {isPlay && (
          <span className="item__icon-play">
            <img
              src={Play}
              alt="Play"
            />
          </span>
        )}
        {isLive && (
          <img
            src="https://zjs.zmdcdn.me/zmp3-desktop/dev/147506/static/media/live-tag.e25dd240.svg"
            alt="Live"
          />
        )}
      </a>
    </li>
  );
}

export default SidebarItem;
