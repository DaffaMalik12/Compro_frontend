// program
import ProgramSection from "@/app/components/program/ProgramSection";
import { getProgram  } from "@/app/lib/programapi";

export default async function ProgramPage() {
  const Program = await getProgram();
  return (
    <ProgramSection ProgramData={Program} />
  )
}