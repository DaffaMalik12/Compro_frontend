// src/app/lib/beritaapi.ts
import axios from 'axios';
import { ApiResponse, StatistikItem } from '@/app/types/statistik';

export const getStatistik = async (): Promise<StatistikItem[]> => {
  try {
    const response = await axios.get<ApiResponse>(`${process.env.NEXT_PUBLIC_API_BASE_URL}/statistik`, {
      headers: {
        'x-api-key': process.env.NEXT_PUBLIC_API_KEY || '',
      },
    });

    if (response.data.message && response.data.data) {
      return response.data.data;
    } else {
      throw new Error('Format data tidak sesuai');
    }
  } catch (err) {
    throw err;
  }
};
