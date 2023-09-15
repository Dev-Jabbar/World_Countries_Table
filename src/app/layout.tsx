import { CountryContextProvider } from "@/context/CountryContext";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Countries Table ",
  description: "A table describing the continent , name etc",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <CountryContextProvider>
        <body className={inter.className}>{children}</body>
      </CountryContextProvider>
    </html>
  );
}
