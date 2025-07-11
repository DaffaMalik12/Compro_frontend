// app/components/home/ProgramSection.tsx (Nama file dan komponen disarankan untuk diubah agar sesuai)

import { Program } from '@/app/types/program';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  ProgramData: Program[];
}

export default function ProgramSection({ ProgramData = [] }: Props) {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* === JUDUL UTAMA === */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 tracking-wider">
            Program
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mt-2"></div>
        </div>

        {/* === CARD CONTAINER === */}
        <div className="flex flex-wrap justify-center gap-8">
          {ProgramData.map((program) => (
            <Link 
              // PERBAIKAN: Link diubah ke /program/ bukan /berita/
              href={`/program/${program.slug}`} 
              key={program.id} 
              className="block w-full max-w-sm"
            >
              <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full transform hover:-translate-y-2 transition-transform duration-300 border border-gray-100">
                <div className="aspect-video relative">
                <Image
                  src={program.gambar_program || '/images/default.jpg'}
                  alt={program.nama_program}
                  fill
                  className="object-cover"
                />

                </div>
                
                <div className="p-6 flex flex-col flex-grow text-center">
                  <div className="flex-grow">
                    <h3 className="text-xl text-gray-800 font-semibold mb-2">
                      {/* PERBAIKAN: Memastikan ini menampilkan nama program */}
                      {program.nama_program}
                    </h3>
                    {/* PERBAIKAN: Menampilkan deskripsi dari API */}
                    <div
                      className="text-gray-600 text-sm line-clamp-3 text-left"
                      dangerouslySetInnerHTML={{ __html: program.deskripsi }}
                    />
                  </div>
                  
                  <div
                    // PERBAIKAN: Teks tombol diubah agar lebih sesuai
                    className="inline-block w-full bg-yellow-400 mt-6 hover:bg-yellow-500 text-gray-800 font-semibold py-2 px-4 rounded-md transition-colors duration-200"
                  >
                    Lihat Detail
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