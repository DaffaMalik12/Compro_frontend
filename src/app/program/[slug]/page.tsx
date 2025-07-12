// File: app/baca-berita/[slug]/page.tsx

import React from "react"; 
import getProgramBySlug from "@/app/lib/programapi";
import ProgramDetail from "@/app/components/program/ProgramDetail";

type Props = {
  params: {
    slug: string;
  };
};

// Next.js automatically handles loading states with a loading.tsx file
// and error states with an error.tsx file in the same directory.
// This is the recommended approach.

export default async function BacaBeritaPage({ params }: Props) {
  const { slug } = params;

  try {
    const program = await getProgramBySlug(slug)

    return (
      <main className="max-w-7xl mx-auto px-4 py-8">
        <ProgramDetail Program={program} />
      </main>
    );
  } catch (error) {
    // In a real app, you would create an error.tsx file to handle this.
    // This is a fallback UI.
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-center">
          <p className="text-red-600 font-semibold">Gagal memuat berita</p>
          <p className="text-red-500 text-sm mt-1">
            {(error as Error).message}
          </p>
        </div>
      </div>
    );
  }
}