import * as React from "react";
import location from "./../../assets/images/location.svg";
import whatsapp from "./../../assets/images/whatsapp.svg";
import email from "./../../assets/images/email.svg";
export default function Footer() {
  return (
    <div className="flex  content-center flex-col items-center px-16 py-20 bg-indigo-500 max-md:px-5">
      <div className="flex justify-between content-center gap-5 mt-6 ml-3.5 w-full max-w-[1400px] max-md:flex-wrap">
        <div className="flex flex-col justify-center text-2xl text-white w-72 max-md:max-w-full text-left">
          <span className="font-bold text-white">Binekas</span>
          <br />
          <br />
          <span className="text-white">
            Binekas merupakan sebuah food bank yang bertujuan menjadi pusat
            koordinasi makanan surplus dan berpotensi terbuang, untuk disalurkan
            kepada masyarakat pra-sejahtera.
          </span>
        </div>
        <div className="flex flex-col max-md:max-w-full">
          <div className="text-2xl font-bold text-white text-left max-md:max-w-full">
            Kontak Kami
          </div>
          <div className="flex gap-3 mt-8 items-start text-left max-md:flex-wrap">
            <div className="flex flex-col items-start">
              <img
                loading="lazy"
                src={location}
                className={`aspect-[1.1]  w-[57px]`}
                alt="location"
              />
              <img
                loading="lazy"
                src={whatsapp}
                className="mt-5 aspect-[1.1] w-[57px]"
                alt="whatsapp"
              />
              <img
                loading="lazy"
                src={email}
                className="mt-5 aspect-[1.1] w-[57px]"
                alt="email"
              />
            </div>
            <div className="flex-auto self-start items-start text-2xl font-bold text-white underline max-md:max-w-full">
              <span className="text-white ">
                Wisma Mukti, Jalan Klampis Anom III F-22, Bandung
              </span>
              <br /> <br />
              <div className="text-white mt-2 ">081541288834</div>
              <br />
              <div>
                <div className="text-white">binekascode</div>
                <a
                  href="mailto:gardapanganid@gmail.com"
                  className="text-white underline "
                  target="_blank"
                >
                  @gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
