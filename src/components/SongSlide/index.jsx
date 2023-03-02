import React from 'react';
import './styles.scss';
function SongSlide(props) {
    const { thumbnail } = props;
    return (
        <div className="song-slide">
            <img src={thumbnail} alt="" />
        </div>
    );
}

export default SongSlide;
