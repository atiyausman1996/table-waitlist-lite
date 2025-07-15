import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header"; // make sure this path is correct

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Table Waitlist Lite",
  description: "A simple restaurant waitlist prototype",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans`}
      >
        <Header />
        <main className="max-w-2xl mx-auto py-6 px-4">{children}</main>
      </body>
    </html>
  );
}
