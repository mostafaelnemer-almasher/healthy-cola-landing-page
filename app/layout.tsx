import type { Metadata } from "next";
import { Roboto_Condensed } from "next/font/google";
import "./globals.css";
import { WagmiProviderWrapper } from "@/providers/wagmi";
import QueryProvider from "@/providers/react-query";
import AosInit from "./_components/layout/aos-init";
import Footer from "./_components/layout/footer";
import Nav from "./_components/layout/nav";

const robotoCondensed = Roboto_Condensed({
  variable: "--font-roboto-condensed",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Landing Page | Healthy Cola",
  description:
    "Healthy Cola is a clear low or no sugar cola for health-conscious consumers. Clean ingredients, transparent labeling, and familiar taste without the sugar spike. Built to stay competitive in markets with sugar taxes while meeting modern regulations.",
  keywords: [
    "Healthy Cola",
    "Low Sugar Cola",
    "No Sugar Soda",
    "Clear Cola",
    "Healthy Beverage",
    "Soft Drink",
    "Clean Label",
    "Sugar Tax Friendly",
    "Better For You Drinks",
    "Functional Beverage",
  ],
  creator: "TokenMinds",
  authors: {
    name: "Healthy Cola",
    url: process.env.NEXT_PUBLIC_APP_URL,
  },
  publisher: "Healthy Cola",
  applicationName: "Healthy Cola",
  twitter: {
    card: "summary_large_image",
    title: "Landing Page | Healthy Cola",
    description:
      "Healthy Cola is a clear low or no sugar cola with clean ingredients and transparent labeling. Familiar taste without the sugar spike.",
    creator: "tokenminds_co",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_APP_URL}/assets/logos/logo.png`,
        width: 184,
        height: 183,
      },
    ],
  },
  openGraph: {
    title: "Healthy Cola | Landing Page",
    description:
      "Healthy Cola is a clear low or no sugar cola for modern, health-conscious consumers. Clean label and regulation ready.",
    url: process.env.NEXT_PUBLIC_APP_URL,
    siteName: "Healthy Cola",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_APP_URL}/assets/logos/logo.png`,
        width: 184,
        height: 183,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${robotoCondensed.variable}  antialiased bg-white`}>
        <WagmiProviderWrapper>
          <QueryProvider>
            <AosInit />
            <Nav />
            {children}
            <Footer />
          </QueryProvider>
        </WagmiProviderWrapper>
      </body>
    </html>
  );
}
