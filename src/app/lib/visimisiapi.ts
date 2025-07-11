// src/app/lib/visimisiapi.ts
import axios from 'axios';
import { VisiMisi, ApiResponse } from '@/app/types/visimisi'; // Pastikan tipe ini benar



export const getVisiMisi = async (): Promise<VisiMisi[]> => {
  try {
    const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://rwtest.dashboard-ppb-uinjkt.my.id/api/v1';
    const apiKey = process.env.NEXT_PUBLIC_API_KEY || 'mysecretapippb123987';
    const endpoint = `${baseURL}/visimisi`;

    console.log("Fetching:", endpoint);
    console.log("API Key:", apiKey);

    const response = await axios.get<ApiResponse>(endpoint, {
      headers: {
        'x-api-key': apiKey,
      },
    });

    if (response.data.success && response.data.data) {
      return response.data.data;
    } else {
      throw new Error(response.data.message || 'Format data tidak sesuai');
    }
  } catch (err) {
    console.error("API ERROR:", err);
    throw err;
  }
};
