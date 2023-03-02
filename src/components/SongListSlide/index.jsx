import React, { useState } from 'react';
import SongSlide from '../SongSlide/index';
import data from './../../test/data/datasonglist';
import ArrowBack from '../../../assets/icons/arrowback.svg';
import ArrowNext from '../../../assets/icons/arrownext.svg';
import './styles.scss';
function SongListSlide(props) {
    const [songList, setSongList] = useState(data);
    return (
        <div className="list-slide">
            {songList.slice(0, 3).map((song) => (
                <SongSlide
                    id={song.id}
                    key={song.id}
                    thumbnail={song.thumbnail}
                />
            ))}
            <div className="next-slide">
                <img src={ArrowNext} alt="" />
            </div>
            <div className="prev-slide">
                <img src={ArrowBack} alt="" />
            </div>
        </div>
    );
}

export default SongListSlide;
