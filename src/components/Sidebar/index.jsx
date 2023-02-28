import React from 'react';
import { ArrowLeft, Plus } from '../Icons';
import SidebarList from './SidebarList';

import './styles.scss';

function Sidebar(props) {
  return (
    <div className="sidebar">
      <a
        href="#"
        className="sidebar__logo"
      ></a>
      <SidebarList />
      <button className="sidebar__btn">
        <img
          src={Plus}
          alt="Plus"
          className="sidebar__btn--icon-plus"
        />
        <span>Tạo playlist mới</span>
        <i className="sidebar__btn--mobile">
          <img
            src={ArrowLeft}
            alt="ArrowLeft"
          />
        </i>
      </button>
    </div>
  );
}

export default Sidebar;
