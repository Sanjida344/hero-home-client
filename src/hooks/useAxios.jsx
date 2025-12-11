import axios from "axios";

const useAxios = () => {
	const baseURL = import.meta.env.VITE_API_URL;

	if (!baseURL) {
		console.error(
			"VITE_API_URL is not set. Please define it in your .env to point to your backend API."
		);
	}

	const instance = axios.create({
		baseURL,
	});

	return instance;
};

export default useAxios;
