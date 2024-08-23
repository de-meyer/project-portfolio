import { octokit } from "~/app/util/Octokit";

export default async function UserInfo({ params }: { params: { id: string } }) {
  const { data: user } = await octokit.rest.users.getByUsername({
    username: params.id,
  });
  return (
    <figure>
      <img
        src={user.avatar_url}
        alt="image of the users avatar"
        title="image of the users avatar"
        className=" rounded-full"
      />
      <figcaption>{user.name}</figcaption>
      <figcaption>{params.id}</figcaption>
    </figure>
  );
}
