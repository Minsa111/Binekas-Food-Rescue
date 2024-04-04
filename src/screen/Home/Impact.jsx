import * as React from "react";

export default function Impact() {
  return (
    <div className="flex flex-col justify-center bg-white">
      <div className="px-5 w-full bg-[#B9C4FF] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[21%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col font-bold text-center text-black">
              <div className="shrink-0 bg-indigo-50 rounded-full h-[262px] w-[217px]" />
              <div className="flex flex-col self-end mt-2.5 max-w-full w-[170px]">
                <div className="text-4xl">1,592</div>
                <div className="mt-7 text-2xl">Porsi Makanan</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-1/5 max-md:ml-0 max-md:w-full">
            <div className="shrink-0 mx-auto mt-80 bg-indigo-50 rounded-full aspect-square h-[286px] w-[289px] max-md:mt-10" />
          </div>
          <div className="flex flex-col ml-5 w-[59%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow max-md:max-w-full">
              <div className="mx-8 max-md:mr-2.5 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                  <div className="flex flex-col w-[46%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col items-center mt-14 -ml-36 text-2xl font-bold text-center text-black max-md:mt-10">
                      <div className="self-stretch">
                        Dampak dalam angka July 2023
                      </div>
                      <div className="mt-40 text-4xl max-md:mt-10">729</div>
                      <div className="mt-8">Penerima Manfaat</div>
                    </div>
                  </div>
                  <div className="flex flex-col ml-5 w-[54%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow font-bold text-center text-black max-md:mt-10">
                      <div className="shrink-0 max-w-full bg-indigo-50 rounded-full h-[262px] w-[289px]" />
                      <div className="flex z-10 flex-col pl-20 max-md:pl-5">
                        <div className="flex gap-0 self-center max-w-full text-4xl w-[159px]">
                          <div className="items-start self-start px-8 pt-3 -ml-20  max-md:pl-5">
                            1 ton
                          </div>
                        </div>
                        <div className="self-start mt-7 text-2xl">
                          Potensi Makanan terbuang
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-5 mt-12 text-2xl font-bold text-center text-black max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
                <div className="flex-auto my-auto"></div>
                <div className="shrink-0 bg-indigo-50 rounded-full h-[185px] w-[246px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
