// src/app/lib/structuresidapi.ts

import axios from 'axios';
import { StructureId, ApiResponseStructuresid } from '@/app/types/structuresid';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
const API_KEY = process.env.NEXT_PUBLIC_API_KEY || '';

// ... (fungsi getStructuresid dan getStructuresById tidak perlu diubah) ...
export const getStructuresid = async (): Promise<StructureId[] | null> => {
    // ... kode yang sama ...
    return null;
};

export const getStructuresById = async (id: number): Promise<StructureId> => {
    // ... kode yang sama ...
    const response = await axios.get<ApiResponseStructuresid>(`${API_BASE_URL}/structures/${id}`, {
        headers: { 'x-api-key': API_KEY },
    });
    if (response.status === 200 && (!response.data.data || (Array.isArray(response.data.data) && response.data.data.length === 0))) {
        throw new Error(`Data struktur dengan ID ${id} tidak ditemukan.`);
    }
    if (Array.isArray(response.data.data)) {
        return response.data.data[0];
    }
    return response.data.data;
};


/**
 * FUNGSI UTILITAS YANG DIPERBAIKI: Membuat URL gambar yang lengkap.
 */
export function getStructureImageUrl(imagePath: string | null | undefined): string {
    if (!imagePath) {
      return '/images/default-profile.jpg';
    }
  
    // Cek apakah sudah full URL
    if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
      return imagePath;
    }
  
    // Kalau bukan full URL, berarti hanya path → tambahkan base
    const baseUrlForStorage = API_BASE_URL?.replace('/api', '') || '';
    return `${baseUrlForStorage}/storage/${imagePath}`;
  }
  