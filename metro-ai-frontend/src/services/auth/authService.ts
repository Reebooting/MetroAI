import api from "../../lib/axios";

export async function login(data: {
  email: string;
  password: string;
}) {
  const response = await api.post("/auth/login", data);

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