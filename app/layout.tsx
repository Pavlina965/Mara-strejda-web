import { ReactNode } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Navbar";
import StickyFooter from "./components/StickyFooter";
import ThemeRegistry from "./components/ThemeRegistry";
import "./globals.css";

export const metadata = {
  title: "Mikopa s.r.o",
  description: "Mikopa s.r.o.",
};
export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <StickyFooter />
      </body>
    </html>
  );
}
