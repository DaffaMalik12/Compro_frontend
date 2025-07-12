"use client";
// File: app/baca-Program/[slug]/ProgramDetail.tsx

import React, { useState } from "react";
import Image from "next/image";
import { Program } from "@/app/types/program";

export default function ProgramDetail({ Program }: { Program: Program }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="p-4">
      {/* Image */}
      <div className="aspect-video w-full overflow-hidden relative bg-gray-100 flex items-center justify-center">
        {!imgError && Program.gambar_program ? (
          <Image
            src={Program.gambar_program}
            alt={Program.nama_program}
            fill
            className="object-cover hover:scale-105 transition-transform duration-300"
            onError={() => setImgError(true)}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority // Good for LCP (Largest Contentful Paint)
          />
        ) : (
          <div className="text-center text-gray-500 text-sm">
            <span className="text-4xl">🖼️</span>
            <p>Gambar tidak tersedia</p>
          </div>
        )}
      </div>

      {/* Category & Date */}
      <div className="flex items-center mb-2 gap-3 mt-5">
        <span className="text-xs font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded">
          {Program.status}
        </span>
      </div>

      {/* Title */}
      <h1 className="text-4xl font-semibold text-gray-800 mb-2 capitalize">
        {Program.nama_program}
      </h1>

      {/* Content */}
      <div
        className="Program-isi max-w-none prose text-gray-800 lg:prose-lg mt-5"
        dangerouslySetInnerHTML={{ __html: Program.deskripsi }}
      />
    </div>
  );
}