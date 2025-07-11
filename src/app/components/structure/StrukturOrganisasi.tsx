import { Structure } from "@/app/types/structures";
import Image from "next/image";

// Komponen Card untuk menampilkan satu profil
const ProfileCard = ({ nama, jabatan, gambar }: Structure) => (
  <div className="w-40 sm:w-48 md:w-52 shadow-2xl rounded-lg overflow-hidden transform transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105 cursor-pointer">
    <Image
      src={gambar || "/images/default-profile.png"} // Gambar default jika tidak ada gambar
      alt={nama}
      width={208}
      height={208}
      className="w-full h-auto object-cover"
    />
    <div className="bg-[#51a3f1] font-semibold text-white py-2 px-2 text-lg text-center">
      {nama}
      <br />
      <span className="text-sm font-light">{jabatan}</span>
    </div>
  </div>
);

// Tipe untuk props
interface StrukturOrganisasiUIProps {
  data: Structure[];
}

// Komponen utama yang hanya merender UI
export default function StrukturOrganisasiUI({ data }: StrukturOrganisasiUIProps) {
  // Mengelompokkan data berdasarkan jabatan
  const kepala = data.filter(person => person.jabatan.toLowerCase() === 'kepala');
  const koordinator = data.filter(person => person.jabatan.toLowerCase() === 'koordinator');
  const staf = data.filter(person => 
    !['kepala', 'koordinator'].includes(person.jabatan.toLowerCase())
  );
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 text-center bg-gray-50 rounded-lg shadow-inner">
      {/* Header */}
      <div className="text-center mb-8 sm:mb-12 md:mb-16 px-4 pt-8">
        <h1 className="text-3xl sm:text-4xl md:text-4xl font-bold text-gray-900 mb-4">
          Struktur PPB
        </h1>
        <div className="mt-6 md:mt-8 w-2/3 md:w-1/2 max-w-lg mx-auto h-1.5 bg-yellow-400 rounded-full"></div>
      </div>

      {/* Kepala PPB - 1 person centered */}
      {kepala.length > 0 && (
        <section className="mb-12">
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-8">Kepala PPB</h3>
          <div className="flex justify-center">
            <ProfileCard {...kepala[0]} />
          </div>
        </section>
      )}

      {/* Koordinator - 3 people in one row */}
      {koordinator.length > 0 && (
        <section className="mb-12">
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-8">Koordinator</h3>
          <div className="flex justify-center flex-wrap gap-6 md:gap-8">
            {koordinator.slice(0, 3).map((person) => (
              <ProfileCard key={person.id} {...person} />
            ))}
          </div>
        </section>
      )}

      {/* Staf - 5 people in two rows (3 + 2) */}
      {staf.length > 0 && (
        <section className="mb-16">
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-8">Staf</h3>
          
          {/* First row - 3 people */}
          <div className="flex justify-center flex-wrap gap-6 md:gap-8 mb-6">
            {staf.slice(0, 3).map((person) => (
              <ProfileCard key={person.id} {...person} />
            ))}
          </div>
          
          {/* Second row - 2 people */}
          {staf.length > 3 && (
            <div className="flex justify-center flex-wrap gap-6 md:gap-8">
              {staf.slice(3, 5).map((person) => (
                <ProfileCard key={person.id} {...person} />
              ))}
            </div>
          )}
        </section>
      )}
    </div>
  );
}