import React from 'react';
import "./styles.scss"


function NewRelease() {
    return (
        <div className='new-release'>
            <h2 className="new-release__heading">Mới Phát Hành</h2>
            <div className="new-release__nav">
                <div className="new-release__tabs">
                    <div className="new-release__tab">TẤT CẢ</div>
                    <div className="new-release__tab">VIỆT NAM</div>
                    <div className="new-release__tab">QUỐC TẾ</div>
                </div>
                <div className="new-release__showAll">TẤT CẢ &gt;</div>
            </div>
            <div className="new-release__music-wrapper">
                <div className="new-release__music-block">
                    <div className="new-release__music-thumb">
                        <img src="https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/f/6/b/2/f6b229c74cc085a3964fd57a49da5415.jpg" alt="" srcset="" />
                    </div>
                    <div className="new-release__info">
                        <p className="new-release__name">Bí mật nhỏ</p>
                        <p className="new-release__singer">Bray, Hoàng Tôn</p>
                        <p className="new-release__time">3 ngày trước</p>
                    </div>
                    <div className="new-release__more">:</div>
                </div>
            </div>
        </div>
    );
}

export default NewRelease;