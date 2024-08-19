import React, { useState } from "react";
import "./Recent.css";
const Recent = () => {
  const recentItems = [
    { title: "Business news", time: "01 hr ago" },
    { title: "Tax Rates & allowances", time: "01 day ago" },
    { title: "Staff SOP", time: "01 day ago" },
    { title: "Covid-19 & BR", time: "03 day ago" },
  ];
  const [recentList, setRecentList] = useState(recentItems);

  return (
    <div className="recent">
      <p className="topic">Recent</p>
      {recentList.map((item, index) => (
        <li
          key={index}
          style={{
            backgroundColor: index % 2 === 0 ? "#e6f7ff" : "#ffffff",
            padding: "10px",
            borderRadius: "5px",
            marginBottom: "5px",
            textAlign: "left",
          }}>
          {item.title}
          <span className="time" style={{ float: "right", color: "#000" }}>
            {item.time}
          </span>
        </li>
      ))}
    </div>
  );
};

export default Recent;
