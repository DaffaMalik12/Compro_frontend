// app/components/home/ProgramSection.tsx

import { Berita } from '@/app/types/Berita';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  berita: Berita[];
}

// Fungsi untuk menghapus HTML tag tanpa pakai document
function stripHtml(html: string): string {
  return html?.replace(/<[^>]+>/g, '') || '';
}

export default function ProgramSection({ berita = [] }: Props) {
  return (
    <div className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl text-gray-900 font-bold">Semua Artikel</h2>
          <Link href="/artikel" className="text-blue-600 hover:underline font-semibold">
            Lihat Semua Artikel
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {berita
            .slice()
            .sort(
              (a, b) =>
                new Date(b.tanggal_publish).getTime() -
                new Date(a.tanggal_publish).getTime()
            )
            .slice(0, 6)
            .map((beritaItem) => {
              const isiPlain = stripHtml(beritaItem.isi || '');
              const potonganIsi =
                isiPlain.split(' ').slice(0, 100).join(' ') + '...';

              return (
                <div
                  key={beritaItem.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col transform hover:-translate-y-1 transition-transform duration-300"
                >
                  <div className="aspect-video relative">
                    <Image
                      src={beritaItem.gambar}
                      alt={beritaItem.judul}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex-grow">
                      <p className="text-sm text-blue-600 font-semibold">
                        {beritaItem.kategori}
                      </p>
                      <h3 className="text-lg text-gray-900 mt-1 font-semibold line-clamp-2">
                        {beritaItem.judul}
                      </h3>

                      {/* Deskripsi 100 kata */}
                      <p className="text-gray-600 text-sm mt-2">
                        {potonganIsi}
                      </p>
                    </div>

                    <Link
                      href={`/artikel/${beritaItem.slug}`}
                      className="block w-full bg-yellow-400 mt-6 hover:bg-yellow-500 text-gray-800 font-bold py-2 px-4 rounded-lg transition-colors duration-200 text-center"
                    >
                      Lihat Artikel
                    </Link>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
