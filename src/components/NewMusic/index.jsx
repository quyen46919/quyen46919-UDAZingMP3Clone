import React from 'react';
import './style.scss';
import MusicCard from './MusicCard';
import musics from './../../test/data/NewMusicData';

function NewMusic(props) {
    return (
        <div className="new_music">
            <h2 className="headline">Nhạc mới mỗi ngày</h2>
            <div className="cards">
                {musics.map((music, index) => (
                    <MusicCard
                        key={music.id}
                        title={music.title}
                        image={music.image}
                        singer={music.singer}
                    />
                ))}
            </div>
        </div>
    );
}

export default NewMusic;
