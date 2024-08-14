import React, { useState } from 'react';
import './Wiki.css';
import { Button, Layout, Menu, Input, List, Typography } from 'antd';
import { Divider, Flex, Radio, Space, Tooltip } from 'antd';
import { SearchOutlined, ArrowLeftOutlined, CaretRightOutlined } from '@ant-design/icons';
import img1 from '../../Assets/Images/wikilogo.png';
import img2 from '../../Assets/Images/Frame.png';
import Navbar from '../../components/Navbar/Navbar';
import { useNavigate } from 'react-router-dom';
const { Header, Sider, Content } = Layout;
const { Search } = Input;

const Wiki: React.FC = () => {
  const navigate = useNavigate();
    const [position, setPosition] = useState<'start' | 'end'>('end');

    const recentItems = [
      { title: 'Business news', time: '01 hr ago' },
      { title: 'Tax Rates & allowances', time: '01 day ago' },
      { title: 'Staff SOP', time: '01 day ago' },
      { title: 'Covid-19 & BR', time: '03 days ago' },
    ];
    //Add 
    const HandleClick=(SelectedOption:string)=>{
      switch (SelectedOption){
        case'Article':
        navigate('/WIKI/IYKONSArticle')
        break;
        case 'ArticleGroup':
        navigate('/WIKI/IYKONSArticleGroup')
        break;        
      }
    }

  return (
    
    <Layout style={{ minHeight: '100vh' }}>
    <Navbar/>
     
    
      
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

              <div onClick={(e)=>HandleClick('Article')} className="article-box">
                <img src={img2} alt="Article Icon" className='article-img'/>
                <h3 className='article-para'>IYKONS Article</h3>
              </div>
              <div onClick={(e)=>HandleClick('ArticleGroup')}  className="article-box">
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
 
  );
};

export default Wiki;
