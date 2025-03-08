import "./globals.css";
import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ThemeProvider } from "next-themes";
import { CartProvider } from "./context/CartContext"; // Import CartProvider

export const metadata: Metadata = {
  title: "My eCommerce",
  description: "High-performance eCommerce website",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <CartProvider> {/* Wrap the app with CartProvider */}
          <ThemeProvider attribute="class" defaultTheme="light">
            <Navbar />
            {children}
            <Footer />
          </ThemeProvider>
        </CartProvider>
      </body>
    </html>
  );
}

