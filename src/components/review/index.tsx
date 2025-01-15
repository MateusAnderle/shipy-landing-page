const testimonials = [
  {
    body: "Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.",
    author: {
      name: "Leslie Alexander",
      handle: "lesliealexander",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    body: "Sapiente pariatur quisquam dolorem id doloribus. Eveniet aspernatur mollitia sunt aliquid voluptates.",
    author: {
      name: "Michael Foster",
      handle: "michaelfoster",
      imageUrl:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    body: "Voluptatum explicabo quas nostrum. Repellat libero nemo maiores distinctio voluptas.",
    author: {
      name: "Lindsay Walton",
      handle: "lindsaywalton",
      imageUrl:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    body: "Iusto aspernatur ducimus tempore pariatur. Possimus consequatur ipsa assumenda rerum aut.",
    author: {
      name: "Courtney Henry",
      handle: "courtneyhenry",
      imageUrl:
        "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    body: "Autem aperiam est fugiat dolore dolorem. Doloribus voluptas eveniet numquam sequi omnis.",
    author: {
      name: "Tom Cook",
      handle: "tomcook",
      imageUrl:
        "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    body: "Ipsam voluptatem ullam molestiae tempora dolores non expedita delectus laborum.",
    author: {
      name: "Whitney Francis",
      handle: "whitneyfrancis",
      imageUrl:
        "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
];

export default function Review() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base/7 font-semibold text-secondary-500">
            Testimonials
          </h2>
          <p className="mt-2 text-balance text-4xl font-semibold tracking-tight text-primary-900 sm:text-5xl">
            We have worked with thousands of amazing people
          </p>
        </div>
        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3">
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
    </div>
  );
}
