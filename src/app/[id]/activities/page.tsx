import { octokit } from "~/app/util/Octokit";

export default async function Page({ params }: { params: { id: string } }) {
  const { data: listPublicEvents } =
    await octokit.rest.activity.listPublicEventsForUser({
      username: params.id,
    });

  return (
    <>
      {listPublicEvents.map((event) => (
        <article className="col-span-9 rounded-lg border-2  bg-white p-6 text-gray-700">
          <time>
            {" "}
            {new Date(event.created_at).toLocaleDateString("de-De", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          <article className="flex justify-between">
            <p>{event.repo.name}</p>

            <p>{event.type} </p>
            <p className="flex justify-end">
              {" "}
              {event.public ? "public" : "private"}{" "}
            </p>
          </article>
        </article>
      ))}
    </>
  );
}
