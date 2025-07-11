// app/components/DataStatistik.tsx

'use client'; // 👈 Tetap sebagai Client Component karena ada interaktivitas

import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import type { StatistikItem } from '@/app/types/statistik';

// ⚙️ Terima data statistik melalui props
interface Props {
  statistikData: StatistikItem[];
}

const DataStatistik = ({ statistikData }: Props) => {
  // ❌ Kita tidak perlu lagi useState, useEffect, isLoading, atau error di sini

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Jika tidak ada data dari server, jangan tampilkan apa-apa
  if (!statistikData || statistikData.length === 0) {
    return null;
  }

  return (
    <div ref={ref} className="h-full bg-[#51A3F1] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-2">Data & Statistik</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-8 max-w-5xl mx-auto">
          {statistikData.map((stat) => (
            <div key={stat.id} className="text-center">
              <div className="text-6xl md:text-7xl font-bold text-white mb-4">
                {inView ? (
                  <CountUp start={0} end={stat.jumlah} duration={2.75} separator="." />
                ) : (
                  '0'
                )}
              </div>
              <div className="bg-yellow-400 px-6 py-3 rounded-lg shadow-lg">
                <span className="text-xl font-semibold text-gray-800">
                  {stat.nama_data}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-white text-sm opacity-75">
            Update terakhir: {new Date(statistikData[0].updated_at).toLocaleDateString('id-ID')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DataStatistik;