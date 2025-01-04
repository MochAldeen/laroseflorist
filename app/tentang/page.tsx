import Image from "next/image";

export const metadata = {
  title: 'Tentang Kami | LaRose Florist',
  description: 'Pelajari lebih lanjut tentang LaRose Florist, toko bunga premium di Indonesia.',
};

export default function AboutPage() {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-3xl font-bold mb-6">Tentang LaRose Florist</h1>
            <div className="space-y-4 text-gray-600">
              <p>
                LaRose Florist didirikan pada tahun 2015 dengan visi untuk menghadirkan keindahan bunga
                segar berkualitas premium kepada pelanggan di seluruh Indonesia.
              </p>
              <p>
                Kami memiliki tim florist profesional yang berpengalaman dalam menciptakan rangkaian
                bunga yang indah dan unik untuk berbagai kesempatan, mulai dari pernikahan,
                wisuda, hingga acara korporat.
              </p>
              <p>
                Setiap rangkaian bunga kami dibuat dengan penuh dedikasi dan ketelitian, menggunakan
                bunga-bunga segar berkualitas terbaik yang dipilih langsung dari pemasok terpercaya.
              </p>
            </div>
          </div>
          <div className="relative h-[400px]">
            <Image
              src="https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80"
              alt="Tim LaRose Florist"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Nilai-Nilai Kami</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💐</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Kualitas Premium</h3>
              <p className="text-gray-600">
                Kami hanya menggunakan bunga berkualitas terbaik untuk menjamin kepuasan pelanggan.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Kreativitas</h3>
              <p className="text-gray-600">
                Setiap rangkaian adalah karya seni yang unik dan dibuat dengan kreativitas tinggi.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Pelayanan Prima</h3>
              <p className="text-gray-600">
                Kepuasan pelanggan adalah prioritas utama dalam setiap layanan kami.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}