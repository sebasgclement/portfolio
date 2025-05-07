// app/layout.tsx
import Footer from "@/components/Footer";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sebas Clement | Full Stack Developer",
  description: "Portfolio de desarrollador full stack",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${inter.className} scroll-smooth bg-black text-white`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
