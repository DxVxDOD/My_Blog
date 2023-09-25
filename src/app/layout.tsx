import "./globals.css";
import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import React from "react";

const inter = JetBrains_Mono({
  subsets: ["latin"],
  fallback: ["system-ui", "arial"],
});

export const metadata: Metadata = {
  title: "David's thoughts",
  description: "David Orbangs personal blog site",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className='h-full w-full' lang="en">
      <body
        className={`${inter.className} bg-zinc-900 text-zinc-300 container h-full min-w-full mx-auto flex flex-col`}
      >
        {children}
      </body>
    </html>
  );
}
