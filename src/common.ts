// src/common.ts

export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5167";
export const API_USER = import.meta.env.VITE_API_USER || "/api/user";
export const API_LOGIN = import.meta.env.VITE_API_LOGIN || "/login";
export const API_REGISTER = import.meta.env.VITE_API_REGISTER || "/register";
export const API_LOGOUT = import.meta.env.VITE_API_LOGOUT || "/logout";

export const config = {
    API_BASE_URL,
    API_USER,
    API_LOGIN,
    API_REGISTER,
    API_LOGOUT,
};