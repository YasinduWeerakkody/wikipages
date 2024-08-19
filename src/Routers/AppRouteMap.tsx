import NewDashboard from "../components/Dashboard/newDashboard";
import { Route, Routes } from "react-router-dom";
import Article from "../Pages/Articles/Article";
import Article_Group from "../Pages/ArticlesGroup/Article_Group";
import WikiPage from "../Pages/Wiki/WikiPage/WikiPage";
import ArticleView from "../Pages/ArticleView/ArticleView";
import ArticleGroupView from "../Pages/ArticleGroupView/ArticleGroupView";
import HistoryPage from "../Pages/History/HistoryPage";
const routesList = [
  {
    path: "/",
    component: WikiPage,
    key: "/",
  },
  {
    path: "/WIKI/IYKONSArticleGroup",
    component: Article_Group,
    key: "/WIKI/IYKONSArticleGroup",
  },
  {
    path: "/WIKI/IYKONSArticle",
    component: Article,
    key: "/WIKI/IYKONSArticle",
  },
  {
    path: "/WIKI/IYKONSArticle/View",
    component: ArticleView,
    key: "/WIKI/IYKONSArticle/View",
  },
  {
    path: "/WIKI/IYKONSArticleGroup/View",
    component: ArticleGroupView,
    key: "/WIKI/IYKONSArticleGroup/View",
  },
  {
    path: "/WIKI/History",
    component: HistoryPage,
    key: "/WIKI/History",
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
