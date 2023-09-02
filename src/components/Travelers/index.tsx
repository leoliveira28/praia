"use client";
import Image from "next/image";
export const Travelers = () => {
  return (
    <div className="flex flex-col gap-5 items-center p-5">
      <h1 className="text-4xl sm:text-2xl font-bold text-slate-50">
        Viajantes
      </h1>
      <Image src={"/ida.png"} width={300} height={300} alt={"Ida"} />
      <Image src={"/ro.png"} width={300} height={300} alt={"Ida"} />
      <Image src={"/le.png"} width={300} height={300} alt={"Ida"} />
      <Image src={"/sandro.png"} width={300} height={300} alt={"Ida"} />
    </div>
  );
};
