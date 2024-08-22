import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import parse from "html-react-parser";
import { Layout } from "antd";
import Navbar from "../../../components/Navbar/Navbar";
import { Content } from "antd/es/layout/layout";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../../Store/store";
import backArrowIcon from "../../../Assets/Images/backArrow.png";
import CustomSearchInputText from "../../../components/CustomSearchInputText/CustomSearchInputText";
import "./RecentArticleView.css";
import CustomBreadcrumb from "../../../components/CustomBreadCrumb/CustomBreadCrumb";
import { resetHistory } from "../../../Reducer/HistorySlice";
const RecentArticleView = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [searchTerm, setSearchTerm] = useState("");
  const [noSearchResults, setNoSearchResults] = useState(false);

  const DocumentData = useSelector((state: RootState) => state.histories);
  useEffect(() => {
    if (
      !DocumentData.histories[0].description ||
      DocumentData.histories.length === 0
    ) {
      navigate("/");
      alert("No Data Found");
    }
  }, [DocumentData, navigate]);

  //This Function Handles the <- Back btn click
  //On Click it navigtes to the IYKONS Article Group page
  const HandleBackClick = () => {
    dispatch(resetHistory());
    navigate("/");
  };
  //This Function Handles the Search Input Change Event
  const HandleSearchOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setNoSearchResults(false);
  };
  const HandleSearchClick = () => {
    const matchingArticles = DocumentData.histories.filter((histories) =>
      histories.description.toLowerCase().includes(searchTerm.toLowerCase())
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

  const parsedHtml = DocumentData.histories[0].description
    ? parse(highlightSearchTerm(DocumentData.histories[0]?.description))
    : "";

  return (
    <div>
      <Navbar />
      <Layout>
        <Content className="defaultContainer">
          <CustomBreadcrumb />
          <div className="recent">
            <div
              className="DocumentView_top"
              style={{ display: "flex", alignItems: "center" }}>
              <div className="backButton" onClick={HandleBackClick}>
                <img src={backArrowIcon} alt="Back" />
                <h3>Back</h3>
              </div>
              <div className="search" style={{ marginLeft: "auto" }}>
                <CustomSearchInputText
                  placeholder="Search Your Keyword & Enter"
                  onChange={HandleSearchOnchange}
                  noSearchResults={noSearchResults}
                  onclick={HandleSearchClick}
                />
              </div>
            </div>
            <div className="viewHtml">
              <div className="viewhtml_heading">
                {parse(String(DocumentData.histories[0].name))}
              </div>
              <div className="viewhtml_description">{parsedHtml}</div>
            </div>
          </div>
        </Content>
      </Layout>
    </div>
  );
};

export default RecentArticleView;
