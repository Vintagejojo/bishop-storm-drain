import "./globals.css";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";

export const metadata = {
  title: "Professional Plumbing Services",
  description:
    "Quality plumbing services for residential and commercial properties",
  icons: {
    icon: "/favicon.ico", 
  },
  openGraph: {
    title: "Professional Plumbing Services",
    description:
      "Quality plumbing services for residential and commercial properties",
    url: "https://bishopsdrain.com/", // 
    siteName: "Professional Plumbing Services",
    images: [
      {
        url: "/images/bishop_logo.webp", // place an image in /public/images
        width: 1200,
        height: 630,
        alt: "Service truck preview",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* <Header /> */}
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}