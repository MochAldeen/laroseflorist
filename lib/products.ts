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
    image: "https://images.unsplash.com/photo-1587556930799-8dca6fad6d41?auto=format&fit=crop&q=80",
    details: "Buket mawar merah klasik yang mewah, terdiri dari 12 tangkai mawar merah premium dengan tambahan baby breath yang elegan. Cocok untuk momen romantis atau ungkapan kasih sayang."
  },
  {
    id: 2,
    name: "Buket Lily Putih",
    description: "Rangkaian elegan lily putih dengan daun eucalyptus.",
    price: 650000,
    image: "https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&q=80",
    details: "Rangkaian bunga lily putih yang anggun dengan sentuhan daun eucalyptus. Memancarkan kemurnian dan keanggunan, sempurna untuk acara pernikahan atau dekorasi."
  },
  {
    id: 3,
    name: "Buket Mix Flower",
    description: "Kombinasi cantik berbagai bunga musiman pilihan.",
    price: 750000,
    image: "https://images.unsplash.com/photo-1562690868-60bbe7293e94?auto=format&fit=crop&q=80",
    details: "Rangkaian bunga campuran yang colorful dengan kombinasi bunga-bunga segar musiman. Setiap rangkaian unik dan special dengan pemilihan bunga terbaik."
  },
  {
    id: 4,
    name: "Standing Flower",
    description: "Rangkaian bunga berdiri untuk acara formal.",
    price: 1200000,
    image: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?auto=format&fit=crop&q=80",
    details: "Rangkaian bunga berdiri mewah yang cocok untuk berbagai acara formal seperti pembukaan bisnis, wisuda, atau acara korporat. Dibuat dengan kombinasi bunga premium pilihan."
  },
  {
    id: 5,
    name: "Hand Bouquet Premium",
    description: "Buket tangan premium dengan mawar impor.",
    price: 850000,
    image: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&q=80",
    details: "Buket tangan premium yang terdiri dari mawar impor berkualitas tinggi. Setiap buket dikerjakan dengan detail dan presisi untuk menghasilkan tampilan yang mewah."
  },
  {
    id: 6,
    name: "Flower Box",
    description: "Rangkaian bunga dalam kotak eksklusif.",
    price: 450000,
    image: "https://images.unsplash.com/photo-1595880350898-5f0d4e4f3ce6?auto=format&fit=crop&q=80",
    details: "Rangkaian bunga elegan dalam kotak eksklusif yang dirancang khusus. Kombinasi sempurna antara bunga segar pilihan dengan packaging premium."
  }
];