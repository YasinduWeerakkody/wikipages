import React from "react";
import { AppstoreOutlined, SettingOutlined } from "@ant-design/icons";
import { Menu, MenuProps } from "antd";

const Sidemenu: React.FC = () => {
  type MenuItem = Required<MenuProps>["items"][number];

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
  };

  const items: MenuItem[] = [
    {
      key: "sub1",
      label: "Dashboard",
      icon: <AppstoreOutlined />,
    },

    {
      key: "sub2",
      label: "Service Setup",
      icon: <AppstoreOutlined />,
    },

    {
      key: "sub3",
      label: "Clients",
      icon: <SettingOutlined />,
    },
    {
      key: "sub4",
      label: "Services",
      icon: <AppstoreOutlined />,
    },
    {
      key: "sub5",
      label: "Missing Information",
      icon: <AppstoreOutlined />,
    },
    {
      key: "sub6",
      label: "Invoicing",
      icon: <AppstoreOutlined />,
    },
    {
      key: "sub7",
      label: "Ad hoc Services",
      icon: <AppstoreOutlined />,
    },
    {
      key: "sub8",
      label: "Help Desk",
      icon: <AppstoreOutlined />,
    },

    {
      key: "sub10",
      label: "HR",
      icon: <AppstoreOutlined />,
    },
    {
      key: "sub11",
      label: "User Management",
      icon: <AppstoreOutlined />,
    },
    {
      key: "sub12",
      label: "Reports",
      icon: <AppstoreOutlined />,
    },
  ];
  return (
    <div>
      <Menu
        onClick={onClick}
        style={{ width: 300, height: 920 }}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        items={items}
      />
    </div>
  );
};

export default Sidemenu;
