'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Program } from '@/app/types/program';

interface Props {
  ProgramData: Program[];
  sortBy?: 'created' | 'updated'; // Tambahkan pilihan sort
}

export default function ProgramPPB({ ProgramData, sortBy = 'created' }: Props) {
  // Sorting berdasarkan sortBy
  const sortedPrograms = ProgramData
    .slice()
    .sort((a, b) =>
      sortBy === 'updated'
        ? new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
        : new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
    );

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* === HEADING === */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl text-gray-900 font-bold">Program Pusat Bahasa</h2>
          <Link
            href="/program"
            className="text-blue-600 hover:text-blue-800 font-semibold transition-colors"
          >
            Lihat Semua
          </Link>
        </div>

        {/* === CARD CONTAINER === */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedPrograms.slice(0, 3).map((program) => (
            <div
              key={program.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col transform hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="relative">
                <Image
                  src={program.gambar_program || '/images/default.jpg'}
                  alt={program.nama_program}
                  width={400}
                  height={250}
                  className="w-full h-52 object-cover"
                />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl text-gray-900 font-semibold mb-2">
                  {program.nama_program}
                </h3>

                <div
                  className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow"
                  dangerouslySetInnerHTML={{ __html: program.deskripsi }}
                />

                <Link
                  href={`/program/${program.slug}`}
                  className="block w-full bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-bold py-2 px-4 rounded-lg transition-colors duration-200 text-center mt-4"
                >
                  Lihat Detail
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
