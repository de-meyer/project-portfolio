import { octokit } from "~/app/util/Octokit";
import { FaPeopleRobbery } from "react-icons/fa6";

export default async function UserInfo({ params }: { params: { id: string } }) {
  const { data: user } = await octokit.rest.users.getByUsername({
    username: params.id,
  });
  return (
    <>
      <figure>
        <img
          src={user.avatar_url}
          alt="image of the users avatar"
          title="image of the users avatar"
          className=" rounded-full"
        />
        <figcaption className="text-3xl font-bold">{user.name}</figcaption>
        <article>
          <span>{params.id}</span>
          <p>{user.bio}</p>
        </article>
        <article className="flex items-center">
          <FaPeopleRobbery className="m-1" />
          <span className="m-1" id="followers">
            {user.followers}
          </span>
          <label className="m-1" htmlFor="followers">
            Followers -
          </label>
          <span className="m-1" id="following">
            {user.following}
          </span>
          <label className="m-1" htmlFor="following">
            Following
          </label>
        </article>
      </figure>
    </>
  );
}
