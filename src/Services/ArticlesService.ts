import axios from "../Utils/API/AxiosConfig";
/**
 * Function to make a POST request using axios instance
 * @param {string} endpoint - The API endpoint to post to (e.g., '/api/resource')
 * @param {object} data - The data to be sent in the POST request
 * @returns {Promise} - Returns a promise with the server's response
 */

export const GetArticleService = async (pageNo: any, pageSize: any) => {
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

  const endpoint = `https://reactapi.iykons.com/api/Wiki/GetArticleList/${pageNo}/${pageSize}`;
  try {
    const response = await axios.post(endpoint, requestPayload);
    console.log(response.data);
    return {
      noOfRecords: response.data.noOfRecords,
      articlesData: response.data.data,
    };
  } catch (error) {
    console.error("Error in GetArticleService: ", error);
    throw error;
  }
};

// Todo Need to implement the below function
export const GetByNameArticleService = async (
  FieldValue: any,
  pageNo: any,
  pageSize: any
) => {
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

  const endpoint = `https://reactapi.iykons.com/api/Wiki/GetArticleList/${pageNo}/${pageSize}`;
  try {
    const response = await axios.post(endpoint, requestPayload);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error in GetArticleService: ", error);
    throw error;
  }
};
