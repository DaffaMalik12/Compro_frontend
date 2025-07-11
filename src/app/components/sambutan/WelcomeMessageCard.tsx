// src/components/WelcomeMessageCard.tsx
"use client";

import React from 'react';
import Image from 'next/image';
import { WelcomeMessageCardProps } from '@/app/types/structuresid'; // Import props dari file types

const WelcomeMessageCard: React.FC<WelcomeMessageCardProps> = ({
  personName,
  personTitle,
  welcomeText,
  personImageUrl,
}) => {
  return (
    <div className="bg-white py-2">
      <div className="container mx-auto px-4">
        {/* Judul Halaman / Bagian */}
        <div className="text-center mb-16 md:mb-20 px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
                Sambutan Kepala Pusat Pengembangan Bahasa
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mt-2">
                Universitas Islam Negeri Syarif Hidayatullah Jakarta
            </h2>
            <div className="mt-6 md:mt-8 w-2/3 md:w-1/2 max-w-lg mx-auto h-1.5 bg-yellow-400 rounded-full"></div>
        </div>

        {/* Konten Sambutan: Gambar & Teks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Bagian Gambar Profil */}
          <div className="relative rounded-md shadow-lg overflow-hidden flex justify-center items-center p-4 bg-gray-100">
            <div className="absolute top-5 left-5 bg-yellow-400 w-48 h-48 -translate-x-1/2 -translate-y-1/2 rounded-sm"></div>
            <Image
              src={personImageUrl}
              alt={personName}
              width={600}
              height={600}
              className="object-cover rounded-xl z-10"
            />
            <div className="absolute bottom-0 right-0 bg-yellow-400 w-48 h-48 translate-x-1/2 translate-y-1/2 rounded-sm"></div>
          </div>

          {/* Bagian Teks Sambutan */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl md:text-3xl font-bold text-gray-800 mb-4">{personName}</h2>
            <p className="text-2xl text-gray-700 italic mb-6">{personTitle}</p>
            <div 
              className="whitespace-pre-line text-gray-600 text-l text-justify leading-relaxed prose max-w-none"
              dangerouslySetInnerHTML={{ __html: welcomeText || '' }} 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeMessageCard;