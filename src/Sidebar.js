import { Avatar } from "@mui/material";
import React from "react";
import "./Sidebar.css";

function Sidebar() {

    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>        
    )

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img src="https://images.ctfassets.net/hrltx12pl8hq/8MpEm5OxWXiNqLvWzCYpW/24f02cfe391aa8f25845de858982d449/shutterstock_749707636__1__copy.jpg?fit=fill&w=840&h=350" alt="" />
        <Avatar className="sidebar__avatar" />
        <h2>Burak GUNES</h2>
        <h4>burakgunes@gmail.com</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">2,543</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__statNumber">2,401</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem('reactjs')}
        {recentItem('programming')}
        {recentItem('design')}
        {recentItem('developer')}
        {recentItem('softwareengineering')}
      </div>
    </div>
  );
}

export default Sidebar;
