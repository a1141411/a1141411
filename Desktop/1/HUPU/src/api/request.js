import { axiosInstance } from "./config";
import axios from "axios";

export const getCategoryRequest =
    () => axios.get('http://localhost:3300/getVideos')

    