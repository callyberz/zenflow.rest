import "~/styles/globals.css";

import { Inter } from "next/font/google";
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";

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
      <body className={`font-sans ${inter.variable} bg-[#6f5de6]`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
