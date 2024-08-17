import React, { useState } from "react";
import "../Wiki/Wiki.css";
import { Button, Layout, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import img2 from "../../Assets/Images/Frame.png";
import HeaderNav from "../../components/Navbar/Navbar";
import { useNavigate } from "react-router-dom";

const { Header, Sider, Content } = Layout;

const Wiki: React.FC = () => {
  const navigate = useNavigate();
  const [position, setPosition] = useState<"start" | "end">("end");

  const recentItems = [
    { title: "Business news", time: "01 hr ago" },
    { title: "Tax Rates & allowances", time: "01 day ago" },
    { title: "Staff SOP", time: "01 day ago" },
    { title: "Covid-19 & BR", time: "03 day ago" },
  ];

  //Add
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

  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* top-navbar */}
      <HeaderNav />
      {/* top-navbar */}

      {/* WIKI - Dashboard */}
      <Layout>
        <Layout style={{ padding: "24px" }}>
          <Content className="content">
            <p className="topic1">WIKI</p>

            <div className="recent-articles">
              <div className="article-box1">
                <h1>IYKONS WIKI</h1>
                <p className="para1">
                  {" "}
                  One-step Resource for the staff members of IYKONS
                </p>
                <div className="search-button">
                  <Button
                    icon={<SearchOutlined />}
                    iconPosition={position}
                    className="si">
                    <p className="para2">Search your keyword & enter</p>
                  </Button>
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

              <div className="recent-list">
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
              </div>
            </div>
          </Content>
        </Layout>
      </Layout>

      {/* WIKI - Dashboard - END */}
    </Layout>
  );
};

export default Wiki;
