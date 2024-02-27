import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Raleway } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--paragraph" });
const raleway = Inter({ subsets: ["latin"], variable: "--heading" });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          `${inter.variable} ${raleway.variable}`,
          "antialiased min-h-screen"
        )}
      >
        {children}
      </body>
    </html>
  );
}