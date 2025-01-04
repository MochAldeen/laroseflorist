import { products } from "@/lib/products";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id.toString(),
  }));
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find(p => p.id === parseInt(params.id));
  
  if (!product) {
    notFound();
  }

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="relative h-[500px]">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>
          
          <div>
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <p className="text-2xl font-bold text-pink-600 mb-6">
              Rp {product.price.toLocaleString()}
            </p>
            <div className="prose prose-lg mb-6">
              <p className="text-gray-600">{product.details || product.description}</p>
            </div>
            
            <Button className="w-full bg-pink-600 hover:bg-pink-700">
              Pesan Sekarang
            </Button>
            
            <div className="mt-8 border-t pt-8">
              <h2 className="text-lg font-semibold mb-4">Informasi Pengiriman</h2>
              <ul className="space-y-2 text-gray-600">
                <li>• Pengiriman tersedia untuk area Jakarta dan sekitarnya</li>
                <li>• Estimasi pengiriman 1-2 hari kerja</li>
                <li>• Gratis ongkir untuk pemesanan di atas Rp 1.000.000</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}