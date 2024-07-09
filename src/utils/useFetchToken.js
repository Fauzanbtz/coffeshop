import axios from "axios";

const useFetchToken = async () => {
  const api = axios
    .get("https://kohi-backend.vercel.app/api/auth/login")
    .then((res) => res.data.accessToken);

  console.log(api);
};
