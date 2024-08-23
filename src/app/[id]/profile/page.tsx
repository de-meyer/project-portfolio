import { octokit } from "~/app/util/Octokit";

export default async function page({ params }: { params: { id: string } }) {
  const { data: user } = await octokit.rest.users.getByUsername({
    username: params.id,
  });
  return (
    <main className=" text-s min-h-screen items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white  ">
      <figure>
        <img
          src={user.avatar_url}
          alt="image of the users avatar"
          title="image of the users avatar"
          className=" rounded-full"
        />
        <figcaption>{user.name}</figcaption>
      </figure>
    </main>
  );
}
