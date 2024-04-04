import React from "react";
import donasiMakanan from "./../../assets/images/donasiMakanan.svg";
import donasiTunai from "./../../assets/images/donasiTunai.svg";
import jadiRelawan from "./../../assets/images/jadiRelawan.svg";
export default function Agent() {
  return (
    <div className="flex flex-col justify-end items-center px-20 pt-12 pb-20 w-full bg-white max-md:px-5 max-md:max-w-full">
      <div className="text-2xl text-center text-black w-[612px] max-md:max-w-full">
        <span className="font-bold">Ayo Jadi Agen Perubahan</span>
        <br />
        <br />
        Melalui Binekas kamu bisa berpartisipasi dalam menuntaskan kerawanan
        pangan di Indonesia.
      </div>
      <div className="mt-28 mb-2 w-full max-w-[1219px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow text-xl text-black max-md:mt-10">
              <div className="flex flex-col grow items-center text-xl text-black max-md:mt-10">
                <img
                  src={donasiMakanan}
                  alt="donasi-makanan"
                  className="aspect-square w-[158px]"
                />

                <div className="mt-1.5">Donasi Makanan</div>
              </div>
              <div className="mt-5 text-center">
                Donasikan makanan berlebihanmu, ketimbang dibuang dan merugikan
                lingkungan sekitarmu.
              </div>
              <div className="justify-center self-center px-9 py-4 mt-3 font-semibold text-center text-white whitespace-nowrap bg-indigo-500 rounded-3xl max-md:px-5">
                Mulai
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow items-center text-xl text-black max-md:mt-10">
              <img
                src={donasiTunai}
                alt="donasi-tunai"
                className="aspect-square w-[158px]"
              />
              <div className="mt-2 font-bold">Donasi Tunai</div>
              <div className="self-stretch mt-5 text-center">
                Bantu kami memberi makan dan menjangkau semakin banyak
                masyarakat pra-sejahtera di sekitarmu.
              </div>
              <div className="justify-center px-9 py-4 mt-3 font-semibold text-center text-white whitespace-nowrap bg-indigo-500 rounded-3xl max-md:px-5">
                Mulai
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow items-center text-xl text-black max-md:mt-10">
              <img
                src={jadiRelawan}
                alt="jadi-relawan"
                className="aspect-square w-[158px]"
              />
              <div className="mt-2 font-bold">Jadi Relawan</div>
              <div className="self-stretch mt-5 text-center">
                Ayo ikut turun tangan langsung dan menjadi relawan Binekas,
                apapun minat dan keahlian yang kamu miliki.
              </div>
              <div className="justify-center px-9 py-4 mt-3 font-semibold text-center text-white whitespace-nowrap bg-indigo-500 rounded-3xl max-md:px-5">
                Mulai
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
