import React from "react";
import "./CustomCardArticleGroup.css";
import { Card } from "antd";
import parse from "html-react-parser";
import { useSelector, useDispatch } from "react-redux";
import { setArticleGroup } from "../../Reducer/ArticleGroupSlice";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../Store/store";

/*
This component is a card that displays the article group name and description
Params: data: any
Returns: Card component
*/
const CustomCardArticleGroup: React.FC<{ data: any }> = (props) => {
  const { data } = props;
  const navigate = useNavigate();
  const articlesForm = useSelector((state: RootState) => state.articleGroups);
  const dispatch = useDispatch();

  const HandleCardClick = () => {
    dispatch(setArticleGroup(data));
    // const articlesForm = useSelector((state: RootState) => state.articlesGroup);
    // console.log("+++++++++++", articlesForm);
    navigate("/WIKI/IYKONSArticleGroup/View");
  };
  return (
    <div className="card_wrap">
      <Card
        onClick={HandleCardClick}
        className="card"
        title={parse(`${data.groupName} `)}>
        <p>{parse(data.description)}</p>
      </Card>
    </div>
  );
};

export default CustomCardArticleGroup;
