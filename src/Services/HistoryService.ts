import React from "react";
import axios from "../Utils/API/AxiosConfig";
export const GetHistoryService = (pageNo: any, pageSize: any) => {
  const requestPayload = {
    searchCriteriaList: [
      {
        fieldName: "string",
        searchOperator: 1,
        fieldValue1: "string",
        fieldValue2: "string",
      },
    ],
    sortOrderList: [
      {
        fieldName: "string",
        orderDirection: 0,
      },
    ],
  };

  const endpoint = `${process.env.REACT_APP_BASE_URL}/api/Wiki/GetHistory/${pageNo}/${pageSize}`;
  try {
    const response = axios.post(endpoint, requestPayload);
  } catch (error) {
    console.error("Error in GetHistoryService: ", error);
    throw error;
  }
};
