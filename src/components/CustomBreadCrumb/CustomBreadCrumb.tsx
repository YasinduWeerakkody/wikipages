import React from "react";
import { Breadcrumb } from "antd";
// import { Link, useLocation } from "react-router-dom";
import "./CustomBreadCrumb.css";
import { useLocation, Link } from "react-router-dom";

const routesList = [
  {
    path: "/",
    breadcrumbName: "WIKI",
  },
  {
    path: "/WIKI/IYKONSArticleGroup",
    breadcrumbName: "IYKONS Article Group",
  },
  {
    path: "/WIKI/IYKONSArticle",
    breadcrumbName: "IYKONS Article",
  },
  //   {
  //     path: "/WIKI/IYKONSArticle/View",
  //     breadcrumbName: "IYKONS Article",
  //   },
  //   {
  //     path: "/WIKI/IYKONSArticleGroup/View",
  //     breadcrumbName: "",
  //   },
  {
    path: "/WIKI/History",
    breadcrumbName: "History",
  },
];
const CustomBreadcrumb = () => {
  // useLocation hook from react-router-dom gives us the current URL path
  const location = useLocation();

  // Split the current path into parts using '/' as a delimiter and filter out any empty strings
  const pathSnippets = location.pathname.split("/").filter((i) => i);

  // Start the breadcrumb items array with the 'Home' link
  const breadcrumbItems = [
    <Breadcrumb.Item key="home">
      <Link to="/">Home</Link>
    </Breadcrumb.Item>,
  ];

  // Loop through the path snippets to build the breadcrumb trail
  pathSnippets.forEach((_, index) => {
    // Rebuild the URL incrementally with each iteration
    const url = `/${pathSnippets.slice(0, index + 1).join("/")}`;

    // Find the matching route from the routesList based on the current url
    const route = routesList.find((r) => r.path === url);

    // If a matching route is found, add a breadcrumb item to the breadcrumbItems array
    if (route) {
      breadcrumbItems.push(
        <Breadcrumb.Item key={url}>
          {/* Link component is used to make each breadcrumb item clickable */}
          <Link to={url}>{route.breadcrumbName}</Link>
        </Breadcrumb.Item>
      );
    }
  });

  // Return the Breadcrumb component from Ant Design, populated with the generated breadcrumb items
  return (
    <Breadcrumb className="CustomBreadCrumbButton">
      {breadcrumbItems}
    </Breadcrumb>
  );
};

export default CustomBreadcrumb;
