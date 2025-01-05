export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  details?: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Buket Mawar Merah",
    description: "Rangkaian 12 tangkai mawar merah segar dengan hiasan baby breath.",
    price: 550000,
    image: "/images/rosemerah.webp",
    details: "Buket mawar merah klasik yang mewah, terdiri dari 12 tangkai mawar merah premium dengan tambahan baby breath yang elegan. Cocok untuk momen romantis atau ungkapan kasih sayang."
  },
  {
    id: 2,
    name: "Korean Buket",
    description: "Rangkaian elegan Mawar Putih dengan box dengan nuansa Korean Buket.",
    price: 650000,
    image: "/images/boxwhiterose.webp",
    details: "Rangkaian bunga mawar putih yang anggun dengan sentuhan daun box. Memancarkan kemurnian dan keanggunan, sempurna untuk acara pernikahan atau dekorasi."
  },
  {
    id: 3,
    name: "Standing Flower",
    description: "Rangkaian bunga berdiri untuk acara formal.",
    price: 1200000,
    image: "/images/standing.webp",
    details: "Rangkaian bunga berdiri mewah yang cocok untuk berbagai acara formal seperti pembukaan bisnis, wisuda, atau acara korporat. Dibuat dengan kombinasi bunga premium pilihan."
  },
  {
    id: 4,
    name: "Buket Mix Flower",
    description: "Kombinasi cantik berbagai bunga musiman pilihan.",
    price: 750000,
    image: "/images/mixflower.webp",
    details: "Rangkaian bunga campuran yang colorful dengan kombinasi bunga-bunga segar musiman. Setiap rangkaian unik dan special dengan pemilihan bunga terbaik."
  },
  {
    id: 5,
    name: "Buket Uang",
    description: "Buket tangan dengan mawar impor dan uang kertas yang disusun dan dihias dengan cara kreatif, menyerupai bunga atau bentuk dekoratif lainnya.",
    price: 850000,
    image: "/images/moneybuket.webp",
    details: "Buket tangan premium yang terdiri dari mawar impor berkualitas tinggi. Setiap buket dikerjakan dengan detail dan presisi untuk menghasilkan tampilan yang mewah."
  },
  {
    id: 6,
    name: "Karangan Bunga",
    description: "Rangkaian bunga yang disusun dengan artistik dan dipergunakan untuk menyampaikan pesan atau perasaan tertentu",
    price: 450000,
    image: "/images/karanganbunga.webp",
    details: "Rangkaian bunga elegan dalam kotak eksklusif yang dirancang khusus. Kombinasi sempurna antara bunga segar pilihan dengan packaging premium."
  }
];