import React from "react";
import defaultProfile from '../../Assets/Images/defaultProfile.png'
import logo from '../../Assets/Images/wikilogo.png';
import "./Navbar.css"
import {
  BellOutlined
} from "@ant-design/icons";
import { Button, Avatar, Layout } from "antd";


const Navbar: React.FC = () => {
  return (
    <div>
      <div className="navbar">
        <div className="navbar_left"> 
        <div className="navbar_left_img">
        <img
            src={logo}
            alt="IYKONNECT 3.0"

          /> 
        </div>
        </div>

        <div className="navbar_right"> 
        <div className="navbar_right_btns">
<BellOutlined className="navbar_right_btns_icon"/>
        </div>
        <div className="navbar_right_profile">
        <div className="navbar_right_profile_img">
        <img
            src={defaultProfile}
            alt="Default Profile"
          /> 
        </div>
        <div className="navbar_right_profile_info"> 
        <div className="navbar_right_profile_name">Default Name</div>
        <div className="navbar_right_profile_email">default@gmail.com</div>
        </div>
       
        </div>
      
        </div>
      
      </div>
    </div>
  );
};
export default Navbar;
