import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Pusat Pengembangan Bahasa UIN Jakarta',
  description: 'Website UPT Pusat Bahasa UIN Jakarta',
  icons: {
    icon: '/images/logo.ico'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className={`${inter.className} bg-white`}>
        <Header />
        <main className="bg-white min-h-screen  pt-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}