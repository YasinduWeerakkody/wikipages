import React, { useEffect, useState } from "react";
import "../ArticlesGroup/ArticleGroup.css";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Layout, Card, Row, Col, Pagination } from "antd";
import Navbar from "../../components/Navbar/Navbar";
import { GetArticlGroupeService } from "../../Services/ArticlesGroupService";
import CustomCardArticleGroup from "../../components/CustomCardsArticleGroup/CustomCardArticleGroup";
import { useNavigate } from "react-router-dom";
import CustomSearchInputText from "../../components/CustomSearchInputText/CustomSearchInputText";
import CustomBreadcrumb from "../../components/CustomBreadCrumb/CustomBreadCrumb";
const { Content } = Layout;

const Article_Group: React.FC = () => {
  const navigate = useNavigate();
  const [articleGroups, setArticleGroups] = useState([]);
  const [loading, setLoading] = useState(true);

  //States used by the pagination component
  const [totalArticles, setTotalArticles] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(8);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setLoading(true);
        const response = await GetArticlGroupeService(currentPage, pageSize);
        //Destructure the response we got from the API
        const { noOfRecords, articlesData } = response;
        setArticleGroups(articlesData);
        setTotalArticles(noOfRecords);
      } catch (error) {
        console.error("Failed to fetch articles groups:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, [currentPage, pageSize]);

  const handlePageChange = (page: number, pageSize?: number) => {
    setCurrentPage(page);
    if (pageSize) {
      setPageSize(pageSize);
    }
  };

  //Function handles search btn click: Fetching articles and rerender the page
  const HandleSearchClick = () => {};

  return (
    <div>
      <Layout>
        <Navbar />

        <Content
          className="defaultContainer"
          // style={{
          //   padding: "0 40px",
          //   minHeight: 280,
          //   marginBottom: "30px",
          // }}
        >
          {/* <p className="pu">WIKI / IYKONS Article Group</p> */}
          <CustomBreadcrumb />
          <div className="recent">
            <div
              className="back-header"
              style={{ display: "flex", alignItems: "center" }}>
              <p className="Backs">IYKONS Article Group</p>
              <div className="search" style={{ marginLeft: "auto" }}>
                <CustomSearchInputText
                  placeholder="Search Article Group"
                  onclick={HandleSearchClick}
                />
              </div>
            </div>
            <div
              className="cards"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                alignItems: "center",
                marginTop: "20px",
              }}>
              {/* <Row gutter={[16, 16]}> */}
              <div className="Cards_Container">
                {articleGroups.map((article: any, index: number) => (
                  <CustomCardArticleGroup key={index} data={article} />
                ))}
              </div>
              {/* </Row> */}

              {/* Pagination component */}
              <div>
                <Pagination
                  current={currentPage}
                  pageSize={pageSize}
                  total={totalArticles}
                  onChange={handlePageChange}
                  showSizeChanger={true}
                  style={{ marginTop: "20px" }}
                />
              </div>
              {/* Pagination component */}
            </div>
          </div>
        </Content>
      </Layout>
    </div>
  );
};

export default Article_Group;
