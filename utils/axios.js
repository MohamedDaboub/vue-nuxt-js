import axios from "axios";

export const client = axios.create({
    baseURL: process.env.NUXT_PUBLIC_API_URL,
});