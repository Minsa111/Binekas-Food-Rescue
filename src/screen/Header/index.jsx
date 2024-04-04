import * as React from "react";
import notification from "./../../assets/images/notification.svg";
import headerLogo from "./../../assets/images/headerLogo.svg";
export default function Header() {
  return (
    <div className="px-12 pt-6 pb-2.5 w-full max-md:px-5 max-md:max-w-full">
      <div className="flex justify-between gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-[18%] max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            src={headerLogo}
            className="grow shrink-0 max-w-full aspect-[1.19] w-[148px] max-md:mt-10"
            alt="header-logo"
          />
        </div>
        <div className="flex flex-col  w-[45%] max-md:ml-0 max-md:w-full">
          <div className="flex gap-2 justify-between self-stretch p-2.5 my-auto text-base font-semibold tracking-wide leading-7 text-center text-slate-800 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
            <div className="text-indigo-500">Beranda</div>
            <div>Tentang Kami</div>
            <div>Donasi</div>
            <div>Market Place</div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[14%] max-md:ml-0 max-md:w-full">
          <div className="flex gap-2 justify-between self-stretch my-auto text-base font-medium leading-6 text-center text-white whitespace-nowrap max-md:mt-10">
            <img
              loading="lazy"
              src={notification}
              className="shrink-0 aspect-square w-[55px]"
              alt="notification"
            />
            <div className="justify-center px-6 py-3 my-auto bg-indigo-500 rounded-[100px] max-md:px-5">
              Masuk
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
