// app/home/layout.js
import { ReactNode } from "react";
import Header from "@/components/Header"; // Header untuk halaman landing
import Footer from "@/components/Footer"; // Footer umum untuk landing page

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <div className="home-layout">
      <Header /> {/* Header untuk halaman landing */}
      <main>{children}</main> {/* Konten utama landing page */}
      <Footer /> {/* Footer untuk halaman landing */}
    </div>
  );
}
