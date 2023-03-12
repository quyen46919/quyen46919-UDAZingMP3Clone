import React, { useState } from 'react';
import RecentSong from '../RecentSong';
import data from '../../test/data/datarecentlist';
import ArrowNext from '../../../assets/icons/arrownext.svg';
import './styles.scss';
function RecentList(props) {
    const [recentList, setRecentList] = useState(data);
    return (
        <div className="recent-list">
            <div className="recent-list__title">
                <p className="recent-list__title--left">Gần Đây</p>
                <a href="#" className="recent-list__title--right">
                    TẤT CẢ
                    <img src={ArrowNext} alt="" />
                </a>
            </div>
            <div className="recent-list__wrapper">
                {recentList.map((song) => (
                    <RecentSong
                        key={song.id}
                        thumbnail={song.thumbnail}
                        title={song.title}
                    />
                ))}
            </div>
        </div>
    );
}

export default RecentList;
