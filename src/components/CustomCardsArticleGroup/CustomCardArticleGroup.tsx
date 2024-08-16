import React from "react";
import './CustomCardArticleGroup.css';
import { Card } from "antd";
import { EditOutlined, DeleteOutlined, EyeOutlined } from "@ant-design/icons";
import parse from 'html-react-parser';
//Todo fix the Card name 
// Define the structure of the data
interface NewsCard {
  title: string;
  content: string;
}



/*
This component is a card that displays the article group name and description
Params: data: any
Returns: Card component
*/
const CustomCardArticleGroup: React.FC<{ data: any }> = (props) => {
  const { data } = props;


console.log(data)

  return (
    <div>
      <Card
      className="card"
        title={parse(`${data.groupName} `)}
      >
        <p>{parse(data.description)}</p>
      </Card>
    </div>
  );
}; 
  
 
  export default CustomCardArticleGroup;