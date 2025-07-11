import React from 'react'; // 1. Tambahkan import React
import { LocalVisiMisiCardProps } from "@/app/types/LocalCardVisiMisi";

// 2. Perbaiki sintaks definisi komponen
const LocalVisiMisiCard: React.FC<LocalVisiMisiCardProps> = ({ visiText, misiText }) => {
    return (
        <div className="bg-white py-2">
            <div className="container mx-auto px-4">
                {/* Judul Halaman / Bagian */}
                <div className="text-center mb-8 sm:mb-12 md:mb-16 px-4 pt-8"> 
                    <h1 className="text-3xl sm:text-4xl md:text-4xl font-bold text-gray-800 leading-tight tracking-wide">
                        Visi dan Misi 
                    </h1>
                    <h2 className="text-2xl sm:text-3xl md:text-3xl font-semibold text-gray-800 leading-normal mt-2 tracking-wide"> 
                        Pusat Pengembangan Bahasa UIN Syarif Hidayatullah Jakarta
                    </h2>
                    <div className="mt-6 md:mt-8 w-2/3 md:w-1/2 max-w-lg mx-auto h-1.5 bg-yellow-400 rounded-full"></div> 
                </div>

                {/* Konten Visi & Misi: Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Bagian Visi */}
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <div className="bg-[#51a3f1] text-white px-6 py-4">
                            <h3 className="text-xl font-semibold text-center">Visi</h3>
                        </div>
                        <div className="p-6">
                            <div className="text-gray-700 leading-relaxed text-justify">
                                {visiText}
                            </div>
                        </div>
                    </div>

                    {/* Bagian Misi */}
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <div className="bg-[#51a3f1] text-white px-6 py-4">
                            <h3 className="text-xl font-semibold text-center">Misi</h3>
                        </div>
                        <div className="p-6">
                            <div className="text-gray-700 leading-relaxed">
                                <ul className="space-y-4" dangerouslySetInnerHTML={{ __html: misiText }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// 4. Tambahkan export default di akhir file
export default LocalVisiMisiCard;