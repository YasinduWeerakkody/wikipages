import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import parse from "html-react-parser";
import { Layout, Button, Pagination } from "antd";
import Navbar from "../../components/Navbar/Navbar";
import { Content } from "antd/es/layout/layout";
import { SearchOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../Store/store";
import { resetArticle } from "../../Reducer/ArticleSlice";
import backArrowIcon from "../../Assets/Images/backArrow.png";
import "./DocumentView.css";
const DocumentView: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const DocumentData = useSelector((state: RootState) => state.articles);
  // console.log(DocumentData.articles[0].articleDescription);

  useEffect(() => {
    if (!DocumentData.articles || DocumentData.articles.length === 0) {
      // navigate("/WIKI/IYKONSArticle");
      alert("No Data Found");
    }
  }, [DocumentData, navigate]);

  //This Function Handles the <-Back btn click
  //On Click it navigtes to the IYKONS Article page
  const HandleBackClick = () => {
    dispatch(resetArticle());
    navigate("/WIKI/IYKONSArticle");
  };
  return (
    <div>
      <Navbar />
      <Layout>
        <Content
          style={{
            padding: "0 40px",
            minHeight: 280,
            marginBottom: "30px",
          }}>
          <p className="pu">WIKI / IYKONS Article</p>

          <div className="recent">
            <div
              className="DocumentView_top"
              style={{ display: "flex", alignItems: "center" }}>
              <div className="backButton" onClick={HandleBackClick}>
                <img src={backArrowIcon} />
                <h3>Back</h3>
              </div>
              <div className="search" style={{ marginLeft: "auto" }}>
                <Button>
                  <p className="searchsize">Search Your keyword & enter </p>
                  {<SearchOutlined className="searchbody" />}
                </Button>
              </div>
            </div>
            <div className="viewHtml">
              <div className="viewhtml_heading">
                {parse(String(DocumentData.articles[0].articleName))}
              </div>
              <div className="viewhtml_description">
                {parse(String(DocumentData.articles[0].articleDescription))}
              </div>
            </div>
          </div>
        </Content>
      </Layout>
    </div>
  );
};

export default DocumentView;
