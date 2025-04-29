import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "./globals.css";
import NavBar from "@/components/NavBar/NavBar";


export const metadata: Metadata = {
  title: "Mi Portafolio",
  description: "Portafolio de proyectos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body

      >
        {children}
      </body>
    </html>
  );
}
