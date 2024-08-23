import NewDashboard from "../components/Dashboard/newDashboard";
import { Route, Routes } from "react-router-dom";
import Article from "../Pages/Articles/Article";
import Article_Group from "../Pages/ArticlesGroup/Article_Group";
import WikiPage from "../Pages/Wiki/WikiPage/WikiPage";
import ArticleView from "../Pages/ArticleView/ArticleView";
import ArticleGroupView from "../Pages/ArticleGroupView/ArticleGroupView";
import RecentArticleView from "../Pages/Wiki/RecentArticleView/RecentArticleView";
const routesList = [
  {
    path: "/",
    component: WikiPage,
    key: "/",
    breadcrumbName: "Wiki",
  },
  {
    path: "/WIKI/IYKONSArticleGroup",
    component: Article_Group,
    key: "/WIKI/IYKONSArticleGroup",
    breadcrumbName: "Article Groups",
  },
  {
    path: "/WIKI/IYKONSArticle",
    component: Article,
    key: "/WIKI/IYKONSArticle",
    breadcrumbName: "Articles",
  },
  {
    path: "/WIKI/IYKONSArticle/View",
    component: ArticleView,
    key: "/WIKI/IYKONSArticle/View",
    breadcrumbName: "View Article",
  },
  {
    path: "/WIKI/IYKONSArticleGroup/View",
    component: ArticleGroupView,
    key: "/WIKI/IYKONSArticleGroup/View",
    breadcrumbName: "View Article Group",
  },
  {
    path: "/WIKI/RecentArticle/View",
    component: RecentArticleView,
    key: "/WIKI/RecentArticle/View",
    breadcrumbName: "View Recent Article ",
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
