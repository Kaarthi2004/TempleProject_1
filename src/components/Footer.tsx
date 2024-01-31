/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
const Footer = () => {
    return (
      <>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <hr />
        <footer className="w-full dark:bg-gray-900">
          <div className="mx-auto w-full max-w-screen-xl">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-14 px-8 py-6 md:py-10">
              <div className="mb-8 md:mb-0">
                <h2 className="mb-6 text-lg font-semibold uppercase text-red-500">About Us</h2>
                {/* ...About Us content */}
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">        
                      <p className="flex">
                      <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2 text-red-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      >
                      <path
                          fillRule="evenodd"
                          d="M11.293 4.293a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414l-2.616-2.617v8.907a1 1 0 01-1 1H8.707a1 1 0 01-1-1V5.99L5.09 8.607a1 1 0 11-1.414-1.414l3-3zM5 0a5 5 0 014.995 4.783L10 5v3a2 2 0 01-2 2H6a2 2 0 01-2-2V5c0-1.378 1.122-2.5 2.5-2.5 1.042 0 1.978.641 2.343 1.617A4.992 4.992 0 015 0zm.457 13.012c.058.439.365.798.77.936a6.013 6.013 0 002.554 0c.405-.138.712-.497.77-.936L8 13h1.5a.5.5 0 01.5.5v2a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5v-2a.5.5 0 01.5-.5H8l-.543.012z"
                          clipRule="evenodd"
                      />
                      </svg>
                      Phone: +1 (123) 456-7890
                      </p>
                  </li>
                  <li className="mb-4">
                      <p className="flex">
                          <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 mr-2 text-red-500"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          >
                          <path
                              fillRule="evenodd"
                              d="M1 4a2 2 0 012-2h14a2 2 0 012 2v12a2 2 0 01-2 2H3a2 2 0 01-2-2V4zm2-1a1 1 0 011-1h12a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V3z"
                              clipRule="evenodd"
                          />
                          <path
                              fillRule="evenodd"
                              d="M5.293 9.293a1 1 0 011.414 0L10 11.586l3.293-2.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                              clipRule="evenodd"
                          />
                          </svg>
                          Email: example@example.com
                      </p>
                  </li>
                  <li className="mb-4">
                      <p className="flex">
                          <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 mr-2 text-red-500"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          >
                          <path
                              fillRule="evenodd"
                              d="M10 2a5 5 0 00-5 5c0 4.11 5 10 5 10s5-5.89 5-10a5 5 0 00-5-5zm0 8a3 3 0 100-6 3 3 0 000 6z"
                              clipRule="evenodd"
                          />
                          </svg>
                          Location: 1234 Example Street, City, Country
                      </p>
                  </li>
                </ul>
              </div>
          
              <div className="mb-8 md:mb-0">
                <h2 className="mb-6 text-lg font-semibold text-red-500 uppercase">INFORMATION</h2>
                {/* ...Information content */}
                <div>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <a href="#" className="flex hover:text-red-900 transform hover:translate-x-2 duration-300"><span className="text-lg font-bold mr-2 text-red-500">ॐ</span>Puja</a>
                      </li>
                      <li className="mb-4">
                          <a  href="#" className="flex hover:text-red-900 transform hover:translate-x-2 duration-300"><span className="text-lg font-bold mr-2 text-red-500">ॐ</span>Services</a>
                      </li>
                      <li className="mb-4">
                          <a  href="#" className="flex hover:text-red-900 transform hover:translate-x-2 duration-300"><span className="text-lg font-bold mr-2 text-red-500">ॐ</span>Temple</a>
                      </li>
                      <li className="mb-4">
                          <a  href="#" className="flex hover:text-red-900 transform hover:translate-x-2 duration-300"><span className="text-lg font-bold mr-2 text-red-500">ॐ</span>Holis</a>
                      </li>
                      <li className="mb-4">
                          <a  href="#" className="flex hover:text-red-900 transform hover:translate-x-2 duration-300"><span className="text-lg font-bold mr-2 text-red-500">ॐ</span>Volunteers</a>
                      </li>
                      <li className="mb-4">
                          <a  href="#" className="flex hover:text-red-900 transform hover:translate-x-2 duration-300"><span className="text-lg font-bold mr-2 text-red-500">ॐ</span>Donation</a>
                      </li>
                  </ul>
                </div>
              </div>

              <div className="mb-8 md:mb-0">
                <h2 className="mb-6 text-lg font-semibold text-red-500 uppercase ">OTHERS</h2>
                {/* Others content */}
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                      <a href="#"  className="flex hover:text-red-900 transform hover:translate-x-2 duration-300"><span className="text-lg font-bold mr-2 text-red-500">ॐ</span>Shop</a>
                  </li>
                  <li className="mb-4">
                      <a  href="#" className="flex hover:text-red-900 transform hover:translate-x-2 duration-300"><span className="text-lg font-bold mr-2 text-red-500">ॐ</span>Checkout</a>
                  </li>
                  <li className="mb-4">
                      <a  href="#" className="flex hover:text-red-900 transform hover:translate-x-2 duration-300"><span className="text-lg font-bold mr-2 text-red-500">ॐ</span>Donation</a>
                  </li>
                  <li className="mb-4">
                      <a  href="#" className="flex hover:text-red-900 transform hover:translate-x-2 duration-300"><span className="text-lg font-bold mr-2 text-red-500">ॐ</span>Conact Us</a>
                  </li>
                  <li className="mb-4">
                      <a  href="#" className="flex hover:text-red-900 transform hover:translate-x-2 duration-300"><span className="text-lg font-bold mr-2 text-red-500">ॐ</span>Blog</a>
                  </li>
                </ul>
              </div>
              
              <div className="mb-8 md:mb-0">
                <h2 className="mb-6 text-lg font-semibold text-red-500 uppercase">RECENT POSTS</h2>
                  {/* ...Recent Posts content canbe posted here */}
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                    <section className="">
                      <div className="flex mx-auto">
                        <div className="flex flex-wrap gap-4">
                          <div className="flex items-center">
                            <img
                              src="https://t4.ftcdn.net/jpg/04/44/38/47/360_F_444384718_7DDIjSOn7KK3zYlDTCuqoNViziRQWgU4.jpg"
                              alt="Image 1"
                              className="w-20 h-20 rounded-half mr-4"
                            />
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                              eget mauris eget justo euismod fermentum vitae id nisi.
                            </p>
                          </div>
                          <div className="flex items-center">
                            <img
                              src="https://karnatakatourism.org/wp-content/uploads/2022/04/Nanjangud-Temple-THUMBNail.jpg"
                              alt="Image 2"
                              className="w-20 h-20 rounded-half mr-4"
                            />
                            <p>
                              Donec sed ex sit amet diam convallis posuere. Vestibulum vel
                              felis euismod, aliquam justo at, mattis dui.
                            </p>
                          </div>
                          {/* More divs with images and text can b e added here */}
                        </div>
                      </div>
                    </section>
                  </ul>
                </div>
              </div>
            </div>
              
<hr />

  <footer className="bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400"> All Rights Reserved by "carace"
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
              <a href="#" className="hover:underline me-4 md:me-6">About</a>
          </li>
          <li>
              <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
          </li>
          <li>
              <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
          </li>
          <li>
              <a href="#" className="hover:underline">Contact</a>
          </li>
      </ul>
  </footer>

</footer>
      </>
    );
  };
  
  export default Footer;
  