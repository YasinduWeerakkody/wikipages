// axiosConfig.js

import axios from 'axios'

const instance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    // baseURL: 'https://demoapi.iykons.com', // Replace with your API base URL
})

// Set authentication headers for requests
instance.interceptors.request.use((config) => {
    //const token = localStorage.getItem('jwtToken') 
    const token= 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiaW5mb0BpeWtvbnMuY29tIiwianRpIjoiMTJkN2FmYzYtOTZjZi00Yzc2LTkyZjYtZTQyYzA1YWZjNWMwIiwiZXhwIjoxNzIxOTIwMjcwLCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjUwMDAiLCJhdWQiOiJodHRwOi8vbG9jYWxob3N0OjQyMDAifQ._x3eMT79U4QvDJAsM7pHf5R3cVxtDeRjtcIA2j2a9io'
    if (token !== null && token !== undefined ) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config 
})

export default instance
 