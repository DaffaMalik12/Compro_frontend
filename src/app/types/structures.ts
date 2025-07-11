export interface Structure {
    id: number;
    nama: string;
    jabatan: string;
    detail?: string | null;
    gambar: string;
  }
  
  // Opsional: Tipe untuk keseluruhan respons API
  export interface ApiResponseStructures {
    success: boolean;
    data: Structure[];
    message: string
  }