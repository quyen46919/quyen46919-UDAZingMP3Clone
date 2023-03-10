import React from 'react';
import "../MusicItem/styles.scss"

function MusicItem(props) {
    const {name, thumb, singer, time_release} = props
    return (
        <a href='#' className="music-item">
            <div className="music-item__music-thumb">
                <img src={thumb} alt={name} srcset="" />
                <i class="music-item__thumb-play fa-solid fa-play"></i>
            </div>
            <div className="music-item__info">
                <p className="music-item__name">{name}</p>
                <p className="music-item__singer">{singer}</p>
                <p className="music-item__time">{time_release}</p>
            </div>
            <div className="music-item__more"><i class="fa-solid fa-ellipsis"></i></div>
        </a>
    );
}

export default MusicItem;