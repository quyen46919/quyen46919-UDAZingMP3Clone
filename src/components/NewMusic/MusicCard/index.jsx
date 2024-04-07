import React from 'react';
import './style.scss';
import heart_icon from '../../../../assets/icons/heart_icon.svg';
import play_icon from '../../../../assets/icons/play_icon.svg';
import dot_icon from '../../../../assets/icons/dot_icon.svg';

function MusicCard(props) {
    const { image, title, singer } = props;
    return (
        <div className="card">
            <div className="card__avt">
                <div className="playlist-action">
                    <img src={heart_icon} alt="" />
                    <img className="play_icon" src={play_icon} alt="" />
                    <img src={dot_icon} alt="" />
                </div>
                <img className="avt_image" src={image} alt="" title={title} />
            </div>
            <div className="card__title">{title}</div>
            <div className="card__name-singer">
                {singer.split(', ').map((sing) => (
                    <>
                        <span className="card__name-sing">{sing}</span>
                        <span>, </span>
                    </>
                ))}
            </div>
        </div>
    );
}

export default MusicCard;
