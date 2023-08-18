"use client";
import CountdownTimer from "@/components/CountDownTimer";
import Image from "next/image"
export default function Home() {
  const targetDate = new Date("2023-09-06T22:00:00"); // Defina a data alvo da contagem regressiva

  return (
    <div className="flex flex-col gap-5 p-5 justify-center items-center h-full bg-[#E11F76]">
      <div className="flex bg-[#D46496] p-5 w-1/2 sm:w-[80%] h-1/2 sm:h-auto items-center justify-center rounded-2xl">
        <div className="">
          <div className="flex items-center gap-2 xl:flex sm:flex-col">
            <h1 className="text-4xl sm:text-2xl font-bold text-slate-50">
              🏖️
            </h1>
            <h1 className="text-2xl sm:text-xl font-bold text-slate-50">
              Contagem Regressiva
            </h1>
            <h1 className="text-4xl sm:text-2xl  font-bold text-slate-50">
              🏖️
            </h1>
          </div>
          <CountdownTimer targetDate={targetDate} />
        </div>
      </div>
      <div className="flex flex-col gap-5 items-center p-5">
        <h1 className="text-4xl sm:text-2xl font-bold text-slate-50">Viajantes</h1>
        <Image src={"/ida.png"} width={300} height={300} alt={"Ida"} />
        <Image src={"/ro.png"} width={300} height={300} alt={"Ida"} />
        <Image src={"/le.png"} width={300} height={300} alt={"Ida"} />
        <Image src={"/sandro.png"} width={300} height={300} alt={"Ida"} />

      </div>
    </div>
  );
}
