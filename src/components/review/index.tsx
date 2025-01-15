const testimonials = [
  {
    body: "O sistema transformou completamente nossa gestão de entregas. Agora conseguimos acompanhar tudo em tempo real e otimizar nossos processos logísticos. Realmente facilitou a nossa rotina!",
    author: {
      name: "Carlos Silva",
      handle: "carlos_silva",
      imageUrl:
        "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    body: "A plataforma é super intuitiva e fácil de usar. Consigo gerenciar todas as entregas e motoristas sem complicação, o que tem feito uma grande diferença no nosso dia a dia.",
    author: {
      name: "Fernando Lima",
      handle: "fernando_lima",
      imageUrl:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    body: "Com esse sistema, conseguimos reduzir o tempo de resposta e melhorar a comunicação com nossos motoristas. A integração com dispositivos móveis foi um grande diferencial para nossa equipe.",
    author: {
      name: "João Pereira",
      handle: "joao_pereira",
      imageUrl:
        "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    body: "Estou muito satisfeito com o sistema. A gestão de transportadoras ficou muito mais eficiente e a possibilidade de acompanhar tudo pelo celular tornou nossa operação muito mais ágil.",
    author: {
      name: "Ana Costa",
      handle: "ana_costa",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
];

export default function Review() {
  return (
    <div className="bg-white py-24 sm:py-32 relative isolate">
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
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base/7 font-semibold text-secondary-500">
            Depoimentos
          </h2>
          <p className="mt-2 text-balance text-4xl font-semibold tracking-tight text-primary-900 sm:text-5xl">
            Veja o Que Nossos Clientes Estão Dizendo!
          </p>
        </div>
        <div className="mx-auto mt-16 flex justify-center max-w-2xl sm:mt-20 lg:mx-0 sm:max-w-none">
          <div className="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-2 max-w-5xl">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.author.handle}
                className="pt-8 sm:inline-block sm:w-full sm:px-4"
              >
                <figure className="rounded-2xl bg-gray-50 p-8 text-sm/6">
                  <blockquote className="text-primary-900">
                    <p>{`“${testimonial.body}”`}</p>
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-x-4">
                    <img
                      alt=""
                      src={testimonial.author.imageUrl}
                      className="size-10 rounded-full bg-gray-50"
                    />
                    <div>
                      <div className="font-semibold text-primary-900">
                        {testimonial.author.name}
                      </div>
                      <div className="text-primary-600">{`@${testimonial.author.handle}`}</div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            ))}
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
  );
}
