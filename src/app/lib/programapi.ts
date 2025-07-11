// src/app/lib/beritaapi.ts
import axios from 'axios';
import { Program } from '../types/program';

export const getProgram = async (): Promise<Program[]> => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/programs`, {
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
