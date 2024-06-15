import Searchfield from "~/components/Searchfield";

export default async function HomePage() {
  return (
    <main className="grid min-h-screen grid-cols-12 flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white ">
      <Searchfield />
    </main>
  );
}
