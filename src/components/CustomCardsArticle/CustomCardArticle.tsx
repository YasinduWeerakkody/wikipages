import React from "react";
import "./CustomCardArticle.css";
import { Card } from "antd";
import { EditOutlined, DeleteOutlined, EyeOutlined } from "@ant-design/icons";
import parse from "html-react-parser";
import { useSelector, useDispatch } from "react-redux";
import { addArticle } from "../../Reducer/ArticleSlice";
import { RootState } from "../../Store/store";
import { useNavigate } from "react-router-dom";
//Todo fix the Card name
// Define the structure of the data
interface NewsCard {
  title: string;
  content: string;
}
// Main component
const CustomCardArticle: React.FC<{ data: any }> = (props) => {
  const { data } = props;
  const navigate = useNavigate();
  const articlesfrom = useSelector((state: RootState) => state.articles);
  console.log("+++++++++++", articlesfrom);
  const dispatch = useDispatch();

  const HandleCardClick = () => {
    console.log(data);
    dispatch(addArticle(data));
    navigate("/WIKI/IYKONSArticle/View");
  };

  return (
    <div>
      <Card
        onClick={HandleCardClick}
        className="card"
        title={parse(`${data.articleName} (${data.articleGroupName})`)}>
        <p>{parse(data.articleDescription)}</p>
      </Card>
    </div>
  );
};

export default CustomCardArticle;
