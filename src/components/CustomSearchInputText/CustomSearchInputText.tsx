import React from "react";
import { Button, Input } from "antd";
import "./CustomSearchInputText.css";
import { SearchOutlined } from "@ant-design/icons";
const { Search } = Input;

interface CustomSearchInputText {
  placeHolder?: string;
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
    placeHolder = "To filter the clients by number / name",
    onSearch,
    onChange,
    onclick,
    noSearchResults,
  } = props;

  const suffix = (
    <Button className="customSearchButton" onClick={onclick}>
      <SearchOutlined />
      {/* Search */}
    </Button>
  );
  return (
    <div className="searchDiv">
      <Search
        placeholder={placeHolder}
        onChange={onChange}
        onSearch={onSearch}
        style={{ width: "100%" }}
        enterButton={suffix}
        className="searchStyles"
        size="large"
        // prefix={<SearchOutlined className="search-icon" />}
      />
      {noSearchResults && (
        <div className="noResultsFound">No results found. Try again?</div>
      )}
    </div>
  );
};

export default CustomSearchInputText;
