import React, { useState } from "react";
import "./WikiPage.css";
import { Button, Layout, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import img2 from "../../../Assets/Images/Frame.png";
import Navbar from "../../../components/Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import CustomSearchInputText from "../../../components/CustomSearchInputText/CustomSearchInputText";
import Recent from "../Recent/Recent";
const { Header, Sider, Content } = Layout;

const WikiPage: React.FC = () => {
  const navigate = useNavigate();
  const [position, setPosition] = useState<"start" | "end">("end");

  const recentItems = [
    { title: "Business news", time: "01 hr ago" },
    { title: "Tax Rates & allowances", time: "01 day ago" },
    { title: "Staff SOP", time: "01 day ago" },
    { title: "Covid-19 & BR", time: "03 day ago" },
  ];

  const HandleClick = (SelectedOption: string) => {
    switch (SelectedOption) {
      case "Article":
        navigate("/WIKI/IYKONSArticle");
        break;
      case "ArticleGroup":
        navigate("/WIKI/IYKONSArticleGroup");
        break;
    }
  };

  //Function handles search btn click: Fetching articles and rerender the page
  const HandleSearchClick = () => {};

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Navbar />

      {/* WIKI - Dashboard */}
      <Layout>
        <Layout style={{ padding: "24px" }}>
          <Content className="content">
            <p className="topic1">WIKI</p>

            <div className="recent-articles">
              <div className="article-box1">
                <h1>IYKONS WIKI</h1>
                <p className="para1">
                  One-step Resource for the staff members of IYKONS
                </p>
                <div className="search-button">
                  <CustomSearchInputText
                    placeholder="Search your keyword & enter"
                    onclick={HandleSearchClick}
                  />
                </div>
              </div>

              {/* FlexBox -Articles */}
              <div className="articles">
                <div
                  onClick={(e) => HandleClick("Article")}
                  className="article-box">
                  <img src={img2} alt="Article Icon" className="article-img" />
                  <h3 className="article-para">IYKONS Article</h3>
                </div>
                <div
                  onClick={(e) => HandleClick("ArticleGroup")}
                  className="article-box">
                  <img src={img2} alt="Article Icon" className="article-img" />
                  <h3 className="article-para">IYKONS Article Group</h3>
                </div>
              </div>
              {/* FlexBox -Articles */}

              <Recent />
              {/* Recent START */}
              {/* <div className="recent-list">
                <p className="topic">Recent</p>
                <ul>
                  {recentItems.map((item, index) => (
                    <li
                      key={index}
                      style={{
                        backgroundColor:
                          index % 2 === 0 ? "#e6f7ff" : "#ffffff",
                        padding: "10px",
                        borderRadius: "5px",
                        marginBottom: "5px",
                        textAlign: "left",
                      }}>
                      {item.title}
                      <span
                        className="time"
                        style={{ float: "right", color: "#000" }}>
                        {item.time}
                      </span>
                    </li>
                  ))}
                </ul>
                <Button className="history-button">See more history</Button>
              </div> */}
              {/* Recent END */}
            </div>
          </Content>
        </Layout>
      </Layout>

      {/* WIKI - Dashboard - END */}
    </Layout>
  );
};

export default WikiPage;
