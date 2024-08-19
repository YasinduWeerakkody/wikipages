import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import parse from "html-react-parser";
import { Layout } from "antd";
import Navbar from "../../components/Navbar/Navbar";
import { Content } from "antd/es/layout/layout";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../Store/store";
import { resetArticle } from "../../Reducer/ArticleSlice";
import backArrowIcon from "../../Assets/Images/backArrow.png";
import CustomSearchInputText from "../../components/CustomSearchInputText/CustomSearchInputText";
import "./ArticleView.css";

const ArticleView: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const DocumentData = useSelector((state: RootState) => state.articles);
  const [searchTerm, setSearchTerm] = useState("");
  const [noSearchResults, setNoSearchResults] = useState(false);

  useEffect(() => {
    if (!DocumentData.articles || DocumentData.articles.length === 0) {
      // navigate("/WIKI/IYKONSArticle");
      alert("No Data Found");
    }
  }, [DocumentData, navigate]);

  //This Function Handles the <- Back btn click
  //On Click it navigtes to the IYKONS Article page
  const HandleBackClick = () => {
    dispatch(resetArticle());
    navigate("/WIKI/IYKONSArticle");
  };

  //This Function Handles the Search Input Change Event
  const HandleSearchOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setNoSearchResults(false);
  };

  //This Function Handles the Search Button Click
  const HandleSearchClick = () => {
    const matchingArticles = DocumentData.articles.filter((article) =>
      article.articleDescription
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    );
    setNoSearchResults(matchingArticles.length === 0);
  };

  const highlightSearchTerm = (text: string) => {
    if (!searchTerm) return text;
    const regex = new RegExp(
      `(${searchTerm.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&")})`,
      "gi"
    );
    return text.replace(regex, "<span class='highlight'>$1</span>");
  };

  const parsedHtml = DocumentData.articles[0].articleDescription
    ? parse(highlightSearchTerm(DocumentData.articles[0].articleDescription))
    : "";

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
                <img src={backArrowIcon} alt="Back" />
                <h3>Back</h3>
              </div>
              <div className="search" style={{ marginLeft: "auto" }}>
                {/* <Input
                  placeholder="Search Your Keyword"
                  value={searchTerm}
                  onChange={HandleSearchOnchange}
                  prefix={<SearchOutlined />}
                  style={{ width: 300 }}
                /> */}
                <CustomSearchInputText
                  placeHolder="Search Your Keyword and Press Enter"
                  onChange={HandleSearchOnchange}
                  noSearchResults={noSearchResults}
                  onclick={HandleSearchClick}
                />
              </div>
            </div>
            <div className="viewHtml">
              <div className="viewhtml_heading">
                {parse(String(DocumentData.articles[0].articleName))}
              </div>
              <div className="viewhtml_description">{parsedHtml}</div>
            </div>
          </div>
        </Content>
      </Layout>
    </div>
  );
};

export default ArticleView;
