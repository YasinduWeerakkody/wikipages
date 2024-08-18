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
  console.log("+++++++++++", articlesForm);
  // console.log(data);
  const testdata = {
    articleGroupId: 21,
    groupName: "Test: A Comprehensive Look at Imaginary Web Development Tools",
    description:
      "<p>This article is a test, created to take up space and see how everything looks when formatted on the page. We’re going to pretend that we’re discussing the latest and greatest web development tools, but in reality, this is all just made up nonsense designed to make sure your website is functioning properly. There’s no real substance here, just a series of paragraphs meant to fill the page with text so you can see how it all comes together.</p><p>As you read through this 'comprehensive look,' keep in mind that none of these tools actually exist. They’re all figments of the imagination, invented solely for the purpose of giving this article some semblance of structure. You might see references to things like 'HyperCode Generator 3000' or 'CSS Magic Wand,' but rest assured, they’re not real. What is real, however, is the need to ensure that your website’s design can handle various types of content. That’s what this article is really about.</p><p>In the end, this is just a filler article, not meant to be taken seriously. It’s here to do one job, and that’s to test the layout and formatting of your content. So, as you scroll through, pay attention to how the text is displayed, how the margins look, and whether or not everything appears as it should. And once you’re done, feel free to delete this article and replace it with something that actually matters. But for now, this nonsense is doing exactly what it was intended to do: nothing, and everything, all at once.</p>",
    icon: "",
    iconType: 0,
    isPublic: 0,
    isSharedInSocialMedia: 0,
    isActive: "Active",
  };
  const HandleCardClick = () => {
    dispatch(setArticleGroup(testdata));
    // const articlesForm = useSelector((state: RootState) => state.articlesGroup);
    // console.log("+++++++++++", articlesForm);
    navigate("/WIKI/IYKONSArticleGroup/View");
  };
  return (
    <div>
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
