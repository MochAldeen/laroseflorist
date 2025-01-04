"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import emailjs from "emailjs-com"; // Import EmailJS

export default function ContactPage() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Mengirimkan data form ke email toko menggunakan EmailJS
    emailjs
      .send(
        "service_zsm2kbe",   // Ganti dengan Service ID Anda dari EmailJS
        "template_ltk9gyx",   // Ganti dengan Template ID Anda dari EmailJS
        formData,             // Mengirim data form
        "T-mVeCGAU5WmgPOh0"        // Ganti dengan User ID Anda dari EmailJS
      )
      .then(
        (response) => {
          toast({
            title: "Pesan Terkirim",
            description: "Terima kasih telah menghubungi kami. Kami akan segera merespons pesan Anda.",
          });
          setFormData({ name: "", email: "", phone: "", message: "" });
        },
        (error) => {
          toast({
            title: "Gagal Mengirim Pesan",
            description: "Terjadi kesalahan saat mengirim pesan. Coba lagi nanti.",
            variant: "destructive",
          });
        }
      );
  };

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h1 className="text-3xl font-bold mb-6">Hubungi Kami</h1>
            <div className="space-y-4 text-gray-600">
              <p>
                Kami siap membantu Anda dengan pertanyaan atau permintaan khusus.
                Silakan hubungi kami melalui form di samping atau gunakan informasi kontak di bawah ini.
              </p>
    
              <div className="mt-8 space-y-4">
                <div>
                  <h3 className="font-semibold">Alamat</h3>
                  <p>Jl. lupa<br />Jakarta Barat, Indonesia</p>
                </div>

                <div>
                  <h3 className="font-semibold">Telepon</h3>
                  <p>(+62) 859-6901-3111</p>
                </div>

                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p>info@laroseflorist.com</p>
                </div>

                <div>
                  <h3 className="font-semibold">Jam Operasional</h3>
                  <p>Senin - Minggu: 08.00 - 20.00 WIB</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-6">Kirim Pesan</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Nama Lengkap
                </label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Nomor Telepon
                </label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Pesan
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={4}
                />
              </div>

              <Button type="submit" className="w-full bg-pink-600 hover:bg-pink-700">
                Kirim Pesan
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
