import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "União Embalagens",
  description: "Sua loja completa para embalagens, produtos de limpeza e artigos para festas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Header />
        
        {/* Aqui no meio vão entrar a Página Inicial, o Catálogo, etc. */}
        <div className="min-h-[60vh]">
          {children} 
        </div>

        <Footer />
      </body>
    </html>
  );
}