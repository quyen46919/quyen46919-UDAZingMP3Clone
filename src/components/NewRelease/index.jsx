import React from 'react';
import "./styles.scss"
import MusicItem from '../MusicItem';

function NewRelease() {
    const musicList = [
        {
            id: 1,
            name: "9 8 7",
            thumb: "	https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/5/d/7/3/5d734b4e89cae2f418b453d26a6d7eac.jpg",
            singer: "T.R.I",
            time_release: "Hôm qua", 
        },
        {
            id: 2,
            name: "I DON'T WANNA BE LIKE YOU",
            thumb: "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/5/c/8/f/5c8fad2f60d8ebc268144537874d6379.jpg",
            singer: "Ruel",
            time_release: "2 ngày trước", 
        },
        {
            id: 3,
            name: "Nhìn vào nơi ấy",
            thumb: "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/4/d/2/6/4d262934cd7f5c957bd31eb889393284.jpg",
            singer: "MTV, Phúc Bồ",
            time_release: "2 ngày trước", 
        },
        {
            id: 4,
            name: "Floral Sense",
            thumb: "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/5/8/2/b/582bf036c78a4e9efde3b95bade07ea6.jpg",
            singer: "YESUNG, WINTER",
            time_release: "3 ngày trước", 
        },
        {
            id: 5,
            name: "Good Time",
            thumb: "	https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/d/6/d/5/d6d539b88e186987b8e80e4571e11620.jpg",
            singer: "SummerV, KOO",
            time_release: "2 ngày trước", 
        },
        {
            id: 6,
            name: "Die For You (Remix)",
            thumb: "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/c/6/f/c/c6fc6df13e01d204ae71b65326bca7ff.jpg",
            singer: "The Weeknd, Ariana Grande",
            time_release: "3 ngày trước", 
        },
        {
            id: 7,
            name: "Chi Con Trong Giac Mo (ft Lemese)",
            thumb: "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/6/9/f/7/69f774ec81c3168ea1f40ffcc6b1c99b.jpg",
            singer: "Min Min, Lemese",
            time_release: "2 ngày trước", 
        },
        {
            id: 8,
            name: "Không Chờ Đợi Nữa",
            thumb: "	https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/9/f/b/6/9fb6bec2bcf4e9e73cc1470533757956.jpg",
            singer: "Khải",
            time_release: "5 ngày trước", 
        },
        {
            id: 9,
            name: "Floral Sense",
            thumb: "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/5/8/2/b/582bf036c78a4e9efde3b95bade07ea6.jpg",
            singer: "YESUNG, WINTER",
            time_release: "3 ngày trước", 
        },
        {
            id: 10,
            name: "Good Time",
            thumb: "	https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/d/6/d/5/d6d539b88e186987b8e80e4571e11620.jpg",
            singer: "SummerV, KOO",
            time_release: "2 ngày trước", 
        },
        {
            id: 11,
            name: "Die For You (Remix)",
            thumb: "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/c/6/f/c/c6fc6df13e01d204ae71b65326bca7ff.jpg",
            singer: "The Weeknd, Ariana Grande",
            time_release: "3 ngày trước", 
        },
        {
            id: 12,
            name: "Chi Con Trong Giac Mo (ft Lemese)",
            thumb: "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/6/9/f/7/69f774ec81c3168ea1f40ffcc6b1c99b.jpg",
            singer: "Min Min, Lemese",
            time_release: "2 ngày trước", 
        },
        {
            id: 13,
            name: "Không Chờ Đợi Nữa",
            thumb: "	https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/9/f/b/6/9fb6bec2bcf4e9e73cc1470533757956.jpg",
            singer: "Khải",
            time_release: "5 ngày trước", 
        },
        {
            id: 14,
            name: "Không Chờ Đợi Nữa",
            thumb: "	https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/9/f/b/6/9fb6bec2bcf4e9e73cc1470533757956.jpg",
            singer: "Khải",
            time_release: "5 ngày trước", 
        },
    ]

    return (
        <div className='new-release'>
            <h2 className="new-release__heading">Mới Phát Hành</h2>
            <div className="new-release__nav">
                <div className="new-release__tabs">
                    <button className="new-release__tab active">TẤT CẢ</button>
                    <button className="new-release__tab">VIỆT NAM</button>
                    <button className="new-release__tab">QUỐC TẾ</button>
                </div>
                <a className="new-release__showAll">TẤT CẢ <i class="fa-solid fa-chevron-right"></i></a>
            </div>
            <div className="new-release__music-wrapper">
                {
                    musicList.slice(0, 12).map((musicItem)=>(
                        <MusicItem 
                            key={musicItem.id} 
                            name={musicItem.name}
                            thumb={musicItem.thumb}
                            singer={musicItem.singer}
                            time_release={musicItem.time_release}    
                        />
                    ))
                }
            </div>
        </div>
    );
}

export default NewRelease;