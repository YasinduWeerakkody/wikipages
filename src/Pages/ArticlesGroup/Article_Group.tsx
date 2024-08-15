import React, { useState } from "react";
import '../ArticlesGroup/ArticleGroup.css';
import { SearchOutlined } from "@ant-design/icons";
import { Button, Layout, Card, Row, Col, Pagination } from "antd";
import Navbar from "../../components/Navbar/Navbar";


const { Content } = Layout;

interface NewsCard {
  title: string;
  content: string;
}

//Sample data ---------------------------
const newsCards: NewsCard[] = [
    {  title: "Business News", content: "Adani Ports announced an increased investment of $1.2 billion for a new transshipment terminal in Vizhinjam." },
    {  title: "Tech News", content: "Adani Ports announced an increased investment of $1.2 billion for a new transshipment terminal in Vizhinjam." },
    {  title: "Market Updates", content: "Adani Ports announced an increased investment of $1.2 billion for a new transshipment terminal in Vizhinjam." },
    {  title: "Global News", content: "Adani Ports announced an increased investment of $1.2 billion for a new transshipment terminal in Vizhinjam." },
    {  title: "Economy", content: "Adani Ports announced an increased investment of $1.2 billion for a new transshipment terminal in Vizhinjam." },
    {  title: "Health", content: "Adani Ports announced an increased investment of $1.2 billion for a new transshipment terminal in Vizhinjam." },
    {  title: "Business News", content: "Adani Ports announced an increased investment of $1.2 billion for a new transshipment terminal in Vizhinjam." },
    {  title: "Tech News", content: "Members of Parliament (MPs)  Here s an overview of the key concerns and recommendations." },
    {  title: "Market Updates", content: "Adani Ports announced an increased investment of $1.2 billion for a new transshipment terminal in Vizhinjam." },
    {  title: "Business News", content: "Adani Ports announced an increased investment of $1.2 billion for a new transshipment terminal in Vizhinjam." },
    {  title: "Tech News", content: "Members of Parliament (MPs)  Here s an overview of the key concerns and recommendations." },
    {  title: "Market Updates", content: "Adani Ports announced an increased investment of $1.2 billion for a new transshipment terminal in Vizhinjam." },
    {  title: "Business News", content: "Adani Ports announced an increased investment of $1.2 billion for a new transshipment terminal in Vizhinjam." },
    {  title: "Tech News", content: "Members of Parliament (MPs)  Here s an overview of the key concerns and recommendations." },
    {  title: "Market Updates", content: "Adani Ports announced an increased investment of $1.2 billion for a new transshipment terminal in Vizhinjam." },
    {  title: "Business News", content: "Adani Ports announced an increased investment of $1.2 billion for a new transshipment terminal in Vizhinjam." },
    {  title: "Tech News", content: "Members of Parliament (MPs)  Here s an overview of the key concerns and recommendations." },
    {  title: "Market Updates", content: "Adani Ports announced an increased investment of $1.2 billion for a new transshipment terminal in Vizhinjam." },
    {  title: "Business News", content: "Adani Ports announced an increased investment of $1.2 billion for a new transshipment terminal in Vizhinjam." },
    {  title: "Tech News", content: "Members of Parliament (MPs)  Here s an overview of the key concerns and recommendations." },
    {  title: "Market Updates", content: "Adani Ports announced an increased investment of $1.2 billion for a new transshipment terminal in Vizhinjam." },
    {  title: "Business News", content: "Adani Ports announced an increased investment of $1.2 billion for a new transshipment terminal in Vizhinjam." },
    {  title: "Tech News", content: "Members of Parliament (MPs)  Here s an overview of the key concerns and recommendations." },
    {  title: "Market Updates", content: "Adani Ports announced an increased investment of $1.2 billion for a new transshipment terminal in Vizhinjam." },
];

const Article_Group: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 9;

  // Calculate the index range for the current page
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  // Slice the newsCards array to only show the items for the current page
  const currentCards = newsCards.slice(startIndex, endIndex);

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
          <p className="pu">WIKI / IYKONS Article Group</p>

          <div className="recent">
            <div
              className="back-header"
              style={{ display: "flex", alignItems: "center" }}
            >
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
              }}
            >
              <Row gutter={[16, 16]}>
                {currentCards.map((news, index) => (
                  <Col key={index} xs={24} sm={12} md={8}>
                    <Card>
                      <span className="card_heading">
                        <p className="par">{news.title}</p>
                      </span>
                      <p className="parOne">{news.content}</p>
                    </Card>
                  </Col>
                ))}
              </Row>
              
              {/* Pagination component */}
              <div>
              <Pagination
                current={currentPage}
                pageSize={pageSize}
                total={newsCards.length}
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

export default Article_Group;
