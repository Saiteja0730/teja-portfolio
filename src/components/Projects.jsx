import { content } from "../Content";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";
import { useState } from "react";

const Projects = () => {
  const { Projects } = content;
  const [imageError, setImageError] = useState({});

  const handleImageError = (index) => {
    setImageError(prev => ({...prev, [index]: true}));
    console.error(`Failed to load image for project ${index}`);
  };

  return (
    <section className="bg-bg_light_primary" id="projects">
      <div className="md:container px-5 pt-14 min-h-screen flex flex-col justify-between">
        <div>
          <h2 className="title" data-aos="fade-down">
            {Projects.title}
          </h2>
          <h4 className="subtitle" data-aos="fade-down">
            {Projects.subtitle}
          </h4>
          <br />
        </div>
        <div className="flex items-center lg:flex-row flex-col-reverse gap-5">
          {Projects.image && (
            <img
              src={Projects.image}
              alt="Project showcase"
              data-aos="fade-right"
              className="max-w-[45vw] min-w-[22rem]"
              onError={() => console.error("Failed to load main project image")}
            />
          )}
          <Swiper
            pagination={{
              clickable: true,
            }}
            data-aos="fade-left"
            spaceBetween={20}
            modules={[Pagination]}
            className="rounded-3xl pb-16 max-w-xs drop-shadow-primary self-start"
          >
            {Projects.project_content.map((content, i) => (
              <SwiperSlide
                key={i}
                className="bg-white rounded-3xl p-5 border-b-8 border-[#FAF9FD] h-fit"
              >
                {content.image && !imageError[i] && (
                  <img 
                    src={content.image} 
                    alt={content.title}
                    onError={() => handleImageError(i)}
                    className="w-full h-auto object-cover"
                  />
                )}
                <div className="flex flex-col gap-1 mt-2">
                  <h5 className="font-bold font-Poppins">{content.title}</h5>
                  <button className="font-bold text-gray self-end">
                    View Project
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Projects;