import NewDashboard from "../components/Dashboard/newDashboard";
import { Route, Routes } from 'react-router-dom'
import Article from "../components/Pages/Articles/Article";

import Article_Group from "../components/Pages/ArticlesGroup/Article_Group";
const routesList = [
    {
        path: '/',
        component: NewDashboard,
        key: '/',
    },
    {
    path:'/WIKI/IYKONSArticleGroup',    
    component:  Article_Group,
    key: '/WIKI/IYKONS Article Group',
    },
   
    {
        path:'/WIKI/IYKONSArticle',    
        component: Article,
        key: '/WIKI/IYKONS Article',
    },
         
    ]




    function AppRouteMap() {
        return (
            <div>
                <Routes key={'1'}>
                    {routesList?.map((item) => {
                        return (
                            <Route
                                path={item.path}
                                Component={item.component}
                                key={item.key}
                            />
                        )
                    })}
                </Routes>
            </div>
        )
    }
    
    export default AppRouteMap