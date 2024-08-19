import React from "react";
import { Button, Input } from "antd";
import "./CustomSearchInputText.css";
import { SearchOutlined } from "@ant-design/icons";
const { Search } = Input;

interface CustomSearchInputText {
  placeholder?: string;
  width?: string;
  onSearch?: (data: any) => void;
  onChange?: (data: any) => void;
  onPressEnter?: (data: any) => void;
  height?: string;
  onclick?: () => void;
  noSearchResults?: boolean;
}

const CustomSearchInputText = (
  props: CustomSearchInputText
): React.ReactElement => {
  const {
    placeholder = "To filter the clients by number / name",
    onSearch,
    onChange,
    onclick,
    noSearchResults,
  } = props;
  const checkkey = (e: any) => {
    if (e.key === "Enter") {
      onclick && onclick();
    }
  };

  return (
    <div className="search">
      <div className="search_InputBtn_wrapper">
        <input
          placeholder={placeholder}
          onChange={onChange}
          className="search_InputBtn_input"
          onKeyDown={(e) => checkkey(e)}

          // size="large"
          // prefix={<SearchOutlined className="search-icon" />}
        />
        <button className="search_InputBtn_button" onClick={onclick}>
          <SearchOutlined />
          {/* Search */}
        </button>
      </div>

      {noSearchResults && (
        <div className="noResultsFound">No results found. Try again?</div>
      )}
    </div>
  );
};

export default CustomSearchInputText;
