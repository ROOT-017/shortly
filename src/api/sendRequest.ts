import axios from "axios";

interface requestProps {
  url: string;
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE"; // Add other methods here if needed
  data?: any;
  headers?: any;
  params?: any;
}
///api/v2/link
const baseUrl = "https://shrtlnk.dev";
export const SendRequest = async (arg: requestProps) => {
  try {
    const response = await axios({
      method: arg.method,
      url: `${baseUrl}${arg.url}`,
      data: arg.data,
      params: { ...arg.params },
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "api-key": process.env.REACT_APP_API_KEY,
        ...arg.headers,
      },
    });
    return {
      data: response.data,
      error: null,
    };
  } catch (err: any) {
    if (err.code === "ERR_NETWORK") {
      return {
        data: null,
        error: "Network Error",
        status: 400,
      };
    } else {
      return {
        data: null,
        status: err.response.status,
        error: err.response || err.response.error,
      };
    }
  }
};
