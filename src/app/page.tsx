import Searchfield from "~/components/Searchfield";

export default async function HomePage() {
  return (
    <main className=" grid min-h-screen grid-cols-12 flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white ">
      <div className="col-span-2"></div>
      <section className="col-span-8 flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <h1 className="text-4xl font-extrabold tracking-tight text-white ">
          For which GITHUB user are you looking for?
        </h1>
        <Searchfield />
      </section>
    </main>
  );
}
