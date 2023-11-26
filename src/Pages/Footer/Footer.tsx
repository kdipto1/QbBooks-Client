import React from "react";

const Footer = (): JSX.Element => {
  return (
    <footer className="bg-teal-50 dark:bg-gray-900 mt-20">
      <div className="container p-6 mx-auto">
        <div className="lg:flex">
          <div className="w-full -mx-6 lg:w-2/5">
            <div className="px-6">
              <div>
                <a
                  href="/"
                  className="text-xl font-bold   dark:text-white hover:  dark:hover:text-gray-300"
                >
                  QbBooks
                </a>
              </div>

              <p className="max-w-sm mt-2   dark:text-gray-400">
                Unlock Worlds, One Page at a Time: Your Journey Awaits at
                qbBooks.
              </p>

              <div className="flex mt-6 -mx-2">
                <a
                  href="https://www.linkedin.com/in/dipto-karmaker/"
                  className="mx-2 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    className="w-5 h-5 fill-current"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        d="M6.5 8C7.32843 8 8 7.32843 8 6.5C8 5.67157 7.32843 5 6.5 5C5.67157 5 5 5.67157 5 6.5C5 7.32843 5.67157 8 6.5 8Z"
                        fill="#0F0F0F"
                      ></path>{" "}
                      <path
                        d="M5 10C5 9.44772 5.44772 9 6 9H7C7.55228 9 8 9.44771 8 10V18C8 18.5523 7.55228 19 7 19H6C5.44772 19 5 18.5523 5 18V10Z"
                        fill="#0F0F0F"
                      ></path>{" "}
                      <path
                        d="M11 19H12C12.5523 19 13 18.5523 13 18V13.5C13 12 16 11 16 13V18.0004C16 18.5527 16.4477 19 17 19H18C18.5523 19 19 18.5523 19 18V12C19 10 17.5 9 15.5 9C13.5 9 13 10.5 13 10.5V10C13 9.44771 12.5523 9 12 9H11C10.4477 9 10 9.44772 10 10V18C10 18.5523 10.4477 19 11 19Z"
                        fill="#0F0F0F"
                      ></path>{" "}
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M20 1C21.6569 1 23 2.34315 23 4V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4C1 2.34315 2.34315 1 4 1H20ZM20 3C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H20Z"
                        fill="#0F0F0F"
                      ></path>
                    </g>
                  </svg>
                </a>

                <a
                  href="https://github.com/kdipto1"
                  className="mx-2   transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                  aria-label="Github"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    className="w-5 h-5 fill-current"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-6 lg:mt-0 lg:flex-1">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <div>
                <h3 className="  uppercase dark:text-white">About</h3>
                <a
                  href="/"
                  className="block mt-2 text-sm   dark:text-gray-400 hover:underline"
                >
                  Company
                </a>
                <a
                  href="/"
                  className="block mt-2 text-sm   dark:text-gray-400 hover:underline"
                >
                  community
                </a>
                <a
                  href="/"
                  className="block mt-2 text-sm   dark:text-gray-400 hover:underline"
                >
                  Careers
                </a>
              </div>

              <div>
                <h3 className="  uppercase dark:text-white">Blog</h3>
                <a
                  href="/"
                  className="block mt-2 text-sm   dark:text-gray-400 hover:underline"
                >
                  Tec
                </a>
                <a
                  href="/"
                  className="block mt-2 text-sm   dark:text-gray-400 hover:underline"
                >
                  Music
                </a>
                <a
                  href="/"
                  className="block mt-2 text-sm   dark:text-gray-400 hover:underline"
                >
                  Videos
                </a>
              </div>

              <div>
                <h3 className="  uppercase dark:text-white">Products</h3>
                <a
                  href="/"
                  className="block mt-2 text-sm   dark:text-gray-400 hover:underline"
                >
                  Podcasts
                </a>
                <a
                  href="/"
                  className="block mt-2 text-sm   dark:text-gray-400 hover:underline"
                >
                  Article
                </a>
                <a
                  href="/"
                  className="block mt-2 text-sm   dark:text-gray-400 hover:underline"
                >
                  Blogs
                </a>
              </div>

              <div>
                <h3 className="  uppercase dark:text-white">Contact</h3>
                <span className="block mt-2 text-sm   dark:text-gray-400 hover:underline">
                  +8801623752522
                </span>
                <span className="block mt-2 text-sm   dark:text-gray-400 hover:underline">
                  kdipto2@gmail.com
                </span>
              </div>
            </div>
          </div>
        </div>

        <hr className="h-px my-6 bg-gray-200 border-none dark:bg-gray-700" />

        <div>
          <p className="text-center   dark:text-gray-400">
            © QbBooks 2023 - All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
