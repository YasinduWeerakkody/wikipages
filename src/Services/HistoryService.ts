import React from "react";
// import axios from "../Utils/API/AxiosConfig";
import axios from "axios";
//pageNo: any, pageSize: any
export const GetHistoryService = async () => {
  const endpoint = `${process.env.REACT_APP_BASE_URL_TEST}/api/Wiki/GetRecentHistory`;

  try {
    const response = await axios.get(endpoint);

    return response.data.data;
  } catch (error) {
    console.error("Error in GetHistoryService: ", error);
    throw error;
  }
};
