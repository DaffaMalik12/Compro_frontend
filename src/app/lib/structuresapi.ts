import axios from 'axios';
import { Structure, ApiResponseStructures } from '@/app/types/structures';

export const getStructures = async (): Promise<Structure[] | null> => {
  try {
    const response = await axios.get<ApiResponseStructures>(`${process.env.NEXT_PUBLIC_API_BASE_URL}/structures`, {
      headers: {
        'x-api-key': process.env.NEXT_PUBLIC_API_KEY || '',
      },
    });

    // PERBAIKAN FINAL: Cek saja apakah 'response.data.data' ada dan merupakan array.
    // Ini adalah cara paling andal berdasarkan format API Anda.
    if (Array.isArray(response.data.data)) {
      return response.data.data;
    } else {
      // Ini akan berjalan jika 'data' bukan array atau tidak ada
      console.error("API response failure:", response.data.message || "Format data tidak sesuai");
      return null;
    }
  } catch (error) {
    console.error("Gagal mengambil data struktur:", error);
    return null;
  }
};