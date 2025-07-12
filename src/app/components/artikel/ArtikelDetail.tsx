"use client";
// File: app/baca-berita/[slug]/BeritaDetail.tsx

import React, { useState } from "react";
import Image from "next/image";
import { Berita } from "@/app/types/Berita";

export default function BeritaDetail({ berita }: { berita: Berita }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="p-4">
      {/* Image */}
      <div className="aspect-video w-full overflow-hidden relative bg-gray-100 flex items-center justify-center">
        {!imgError && berita.gambar ? (
          <Image
            src={berita.gambar}
            alt={berita.judul}
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
          {berita.kategori}
        </span>
        <span className="text-xs text-gray-500">
          {berita.tanggal_publish_formatted}
        </span>
      </div>

      {/* Title */}
      <h1 className="text-4xl font-semibold text-gray-800 mb-2 capitalize">
        {berita.judul}
      </h1>

      {/* Author */}
      <p className="text-sm text-gray-500 mb-4">By: {berita.penulis}</p>

      {/* Content */}
      <div
        className="berita-isi max-w-none prose text-gray-800 lg:prose-lg mt-5"
        dangerouslySetInnerHTML={{ __html: berita.isi }}
      />
    </div>
  );
}