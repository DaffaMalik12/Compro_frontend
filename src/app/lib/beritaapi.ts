// src/app/lib/beritaapi.ts
import axios from 'axios';
import { ApiResponse, Berita } from '@/app/types/Berita';

export const getBerita = async (): Promise<Berita[]> => {
  try {
    const response = await axios.get<ApiResponse>(`${process.env.NEXT_PUBLIC_API_BASE_URL}/berita`, {
      headers: {
        'x-api-key': process.env.NEXT_PUBLIC_API_KEY || '',
      },
    });

    if (response.data.success && response.data.data) {
      return response.data.data;
    } else {
      throw new Error('Format data tidak sesuai');
    }
  } catch (err) {
    throw err;
  }
};
