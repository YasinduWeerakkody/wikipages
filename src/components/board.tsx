import React, { useState } from 'react';
import '../components/board.css';
import { Button, Layout, Menu, Input, List, Typography } from 'antd';
import { Divider, Flex, Radio, Space, Tooltip } from 'antd';
import { SearchOutlined, ArrowLeftOutlined, CaretRightOutlined } from '@ant-design/icons';
import img1 from '../images/wikilogo.png';
import img2 from '../images/Frame.png';
import HeaderNav from './Navbar/Navbar';

const { Header, Sider, Content } = Layout;
const { Search } = Input;

const Board: React.FC = () => {
    const [position, setPosition] = useState<'start' | 'end'>('end');

    const recentItems = [
      { title: 'Business news', time: '01 hr ago' },
      { title: 'Tax Rates & allowances', time: '01 day ago' },
      { title: 'Staff SOP', time: '01 day ago' },
      { title: 'Covid-19 & BR', time: '03 days ago' },
    ];

  return (
    
    <Layout style={{ minHeight: '100vh' }}>
    <HeaderNav/>
      {/* <Header className="header">
        <div className="header-content">
          <img src={img1} alt="Logo" className="logo" />
          <div className="search-bar">
            <Search
              placeholder="Filter the clients by number / name"
              enterButton={<SearchOutlined />}
              size="large"
            />
          </div>
          <div className="user-info">
            <img src={img2} alt="User Avatar" className="avatar" />
            <span className="user-name">JEYARAJ</span>
          </div>
        </div>
      </Header> */}

      <Layout>
        <Sider width={300} className="site-layout-background">
          <Menu mode="inline" defaultSelectedKeys={['1']} style={{ height: '100%', borderRight: 0 }}>
            <Menu.Item key="1">Dashboard<CaretRightOutlined className="MenuArrow" /></Menu.Item>
            <Menu.Item key="2">System Configuration<CaretRightOutlined className="MenuArrow" /></Menu.Item>
            <Menu.Item key="3">Service Setup<CaretRightOutlined className="MenuArrow" /></Menu.Item>
            <Menu.Item key="4">Clients<CaretRightOutlined className="MenuArrow" /></Menu.Item>
            <Menu.Item key="5">Services<CaretRightOutlined className="MenuArrow" /></Menu.Item>
            <Menu.Item key="6">Missing Information<CaretRightOutlined className="MenuArrow" /></Menu.Item>
            <Menu.Item key="7">Invoicing<CaretRightOutlined className="MenuArrow" /></Menu.Item>
            <Menu.Item key="8">Ad hoc Services<CaretRightOutlined className="MenuArrow" /></Menu.Item>
            <Menu.Item key="9">Help Desk<CaretRightOutlined className="MenuArrow" /></Menu.Item>
            <Menu.Item key="10">HR<CaretRightOutlined className="MenuArrow" /></Menu.Item>
            <Menu.Item key="11">User Management<CaretRightOutlined className="MenuArrow" /></Menu.Item>
            <Menu.Item key="12">Reports<CaretRightOutlined className="MenuArrow" /></Menu.Item>
          </Menu>
        </Sider>
        <Layout style={{ padding: '24px' }}>
          <Content className="content">
            <p className='topic1'>WIKI</p>
            <div className="recent-articles">
            <div className="article-box1">
            <h1>IYKONS WIKI</h1>
            <p className='pra'> One - step Resource for the staff member of IYKONS</p>
            <div className="">
              {/* <Button icon={<SearchOutlined />} className="search-button">Search your keyword & enter</Button> */}
              <Button icon={<SearchOutlined />} iconPosition={position} className='si'>
              <p className='pp'>Search your keyword & enter</p>
          </Button>
            </div>
          </div>
            <div className="articles">
              <div className="article-box">
                <img src={img2} alt="Article Icon" className='article-img'/>
                <h3 className='article-para'>IYKONS Article</h3>
              </div>
              <div className="article-box">
                <img src={img2} alt="Article Icon" className='article-img'/>
                <h3 className='article-para'>IYKONS Article Group</h3>
              </div>
            </div>
            {/* <div className="recent-articles"> */}
            <div className="recent-list">
  <p className='topic'>Recent</p>
  <ul>
    {recentItems.map((item, index) => (
      <li 
        key={index} 
        style={{
          backgroundColor: index % 2 === 0 ? '#e6f7ff' : '#0000', // alternating light blue shades
          padding: '10px',
          borderRadius: '5px',
          marginBottom: '5px',
        }}
      >
        {item.title}
        <span className="time" style={{ float: 'right', color: '#000' }}>
          {item.time}
        </span>
      </li>
    ))}
  </ul>
  <Button className="history-button">See more history</Button>

   {/* <div className="recent-list">
                <h3>Recent</h3>
                <ul>
                  {recentItems.map((item, index) => (
                    <li key={index} className='adk'>
                      {item.title}
                      <span className="time">{item.time}</span>
                    </li>
                  ))}
                </ul>
                <Button className="history-button">See more history</Button> */}
              </div>


              </div>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default Board;
