"use client";

import Image from "next/image";
import HomeExample from "@/assets/shipy_home.webp";
import ShineBorder from "@/components/ui/shine-border";

export default function Hero() {
  return (
    <div className="bg-background">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#0077E6] to-[#66B3FF] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className="mx-auto max-w-3xl">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Comece a gerenciar suas entregas{" "}
              <a href="#" className="font-semibold text-secondary-500">
                <span aria-hidden="true" className="absolute inset-0" />
                hoje mesmo <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-5xl text-primary-900 sm:text-7xl font-semibold">
              Sua operação logística, mais ágil e inteligente
            </h1>
            <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
              Simplifique sua logística: acompanhe entregas, gerencie motoristas
              e controle tudo em um só lugar
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-secondary-500 px-3.5 py-2.5 text-md font-semibold text-white shadow-sm hover:bg-secondary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                Solicite sua demonstração
                <span className="ml-3" aria-hidden="true">
                  →
                </span>
              </a>
            </div>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#0077E6] to-[#66B3FF]  opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>

      <div className="relative">
        <ShineBorder
          className="sm:m-14 m-5 max-w-5xl sm:mx-auto flex flex-col items-center justify-center overflow-hidden rounded-xl border-2"
          borderWidth={3}
          color={["#66B3FF", "#0077E6"]}
        >
          <Image
            src={HomeExample}
            alt="Exemplo de um dashboard de um sistema de gerenciamento logístico"
            className="w-full h-full object-cover rounded-xl"
          />
        </ShineBorder>
        <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent" />
      </div>
    </div>
  );
}
