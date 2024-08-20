import React, { useState } from "react";
import "./Recent.css";
import { Button } from "antd";
const Recent = () => {
  const recentItems = [
    { title: "Business news", time: "01 hr ago" },
    { title: "Tax Rates & allowances", time: "01 day ago" },
    { title: "Staff SOP", time: "01 day ago" },
    { title: "Covid-19 & BR", time: "03 day ago" },
    { title: "Business news", time: "01 hr ago" },
    { title: "Tax Rates & allowances", time: "01 day ago" },
    { title: "Staff SOP", time: "01 day ago" },
    { title: "Covid-19 & BR", time: "03 day ago" },
    { title: "Staff SOP", time: "01 day ago" },
    { title: "Covid-19 & BR", time: "03 day ago" },
  ];
  const [recentList, setRecentList] = useState(recentItems);
  const [historyVisible, setHistoryVisible] = useState(false);
  // todo write comments for this
  const displayedItems = historyVisible ? recentList : recentList.slice(0, 4);
  // TODO use useEffect to fetch recent articles

  return (
    <div className="recent-list">
      <p className="topic">{historyVisible ? "History" : "Recent"}</p>
      <div className="recent_cards">
        {displayedItems.map((item, index) => (
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
      <Button
        className="history-button"
        onClick={() => setHistoryVisible(!historyVisible)}>
        {historyVisible ? "Go back" : "See more history"}
      </Button>
    </div>
  );
};

export default Recent;
