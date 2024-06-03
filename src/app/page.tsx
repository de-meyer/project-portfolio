import Dashboard from "~/components/Dashboard";

export default function HomePage() {
  return (
    <main className="grid min-h-screen grid-cols-12 flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white ">
      <Dashboard />
    </main>
  );
}
