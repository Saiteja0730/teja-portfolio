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

  const handleProjectClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="bg-bg_light_primary" id="projects">
      <div className="md:container px-5 pt-8 min-h-[85vh] flex flex-col">
        <div className="mb-4">
          <h2 className="title" data-aos="fade-down">
            {Projects.title}
          </h2>
          <h4 className="subtitle" data-aos="fade-down">
            {Projects.subtitle}
          </h4>
        </div>
        <div className="flex items-center lg:flex-row flex-col-reverse gap-4 mt-2">
          <img
            src={Projects.image}
            alt="Project showcase"
            data-aos="fade-right"
            className="max-w-[30vw] min-w-[15rem] object-contain"
            onError={(e) => {
              console.error("Failed to load main project image");
              e.target.style.display = 'none';
            }}
          />
          <Swiper
            pagination={{
              clickable: true,
            }}
            data-aos="fade-left"
            spaceBetween={15}
            modules={[Pagination]}
            className="rounded-2xl pb-10 max-w-[240px] drop-shadow-primary self-start"
          >
            {Projects.project_content.map((content, i) => (
              <SwiperSlide
                key={i}
                className="bg-white rounded-2xl p-3 border-b-6 border-[#FAF9FD] h-fit"
              >
                <div className="aspect-w-16 aspect-h-9 mb-2">
                  <img 
                    src={content.image} 
                    alt={content.title}
                    onError={() => handleImageError(i)}
                    className={`w-full h-full object-cover rounded-lg ${imageError[i] ? 'hidden' : ''}`}
                  />
                </div>
                <div className="flex flex-col gap-0.5 mt-1">
                  <h5 className="font-bold font-Poppins text-xs">{content.title}</h5>
                  <button 
                    onClick={() => handleProjectClick(content.url)}
                    className="font-bold text-gray self-end text-xs hover:text-blue-600 transition-colors"
                  >
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