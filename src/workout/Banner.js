import React from 'react';

const Banner = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="flex w-full mb-20 flex-wrap justify-center">
            <h1 className="sm:text-4xl font-extrabold text-2xl  title-font text-white lg:w-4/5 lg:mb-0 mb-4 border-2 py-2 text-center">
              Where Fitness Meets Fun and Results Are Achieved
            </h1>
            
          </div>
          <div className="flex flex-wrap md:-m-2 -m-1">
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src="https://www.pixelstalk.net/wp-content/uploads/images6/Fitness-Desktop-Wallpaper.jpg"
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src="https://cutewallpaper.org/22/gym-lover-wallpapers/6000-c1f9d-best-3cce6-gym-d37e7-photos-249ba-%C2%B7-29648-100-5256b-free-b647c-download-844b8-%C2%B7---pexels---stock---photos.jpeg"
                />
              </div>
              <div className="md:p-2 p-1 w-full">
                <img
                  alt="gallery"
                  className="w-full h-full object-cover object-center block"
                  src="https://i.ytimg.com/vi/gey73xiS8F4/maxresdefault.jpg"
                />
              </div>
            </div>
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-full">
                <img
                  alt="gallery"
                  className="w-full h-full object-cover object-center block"
                  src="https://wallpaperaccess.com/full/1087621.jpg"
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src="https://wallpapercave.com/wp/wp6331008.jpg"
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src="https://img.freepik.com/premium-photo/woman-training-gym_946657-755.jpg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
