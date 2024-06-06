import React from "react";
import Quadro from "../../components/Quadro";
import Titulo from "../../components/Titulo";

export default function Contato() {
  return (
    <main className="bg-neutral-900">
      <div className="container pt-1 flex flex-row justify-center mx-auto">
        <div className="flex flex-col  justify-between break-after-column mx-auto text-center pt-1 md:min-w-[900px] min-h-full rounded">
          <Titulo className="flex flex-col justify-center mx-auto min-h-[30px] min-w-[750px] md:min-h-[70px] md:min-w-[900px]">
            <p>Contato</p>
          </Titulo>
          <Quadro className="flex flex-col min-w-[750px] min-h-[600px] md:min-h-[800px] md:min-w-[900px] mt-5 mx-auto justify-center">
            <div className="bg-rose-900 mx-auto rounded p-2">
              <p className="text-4xl md:text-7xl">(99)9 9999-9999</p>
            </div>

            <div className="bg-rose-900 mx-auto rounded p-2 mt-2">
              <p className="text-4xl md:text-7xl mt-2">wbmlocadora@gmail.com</p>
            </div>

            <div className="bg-rose-900 mx-auto rounded p-2 mt-2">
              <p className="text-4xl md:text-7xl mt-2">@wbmlocadora</p>
            </div>
          </Quadro>
        </div>
      </div>
    </main>
  );
}
