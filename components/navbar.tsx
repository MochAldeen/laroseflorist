"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Flower } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image"; 

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              {/* Replace the Lucide Flower icon with the custom logo image */}
              <Image
                src="/images/logo.webp"
                alt="LaRose Florist Logo"
                width={32} // Adjust the width as needed
                height={32} // Adjust the height as needed
                className="h-15 w-20" // Set the height and width of the logo
              />
              <span className="ml-2 text-xl font-bold text-gray-900">La Rose Florist</span>
            </Link>
          </div>
          
          <div className="hidden sm:flex sm:space-x-8">
            <Link href="/" className="text-gray-900 hover:text-pink-600 px-3 py-2 text-sm font-medium">
              Beranda
            </Link>
            <Link href="/produk" className="text-gray-900 hover:text-pink-600 px-3 py-2 text-sm font-medium">
              Produk
            </Link>
            <Link href="/tentang" className="text-gray-900 hover:text-pink-600 px-3 py-2 text-sm font-medium">
              Tentang Kami
            </Link>
            <Link href="/kontak" className="text-gray-900 hover:text-pink-600 px-3 py-2 text-sm font-medium">
              Kontak
            </Link>
          </div>

          <div className="flex items-center sm:hidden">
            <Button
              variant="ghost"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <Link
              href="/"
              className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-pink-600"
            >
              Beranda
            </Link>
            <Link
              href="/produk"
              className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-pink-600"
            >
              Produk
            </Link>
            <Link
              href="/tentang"
              className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-pink-600"
            >
              Tentang Kami
            </Link>
            <Link
              href="/kontak"
              className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-pink-600"
            >
              Kontak
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}