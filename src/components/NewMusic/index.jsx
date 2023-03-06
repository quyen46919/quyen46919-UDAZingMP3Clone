import { AiOutlineRight } from 'react-icons/ai';
import { CgPlayButtonO } from 'react-icons/cg';
import { listMusic } from '../../test/data/newMusicData';
import Slide from '../Slide/Slide';
import { SwiperSlide } from 'swiper/react';
import './styles.scss';

export default function NewMusic() {
    const chunkSize = 9;
    const listMusicSize = listMusic.slice(0, chunkSize);
    return (
        <Slide
            className='newmusic'
            slidesPerView={3}
            slidesPerGroup={3}
            renderSlide={listMusicSize.map((music, index) => {
                {
                    return listMusicSize.length - 1 === index ? (
                        <SwiperSlide key={index}>
                            <div className='newmusic__item--viewall'>
                                <p>XEM TẤT CẢ</p>
                            </div>
                        </SwiperSlide>
                    ) : (
                        <SwiperSlide key={index} className='newmusic__list'>
                            <div className='newmusic__item'>
                                <div className='newmusic__item-img'>
                                    <img className='newmusic__item-thum' src={music.thumbnail} alt={music.name} />
                                    <CgPlayButtonO className='newmusic__item-icon--play' />
                                </div>
                                <div className='newmusic__item-group'>
                                    <div className='newmusic__item-info'>
                                        <p className='newmusic__item-name'>{music.name}</p>
                                        <p className='newmusic__item-singer'>{music.singer}</p>
                                    </div>
                                    <div className='newmusic__item-other'>
                                        <p className='newmusic__item-trending'>{music.rank}</p>
                                        <p className='newmusic__item-time'>{music.time}</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    );
                }
            })}
        >
            <div className='newmusic__heading'>
                <p className='newmusic__heading-name'>Nhạc Mới</p>
                <p className='newmusic__heading-all'>
                    <span>TẤT CẢ</span>
                    <span className='newmusic__heading-icon'>
                        <AiOutlineRight />
                    </span>
                </p>
            </div>
        </Slide>
    );
}
