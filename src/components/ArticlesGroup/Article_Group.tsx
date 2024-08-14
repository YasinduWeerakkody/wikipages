import React from "react";
import '../Css/Article_01.css';
import { SearchOutlined } from "@ant-design/icons";
import { Button, Layout, Card, Pagination } from "antd";
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
  {
    title: "Business News",
    content: "Adani Ports announced an increased investment of $1.2 billion for a new transshipment terminal in Vizhinjam."
  },

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

const Article_Group: React.FC = () => {
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
              WIKI / IYKONS Article Group
            </p>
            <div className="artical">
              <div
                className="back-header"
                style={{ display: "flex", alignItems: "center" }}
              >
                <p className="Backs">
                  IYKONS Article Group
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
     {/* <Card title="Card title" bordered={false} style={{ width: 300 }}>
    <p>Card content</p>
    <p>Card content</p>
    <p>Card content</p>
  </Card> */}



{/* ---------------------------cards -----------------------------------*/}


{/* {newsCards.map((news, index) => (
        <Card key={index} className="card_effect">
          <span className="card_heading">
            <p className="par">{news.title}</p>
          </span>
          <p>{news.content}</p>
        </Card>
      ))} */}


{newsCards.map((news, index) => (
        <Card
          key={index}
          className="card_effect"
          actions={[
            <EditOutlined key="edit" onClick={() => handleEdit(index)} />,
            <EyeOutlined key="preview" onClick={() => handlePreview(index)} />,
            <DeleteOutlined key="delete" onClick={() => handleDelete(index)} />
          ]}
        >
          <span className="card_heading">
            <p className="par">{news.title}</p>
          </span>
          <p>{news.content}</p>
        </Card>
      ))}



{/* ---------------------------cards -----------------------------------*/}

                  {/* <Card className="card_effect">
                    <span className="card_heading"><p className="par">Buisness News</p></span>
                    <p>
                      Adani Ports Investment: Adani Ports announced an increased
                      investment of $1.2 billion for a new transshipment
                      terminal in Vizhinjam.
                    </p>
                  </Card> */}

                  <Card className="card_effect">
                    <span className="card_heading"><p className="par">TaxRates & Allowances</p></span>
                    <p>
                      Members of Parliament (MPs) in the UK have criticized the
                      insolvency industry, labeling it as a "Wild
                      West"practices. Here's an overview of the key concerns and
                      recommendations.
                    </p>
                  </Card>

                  <Card className="card_effect">
                    <span className="card_heading"><p className="par">Staff SOP</p></span>
                    <p>
                      Staff SOP for managing tax rates and allowances involves
                      detailing the processes for compliance, updating hin the
                      organization. Here's a structured SOP
                    </p>
                  </Card>
                </div>

                <div
                  className="cardone"
                  style={{ display: "flex", gap: "20px" }}
                >
                  <Card className="card_effect">
                    <span className="card_heading"><p className="par"> Accounting</p></span>
                    <p>
                      To provide a comprehensive guide for managing accounting
                      functions, ensuring consistency, accuracy, and compliance
                      with regulatory requirements.
                    </p>
                  </Card>

                  <Card className="card_effect">
                    <span className="card_heading"><p className="par">Company House</p></span>
                    <p>
                      Creating a Standard Operating Procedure (SOP) for
                      interactions and compliance with Companies House ensures
                      that all statutory requirements are met.
                    </p>
                  </Card>
                  <Card className="card_effect">
                    <span className="card_heading"><p className="par">VAT</p></span>
                    <p>
                      Boeing has warned of further delays for its 737 Max
                      deliveries, extending timelines by three to six months due
                      to ongoing crises
                    </p>
                  </Card>
                </div>
                <div
                  className="cardone"
                  style={{ display: "flex", gap: "20px" }}
                >
                  <Card className="card_effect">
                    <span className="card_heading"><p className="par">AA</p></span>
                    <p>
                      The Financial Reporting Council (FRC) provides guidance on
                      the Streamlined Energy and Carbon Reporting (SECR)
                      framework.
                    </p>
                  </Card>

                  <Card className="card_effect">
                    <span className="card_heading"><p className="par">Paye & Pension</p></span>
                    <p>
                      Creating a Standard Operating Procedure (SOP) for the VAT
                      claims process for DIY housebuilding is crucial for
                      ensuring consistency, accuracy, and compliance.
                    </p>
                  </Card>

                  <Card className="card_effect">
                    <span className="card_heading"><p className="par">Compliance</p></span>
                    <p>
                      Members of Parliament (MPs) in the UK have criticized the
                      insolvency industry, labeling it as a "Wild
                      West"practices. Here's an overview of the key concerns a.
                    </p>
                  </Card>
                </div>
                <div>
                  <Pagination size="small" total={50} />
                </div>
              </div>
            </div>
          </Content>
        </Layout>
      {/* </Layout> */}
    </div>
  );
};

export default Article_Group;
