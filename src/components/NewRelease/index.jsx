import React, { useState } from 'react';
import "./styles.scss"
import MusicItem from './MusicItem';

const musicList = [
    {
        id: 1,
        name: "9 8 7",
        thumb: "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/5/d/7/3/5d734b4e89cae2f418b453d26a6d7eac.jpg",
        singer: "T.R.I",
        time_release: "20 giờ trước",
        region: "vi" 
    },
    {
        id: 2,
        name: "I DON'T WANNA BE LIKE YOU",
        thumb: "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/5/c/8/f/5c8fad2f60d8ebc268144537874d6379.jpg",
        singer: "Ruel",
        time_release: "23 giờ trước",
        region: "gl"
    },
    {
        id: 3,
        name: "Nhìn vào nơi ấy",
        thumb: "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/4/d/2/6/4d262934cd7f5c957bd31eb889393284.jpg",
        singer: "MTV, Phúc Bồ",
        time_release: "Hôm qua", 
        region: "vi"
    },
    {
        id: 4,
        name: "Floral Sense",
        thumb: "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/5/8/2/b/582bf036c78a4e9efde3b95bade07ea6.jpg",
        singer: "YESUNG, WINTER",
        time_release: "Hôm qua", 
        region: "gl"
    },
    {
        id: 5,
        name: "Good Time",
        thumb: "	https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/d/6/d/5/d6d539b88e186987b8e80e4571e11620.jpg",
        singer: "SummerV, KOO",
        time_release: "2 ngày trước",
        region: "gl"
    },
    {
        id: 6,
        name: "Die For You (Remix)",
        thumb: "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/c/6/f/c/c6fc6df13e01d204ae71b65326bca7ff.jpg",
        singer: "The Weeknd, Ariana Grande",
        time_release: "3 ngày trước",
        region: "gl"
    },
    {
        id: 7,
        name: "Chi Con Trong Giac Mo (ft Lemese)",
        thumb: "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/6/9/f/7/69f774ec81c3168ea1f40ffcc6b1c99b.jpg",
        singer: "Min Min, Lemese",
        time_release: "Hôm qua",
        region: "vi"
    },
    {
        id: 8,
        name: "Không Chờ Đợi Nữa",
        thumb: "	https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/9/f/b/6/9fb6bec2bcf4e9e73cc1470533757956.jpg",
        singer: "Khải",
        time_release: "5 ngày trước",
        region: "vi"
    },
    {
        id: 9,
        name: "Floral Sense",
        thumb: "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/5/8/2/b/582bf036c78a4e9efde3b95bade07ea6.jpg",
        singer: "YESUNG, WINTER",
        time_release: "3 ngày trước",
        region: "gl"
    },
    {
        id: 10,
        name: "Good Time",
        thumb: "	https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/d/6/d/5/d6d539b88e186987b8e80e4571e11620.jpg",
        singer: "SummerV, KOO",
        time_release: "2 ngày trước",
        region: "gl"
    },
    {
        id: 11,
        name: "Die For You (Remix)",
        thumb: "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/c/6/f/c/c6fc6df13e01d204ae71b65326bca7ff.jpg",
        singer: "The Weeknd, Ariana Grande",
        time_release: "3 ngày trước",
        region: "gl"
    },
    {
        id: 12,
        name: "Chi Con Trong Giac Mo (ft Lemese)",
        thumb: "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/6/9/f/7/69f774ec81c3168ea1f40ffcc6b1c99b.jpg",
        singer: "Min Min, Lemese",
        time_release: "2 ngày trước",
        region: "vi"
    },
    {
        id: 13,
        name: "Nuôi Ong Tay Áo",
        thumb: "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/8/e/c/8/8ec80f1743eca1e56c691674b86de743.jpg",
        singer: "Ngọc Kara, Jombie",
        time_release: "2 ngày trước",
        region: "vi"
    },
    {
        id: 14,
        name: "sleeping beauty - A COLORS SHOW",
        thumb: "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/d/7/c/f/d7cf7b3eeae557f23535a1e2da273c74.jpg",
        singer: "tlinh",
        time_release: "2 ngày trước",
        region: "vi"
    },
    {
        id: 15,
        name: "7 tỷ người, tìm thấy anh rồi (From \"Siêu Trợ Lý\")",
        thumb: "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/5/a/e/c/5aec1c0c7b41a263f810e901819ef3b7.jpg",
        singer: "Orange",
        time_release: "2 ngày trước",
        region: "vi"
    },
    {
        id: 16,
        name: "Vàng Bạc Châu Báu",
        thumb: "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/7/9/d/8/79d8eaab3213dde29a72e2f9cc279751.jpg",
        singer: "VP BAVUONG",
        time_release: "3 ngày trước",
        region: "vi"
    },
    {
        id: 17,
        name: "Kết Thúc Mở",
        thumb: "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/5/6/6/f/566ff039e0f8c914f56cfb3d56307ad8.jpg",
        singer: "Vương Anh Tú",
        time_release: "3 ngày trước",
        region: "vi"
    },
    {
        id: 18,
        name: "Mẹ Chở Con Đi",
        thumb: "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/b/e/9/9/be9998d14fcf57d0e6ea8f3f230abd80.jpg",
        singer: "Phạm Quỳnh Anh, Minh Hằng, Đông Nhi",
        time_release: "3 ngày trước",
        region: "vi"
    },
    {
        id: 19,
        name: "Đến Đón Em Đi Chơi Đi Anh",
        thumb: "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/1/1/3/1/1131ef0fccd2f19366b2468e08b4a5ba.jpg",
        singer: "Cầm, Duy Mạnh",
        time_release: "4 ngày trước",
        region: "vi"
    },
    {
        id: 20,
        name: "River",
        thumb: "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/b/9/b/5/b9b571457a551be3b53396c0094fa901.jpg",
        singer: "Miley Cyrus",
        time_release: "3 ngày trước",
        region: "gl"
    },
    {
        id: 21,
        name: "SET ME FREE",
        thumb: "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/d/7/c/f/d7cf7b3eeae557f23535a1e2da273c74.jpg",
        singer: "TWICE",
        time_release: "3 ngày trước",
        region: "gl"
    },
    {
        id: 22,
        name: "Miracle",
        thumb: "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/e/4/6/7/e4674c6ae29a20a21aecda7e64ca98d3.jpg",
        singer: "Calvin Harris, Ellie Goulding",
        time_release: "3 ngày trước",
        region: "gl"
    },
    {
        id: 23,
        name: "Run Till Dark",
        thumb: "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/d/2/c/2/d2c2df8d1197a5adeec52d6092162d78.jpg",
        singer: "R3hab, Now United",
        time_release: "3 ngày trước",
        region: "gl"
    },
    {
        id: 24,
        name: "The Hard Way",
        thumb: "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/a/c/6/c/ac6cacff49a3924178973330675046a4.jpg",
        singer: "PNAU, Khalid",
        time_release: "3 ngày trước",
        region: "gl"
    },
]

