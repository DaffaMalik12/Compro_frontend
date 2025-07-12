// src/app/lib/beritaapi.ts
import axios from 'axios';
import { Berita, ApiResponseCollection, ApiSingleResponse } from '@/app/types/Berita';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
const API_KEY = process.env.NEXT_PUBLIC_API_KEY || '';

/**
 * Mengambil semua berita.
 * Melempar error jika request gagal.
 */
export const getBerita = async (): Promise<Berita[]> => {
  const response = await axios.get<ApiResponseCollection>(`${API_BASE_URL}/berita`, {
    headers: { 'x-api-key': API_KEY },
  });

  if (response.data.success && response.data.data) {
    return response.data.data;
  } else {
    // Jika API mengembalikan success: false
    throw new Error(response.data.message || 'Format data dari API tidak sesuai.');
  }
};

/**
 * Mengambil satu berita berdasarkan slug-nya.
 * Melempar error jika berita tidak ditemukan atau request gagal.
 * Ini adalah default export dari file ini.
 */
export default async function getBeritaBySlug(slug: string): Promise<Berita> {
  const response = await axios.get<ApiSingleResponse>(`${API_BASE_URL}/berita/${slug}`, {
    headers: { 'x-api-key': API_KEY },
  });

  // Untuk data tunggal, kita cek langsung object `data`
  if (response.data.success && response.data.data) {
    return response.data.data;
  } else {
    throw new Error(response.data.message || 'Berita tidak ditemukan.');
  }
}