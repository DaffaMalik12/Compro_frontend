'use client'

import React, { useState, useEffect } from 'react';

interface StatistikItem {
  id: number;
  nama_data: string;
  jumlah: number;
  created_at: string;
  updated_at: string;
}

interface ApiResponse {
  message: string;
  data: StatistikItem[];
}

const DataStatistik = () => {
  const [statistics, setStatistics] = useState<StatistikItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStatistics = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/statistik`, {
          method: 'GET',
          headers: {
            'x-api-key': process.env.NEXT_PUBLIC_API_KEY || '',
            'Content-Type': 'application/json'
          }
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data: ApiResponse = await response.json();

        if (data && data.data) {
          setStatistics(data.data);
        }
      } catch (err) {
        setError('Failed to fetch statistics data');
        console.error('Error fetching statistics:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchStatistics();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
        <div className="text-white text-xl">{error}</div>
      </div>
    );
  }

  return (
    <div className="h-full lg:h-full lg:max-w-full bg-[#51A3F1] py-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-2">Data & Statistics</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {statistics.map((stat: StatistikItem) => (
            <div key={stat.id} className="text-center">
              <div className="text-6xl md:text-7xl font-bold text-gray-800 mb-4">
                {stat.jumlah.toLocaleString()}
              </div>
              <div className="bg-yellow-400 px-6 py-3 rounded-lg shadow-lg">
                <span className="text-xl font-semibold text-gray-800">
                  {stat.nama_data}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-white text-sm opacity-75">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DataStatistik;