function NewRelease() {
    const [activeTab, setActiveTab] = useState("new-release-tab-all")
    const [filter, setFilter] = useState("gl")

    const handleAvtiveTab = (e) => {
        let id = e.target.id
        setActiveTab(id)
        if(id === "new-release-tab-vi") setFilter("vi")
        else if(id === "new-release-tab-gl") setFilter("gl")
        else setFilter("")
        
    }

    const filterArr = musicList.filter(music => filter === "" || filter === music.region)

    return (
        <div className='new-release'>
            <h2 className="new-release__heading">Mới Phát Hành</h2>
            <div className="new-release__nav">
                <div className="new-release__tabs">
                    <button id="new-release-tab-all" onClick={handleAvtiveTab} className={`new-release__tab ${activeTab == "new-release-tab-all"? "active" : ""}`}>TẤT CẢ</button>
                    <button id="new-release-tab-vi" onClick={handleAvtiveTab} className={`new-release__tab ${activeTab == "new-release-tab-vi"? "active" : ""}`}>VIỆT NAM</button>
                    <button id="new-release-tab-gl" onClick={handleAvtiveTab} className={`new-release__tab ${activeTab == "new-release-tab-gl"? "active" : ""}`}>QUỐC TẾ</button>
                </div>
                <a className="new-release__showAll">TẤT CẢ <i class="fa-solid fa-chevron-right"></i></a>
            </div>
            <div className="new-release__music-wrapper">
                <div className="new-release__music-column column-1">
                    {
                        filterArr.slice(0, 4).map((musicItem)=>(
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
                <div className="new-release__music-column column-2">
                    {
                        filterArr.slice(4, 8).map((musicItem)=>(
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
                <div className="new-release__music-column column-3">
                    {
                        filterArr.slice(8, 12).map((musicItem)=>(
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
        </div>
    );
}

export default NewRelease;