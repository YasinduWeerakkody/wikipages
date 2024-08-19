import React, { useEffect, useState } from "react";
import "../ArticlesGroup/ArticleGroup.css";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Layout, Card, Row, Col, Pagination } from "antd";
import Navbar from "../../components/Navbar/Navbar";
import { GetArticlGroupeService } from "../../Services/ArticlesGroupService";
import CustomCardArticleGroup from "../../components/CustomCardsArticleGroup/CustomCardArticleGroup";
import { useNavigate } from "react-router-dom";
const { Content } = Layout;

interface NewsCard {
  title: string;
  content: string;
}

//Sample data ---------------------------
const newsCards: NewsCard[] = [
  {
    title: "Business News",
    content:
      "Adani Ports announced an increased investment of $1.2 billion for a new transshipment terminal in Vizhinjam.",
  },
  {
    title: "Tech News",
    content:
      "Adani Ports announced an increased investment of $1.2 billion for a new transshipment terminal in Vizhinjam.",
  },
  {
    title: "Market Updates",
    content:
      "Adani Ports announced an increased investment of $1.2 billion for a new transshipment terminal in Vizhinjam.",
  },
  {
    title: "Global News",
    content:
      "Adani Ports announced an increased investment of $1.2 billion for a new transshipment terminal in Vizhinjam.",
  },
  {
    title: "Economy",
    content:
      "Adani Ports announced an increased investment of $1.2 billion for a new transshipment terminal in Vizhinjam.",
  },
  {
    title: "Health",
    content:
      "Adani Ports announced an increased investment of $1.2 billion for a new transshipment terminal in Vizhinjam.",
  },
  {
    title: "Business News",
    content:
      "Adani Ports announced an increased investment of $1.2 billion for a new transshipment terminal in Vizhinjam.",
  },
  {
    title: "Tech News",
    content:
      "Members of Parliament (MPs)  Here s an overview of the key concerns and recommendations.",
  },
  {
    title: "Market Updates",
    content:
      "Adani Ports announced an increased investment of $1.2 billion for a new transshipment terminal in Vizhinjam.",
  },
  {
    title: "Business News",
    content:
      "Adani Ports announced an increased investment of $1.2 billion for a new transshipment terminal in Vizhinjam.",
  },
  {
    title: "Tech News",
    content:
      "Members of Parliament (MPs)  Here s an overview of the key concerns and recommendations.",
  },
  {
    title: "Market Updates",
    content:
      "Adani Ports announced an increased investment of $1.2 billion for a new transshipment terminal in Vizhinjam.",
  },
  {
    title: "Business News",
    content:
      "Adani Ports announced an increased investment of $1.2 billion for a new transshipment terminal in Vizhinjam.",
  },
  {
    title: "Tech News",
    content:
      "Members of Parliament (MPs)  Here s an overview of the key concerns and recommendations.",
  },
  {
    title: "Market Updates",
    content:
      "Adani Ports announced an increased investment of $1.2 billion for a new transshipment terminal in Vizhinjam.",
  },
  {
    title: "Business News",
    content:
      "Adani Ports announced an increased investment of $1.2 billion for a new transshipment terminal in Vizhinjam.",
  },
  {
    title: "Tech News",
    content:
      "Members of Parliament (MPs)  Here s an overview of the key concerns and recommendations.",
  },
  {
    title: "Market Updates",
    content:
      "Adani Ports announced an increased investment of $1.2 billion for a new transshipment terminal in Vizhinjam.",
  },
  {
    title: "Business News",
    content:
      "Adani Ports announced an increased investment of $1.2 billion for a new transshipment terminal in Vizhinjam.",
  },
  {
    title: "Tech News",
    content:
      "Members of Parliament (MPs)  Here s an overview of the key concerns and recommendations.",
  },
  {
    title: "Market Updates",
    content:
      "Adani Ports announced an increased investment of $1.2 billion for a new transshipment terminal in Vizhinjam.",
  },
  {
    title: "Business News",
    content:
      "Adani Ports announced an increased investment of $1.2 billion for a new transshipment terminal in Vizhinjam.",
  },
  {
    title: "Tech News",
    content:
      "Members of Parliament (MPs)  Here s an overview of the key concerns and recommendations.",
  },
  {
    title: "Market Updates",
    content:
      "Adani Ports announced an increased investment of $1.2 billion for a new transshipment terminal in Vizhinjam.",
  },
];

const Article_Group: React.FC = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [articleGroups, setArticleGroups] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [totalArticles, setTotalArticles] = useState(0);
  const [pageSize, setPageSize] = useState(8); // Manage page size in state
  // const pageSize = 9;

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const data = await GetArticlGroupeService(currentPage, pageSize);
        setArticleGroups(data);
        setTotalArticles(200);
      } catch (error) {
        console.error("Failed to fetch articles groups:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, [currentPage, pageSize]);

  // Calculate the index range for the current page
  // const startIndex = (currentPage - 1) * pageSize;
  // const endIndex = startIndex + pageSize;

  // Slice the newsCards array to only show the items for the current page
  // const currentCards = newsCards.slice(startIndex, endIndex);

  const handlePageChange = (page: number, pageSize?: number) => {
    setCurrentPage(page);
    if (pageSize) {
      setPageSize(pageSize);
    }
  };

  return (

      <Navbar />
      <Layout className="articleGroup_layout">
      <Navbar onClick={() => navigate("/")} />
      <Layout>

        <Content
          style={{
            padding: "0 40px",
            minHeight: 280,
            marginBottom: "30px",
          }}>
          <p className="pu">WIKI / IYKONS Article Group</p>

          <div className="recent">
            <div
              className="back-header"
              style={{ display: "flex", alignItems: "center" }}>
              <p className="Backs">IYKONS Article Group</p>
              <div className="search" style={{ marginLeft: "auto" }}>
                <Button>
                  <p className="searchsize">Search Your keyword & enter </p>
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
