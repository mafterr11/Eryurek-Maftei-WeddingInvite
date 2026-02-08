import { Alex_Brush, Libre_Baskerville } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/general/Navbar";
import MobileNav from "@/components/general/MobileNav";
import LenisScroll from "@/components/general/Lenis";
import { Toaster } from "@/components/ui/sonner";

const libreBaskerville = Libre_Baskerville({
  variable: "--font-libreBaskerville",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const alexBrush = Alex_Brush({
  variable: "--font-alexBrush",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "🕊️ Eryurek x Maftei 🕊️",
  description: "Invitație",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${libreBaskerville.variable} ${alexBrush.variable} bg-lightGreen relative overflow-x-hidden`}
      >
        <div className="xl:flex xl:h-screen ">
          {/* Navbar: Fixed width, does not overlap content */}
          <Navbar />
          <MobileNav />
          <LenisScroll />
          {/* Content section: Takes up remaining space */}
          <main className="xl:flex-1 xl:pl-[22rem] max-md:overflow-x-hidden">
            <div className="flex flex-col">{children}</div>
          </main>
          <Toaster />
        </div>
      </body>
    </html>
  );
}
