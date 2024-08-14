import React from "react";

import "./Navbar.css"
import {
  SettingOutlined,
  SearchOutlined,
  BellOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Avatar, Layout } from "antd";
import logo from '../../Assets/Images/wikilogo.png';

const { Header } = Layout;

const Navbar: React.FC = () => {
  return (
    <div>
      <Header className="header">
        <div
          className="logopart"
          style={{ display: "flex", alignItems: "center" }}
        >
          <img
            src={logo}
            alt="IYKONNECT 3.0"
            style={{ height: "30px", marginRight: "16px" }}
          />

          <div className="headersearchone" style={{ marginLeft: "auto" }}>
            <Button
              className="searchsize"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              To filter the clients by number / name
              <SearchOutlined
                className="iconheader"
                style={{ marginLeft: "8px" }}
              />
            </Button>
          </div>

          <div
            className="profilename"
            style={{ display: "flex", alignItems: "center" }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <SettingOutlined className="profile" />
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <SettingOutlined className="profile1" />
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <BellOutlined className="profile2" />
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <SettingOutlined className="profile3" />
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                paddingLeft: "100px",
              }}
            >
              <Avatar
                className="profile4"
                style={{ backgroundColor: "#000000" }}
                icon={<UserOutlined />}
              />
              <span className="profilruser">JEYARAJ</span>
            </div>
          </div>
        </div>
      </Header>
    </div>
  );
};
export default Navbar;
