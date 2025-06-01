import { content } from "../Content";

const Services = () => {
  const { services } = content;
  return (
    <section id="services" className="bg-bg_light_primary py-8">
      <div className="md:container px-4 sm:px-5 py-14">
        <h2 className="title text-2xl sm:text-3xl md:text-4xl text-center text-dark_primary mb-2" data-aos="fade-down">
          {services.title}
        </h2>
        <h4 className="subtitle text-base sm:text-lg text-center text-gray mb-8" data-aos="fade-down">
          {services.subtitle}
        </h4>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 group">
          {services.service_content.map((content, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 300}
              className="bg-white rounded-xl shadow-lg p-6 duration-300 group-hover:blur-[2px] hover:!blur-none
              border-2 border-brown_light/10 hover:border-brown_accent/20 hover:shadow-xl
              transform hover:-translate-y-2 transition-all cursor-pointer"
            >
              <div className="mb-4 flex justify-center">
                <img 
                  src={content.logo} 
                  alt={content.title} 
                  className="w-16 h-16 object-contain"
                />
              </div>
              <h6 className="text-lg sm:text-xl font-semibold text-brown_accent mb-3 text-center">
                {content.title}
              </h6>
              <p className="text-sm sm:text-base text-gray leading-relaxed text-center">
                {content.para}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
