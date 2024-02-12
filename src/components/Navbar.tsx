import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <nav className="bg-primary-600 fixed left-0 top-0 flex items-center shadow-lg shadow-black/40 dark:bg-gray-700 dark:shadow-none">
        <div className="flex w-full items-center justify-between gap-3 px-4">
          <div className="flex items-center gap-3">
            <Link href="/" className="relative mr-3">
              Home
            </Link>
            <Link href="/about" className="relative mr-3">
              About
            </Link>
            <Link href="/contact" className="relative mr-3">
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
