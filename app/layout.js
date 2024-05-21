import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header.js"
import Footer from "@/components/Footer.js"
import SessionWrapper from "@/components/SessionWrapper";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Black Bag Campaigns",
  description: "Supporting causes in the shadows",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionWrapper>
          <div className="[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
            <Header />
            {children}
            <Footer />
          </div>
        </SessionWrapper>
      </body>
    </html>
  );
}
