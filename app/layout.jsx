import "./globals.css";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";

export const metadata = {
  title: "Professional Drain Cleaning Services",
  description:
    "Drain cleaning, sewer line repair, and high-pressure jetting services for residential and commercial properties",
  icons: {
    icon: "/favicon.ico", 
  },
  openGraph: {
    title: "Professional Drain Cleaning Services",
    description:
      "Drain cleaning, sewer line repair, and high-pressure jetting services for residential and commercial properties",
    url: "https://bishopsdrain.com/", // 
    siteName: "Professional Drain Cleaning Services",
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
    <html lang="en" data-theme="dark" className="dark">
      <body>
        {/* <Header /> */}
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}