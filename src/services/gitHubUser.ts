import { api } from "./api";

export const getGitHubUser = async (user: string) => {
  const { data } = await api.get(`/users/${user}`);

  return data;
};
