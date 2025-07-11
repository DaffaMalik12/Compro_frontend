export interface VisiMisi {
    id: number;
    visi: string;
    misi: string;
}

// Definisikan tipe untuk respons API agar lebih aman
export interface ApiResponse {
    success: boolean;
    data: VisiMisi[];
    message?: string; // message bisa jadi opsional
  }
