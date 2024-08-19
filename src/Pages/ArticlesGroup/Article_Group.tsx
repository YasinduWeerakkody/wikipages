
import React, { useEffect, useState } from "react";
import '../ArticlesGroup/ArticleGroup.css';
import { SearchOutlined } from "@ant-design/icons";
import { Button, Layout, Pagination } from "antd";
import Navbar from "../../components/Navbar/Navbar";
import { GetArticlGroupeService } from "../../Services/ArticlesGroupService";
import CustomCardArticleGroup from "../../components/CustomCardArticleGroup/CustomCardArticleGroup";

const { Content } = Layout;

const Article_Group: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [articleGroups, setArticleGroups] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [totalArticleGroups, setTotalArticleGroups] = useState(0);
  const [pageSize, setPageSize] = useState(8);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await GetArticlGroupeService(currentPage, pageSize);
        setArticleGroups(response.data);
        setTotalArticleGroups(response.total); // Make sure you get this from API
      } catch (error) {
        console.error('Failed to fetch articles:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchArticles();
  }, [currentPage, pageSize]);

  console.log(articleGroups.length);

  const handlePageChange = (page: number, pageSize?: number) => {
    setCurrentPage(page);
    if (pageSize) {
      setPageSize(pageSize);
    }
  };

  return (
    <div>
      <Navbar />
      <Layout>
        <Content
          style={{
            padding: "0 40px",
            minHeight: 280,
            marginBottom: '30px',
          }}
        >
          <p className="pu">WIKI / IYKONS Article Group</p>
          <div className="recent">
            <div
              className="back-header"
              style={{ display: "flex", alignItems: "center" }}
            >
              <p className="Backs">IYKONS Article Group</p>
              <div className="search" style={{ marginLeft: "auto" }}>
                <Button>
                  <p className="searchsize">Search Your keyword & enter</p>
                  {<SearchOutlined className="searchbody" />}
                </Button>
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
              }}
            >
              <div className="Cards_Container">
                {articleGroups.map((ArticleGroup: any, index: number) => (
                  <CustomCardArticleGroup key={index} data={ArticleGroup} />
                ))}
              </div>
              <Pagination
                current={currentPage}
                pageSize={pageSize}
                total={articleGroups.length}
                onChange={handlePageChange}
                showSizeChanger={true}
                style={{ marginTop: '20px' }}
              />
            </div>
          </div>
        </Content>
      </Layout>
    </div>
  );
};

export default Article_Group;
