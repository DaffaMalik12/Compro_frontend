export interface Berita {
    id: number;
    judul: string;
    slug: string;
    excerpt: string;
    kategori: string;
    penulis: string;
    tanggal_publish: string;
    tanggal_publish_formatted: string;
    gambar: string;
  }
  
  export interface ApiResponse {
    success: boolean;
    message: string;
    data: Berita[];
    meta: string;
    links: string;
  }