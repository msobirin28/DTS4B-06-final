import axios from "axios";

const API_TOKEN = "AIYMtK5jx6vCtzBH65F0J0tQpPZSVx6flDkL2yWI";
const baseUrl = "https://api.thenewsapi.com/v1/";

const thenewsapi = axios.create({
  baseURL: baseUrl,
  params: {
    api_token: API_TOKEN,
  },
});

export default thenewsapi;
