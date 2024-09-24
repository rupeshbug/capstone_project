import { Inter, Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "Intextify",
  description: "Unravel the insights from documents",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <Navbar />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
