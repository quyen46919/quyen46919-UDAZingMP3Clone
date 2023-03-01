//cd quyen46919-UDAZingMP3Clone

import React from 'react';
import Partner from '../Partner';
import './style.scss'


function PartnerList(props) {
    const  partnerList = [
        {
            id: "1",
            images: "https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/taihe.png"
        },
        {
            id: "2",
            images: "https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/ingrooves.png"
        },
        {
            id: "3",
            images: "https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/monstercat.png"
        },
        {
            id: "4",
            images: "https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/stone-music.png"
        },
        {
            id: "5",
            images: "https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/SM-Entertainment.png"
        },
        {
            id: "6",
            images: "https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/jsj.png"
        },
        {
            id: "7",
            images: "https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/genie.png"
        },
        {
            id: "8",
            images: "https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/beggers.png"
        },
        {
            id: "9",
            images: "https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/kakao.png"
        },
        {
            id: "10",
            images: "https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/empire.png"
        },
        {
            id: "11",
            images: "https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/FUGA.png"
        },
        {
            id: "12",
            images: "https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/believe.png"
        },
        {
            id: "13",
            images: "https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/route-note.png"
        },
        {
            id: "14",
            images: "https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/yg.png"
        },
        {
            id: "15",
            images: "https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/orcahrd.png"
        },
        {
            id: "16",
            images: "https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/universal-1.png"
        },
    
    ];


    return (
        <div className='partner-list'>
            {/* {
                <span>ĐỐI TÁC ÂM NHẠC</span>
            }, */}
            {
                partnerList.map((partner) => (
                    <Partner 
                        key={partner.id}
                        images={partner.images}
                    />
                ))
            },
        </div>
    );
}

export default PartnerList;