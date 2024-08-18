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
import "./ArticleGroupView.css";
const ArticleGroupView = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const DocumentData = useSelector((state: RootState) => state.articleGroups);
  const [searchTerm, setSearchTerm] = useState("");
  const [noSearchResults, setNoSearchResults] = useState(false);

  useEffect(() => {
    if (
      !DocumentData.articleGroups ||
      DocumentData.articleGroups.length === 0
    ) {
      // navigate("/WIKI/IYKONSArticle");
      alert("No Data Found");
    }
  }, [DocumentData, navigate]);

  //This Function Handles the <- Back btn click
  //On Click it navigtes to the IYKONS Article Group page
  const HandleBackClick = () => {
    dispatch(resetArticle());
    navigate("/WIKI/IYKONSArticle");
  };
  //This Function Handles the Search Input Change Event
  const HandleSearchOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setNoSearchResults(false);
  };
  const HandleSearchClick = () => {
    const matchingArticles = DocumentData.articleGroups.filter((articleGroup) =>
      articleGroup.description.toLowerCase().includes(searchTerm.toLowerCase())
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

  const parsedHtml = DocumentData.articleGroups[0].description
    ? parse(highlightSearchTerm(DocumentData.articleGroups[0].description))
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
                {parse(String(DocumentData.articleGroups[0].groupName))}
              </div>
              <div className="viewhtml_description">{parsedHtml}</div>
            </div>
          </div>
        </Content>
      </Layout>
    </div>
  );
};

export default ArticleGroupView;
