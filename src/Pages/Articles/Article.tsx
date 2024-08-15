<<<<<<< HEAD
import React, { useEffect } from "react";
import '../../components/Css/Article_01.css'
=======
import React, { useState } from "react";
import '../Articles/Article.css';
>>>>>>> 89d26bea56d093fa884d1583110eac2042b421a6
import { SearchOutlined } from "@ant-design/icons";
import { Button, Layout, Card, Row, Col, Pagination } from "antd";
import Navbar from "../../components/Navbar/Navbar";
<<<<<<< HEAD
// import Sidemenu from "./Sidemenu";
import { EditOutlined, DeleteOutlined, EyeOutlined } from "@ant-design/icons";
import { GetArticleService } from "../../Services/ArticlesService";
import CustomCard from "../../components/CustomCards/CustomCard";
=======

>>>>>>> 89d26bea56d093fa884d1583110eac2042b421a6

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

const Article: React.FC = () => {
<<<<<<< HEAD

  const [Articles, setArticles] = React.useState ([]);
  const [loading, setLoading] = React.useState (true);



  useEffect(() => {
    const fetchArticles = async () => {
 
        try {
            const data = await GetArticleService( 1, 10 );

            setArticles(data);
        } catch (error) {
            console.error('Failed to fetch articles:', error);
        } finally {
            setLoading(false);
        }
    };
    fetchArticles();
}, []);
console.log(Articles);
=======
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
>>>>>>> 89d26bea56d093fa884d1583110eac2042b421a6

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
              WIKI / IYKONS Article
            </p>
            <div className="artical">
              <div
                className="back-header"
                style={{ display: "flex", alignItems: "center" }}
              >
                <p className="Backs">
                  IYKONS Articles
                </p>
                <div className="search" style={{ marginLeft: "auto" }}>
                  <Button className="searchsize">
                    Search Your keyword ....
                    {<SearchOutlined className="searchbody" />}
                  </Button>
                </div>
              </div>
              {/* cards */}
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
                <div
                  className="cardone"
                  style={{ display: "flex", gap: "20px" }}
                >

{/* ---------------------------cards -----------------------------------*/}


<Row gutter={[16, 16]}>
    



     
{Articles.map((article, index) => (<CustomCard data={article} />))}


         {/* <Card
            className="card_effect"
            actions={[
              <EyeOutlined key="preview" onClick={() => handlePreview(index)} />,
              <EditOutlined key="edit" onClick={() => handleEdit(index)} />,
              <DeleteOutlined key="delete" onClick={() => handleDelete(index)} />
            ]}
          >
            <span className="card_heading">
              <p>{news.title}</p>
            </span>
            <p>{news.content}</p>
          </Card> */}



   
  
    </Row>  



{/* ---------------------------cards End-----------------------------------*/}

                </div>
                <div>
                  <Pagination size="small" total={50} />
                </div>
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

export default Article;
