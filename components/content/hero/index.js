import Image from "next/image";
import hero1 from "../../../public/hero/hero1.png";
import hero2 from "../../../public/hero/hero2.png";
import hero3 from "../../../public/hero/hero3.png";
import hero4 from "../../../public/hero/hero4.png";

export default function Hero() {
  return (
    <div className="w-full bg-white my-24">
      <div className="container mx-auto flex justify-between items-center bg-bgPrimary rounded-lg shadow-md px-16">
        <div className="w-2/4">
          <h1 className="font-poppins text-2xl font-light w-3/4 text-textPrimary">
            <span className="font-bold">Lorem ipsum</span> dolor sit amet,
            consectetur adipiscing elit.
          </h1>
          <p className="font-poppins text-sm text-textSecondary font-light py-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque tempor sapien est, eu aliquet enim elementum sed.
            Vivamus egestas nibh eros, sit amet sodales libero pharetra egestas.
          </p>
          <button className="px-6 text-white font-poppins text-xs bg-button py-3 rounded">
            Belanja Sekarang
          </button>
        </div>
        <div className="w-2/4 flex justify-center pt-5 pl-40 z-0">
          <Image src={hero1} width={250} height={400} />
        </div>
      </div>
      <div className="grid grid-cols-4 grid-flow-col gap-4 container mx-auto py-10">
        <div className="row-span-1 rounded-xl bg-bgSecondary flex justify-center items-end pt-10">
          <Image src={hero2} />
        </div>
        <div className="row-span-1 rounded-xl bg-bgSecondary flex justify-center items-start pb-10">
          <Image src={hero3} />
        </div>
        <div className="row-span-2 bg-bgPrimary flex justify-center pt-6 px-4 font-poppins text-lg text-center rounded-xl">
          <div className="relative">
            <h1>Lorem ipsum dolor sit amet, consectetur adipscing elit.</h1>
          </div>
        </div>
        <div className="col-span-2 bg-teal-500">07</div>
        <div className="col-span-2 bg-teal-500">07</div>
      </div>
    </div>
  );
}
