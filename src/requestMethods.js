import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYjg1NGVmY2FiMDk4MTYzNTk5N2MyZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzOTY2MTYwNSwiZXhwIjoxNjM5OTIwODA1fQ.1DmsqisLbcj6diunqmXekCDfC4PC919J9F18rvxyXpI";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
