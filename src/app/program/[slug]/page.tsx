// File: app/baca-berita/[slug]/page.tsx

import getProgramBySlug from "@/app/lib/programapi";
import ProgramDetail from "@/app/components/program/ProgramDetail";
import { notFound } from "next/navigation";

type Props = {
  params: {
    slug: string;
  };
};

export default async function BacaBeritaPage({ params }: Props) {
  const { slug } = params;

  try {
    const program = await getProgramBySlug(slug);

    // Jika data tidak ditemukan, arahkan ke halaman not-found.tsx
    if (!program) {
      notFound();
    }

    return (
      <main className="max-w-7xl mx-auto px-4 py-8">
        <ProgramDetail Program={program} />
      </main>
    );
  } catch (error) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-center">
          <p className="text-red-600 font-semibold">Gagal memuat program</p>
          <p className="text-red-500 text-sm mt-1">
            {(error as Error).message}
          </p>
        </div>
      </div>
    );
  }
}
