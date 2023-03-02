import React from 'react';
// import PropTypes from 'prop-types';

// PartnerList.propTypes = {
    
// };

import Partner from '../Partner'
import './style.scss'
function PartnerList(props) {
    const partnerList = [
        {
            id: 1,
            images: "https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/kakao.png",
            details: "",
        },
        {
            id: 2,
            images: "https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/route-note.png",
            details: "",
        },
        {
            id: 3,
            images: "https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/empire.png",
            details: "",
        },
        {
            id: 4,
            images: "https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/SM-Entertainment.png",
            details: "",
        },
        {
            id: 5,
            images: "https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/universal-1.png",
            details: "",
        },
        {
            id: 6,
            images: "https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/hikoon.png",
            details: "",
        },
        {
            id: 7,
            images: "https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/orcahrd.png",
            details: "",
        },
        {
            id: 8,
            images: "https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/ingrooves.png",
            details: "",
        },
        {
            id: 9,
            images: "https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/genie.png",
            details: "",
        },
        {
            id: 10,
            images: "https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/FUGA.png",
            details: "",
        },
        {
            id: 11,
            images: "https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/believe.png",
            details: "",
        },
        {
            id: 12,
            images: "https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/danal.png",
            details: "",
        },
        {
            id: 13,
            images: "https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/jsj.png",
            details: "",
        },
        {
            id: 14,
            images: "https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/beggers.png",
            details: "",
        },
        {
            id: 15,
            images: "https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/sony.png",
            details: "",
        },
        {
            id: 16,
            images: "https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/monstercat.png",
            details: "",
        },
    ]
    return (
        <div className='partner-list'>
            {
                <span className='partner-list__title'>ĐỐI TÁC ÂM NHẠC</span>
            },

            {
                partnerList.map((partner) => (
                    <Partner 
                        key={partner.id}
                        images={partner.images}
                        details={partner.details}
                    />
                ))
            }
        </div>
    );
}

export default PartnerList;