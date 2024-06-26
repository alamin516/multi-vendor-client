import "@/styles/admin.css";
import "@/styles/globals.css";
import "@/styles/main.css";
import { Inter as FontSans } from "next/font/google";

import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import Visitor from "@/components/Visitor";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Multi-vendor E-commerce Website",
  description: "Multi-vendor E-commerce Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Visitor/>
        </ThemeProvider>
      </body>
    </html>
  );
}
