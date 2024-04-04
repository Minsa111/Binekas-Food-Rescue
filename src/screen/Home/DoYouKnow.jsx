import React from "react";
import doYouKnow from "./../../assets/images/doYouKnow.svg";
export default function Content() {
  return (
    <div className="flex overflow-hidden relative flex-col justify-center items-center px-16 py-20 w-full text-2xl font-bold tracking-wide text-center min-h-[618px] text-neutral-100 max-md:px-5 max-md:max-w-full">
      <img
        loading="lazy"
        src={doYouKnow}
        className="object-cover absolute inset-0 size-full"
        alt="do-you-know"
      />
      <div className="flex relative flex-col items-center mb-16 max-w-full w-[730px] max-md:mb-10">
        <div className="tracking-normal leading-[150%]">
          BINEKAS FOOD RESCUE
        </div>
        <div className="mt-10 text-6xl text-white leading-[80px] max-md:max-w-full max-md:text-4xl max-md:leading-[62px]">
          TahuKah Kamu?
          <br />
        </div>
        <div className="self-stretch mt-28 font-medium leading-10 max-md:mt-10 max-md:max-w-full">
          Kalau Indonesia merupakan negara pembuang sampah makanan terbesar
          kedua di dunia? Konon, setiap warga negara Indonesia membuang sekitar
          300 kilogram sampah makanan per tahunnya!
        </div>
      </div>
    </div>
  );
}
