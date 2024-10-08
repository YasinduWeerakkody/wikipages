import React from "react";
import "./CustomCardArticle.css";
import { Card } from "antd";
import parse from "html-react-parser";
import { useDispatch } from "react-redux";
import { setArticle } from "../../Reducer/ArticleSlice";
import { RootState } from "../../Store/store";
import { useNavigate } from "react-router-dom";

const CustomCardArticle: React.FC<{ data: any }> = (props) => {
  const { data } = props;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const HandleCardClick = () => {
    // console.log(data);
    dispatch(setArticle(data));
    navigate("/WIKI/IYKONSArticle/View");
  };

  return (
    <div>
      <Card
        onClick={HandleCardClick}
        className="card"
        title={parse(`${data.articleName} (${data.articleGroupName})`)}>
        <p className="card-description">{parse(data.articleDescription)}</p>
      </Card>
    </div>
  );
};

export default CustomCardArticle;
