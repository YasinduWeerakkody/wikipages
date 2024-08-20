import React, { useEffect, useState } from "react";
import "../Articles/Article.css";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Layout, Pagination, Spin } from "antd";
import Navbar from "../../components/Navbar/Navbar";
import { GetArticleService } from "../../Services/ArticlesService";
import CustomCardArticle from "../../components/CustomCardsArticle/CustomCardArticle";
import { useNavigate } from "react-router-dom";
import CustomSearchInputText from "../../components/CustomSearchInputText/CustomSearchInputText";
const { Content } = Layout;

const Article: React.FC = () => {
  const navigate = useNavigate();

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalArticles, setTotalArticles] = useState(0);
  const [pageSize, setPageSize] = useState(9);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setLoading(true);
        const response = await GetArticleService(currentPage, pageSize);
        //Destructure the response we got from the API
        const { noOfRecords, articlesData } = response;

        setArticles(articlesData);
        setTotalArticles(noOfRecords);
      } catch (error) {
        console.error("Failed to fetch articles:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchArticles();
  }, [currentPage, pageSize]);

  //Function to handle Pagination
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
              className="back-header"
              style={{ display: "flex", alignItems: "center" }}>
              <p className="Backs">IYKONS Article</p>
              <div className="search" style={{ marginLeft: "auto" }}>
                <CustomSearchInputText
                  placeholder="Search Article"
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
              {loading ? (
                <Spin size="large" />
              ) : (
                <div className="Cards_Container">
                  {articles.map((article: any, index: number) => (
                    <CustomCardArticle key={index} data={article} />
                  ))}
                </div>
              )}

              {/* Pagination component */}
              <div>
                <Pagination
                  current={currentPage}
                  pageSize={pageSize}
                  total={totalArticles} //totalArticles
                  onChange={handlePageChange}
                  showSizeChanger={true} // Enable the size changer dropdown
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

export default Article;
