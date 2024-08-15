import React, { useEffect, useState } from "react";
// import '../../components/Css/Article_01.css';
import '../Articles/Article.css';
import { SearchOutlined } from "@ant-design/icons";
import { Button, Layout, Row, Col, Pagination } from "antd";
import Navbar from "../../components/Navbar/Navbar";
import { GetArticleService } from "../../Services/ArticlesService";
import CustomCard from "../../components/CustomCards/CustomCard";
import {Card} from "antd";
const { Content } = Layout;

interface NewsCard {
  title: string;
  content: string;
}


// Sample data
=======


// const newsCards: NewsCard[] = [
//   { title: "Business News", content: "Adani Ports announced an increased investment of $1.2 billion for a new transshipment terminal in Vizhinjam." },
//   { title: "Tech News", content: "Adani Ports announced an increased investment of $1.2 billion for a new transshipment terminal in Vizhinjam." },
//   { title: "Market Updates", content: "Adani Ports announced an increased investment of $1.2 billion for a new transshipment terminal in Vizhinjam." },
//   { title: "Global News", content: "Adani Ports announced an increased investment of $1.2 billion for a new transshipment terminal in Vizhinjam." },
//   { title: "Economy", content: "Adani Ports announced an increased investment of $1.2 billion for a new transshipment terminal in Vizhinjam." },
//   { title: "Health", content: "Adani Ports announced an increased investment of $1.2 billion for a new transshipment terminal in Vizhinjam." },
//   { title: "Business News", content: "Adani Ports announced an increased investment of $1.2 billion for a new transshipment terminal in Vizhinjam." },
//   { title: "Tech News", content: "Members of Parliament (MPs)  Here s an overview of the key concerns and recommendations." },
//   { title: "Market Updates", content: "Adani Ports announced an increased investment of $1.2 billion for a new transshipment terminal in Vizhinjam." },
//   { title: "Business News", content: "Adani Ports announced an increased investment of $1.2 billion for a new transshipment terminal in Vizhinjam." },
//   { title: "Tech News", content: "Members of Parliament (MPs)  Here s an overview of the key concerns and recommendations." },
//   { title: "Market Updates", content: "Adani Ports announced an increased investment of $1.2 billion for a new transshipment terminal in Vizhinjam." },
//   { title: "Business News", content: "Adani Ports announced an increased investment of $1.2 billion for a new transshipment terminal in Vizhinjam." },
//   { title: "Tech News", content: "Members of Parliament (MPs)  Here s an overview of the key concerns and recommendations." },
//   { title: "Market Updates", content: "Adani Ports announced an increased investment of $1.2 billion for a new transshipment terminal in Vizhinjam." },
//   { title: "Business News", content: "Adani Ports announced an increased investment of $1.2 billion for a new transshipment terminal in Vizhinjam." },
//   { title: "Tech News", content: "Members of Parliament (MPs)  Here s an overview of the key concerns and recommendations." },
//   { title: "Market Updates", content: "Adani Ports announced an increased investment of $1.2 billion for a new transshipment terminal in Vizhinjam." },
//   { title: "Business News", content: "Adani Ports announced an increased investment of $1.2 billion for a new transshipment terminal in Vizhinjam." },
//   { title: "Tech News", content: "Members of Parliament (MPs)  Here s an overview of the key concerns and recommendations." },
//   { title: "Market Updates", content: "Adani Ports announced an increased investment of $1.2 billion for a new transshipment terminal in Vizhinjam." },
//   { title: "Business News", content: "Adani Ports announced an increased investment of $1.2 billion for a new transshipment terminal in Vizhinjam." },
//   { title: "Tech News", content: "Members of Parliament (MPs)  Here s an overview of the key concerns and recommendations." },
//   { title: "Market Updates", content: "Adani Ports announced an increased investment of $1.2 billion for a new transshipment terminal in Vizhinjam." },
// ];

const Article: React.FC = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 9;

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const data = await GetArticleService(1, 10);
        setArticles(data);
      } catch (error) {
        console.error('Failed to fetch articles:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchArticles();
  }, []);

  console.log(articles);

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  // const currentCards = newsCards.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
<div>
      {/* top-navbar */}
      <Navbar />
      {/* top-navbar */}

      <Layout>
        <Content
          style={{
            padding: "0 40px",
            minHeight: 280,
            marginBottom: '30px',
          }}
        >
          <p className="pu">WIKI / IYKONS Article</p>

          <div className="recent">
            <div
              className="back-header"
              style={{ display: "flex", alignItems: "center" }}
            >
              <p className="Backs">IYKONS Article</p>
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
              }}
            >
              {/* <Row gutter={[16, 16]}> */}
                 <div className="Cards_Container"> 
                   {articles.map((article: any, index: number) => (
                        <CustomCard key={index} data={article} />
                  ))}
               </div> 
                     
                  
              {/* </Row>
               */}
              {/* Pagination component */}
              <div>
              <Pagination
                current={currentPage}
                pageSize={pageSize}
                total={articles.length}
                onChange={handlePageChange}
                style={{ marginTop: '20px' }}
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
