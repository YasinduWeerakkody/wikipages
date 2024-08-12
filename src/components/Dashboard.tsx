import React from 'react';
//import '../components/dashboard.css';
import { Button, Layout, Menu, Input } from 'antd';
import { SearchOutlined, ArrowLeftOutlined, CaretRightOutlined } from '@ant-design/icons';
import img1 from '../images/wikilogo.png';
import img2 from '../images/Frame.png';

const { Header, Sider, Content } = Layout;
const { Search } = Input;

const Dashboard: React.FC = () => {
  return (
    <div>
      <Header className="header">
        <div className="header-content">
          <img src={img1} alt="Logo" className="logo" />
          <div className="search-bar">
            <Search
              placeholder="Search your keyword ..."
              enterButton={<SearchOutlined />}
              size="large"
            />
          </div>
          <div className="user-info">
            <img src={img2} alt="User Avatar" className="avatar" />
            <span>
                <h5>JEYARAJ</h5>
            </span>
            
          </div>
        </div>
      </Header>

      <Layout style={{ minHeight: '100vh' }} className='lay'>
        <Sider width={400} className="site-layout-background">
          <Menu mode="inline" defaultSelectedKeys={['1']} style={{ height: '100%', borderRight: 0 }}>
            <Menu.Item key="1">Dashboard <CaretRightOutlined className="MenuArrow" /></Menu.Item>
            <Menu.Item key="2">System configuration<CaretRightOutlined className="MenuArrow" /></Menu.Item>
            <Menu.Item key="3">Service Setup<CaretRightOutlined className="MenuArrow" /></Menu.Item>
            <Menu.Item key="4">Clients<CaretRightOutlined className="MenuArrow" /></Menu.Item>
            <Menu.Item key="5">Service<CaretRightOutlined className="MenuArrow" /></Menu.Item>
            <Menu.Item key="6">Missing Information<CaretRightOutlined className="MenuArrow" /></Menu.Item>
            <Menu.Item key="7">Invoicing<CaretRightOutlined className="MenuArrow" /></Menu.Item>
            <Menu.Item key="8">Ad hoc Services<CaretRightOutlined className="MenuArrow" /></Menu.Item>
            <Menu.Item key="9">Help Desk<CaretRightOutlined className="MenuArrow" /></Menu.Item>
            <Menu.Item key="10">HR<CaretRightOutlined className="MenuArrow" /></Menu.Item>
            <Menu.Item key="11">User Management<CaretRightOutlined className="MenuArrow" /></Menu.Item>
            <Menu.Item key="12">Reports<CaretRightOutlined className="MenuArrow" /></Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Content style={{ padding: '0 24px', minHeight: 280 }}>
            <p>WIKI / IYKONS Article</p>
            <div className="article">
              <div className="back-header">
                <ArrowLeftOutlined />
                <p className="backspace">Back</p>
                <div className="search">
                  <Button icon={<SearchOutlined />} className="searchsize">Search Your keyword & enter</Button>
                </div>
              </div>
              <h4>FRC advice on Streamlined Energy and Carbon Reporting (SECR) rules</h4>
              <p>The Financial Reporting Council (FRC) provides guidance on the Streamlined Energy and Carbon Reporting (SECR) framework, which is part of the UK's efforts to enhance transparency in energy and carbon emissions reporting. Here are key points of advice from the FRC on SECR rules:</p>
              <ol>
                <li>Scope and Applicability
                  <ul>
                    <li>SECR applies to large UK-incorporated companies and LLPs. A company is considered large if it meets at least two of the following criteria:
                      <ul>
                        <li>Turnover of £36 million or more</li>
                        <li>A balance sheet total of £18 million or more</li>
                        <li>250 employees or more</li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>Reporting Obligations
                  <ul>
                    <li>Companies are required to include information about their UK energy use and associated greenhouse gas emissions in their directors' report. This includes:
                      <ul>
                        <li>Annual energy use (kWh) for gas, electricity, and transport</li>
                        <li>Associated greenhouse gas emissions (in tonnes of CO2e)</li>
                        <li>At least one intensity ratio (e.g., emissions per unit of revenue or per employee)</li>
                        <li>Information about energy efficiency actions taken during the financial year</li>
                        <li>Methodologies used for calculations</li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ol>
              <p>Data Collection and Accuracy</p>
              <ol>
                <li>Data Quality and Assurance
                  <ul>
                    <li>Ensure the data collection process is robust and accurate</li>
                    <li>Use verified and reliable data sources</li>
                  </ul>
                </li>
              </ol>
            </div>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default Dashboard;
