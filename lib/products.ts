export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  details?: string;
  unit: string;
  quantity: number;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Buket Mawar Merah",
    description: "Rangkaian 12 tangkai mawar merah segar dengan hiasan baby breath.",
    price: 650000,
    image: "/images/redrose.webp",
    details: "Buket mawar merah klasik yang mewah, terdiri dari 12 tangkai mawar merah premium dengan tambahan baby breath yang elegan. Cocok untuk momen romantis atau ungkapan kasih sayang.",
    unit: "Buket",
    quantity: 1
  },
  {
    id: 2,
    name: "Standing Flower",
    description: "Rangkaian bunga berdiri yang mewah dan elegan",
    price: 650000,
    image: "/images/standing.webp",
    details: "Rangkaian bunga berdiri mewah yang cocok untuk berbagai acara formal seperti pembukaan bisnis, wisuda, atau acara korporat. Dibuat dengan kombinasi bunga premium pilihan.",
    unit: "Standing Flower",
    quantity: 1
  },
  {
    id: 3,
    name: "Table Decor",
    description: "Rangkaian dekorasi meja floral menggunakan kombinasi bunga premium.",
    price: 80000,
    image: "/images/tabledecor.webp",
    details: "Dekorasi meja dengan sentuhan bunga yang elegan, dirancang untuk menciptakan suasana yang segar dan mempesona di setiap acara. Dengan perpaduan bunga segar dan elemen dekoratif lainnya.",
    unit: "Pack",
    quantity: 1
  },
  {
    id: 4,
    name: "Buket Mix Flower",
    description: "Rangkaian bunga cantik yang menggabungkan berbagai bunga musiman pilihan, menciptakan komposisi warna yang segar dan bersemangat.",
    price: 1100000,
    image: "/images/mixflower.webp",
    details: "Rangkaian bunga campuran yang colorful dengan kombinasi bunga-bunga segar musiman. Setiap rangkaian unik dan special dengan pemilihan bunga terbaik.",
    unit: "Buket",
    quantity: 1
  },
  {
    id: 5,
    name: "Buket Uang",
    description: "Buket tangan dengan mawar impor dan uang kertas yang disusun dan dihias dengan cara kreatif, menyerupai bunga atau bentuk dekoratif lainnya.",
    price: 6600000,
    image: "/images/moneybuket.webp",
    details: "Buket tangan premium yang terdiri dari mawar impor berkualitas tinggi. Setiap buket dikerjakan dengan detail dan presisi untuk menghasilkan tampilan yang mewah.",
    unit: "Buket",
    quantity: 1
  },
  {
    id: 6,
    name: "Karangan Bunga",
    description: "Rangkaian bunga yang disusun dengan artistik dan dipergunakan untuk menyampaikan pesan atau perasaan tertentu",
    price: 800000,
    image: "/images/karanganbunga.webp",
    details: "Rangkaian bunga elegan dalam kotak eksklusif yang dirancang khusus. Kombinasi sempurna antara bunga segar pilihan dengan packaging premium.",
    unit: "Karangan Bunga",
    quantity: 1
  }
];
