import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";

const faqs = [
  {
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "Why did the scarecrow win an award?",
    answer:
      "Because he was outstanding in his field. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque modi unde eos perspiciatis.",
  },
  {
    question: "Why don't skeletons fight each other?",
    answer:
      "They don't have the guts. Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus repellat quam ullam.",
  },
  {
    question: "What do you call fake spaghetti?",
    answer:
      "An impasta. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, sit temporibus facilis pariatur.",
  },
  {
    question: "Why couldn't the bicycle stand up by itself?",
    answer:
      "It was two-tired. Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis id aperiam excepturi.",
  },
  {
    question: "What do you call cheese that isn't yours?",
    answer:
      "Nacho cheese. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, quidem velit! Numquam!",
  },
  {
    question: "Why did the golfer bring two pairs of pants?",
    answer:
      "In case he got a hole in one. Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, explicabo nisi.",
  },
];

export default function Faq() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Frequently asked questions
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
                      <PlusSmallIcon
                        aria-hidden="true"
                        className="size-6 group-data-[open]:hidden"
                      />
                      <MinusSmallIcon
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
