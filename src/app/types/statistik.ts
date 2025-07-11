export interface StatistikItem {
    id: number;
    nama_data: string;
    jumlah: number;
    created_at: string;
    updated_at: string;
  }
  
export interface ApiResponse {
    message: string;
    data: StatistikItem[];
  }