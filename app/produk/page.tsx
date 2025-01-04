import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { products } from "@/lib/products";

export const metadata = {
  title: 'Produk | LaRose Florist',
  description: 'Temukan koleksi rangkaian bunga segar terbaik kami untuk berbagai kesempatan.',
};

export default function ProductsPage() {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-8">Koleksi Kami</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
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
                <p className="text-lg font-bold text-pink-600 mb-4">Rp {product.price.toLocaleString()}</p>
                <Button asChild variant="outline" className="w-full">
                  <Link href={`/produk/${product.id}`}>Lihat Detail</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}