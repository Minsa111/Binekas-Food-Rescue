import React from "react";
import whatWeDo from "./../../assets/images/whatWeDo.svg";
export default function WhatWeDo() {
  return (
    <div className="flex justify-center items-center px-16 py-20 w-full bg-white max-md:px-5 max-md:max-w-full">
      <div className="mt-14 mb-24 w-full max-w-[1295px] max-md:my-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[44%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow mt-2.5 max-md:mt-10 max-md:max-w-full">
              <div className="text-sm text-black max-md:max-w-full text-left">
                <span className="text-4xl">Apa yang kami lakukan?</span>
                <br />
                <br />
                <span className="text-2xl">
                  Kami mengumpulkan makanan berlebih dari restoran, katering,
                  bakery, hotel, lahan pertanian, event, pernikahan, dan donasi
                  individu, dengan melewati serangkaian uji kelayakan makanan,
                  untuk disalurkan pada masyarakat pra-sejahtera di Bandung.
                </span>
              </div>
              <div className="justify-center self-start px-9 py-3.5 mt-14 text-xl font-light text-white whitespace-nowrap bg-indigo-500 rounded-3xl max-md:px-5 max-md:mt-10">
                Selanjutnya
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[56%] max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              src={whatWeDo}
              className="grow w-full aspect-[1.92] max-md:mt-9 max-md:max-w-full"
              alt="what-we-do"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
