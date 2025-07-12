'use client';

import { Program } from '@/app/types/program';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';

// Client-only komponen untuk render HTML deskripsi
const DeskripsiClient = dynamic(() => import('./ProgramDeskripsiClient'), { ssr: false });

interface Props {
  ProgramData: Program[];
  sortBy?: 'created' | 'updated'; // Tambahkan opsi sorting
}

export default function ProgramSection({ ProgramData = [], sortBy = 'updated' }: Props) {
  // Fungsi sorting dinamis berdasarkan pilihan
  const sortedData = [...ProgramData].sort((a, b) => {
    const dateA = new Date(sortBy === 'created' ? a.created_at : a.updated_at).getTime();
    const dateB = new Date(sortBy === 'created' ? b.created_at : b.updated_at).getTime();
    return dateB - dateA;
  });

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* === JUDUL UTAMA === */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 tracking-wider">Program</h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mt-2"></div>
        </div>

        {/* === CARD CONTAINER === */}
        <div className="flex flex-wrap justify-center gap-8">
          {sortedData.map((program) => (
            <Link
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
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>

                <div className="p-6 flex flex-col flex-grow text-center">
                  <div className="flex-grow">
                    <h3 className="text-xl text-gray-800 font-semibold mb-2">
                      {program.nama_program}
                    </h3>
                    <DeskripsiClient html={program.deskripsi ?? ''} />
                  </div>
                  <div className="inline-block w-full bg-yellow-400 mt-6 hover:bg-yellow-500 text-gray-800 font-semibold py-2 px-4 rounded-md transition-colors duration-200">
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
