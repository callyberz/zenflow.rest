import "~/styles/globals.css";

import { Inter } from "next/font/google";
import Header from "~/components/Header";
import { Toaster } from "~/components/ui/sonner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "zenflow.rest",
  description: "Enter the Zen Flow",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`bg-amber-400 font-sans ${inter.variable}`}>
        <Header />
        <Toaster />
        {children}
      </body>
    </html>
  );
}
