"use client";

import {
  ComputerDesktopIcon,
  DevicePhoneMobileIcon,
  PresentationChartLineIcon,
} from "@heroicons/react/20/solid";
import GridPattern from "@/components/ui/grid-pattern";
import { ny } from "@/lib/utils";
import Image from "next/image";
import users from "@/assets/users.webp";

const features = [
  {
    name: "Controle Centralizado.",
    description:
      "Monitore transportadoras, motoristas, notas fiscais e entregas em um único lugar.",
    icon: ComputerDesktopIcon,
  },
  {
    name: "Acompanhamento em Tempo Real.",
    description:
      "Tenha visibilidade completa do status de cada entrega com atualizações instantâneas.",
    icon: PresentationChartLineIcon,
  },
  {
    name: "Acessível de Qualquer Lugar.",
    description:
      "Disponível em sistemas web, iOS e Android, para que você tenha o controle na palma da mão.",
    icon: DevicePhoneMobileIcon,
  },
];

export default function Solution() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32 relative">
      <GridPattern
        width={20}
        height={20}
        x={-1}
        y={-1}
        className={ny(
          "[mask-image:linear-gradient(to_bottom_left,white,transparent,transparent)] "
        )}
      />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:ml-auto lg:pl-4 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base/7 font-semibold text-secondary-500">
                Sua logística no próximo nível
              </h2>
              <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-primary-900 sm:text-5xl">
                Gerencie as suas entregas com precisão e agilidade
              </p>
              <p className="mt-6 text-lg/8 text-primary-600">
                Diga adeus às complicações logísticas e descubra uma solução
                inteligente que coloca sua empresa no controle total das
                entregas.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-primary-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-primary-900">
                      <feature.icon
                        aria-hidden="true"
                        className="absolute -left-3 top-1 size-10 text-secondary-500 p-2 bg-secondary-300/20 rounded-full"
                      />
                      {feature.name}
                    </dt>
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className="flex items-center justify-end lg:order-first z-10">
            <Image
              alt="Foto do produto a área de usuários"
              src={users}
              width={2432}
              height={1442}
              className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
