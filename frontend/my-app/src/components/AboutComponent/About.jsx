import React from 'react';

const About = () => {
  return (
    <div>
      <section>
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2">
              <div className="hero__content">
                <div className="flex items-center">
                  <h3 className="text-lg font-semibold mr-3">Know about us</h3>
                  <img src="path_to_world_image" alt="World Icon" className="w-6 h-6" />
                </div>
                <h1 className="text-3xl font-bold mt-4">
                  We have the best cruise service in Sundarban
                </h1>
                <p className="mt-4 text-gray-700">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore ex totam
                  eaque labore voluptates, libero tenetur voluptas nulla vitae impedit iure
                  voluptatem modi. Possimus, beatae natus odit enim vel eos!
                </p>
              </div>
            </div>

            <div className="lg:w-1/6">
              <div className="hero__img-box mt-6 lg:mt-0">
                <img src="path_to_hero_image" alt="Hero" className="rounded-lg" />
              </div>
            </div>

            <div className="lg:w-1/6">
              <div className="hero__img-box mt-6 lg:mt-0">
                <video src="path_to_hero_video" controls className="rounded-lg w-full" />
              </div>
            </div>

            <div className="lg:w-1/6">
              <div className="hero__img-box mt-6 lg:mt-10">
                <img src="path_to_hero_image_02" alt="Hero 02" className="rounded-lg" />
              </div>
            </div>
          </div>

          <div className="pt-10">
            <h2 className="text-2xl font-bold">Our Cruise Facilities</h2>
            <p className="pt-4 text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat deleniti
              perferendis, velit odio quasi architecto in voluptas magnam, quae quibusdam
              doloribus, quidem error dignissimos numquam blanditiis eum libero quaerat
              eveniet! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium aut
              totam qui voluptas, voluptates reiciendis cum modi nulla corrupti repudiandae
              porro repellat culpa placeat non doloribus voluptatem adipisci sed! Nostrum?
            </p>
          </div>

          <div className="pt-10">
            <img src="path_to_gallery_image" alt="Gallery" className="w-full h-96 object-cover rounded-lg" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
