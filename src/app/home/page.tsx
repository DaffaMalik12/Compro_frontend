import Caraousel from "@/app/components/Home/Caraousel";
import ProgramPPB from "@/app/components/Home/ProgramPPB";
import ProgramSection from "@/app/components/Home/Berita";
import QuickAccess from "@/app/components/Home/QuickAccess";
import DataStatistik from "@/app/components/Home/DataStatistik";

import { getBerita } from "../lib/beritaapi";
import { getStatistik } from "../lib/statistikapi";
import { getProgram } from "../lib/programapi";

export default async function Home() {
    const berita = await getBerita() ; 
    const statistik = await getStatistik() ; 
    const ProgramData = await getProgram();
  return (
    <div className="max-w-full mx-auto">
      <Caraousel />
      <ProgramPPB  ProgramData={ProgramData} />
      <ProgramSection berita={berita} />
      <QuickAccess />
      <DataStatistik statistikData={statistik} />
    </div>
  );
}
