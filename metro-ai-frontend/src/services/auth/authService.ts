export interface LoginRequest {
    email: string;
    password: string;
}

export interface UserProfile {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    role: "USER" | "ADMIN";
}

export interface LoginResponse {
    accessToken: string;
    tokenType: string;
    user: UserProfile;
}

import api from "../../lib/axios";

export async function login(
    data: LoginRequest
): Promise<LoginResponse> {

    const response = await api.post<LoginResponse>(
        "/auth/login",
        data
    );

    return response.data;
}

export async function register(data: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}) {
    const response = await api.post("/auth/register", data);

    return response.data;
}

export async function getCurrentUser() {
    const response = await api.get("/auth/me");
    return response.data;
}