"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="w-full px-4 sm:px-6 lg:px-8 py-4 border-b shadow-sm bg-white sticky top-0 z-10 font-sans">
      <div className="flex flex-col md:flex-row items-center justify-between gap-2">
        {/* Left: Title */}
        <h1 className="text-lg font-bold whitespace-nowrap">
          🍽️ Table Waitlist Lite
        </h1>

        {/* Center: Navigation */}
        <nav className="flex gap-4 text-sm">
          <Link
            href="/waitlist"
            className={`hover:underline transition-all ${
              pathname === "/waitlist"
                ? "text-black font-bold underline"
                : "text-gray-700"
            }`}
          >
            Waitlist
          </Link>
          <Link
            href="/seated"
            className={`hover:underline transition-all ${
              pathname === "/seated"
                ? "text-black font-bold underline"
                : "text-gray-700"
            }`}
          >
            Seated Guests
          </Link>
        </nav>

        {/* Right: Empty placeholder if needed */}
        <div className="hidden md:block w-8" />
      </div>
    </header>
  );
}
