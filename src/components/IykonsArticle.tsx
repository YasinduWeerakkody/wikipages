import React from "react";
import '../components/Article_01.css';
import { SearchOutlined, ArrowLeftOutlined } from "@ant-design/icons";
import { Button, Layout } from "antd";
import HeaderNav from "./Navbar/Navbar";
// import Sidemenu from "./Sidemenu";



const { Sider, Content } = Layout;

const IykonsArticle: React.FC = () => {
  return (
    <div>
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
            <p className="pu">WIKI / IYKONS Article</p>
            <div className="artical">
              <div
                className="back-header"
                style={{ display: "flex", alignItems: "center" }}
              >
                <ArrowLeftOutlined className="arrow"/>
              <p className="backArrow">
                Back
              </p>
                <div className="search" style={{ marginLeft: "auto" }}>
                  <Button className="searchsize">
                    Search Your keyword ....
                    {<SearchOutlined className="searchbody" />}
                  </Button>
                </div>
              </div>
              <h4>
                FRC advice on Streamlined Energy and Carbon Reporting (SECR)
                rules
              </h4>
              <p>
                The Financial Reporting Council (FRC) provides guidance on the
                Streamlined Energy and Carbon Reporting (SECR) framework, which
                is part of the UK's efforts to enhance transparency in energy
                and carbon emissions reporting. Here are key points of advice
                from the FRC on SECR rules: Understanding SECR Requirements
              </p>

              <ol>
                <li>
                  Scope and Applicability
                  <ul>
                    <li>
                      SECR applies to large UK-incorporated companies and LLPs.
                      A company is considered large if it meets at least two of
                      the following criteria:
                      <ul>
                        <li>Turnover of £36 million or more</li>
                        <li>A balance sheet total of £18 million or more</li>
                        <li>250 employees or more</li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  Reporting Obligations
                  <ul>
                    <li>
                      Companies are required to include information about their
                      UK energy use and associated greenhouse gas emissions in
                      their directors' report. This includes:
                      <ul>
                        <li>
                          Annual energy use (kWh) for gas, electricity, and
                          transport
                        </li>
                        <li>
                          Associated greenhouse gas emissions (in tonnes of
                          CO2e)
                        </li>
                        <li>
                          At least one intensity ratio (e.g., emissions per unit
                          of revenue or per employee)
                        </li>
                        <li>
                          Information about energy efficiency actions taken
                          during the financial year
                        </li>
                        <li>Methodologies used for calculations</li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ol>

              <p>Data Collection and Accuracy</p>

              <ol>
                <li>
                  Data Quality and Assurance
                  <ul>
                    <li>
                      Ensure the data collection process is robust and accurate
                    </li>
                    <li>Use verified and reliable data sources</li>
                  </ul>
                </li>
              </ol>
            </div>
          </Content>
        </Layout>
      {/* </Layout> */}
    </div>
  );
};

export default IykonsArticle;
