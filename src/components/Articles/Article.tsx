import React from "react";
import '../Css/Article_01.css';
import { SearchOutlined } from "@ant-design/icons";
import { Button, Layout, Card, Pagination, Row, Col } from "antd";
import HeaderNav from "../Navbar/Navbar";
// import Sidemenu from "./Sidemenu";
import { EditOutlined, DeleteOutlined, EyeOutlined } from "@ant-design/icons";



const { Sider, Content } = Layout;

// Define the structure of the data
interface NewsCard {
  title: string;
  content: string;
}

// Sample data array
const newsCards: NewsCard[] = [
    {  title: "Business News", content: "Adani Ports announced an increased investment of $1.2 billion for a new transshipment terminal in Vizhinjam." },
    {  title: "Tech News", content: "Members of Parliament (MPs)  Here s an overview of the key concerns and recommendations." },
    {  title: "Market Updates", content: "Adani Ports announced an increased investment of $1.2 billion for a new transshipment terminal in Vizhinjam." },
    {  title: "Global News", content: "Adani Ports announced an increased investment of $1.2 billion for a new transshipment terminal in Vizhinjam." },
    {  title: "Economy", content: "Adani Ports announced an increased investment of $1.2 billion for a new transshipment terminal in Vizhinjam." },
    {  title: "Health", content: "Adani Ports announced an increased investment of $1.2 billion for a new transshipment terminal in Vizhinjam." },
  
  ];
// Handle preview, edit, and delete actions
const handlePreview = (index: number) => {
  console.log(`Previewing item at index ${index}`);
};

const handleEdit = (index: number) => {
  console.log(`Editing item at index ${index}`);
};

const handleDelete = (index: number) => {
  console.log(`Deleting item at index ${index}`);
};

const Article: React.FC = () => {
  return (
    <div>
      {/* -----------header -----------------components */}
      <HeaderNav/>

      {/* <Layout style={{ minHeight: "100vh" }}>
        <Sider width={300} className="site-layout-background">
        
          <Sidemenu/>
        </Sider>*/}
        <Layout> 
          <Content
            style={{
              padding: "0 24px",
              minHeight: 280,
            }}
          >
            <p className="pu"
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
      {newsCards.map((news,index) => (
        <Col key={index} xs={24} sm={12} md={8}>
          <Card
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
          </Card>
        </Col>
      ))}
    </Row>  



{/* ---------------------------cards End-----------------------------------*/}

                </div>
                <div>
                  <Pagination size="small" total={50} />
                </div>
              </div>
            </div>
          </Content>
        </Layout>
      {/* </Layout>*/}
    </div>
  );
};

export default Article;
