import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import logo from "./assets/photos/logo_nrgym_header.svg"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NRGym - Sala de Fitness din Oradea",
  description: "NRGym este sala de fitness din Oradea care oferă antrenamente personalizate, echipamente moderne și un mediu motivant pentru a-ți atinge obiectivele de sănătate și fitness. Vino să experimentezi sesiuni de antrenament eficiente, ghidate de instructori calificați, într-un spațiu prietenos și energic. Fie că vrei să slăbești, să îți îmbunătățești condiția fizică sau să construiești masă musculară, NRGym este locul perfect pentru tine. Începe azi călătoria ta către un stil de viață mai sănătos!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        
      </body>
    </html>
  );
}
