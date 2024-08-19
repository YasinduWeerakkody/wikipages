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
  // TODO use useEffect to fetch recent articles

  return (
    <div className="recent-list">
      <p className="topic">Recent</p>
      <div className="recent_cards">
        {recentList.map((item, index) => (
          <div
            className="recent_card"
            style={{
              backgroundColor: index % 2 === 0 ? "#e6f7ff" : "#ffffff",
            }}>
            <div className="recent_cardInfo">
              <h3> {item.title}</h3>
              <p>{item.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recent;
