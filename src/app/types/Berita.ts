// Interface untuk satu objek Berita
export interface Berita {
  id: number;
  judul: string;
  slug: string;
  excerpt: string;
  isi: string;
  kategori: string;
  penulis: string;
  tanggal_publish: string;
  tanggal_publish_formatted: string;
  gambar: string;
}

// Interface untuk API response yang mengembalikan BANYAK berita (array)
export interface ApiResponseCollection {
  success: boolean;
  message: string;
  data: Berita[]; // data adalah array

}

// Interface untuk API response yang mengembalikan SATU berita
export interface ApiSingleResponse {
  success: boolean;
  message: string;
  data: Berita; // data adalah satu objek, bukan array
}