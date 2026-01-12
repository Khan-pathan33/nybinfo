import axios from "axios";

export const getDashboardData = async () => {
  const users = await axios.get("https://jsonplaceholder.typicode.com/users");
  const posts = await axios.get("https://jsonplaceholder.typicode.com/posts");

  return {
    users: users.data.length,
    sales: posts.data.length * 10,
    orders: posts.data.length,
  };
};

