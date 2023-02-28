import React, { useState } from 'react';
import SidebarItem from '../SidebarItem';
import { Pen } from '../../Icons';
import sidebarData from '../../../test/data/sidebarData';

import './styles.scss';

function SidebarList(props) {
  const [activeItem, setActiveItem] = useState(null);

  const handleActiveItem = (id) => {
    setActiveItem(id);
  };

  return (
    <div className="sidebar-list">
      <div className="sidebar-list__main">
        <ul className="sidebar-list__menu">
          {sidebarData[0].listItem
            .slice(0, 5)
            .map(({ id, title, icon, isPlay, isLive }) => (
              <SidebarItem
                key={id}
                id={id}
                icon={icon}
                title={title}
                isPlay={isPlay}
                isLive={isLive}
                handleActiveItem={handleActiveItem}
                activeItem={activeItem}
              />
            ))}
        </ul>
      </div>

      <div className="sidebar-list__second">
        <div className="sidebar-list__scroll">
          <ul className="sidebar-list__menu">
            {sidebarData[0].listItem
              .slice(5, 9)
              .map(({ id, title, icon, isPlay }) => (
                <SidebarItem
                  key={id}
                  id={id}
                  icon={icon}
                  title={title}
                  isPlay={isPlay}
                  handleActiveItem={handleActiveItem}
                  activeItem={activeItem}
                />
              ))}
          </ul>

          <div className="sidebar-list__vip-banner">
            <p>Nghe nhạc không quảng cáo cùng kho nhạc VIP</p>
            <a
              href="https://zingmp3.vn/vip?utm_source=desktop&amp;utm_campaign=VIP&amp;utm_medium=sidebar"
              target="_blank"
            >
              Nâng cấp VIP
            </a>
          </div>

          <div className="sidebar-list__my-music">
            <div className="sidebar-list__title">
              <h4>Thư viện</h4>
              <img
                src={Pen}
                alt="pen"
              />
            </div>
            <ul className="sidebar-list__menu">
              {sidebarData[1].myMusic.map(({ id, title, icon, isPlay }) => (
                <SidebarItem
                  key={id}
                  id={id}
                  icon={icon}
                  title={title}
                  isPlay={isPlay}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SidebarList;
