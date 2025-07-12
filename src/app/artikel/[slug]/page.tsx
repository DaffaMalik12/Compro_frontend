// File: app/baca-berita/[slug]/page.tsx

import React from "react";
import fetchBeritaBySlug from "@/app/lib/beritaapi";
import BeritaDetail from "@/app/components/artikel/ArtikelDetail";

// ✅ Tidak usah buat custom type Props. Langsung define di param
export default async function BacaBeritaPage({
  params,
}: {
  params: { slug: string };
}) {
  try {
    const berita = await fetchBeritaBySlug(params.slug);

    return (
      <main className="max-w-7xl mx-auto px-4 py-8">
        <BeritaDetail berita={berita} />
      </main>
    );
  } catch (error) {
    // 👇 fallback jika gagal fetch, misal slug tidak ditemukan
    return (
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-center">
          <p className="text-red-600 font-semibold">Gagal memuat berita</p>
          <p className="text-red-500 text-sm mt-1">
            {(error as Error).message || "Terjadi kesalahan tak terduga"}
          </p>
        </div>
      </main>
    );
  }
}
