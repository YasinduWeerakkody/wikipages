import React, { useState } from "react";
import "./WikiPage.css";
import { Button, Layout, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import img2 from "../../../Assets/Images/Frame.png";
import Navbar from "../../../components/Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import CustomSearchInputText from "../../../components/CustomSearchInputText/CustomSearchInputText";
import Recent from "../Recent/Recent";
import CustomBreadcrumb from "../../../components/CustomBreadCrumb/CustomBreadCrumb";
const { Header, Sider, Content } = Layout;

const WikiPage: React.FC = () => {
  const navigate = useNavigate();
  const [position, setPosition] = useState<"start" | "end">("end");

  // const setHistoryRecentType = () => {

  // };
  const recentItems = [
    { title: "Business news", time: "01 hr ago" },
    { title: "Tax Rates & allowances", time: "01 day ago" },
    { title: "Staff SOP", time: "01 day ago" },
    { title: "Covid-19 & BR", time: "03 day ago" },
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
    <div className="">
      <Layout>
        <Navbar />

        {/* <Layout style={{ padding: "24px" }}> */}
        <Content className="defaultContainer">
          {/* <p className="topic1">WIKI</p> */}
          <CustomBreadcrumb />
          <div className="recent-articles">
            <div className="article-box1">
              <h1>IYKONS WIKI</h1>
              <p className="para1">
                One-step Resource for the staff members of IYKONS
              </p>
              {/* <div className="search-button">
                <CustomSearchInputText
                  placeholder="Search your keyword & enter"
                  onclick={HandleSearchClick}
                />
              </div> */}
            </div>

            {/* FlexBox -Articles */}
            <div className="articles">
              <div
                onClick={() => HandleClick("Article")}
                className="article-box">
                <img src={img2} alt="Article Icon" className="article-img" />
                <h3 className="article-para">IYKONS Article</h3>
              </div>
              <div
                onClick={() => HandleClick("ArticleGroup")}
                className="article-box">
                <img src={img2} alt="Article Icon" className="article-img" />
                <h3 className="article-para">IYKONS Article Group</h3>
              </div>
            </div>
            {/* FlexBox -Articles */}

            {/* Recent START */}
            <Recent />
            {/* Recent END */}
          </div>
        </Content>
        {/* </Layout> */}

        {/* WIKI - Dashboard - END */}
      </Layout>
    </div>
  );
};

export default WikiPage;
