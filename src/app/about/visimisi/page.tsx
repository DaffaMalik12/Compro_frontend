// app/visimisi/page.tsx

import { getVisiMisi } from "@/app/lib/visimisiapi";
import LocalVisiMisiCard from "@/app/components/visimisi/LocalVisiMisiCard";

export default async function VisiMisiPage() {
  const visiMisiData = await getVisiMisi(); // Ini mengembalikan VisiMisi[]

  // Periksa jika data tidak ada atau array-nya kosong
  if (!visiMisiData || visiMisiData.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <p className="text-red-600">Data Visi & Misi tidak ditemukan.</p>
        </div>
      </div>
    );
  }

  // Ambil objek PERTAMA dari array
  const data = visiMisiData[0];

  return (
    <LocalVisiMisiCard 
      // Gunakan objek 'data' untuk mengakses properti .visi dan .misi
      visiText={data.visi} 
      misiText={data.misi} 
    />
  );
}