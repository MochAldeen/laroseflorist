import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { products } from "@/lib/products";

export default function Home() {
  const featuredProducts = products.slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[600px]">
        <Image
          src="https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?auto=format&fit=crop&q=80"
          alt="Rangkaian bunga indah"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <div className="max-w-2xl text-white">
              <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                Rangkaian Bunga Segar untuk Momen Spesial Anda
              </h1>
              <p className="text-lg mb-8">
                Kami menghadirkan karya seni floral terbaik untuk setiap kesempatan istimewa Anda.
              </p>
              <Button asChild size="lg" className="bg-pink-600 hover:bg-pink-700">
                <Link href="/produk">Lihat Koleksi Kami</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Koleksi Unggulan</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-2">{product.description}</p>
                  <p className="text-gray-600 mb-2">{product.quantity} {product.unit}</p>
                  <p className="text-lg font-bold text-pink-600 mb-4">
                    Rp {product.price.toLocaleString()}
                  </p>
                  <Button asChild variant="outline" className="w-full">
                    <Link href={`/produk/${product.id}`}>Lihat Detail</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Mengapa Memilih Kami</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌸</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Bunga Segar Premium</h3>
              <p className="text-gray-600">
                Kami hanya menggunakan bunga berkualitas terbaik untuk setiap rangkaian.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚚</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Pengiriman Cepat</h3>
              <p className="text-gray-600">
                Layanan pengiriman tepat waktu ke seluruh Indonesia.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💝</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Desain Kustom</h3>
              <p className="text-gray-600">
                Rangkaian bunga dapat disesuaikan dengan keinginan Anda.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}