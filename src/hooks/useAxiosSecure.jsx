import axios from "axios";
import { useAuth } from "./useAuth";

const useAxiosSecure = () => {
	const { user } = useAuth();
	const baseURL = import.meta.env.VITE_API_URL;

	if (!baseURL) {
		console.error(
			"VITE_API_URL is not set. Please define it in your .env to point to your backend API."
		);
	}

	const instance = axios.create({
		baseURL,
	});

  instance.interceptors.request.use(async (config) => {
    if (user) {
      const token = await user.getIdToken();
      config.headers.authorization = `Bearer ${token}`;
    }
    return config;
  });

  return instance;
};

export default useAxiosSecure;
