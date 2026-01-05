import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
// @ts-ignore: CSS module type declarations are missing in this project
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Free Party Games",
  description: "Built for fun-loving people who want to play party games without the hassle.",
  metadataBase: new URL("https://freepartygames.online"),
  openGraph: {
    title: "Free Party Games",
    description: "Built for fun-loving people who want to play party games without the hassle.",
    url: "https://freepartygames.online",
    siteName: "Free Party Games",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Free Party Games",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  keywords: [
    "party games",
    "free games",
    "multiplayer games",
    "charades",
    "spyfall",
    "word games",
    "family games",
    "friends",
    "fun",
    "open source games",
    "no ads",
    "no login",
    "privacy",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased doodle`}
      >
        {children}
      </body>
    </html>
  );
}
