
import  Link from 'next/link';
import { getStructureImageUrl, getStructuresById } from '@/app/lib/structuresidapi';
import WelcomeMessageCard from '@/app/components/sambutan/WelcomeMessageCard';

export default async function SambutanPemimpin() {
    // ID kepala pusat pengembangan bahasa
    const KEPALA_PPB_ID = 1;

    try {
        // 1. data diambil langsung dari server saat request masuk
        const data = await getStructuresById(KEPALA_PPB_ID);
        
        // 2. Jika data tidak ditemukan (meskipun API seharusnya throw error, ini adalah penjaga tambahan)
    if (!data) {
        return (
          <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="text-center">
              <p className="text-gray-600">Sambutan Kepala PPB tidak ditemukan.</p>
              <Link href="/home" className="text-blue-600 hover:text-blue-700 mt-4 block">
                Kembali ke Beranda
              </Link>
            </div>
          </div>
        );
      }
        
      return (
        <div className="min-h-screen bg-gray-50">
          <main className="py-12">
            <WelcomeMessageCard
              personName={data.nama}
              personTitle={data.jabatan}
              welcomeText={data.detail}
              personImageUrl={getStructureImageUrl(data.gambar)}
            />
          </main>
        </div>
      );
} catch (error) {
    console.error("Error fetching sambutan pemimpin:", error);
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="text-center">
                <p className="text-red-600">Terjadi kesalahan saat mengambil data sambutan pemimpin.</p>
                <Link href="/" className="text-blue-600 hover:text-blue-700 mt-4 block">
                    Kembali ke Beranda
                </Link>
            </div>
        </div>
    );
    }
}