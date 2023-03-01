import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './style.scss';
import {
    faPause,
    faHeart,
    faDotCircle,
} from '@fortawesome/free-solid-svg-icons';
Song.prototype = {
    data: PropTypes.array.isRequired,
};
function Song(props) {
    const { data } = props;
    return (
        <div className="song-list">
            <p className="song-list__title">Gợi ý kết quả</p>
            {data.map((item, index) => (
                <div className="song" key={index}>
                    <div className="song__left">
                        <div className="song__left--photo">
                            <div className="song__left--posi">
                                <img
                                    src={item.avatar}
                                    alt=""
                                    className="song__left--image"
                                />
                                <span className="song__left--pause">
                                    <FontAwesomeIcon icon={faPause} />
                                </span>
                            </div>
                        </div>
                        <div className="song__left--des">
                            <p className="song__left--name">{item.Title}</p>
                            <p className="song__left--author">{item.author}</p>
                        </div>
                    </div>
                    <div className="song__right">
                        <span className="Song__right--hear">
                            <FontAwesomeIcon icon={faHeart} />
                        </span>
                        <span className="song__right--dot">
                            <FontAwesomeIcon icon={faDotCircle} />
                        </span>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Song;
