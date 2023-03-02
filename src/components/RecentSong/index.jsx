import React from 'react';
import HeartIcon from '../../../assets/icons/heart.svg';
import PlayIcon from '../../../assets/icons/play.svg';
import Dots from '../../../assets/icons/dots.svg';
import './styles.scss';
function RecentSong(props) {
    const { thumbnail, title } = props;
    return (
        <div className="recentSong" title={title}>
            <div className="recentSong__img">
                <img src={thumbnail} alt="" />
                <div className="recentSong-icons">
                    <div className="recentSong-icon__left">
                        <img src={HeartIcon} alt="" />
                    </div>
                    <div className="recentSong-icon__center">
                        <img src={PlayIcon} alt="" />
                    </div>
                    <div className="recentSong-icon__right">
                        <img src={Dots} alt="" />
                    </div>
                </div>
                <div className="recentSong__img--overlay"></div>
            </div>

            <p className="recentSong__title">{title}</p>
        </div>
    );
}

export default RecentSong;
