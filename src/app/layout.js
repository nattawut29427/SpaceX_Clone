import { Barlow_Condensed } from "next/font/google";
import "./styles/globals.scss";

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  variable: "--font-barlow-condensed",
});

export const metadata = {
  title: "Modern Next.js App",
  description: "A high-performance, responsive web application template",
};

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import layoutStyles from "@/components/Layout/Layout.module.scss";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={barlowCondensed.variable}>
      <body className={layoutStyles.main}>
        {/* <Navbar /> */}
        <main className={layoutStyles.content}>
          {children}
        </main>
      </body>
    </html>
  );
}
