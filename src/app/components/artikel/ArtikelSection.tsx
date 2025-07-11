// app/components/home/ArtikelSection.tsx

import { Berita } from '@/app/types/Berita';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  berita: Berita[];
}

export default function ArtikelSection({ berita = [] }: Props) { // Ditambahkan default value
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* === JUDUL UTAMA === */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 tracking-wider">
            Artikel
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mt-2"></div>
        </div>

        {/* === CARD CONTAINER === */}
        <div className="flex flex-wrap justify-center gap-8">
          {berita.map((beritaItem) => (
            // 👇 KARTU SEKARANG DIBUNGKUS OLEH LINK
            <Link 
              href={`/berita/${beritaItem.slug}`} 
              key={beritaItem.id} 
              className="block w-full max-w-sm"
            >
              <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full transform hover:-translate-y-2 transition-transform duration-300 border border-gray-100">
                <div className="aspect-video relative">
                  <Image
                    src={beritaItem.gambar}
                    alt={beritaItem.judul}
                    fill
                    className="object-cover"
                  />
                </div>
                
                <div className="p-6 flex flex-col flex-grow text-center">
                  <div className="flex-grow">
                    <h3 className="text-xl text-gray-800 font-semibold line-clamp-2">
                      {beritaItem.judul}
                    </h3>
                  </div>
                  
                  {/* 👇 TOMBOL DIUBAH DARI LINK MENJADI DIV BIASA */}
                  <div
                    className="inline-block w-full bg-yellow-400 mt-6 hover:bg-yellow-500 text-gray-800 font-semibold py-2 px-4 rounded-md transition-colors duration-200"
                  >
                    Lihat Artikel
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}