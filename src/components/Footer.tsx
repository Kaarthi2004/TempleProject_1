/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
const Footer = () => {
    return (
      <>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <hr />
        <footer className="w-full bg-gray-100 dark:bg-gray-900">
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
                {/* ...Others content */}
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
                    <section className="bg-gray-100">
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
<div className="px-4 py-6 w-full max-w-screen-xl dark:bg-gray-700 md:flex md:items-center md:justify-between">
  {/* ...Social media links */}
<div className="px-4 py-6 w-full max-w-screen-xl dark:bg-gray-700 md:flex md:items-center md:justify-between">
<a>COPYRIGHT<span className="dark:text-gray-300 sm:text-center">© <a href="https://flowbite.com/">MAHARATRI</a>-2023
</span></a>
<div className="flex mt-4 space-x-5 sm:justify-center md:mt-0">
    <a href="#" className="text-red-400 hover:text-red-900 dark:hover:text-white">
          <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd"/>
            </svg>
          <span className="sr-only">Facebook page</span>
      </a>
      <a href="#" className="text-red-400 hover:text-red-900 dark:hover:text-white">
          <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 16">
                <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z"/>
            </svg>
          <span className="sr-only">Discord community</span>
      </a>
      <a href="#" className="text-red-400 hover:text-red-900 dark:hover:text-white">
          <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
            <path fill-rule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clip-rule="evenodd"/>
        </svg>
          <span className="sr-only">Twitter page</span>
      </a>
      <a href="#" className="text-red-400 hover:text-red-900 dark:hover:text-white">
          <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd"/>
          </svg>
          <span className="sr-only">GitHub account</span>
      </a>
      <a href="#" className="text-red-400 hover:text-red-900 dark:hover:text-white">
          <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z" clip-rule="evenodd"/>
        </svg>
          <span className="sr-only">Dribbble account</span>
      </a>
      
</div>
</div>
</div>
</footer>
      </>
    );
  };
  
  export default Footer;
  