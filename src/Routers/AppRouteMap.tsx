import NewDashboard from "../components/Dashboard/newDashboard";
import { Route, Routes } from "react-router-dom";
import Article from "../Pages/Articles/Article";
import Article_Group from "../Pages/ArticlesGroup/Article_Group";
import WikiPage from "../Pages/Wiki/WikiPage/WikiPage";
import ArticleView from "../Pages/ArticleView/ArticleView";
import ArticleGroupView from "../Pages/ArticleGroupView/ArticleGroupView";
const routesList = [
  {
    path: "/",
    component: WikiPage,
    key: "/",
  },
  {
    path: "/WIKI/IYKONSArticleGroup",
    component: Article_Group,
    key: "/WIKI/IYKONS Article Group",
  },

  {
    path: "/WIKI/IYKONSArticle",
    component: Article,
    key: "/WIKI/IYKONS Article",
  },
  {
    path: "/WIKI/IYKONSArticle/View",
    component: ArticleView,
    key: "/WIKI/IYKONS Article",
  },
  {
    path: "/WIKI/IYKONSArticleGroup/View",
    component: ArticleGroupView,
    key: "/WIKI/IYKONS Article",
  },
];

function AppRouteMap() {
  return (
    <div>
      <Routes key={"1"}>
        {routesList?.map((item) => {
          return (
            <Route path={item.path} Component={item.component} key={item.key} />
          );
        })}
      </Routes>
    </div>
  );
}

export default AppRouteMap;
