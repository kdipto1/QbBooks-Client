const Testimonials = (): JSX.Element => {
  return (
    <section className="bg-white dark:bg-gray-900 mt-20">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-3xl font-semibold text-center text-gray-800 capitalize xl:text-5xl lg:text-4xl dark:text-white">
          What our <span className="text-primary ">clients</span> say
        </h1>

        <p className="max-w-2xl mx-auto mt-6 text-center text-gray-500 dark:text-gray-300">
          Our clients love the experience of shopping for books with us. Read
          what they have to say about our service.
        </p>

        <section className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 lg:grid-cols-2 xl:grid-cols-3">
          <div className="p-8 border rounded-lg dark:border-gray-700">
            <blockquote className="p-8 border rounded-lg dark:border-gray-700">
              “The variety of books and the seamless shopping experience at this
              bookstore is unmatched. I found exactly what I was looking for,
              and the delivery was quick. Highly recommended!”
            </blockquote>

            <div className="flex items-center mt-8 -mx-2">
              <img
                className="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 dark:ring-gray-700"
                src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                alt=""
              />

              <div className="mx-2">
                <h1 className="font-semibold text-gray-800 dark:text-white">
                  Robert
                </h1>
                <span className="text-sm text-gray-500">
                  CTO, Robert Consultency
                </span>
              </div>
            </div>
          </div>

          <div className="p-8 border rounded-lg dark:border-gray-700">
            <blockquote className="p-8 border rounded-lg dark:border-gray-700">
              “The user-friendly interface and the quality of service at this
              bookstore are exceptional. I enjoy exploring new releases and
              adding them to my collection. Fantastic job!”
            </blockquote>

            <div className="flex items-center mt-8 -mx-2">
              <img
                className="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 dark:ring-gray-700"
                src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                alt=""
              />

              <div className="mx-2">
                <h1 className="font-semibold text-gray-800 dark:text-white">
                  Jeny Doe
                </h1>
                <span className="text-sm text-gray-500">
                  CEO, Jeny Consultency
                </span>
              </div>
            </div>
          </div>

          <div className="p-8 border rounded-lg dark:border-gray-700">
            <blockquote className="p-8 border rounded-lg dark:border-gray-700">
              “As a marketing manager, I appreciate the attention to detail in
              curating the book collection. It makes it easy for me to recommend
              our readers the best titles. Keep up the good work!”
            </blockquote>
            <div className="flex items-center mt-8 -mx-2">
              <img
                className="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 dark:ring-gray-700"
                src="https://images.unsplash.com/photo-1488508872907-592763824245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt=""
              />

              <div className="mx-2">
                <h1 className="font-semibold text-gray-800 dark:text-white">
                  Ema Watson{" "}
                </h1>
                <span className="text-sm text-gray-500">
                  Marketing Manager at Stech
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Testimonials;
