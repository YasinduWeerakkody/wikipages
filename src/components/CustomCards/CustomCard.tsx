import React from "react";
import './CustomCard.css';
import { Card } from "antd";
import { EditOutlined, DeleteOutlined, EyeOutlined } from "@ant-design/icons";
import parse from 'html-react-parser';
//Todo fix the Card name 
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
  // Add more objects as needed
];

// Handle preview, edit, and delete actions (add your own logic)
const handlePreview = (index: number) => {
  console.log(`Previewing item at index ${index}`);
};

const handleEdit = (index: number) => {
  console.log(`Editing item at index ${index}`);
};

const handleDelete = (index: number) => {
  console.log(`Deleting item at index ${index}`);
};


// Main component
const CustomCard: React.FC<{ data: any }> = (props) => {
  const { data } = props;


// console.log(data)
// console.log(data.articleDescription)
  return (
    <div>
      <Card
      className="card"
        title={parse(`${data.articleName} (${data.articleGroupName})`)}
       
     
      >
        <p>{parse(data.articleDescription)}</p>
     
      </Card>
    </div>
  );
}; 
  
 
  export default CustomCard;