import GitHubCalendar from "react-github-calendar";
import { octokit } from "~/app/util/Octokit";
type Activity = {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
};

export default async function Page({ params }: { params: { id: string } }) {
  const { data: listPublicEvents } =
    await octokit.rest.activity.listPublicEventsForUser({
      username: params.id,
    });
  return (
    <section className="grid grid-cols-12 gap-4">
      <figcaption className=" col-span-12 rounded-lg border-2 border-violet-500 p-4">
        <GitHubCalendar username={params.id} colorScheme="dark" />
      </figcaption>
      {listPublicEvents.map((event) => (
        <article className="col-span-12 rounded-lg border-2 border-violet-500 p-6 ">
          <time className="mr-2">
            {event.created_at &&
              new Date(event.created_at).toLocaleDateString("de-De", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
          </time>
          {"/"}
          <time className="ml-2">
            {event.created_at &&
              new Date(event.created_at)
                .toLocaleTimeString("en-En", {
                  hour: "2-digit",
                  minute: "2-digit",
                })
                .toLowerCase()}
          </time>
          <article className="flex justify-between">
            <p>{event.repo.name}</p>

            <p>{event.type} </p>
            <p>{event.payload.action}</p>
            <p className="flex justify-end">
              {" "}
              {event.public ? "public" : "private"}
            </p>
          </article>
        </article>
      ))}
    </section>
  );
}
