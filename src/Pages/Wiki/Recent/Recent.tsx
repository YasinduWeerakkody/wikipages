import React, { useEffect, useState } from "react";
import "./Recent.css";
import { Button } from "antd";
import { GetHistoryService } from "../../../Services/HistoryService";
import ModifyTimestamp from "../ModifyTimestamp/ModifyTimestamp";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setHistory } from "../../../Reducer/HistorySlice";
interface Article {
  no: number;
  articleGroupId: number;
  articleId: number | null;
  name: string;
  description: string;
  createdDate: string;
  icon: string;
  iconType: number;
  isActive: string;
  isPublic: number;
  isSharedInSocialMedia: number;
}
const Recent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [recentList, setRecentList] = useState<Article[]>([]);
  const [historyVisible, setHistoryVisible] = useState(false);
  const [loading, setLoading] = useState(true);
  // todo write comments for this
  const displayedItems = historyVisible ? recentList : recentList.slice(0, 4);

  useEffect(() => {
    const fetchRecentArticles = async () => {
      try {
        const historyData = await GetHistoryService();
        setRecentList(historyData);
        setLoading(true);
      } catch (error) {
        console.error("Failed to fetch articles:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchRecentArticles();
  }, []);
  const HandleHistoryTileClick = (item: Article) => {
    navigate(`/WIKI/RecentArticle/View`);
    console.log(item);
    dispatch(setHistory(item));
  };
  const HistoryButtonClick = () => {
    setLoading(true);
    setHistoryVisible(!historyVisible);
  };
  return (
    <div className="recent-list">
      <p className="topic">{historyVisible ? "History" : "Recent"}</p>
      <div className="recent_cards">
        {displayedItems.map((item, index) => {
          console.log("item is ", item.name);
          const timeAgoText = ModifyTimestamp(item.createdDate);
          return (
            <div
              className="recent_card"
              style={{
                backgroundColor: index % 2 === 0 ? "#e6f7ff" : "#ffffff",
              }}>
              <div
                className="recent_cardInfo"
                onClick={() => HandleHistoryTileClick(item)}>
                <h3> {item.name}</h3>
                <p>{timeAgoText}</p>
              </div>
            </div>
          );
        })}
      </div>
      <Button className="history-button" onClick={HistoryButtonClick}>
        {historyVisible ? "Go back" : "See more history"}
      </Button>
    </div>
  );
};

export default Recent;
