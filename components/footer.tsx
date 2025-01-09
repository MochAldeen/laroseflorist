import { Flower, Instagram, Facebook, Twitter } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center">
              <Image
                src="/images/logo.webp"
                alt="LaRose Florist Logo"
                width={32} // Adjust the width as needed
                height={32} // Adjust the height as needed
                className="h-15 w-20" // Set the height and width of the logo
              />
              <span className="ml-2 text-xl font-bold">La Rose Florist</span>
            </div>
            <p className="text-gray-600">
              Menghadirkan keindahan bunga segar untuk momen spesial Anda.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Layanan</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link href="/produk" className="text-gray-600 hover:text-pink-600">
                  Bunga Pernikahan
                </Link>
              </li>
              <li>
                <Link href="/produk" className="text-gray-600 hover:text-pink-600">
                  Bunga Wisuda
                </Link>
              </li>
              <li>
                <Link href="/produk" className="text-gray-600 hover:text-pink-600">
                  Bunga Duka Cita
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Perusahaan</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link href="/tentang" className="text-gray-600 hover:text-pink-600">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link href="/kontak" className="text-gray-600 hover:text-pink-600">
                  Hubungi Kami
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Kontak</h3>
            <ul className="mt-4 space-y-4">
              <li className="text-gray-600">
                Jl. H Mean Ujung No. 156,<br />RT 01/RW 10<br />
                Tangerang, Indonesia
              </li>
              <li className="text-gray-600">
                Tel: (+62) 859-6901-3111
              </li>
              <li className="flex space-x-4">
                <a href="https://www.instagram.com/la.roseflorist?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="text-gray-600 hover:text-pink-600">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-600 hover:text-pink-600">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-600 hover:text-pink-600">
                  <Twitter className="h-6 w-6" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 border-t border-gray-200 pt-8">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} La Rose Florist. Hak Cipta Dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
}
