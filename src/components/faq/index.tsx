import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";

const faqs = [
  {
    question: "Como o sistema ajuda a gerenciar minhas entregas?",
    answer:
      "Nosso sistema permite acompanhar cada etapa das entregas em tempo real, gerenciar motoristas e transportadoras, e acessar recibos de entrega de forma centralizada, otimizando tempo e recursos.",
  },
  {
    question: "O sistema é compatível com dispositivos móveis?",
    answer:
      "Sim! Ele está disponível como aplicativo para iOS e Android, além da versão web, garantindo acessibilidade onde você estiver.",
  },
  {
    question: "Posso monitorar múltiplas transportadoras e motoristas?",
    answer:
      "Sim, o sistema foi projetado para gerenciar várias transportadoras e motoristas simultaneamente, com relatórios detalhados e organização eficiente.",
  },
  {
    question:
      "O sistema oferece suporte para integração com outras ferramentas?",
    answer:
      "Sim, nosso sistema é compatível com diversas integrações para facilitar a adaptação ao fluxo de trabalho da sua empresa.",
  },
  {
    question: "Existe suporte ao cliente caso eu precise de ajuda?",
    answer:
      "Claro! Oferecemos suporte dedicado para ajudar você a aproveitar ao máximo todas as funcionalidades do sistema.",
  },
];

export default function Faq() {
  return (
    <div className="bg-transparent z-50 relative">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Dúvidas frequentes
          </h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <Disclosure key={faq.question} as="div" className="pt-6">
                <dt>
                  <DisclosureButton className="group flex w-full items-start justify-between text-left text-gray-900">
                    <span className="text-base/7 font-semibold">
                      {faq.question}
                    </span>
                    <span className="ml-6 flex h-7 items-center">
                      <PlusIcon
                        aria-hidden="true"
                        className="size-6 group-data-[open]:hidden"
                      />
                      <MinusIcon
                        aria-hidden="true"
                        className="size-6 group-[&:not([data-open])]:hidden"
                      />
                    </span>
                  </DisclosureButton>
                </dt>
                <DisclosurePanel as="dd" className="mt-2 pr-12">
                  <p className="text-base/7 text-gray-600">{faq.answer}</p>
                </DisclosurePanel>
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
