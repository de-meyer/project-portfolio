import { Inter } from "next/font/google";
import Header from "~/components/Header";

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
      <body className={`font-sans ${inter.variable}`}>
        <Header params={params} />
        {children}
      </body>
    </html>
  );
}
