import React from 'react';
import HeartIcon from '../../../assets/icons/heart.svg';
import PlayIcon from '../../../assets/icons/play.svg';
import Dots from '../../../assets/icons/dots.svg';
import './styles.scss';
function recentSong(props) {
    const { thumbnail, title } = props;
    return (
        <div className="recent-song" title={title}>
            <div className="recent-song__img">
                <img src={thumbnail} alt="" />
                <div className="recent-song__icons">
                    <div className="recent-song__icon--left">
                        <img src={HeartIcon} alt="" />
                    </div>
                    <div className="recent-song__icon--center">
                        <img src={PlayIcon} alt="" />
                    </div>
                    <div className="recent-song__icon--right">
                        <img src={Dots} alt="" />
                    </div>
                </div>
                <div className="recent-song__img--overlay"></div>
            </div>
            <p className="recent-song__title">{title}</p>
        </div>
    );
}

export default recentSong;
