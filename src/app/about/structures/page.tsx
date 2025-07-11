import { getStructures } from "@/app/lib/structuresapi";
import StrukturOrganisasiUI from "@/app/components/structure/StrukturOrganisasi";
import { Structure } from "@/app/types/structures";

export default async function StrukturOrganisasiPage() {
  // 1. Mengambil data di server
  const allData: Structure[] | null = await getStructures();

  // Jika data gagal diambil atau array-nya kosong, tampilkan pesan error.
  if (!allData || allData.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-lg text-red-500">Gagal memuat atau data struktur organisasi tidak ditemukan.</p>
      </div>
    );
  }

  // 2. Langsung kirim semua data ke komponen
  // Komponen akan menangani pengelompokan berdasarkan jabatan
  return (
    <StrukturOrganisasiUI data={allData} />
  );
}