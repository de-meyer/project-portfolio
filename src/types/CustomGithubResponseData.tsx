type CustomGithubResponseData = {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string | undefined;
  owner: {
    name?: string | null | undefined;
    email?: string | null | undefined;
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    starred_at?: string | undefined;
  };
  language?: string | null | undefined;
};
export default CustomGithubResponseData;
