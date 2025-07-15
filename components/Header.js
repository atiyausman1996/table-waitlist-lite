"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="flex justify-between items-center px-6 py-4 border-b shadow-sm bg-white sticky top-0 z-10 font-sans">
      {/* Left: Title */}
      <h1 className="text-lg font-bold whitespace-nowrap">
        🍽️ Table Waitlist Lite
      </h1>

      {/* Center: Navigation */}
      <nav className="absolute left-1/2 transform -translate-x-1/2 space-x-4 text-sm">
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

      {/* Right: Empty placeholder for spacing */}
      <div className="w-8" />
    </header>
  );
}
