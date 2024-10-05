import localFont from "next/font/local";
import "./globals.css";

import Menu from "./components/Menu/Menu";

export const metadata = {
  title: "Yash Singh | MERN Stack",
  description: "MERN Full Stack Web-Developer",
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Menu />
        {children}
      </body>
    </html>
  );
}
