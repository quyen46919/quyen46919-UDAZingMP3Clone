import React from 'react';
import PropTypes from 'prop-types';
import './style.scss'

const  Array = [
    {
        id: "1",
        images: "https://cdn.tgdd.vn/hoi-dap/1353229/cach-dang-ky-tai-khoan-vip-zing-mp3-de-tai-nghe-nhac-chat%20(21-2)-800x600.jpg"
    },
    {
        id: "2",
        images: "https://cdn.tgdd.vn/hoi-dap/1353229/cach-dang-ky-tai-khoan-vip-zing-mp3-de-tai-nghe-nhac-chat%20(21-2)-800x600.jpg"
    },
    {
        id: "3",
        images: "https://cdn.tgdd.vn/hoi-dap/1353229/cach-dang-ky-tai-khoan-vip-zing-mp3-de-tai-nghe-nhac-chat%20(21-2)-800x600.jpg"
    },
    {
        id: "4",
        images: "https://cdn.tgdd.vn/hoi-dap/1353229/cach-dang-ky-tai-khoan-vip-zing-mp3-de-tai-nghe-nhac-chat%20(21-2)-800x600.jpg"
    },
    {
        id: "5",
        images: "https://cdn.tgdd.vn/hoi-dap/1353229/cach-dang-ky-tai-khoan-vip-zing-mp3-de-tai-nghe-nhac-chat%20(21-2)-800x600.jpg"
    },

];

Partner.propTypes = {
    
};

function Partner(props) {
    
    return (
        <div className='Partner'>
            This is partner
            <img src={props.images} alt="" />
        </div>
    );
}

export default Partner;