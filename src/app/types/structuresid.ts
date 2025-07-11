export interface StructureId {
  id: number;
  nama: string;
  jabatan: string
  detail: string | null;
  gambar: string | null;
}


export interface WelcomeMessageCardProps {
  personName: string;
  personTitle: string;
  welcomeText: string | null | undefined;
  personImageUrl: string
}

export interface ApiResponseStructuresid {
  success: boolean;
  data: StructureId[];
  message: string
}
