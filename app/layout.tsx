import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'LaRose Florist | Toko Bunga Premium di Indonesia',
  description: 'LaRose Florist menyediakan rangkaian bunga segar berkualitas tinggi untuk berbagai acara spesial Anda. Pengiriman ke seluruh Indonesia.',
  keywords: 'toko bunga, florist indonesia, rangkaian bunga, bunga segar, bunga pernikahan, bunga wisuda, LaRose Florist',
  openGraph: {
    title: 'LaRose Florist | Toko Bunga Premium di Indonesia',
    description: 'LaRose Florist menyediakan rangkaian bunga segar berkualitas tinggi untuk berbagai acara spesial Anda.',
    images: ['/images/logo.webp'],  // Menambahkan logo di Open Graph
  },
  icons: {
    icon: '/images/logo.webp', // Favicon atau logo
  },
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}