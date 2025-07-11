// app/artikel/page.tsx

import ArtikelSection from '@/app/components/artikel/ArtikelSection'; // Sesuaikan path jika perlu
import { getBerita } from '@/app/lib/beritaapi'; // Pastikan Anda memiliki fungsi ini

export default async function HalamanSemuaArtikel() {
  // Ambil SEMUA data berita dari API Anda
  const semuaBerita = await getBerita();

  return (
    // Gunakan komponen yang sudah kita modifikasi untuk menampilkan semua data
    <ArtikelSection berita={semuaBerita} />
  );
}