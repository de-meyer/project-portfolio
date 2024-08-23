import { Inter } from "next/font/google";
import Header from "~/components/Header";
import UserInfo from "~/components/UserInfo";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});
export default function MainLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { id: string };
}) {
  return (
    <html lang="en">
      <body
        className={`font-sans ${inter.variable} min-h-screen bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white`}
      >
        <Header params={params} />
        <section className="container grid grid-cols-12 gap-4">
          <aside className="col-span-3">
            <UserInfo params={params} />
          </aside>
          <main className=" text-s col-span-9 grid grid-cols-9 items-center justify-center gap-4    ">
            {children}
          </main>
        </section>
      </body>
    </html>
  );
}
