import type { Metadata } from "next";
import { Archivo, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const source = Source_Sans_3({
  variable: "--font-source",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "GTA's Finest Property Maintenance | Interlock, Fences & Grading in Richmond Hill",
  description:
    "Interlock patios and walkways, step releveling, fences and gates, yard regrading, sod and topsoil, lawn care and snow removal in Richmond Hill and York Region. Call Josh at (647) 745-9400.",
  openGraph: {
    title: "GTA's Finest Property Maintenance | Richmond Hill Interlock, Fences & Grading",
    description:
      "Richmond Hill hardscape and property maintenance crew led by Josh. Fair prices, clean work. Call (647) 745-9400.",
    type: "website",
    locale: "en_CA",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${archivo.variable} ${source.variable} antialiased`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
