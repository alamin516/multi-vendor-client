import { Inter } from "next/font/google";
import "./globals.css";
import "@/assets/style/main.css"
import "@/assets/style/admin.css"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Multi-vendor E-commerce Website",
  description: "Multi-vendor E-commerce Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>{children}</body>
    </html>
  );
}
