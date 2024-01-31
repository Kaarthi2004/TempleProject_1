import { Carousel } from "flowbite-react";
import jsonData from "./carouselData.json";


function MyCarousel() {
  return (
    <div className="relative rounded-none h-64px [&_.snap-mandatory]:rounded-none md:h-full lg:h-96 xl:h-96 2xl:h-96">
      <Carousel indicators={false}>{jsonData.map((slide, index) => (
          <div key={index} className="relative z-10 h:40 w-full  lg:h-full lg:w-full">
            <img
            
              className="object-fill h-96 w-full md:h-full md:w-full lg:h-96 lg:w-full"
              src={slide.image}
              alt="..."
            />
            <div className="absolute h-50 w-64 ml-8 items-left md:ml-44 flex flex-col top-0 left-0 md:w-3/5 h-full md:items-left justify-center">
              <h4 className="mb-8 text-3xl font-bold text-red-500 md:mb-14 md:text-5xl md:font-bold lg:text-4xl">
                {slide.title}
              </h4>
              <p className="mb-8 text-xl text-white md:text-white  md:mb-16 md:text-3xl md:text-left lg:text:xl">
                {slide.description}
              </p>
              <div className="flex  flex-row space-x-3 w-24 md:ml-4 md:flex-row md:space-y-0 md:space-x-4">
                <button className="px-2 py-2 text-center text-base font-bold md:px-4 md:py-3 md:text-center md:text-lg md:font-bold text-white bg-red-500 rounded-full shadow-md">
                  {slide.buttonText}
                </button>
                <button className="px-2 py-2 text-center text-base font-bold md:px-4 md:py-3 md:text-center md:text-lg md:font-bold text-red-500 bg-white rounded-full shadow-md">
                  {slide.buttonText}
                </button>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default MyCarousel;
