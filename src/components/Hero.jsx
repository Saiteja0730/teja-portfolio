import { useEffect } from "react";
import { content } from "../Content";
const Hero = () => {
  const { hero } = content;

  return (
    <section id="home" className="overflow-hidden">
      <div className="min-h-screen relative flex md:flex-row flex-col-reverse md:items-end justify-center items-center">
        <div
          data-aos="slide-left"
          data-aos-delay="1200"
          className="absolute h-full md:w-4/12 w-8/12 top-0 right-0 bg-primaryLinear bottom-0 -z-10"
        >
          <h1 className="rotate-90 absolute top-[30%] right-[10%] text-[#EAF2FA] text-xl sm:text-2xl md:text-4xl">
            {hero.firstName}{" "}
            <span className="text-dark_primary">{hero.LastName}</span>
          </h1>
        </div>

        {/* first col */}
        <div className="pb-16 px-6 pt-5 flex flex-col" data-aos="fade-down">
          <div className="mb-6">
            <h2 className="text-xl sm:text-2xl md:text-3xl typing-text overflow-hidden whitespace-nowrap">
              {hero.title}
            </h2>
            <br />
            <p className="text-base sm:text-lg md:text-xl text-gray-700">Ready to Begin with your project</p>
          </div>
          
          <div className="flex justify-start mb-8">
            <button className="btn text-sm sm:text-base bg-brown_accent text-white hover:bg-brown_light hover:text-dark_primary transition-colors">{hero.btnText}</button>
          </div>

          <div className="flex flex-col gap-8">
            {hero.hero_content.map((content, i) => (
              <div
                key={i}
                data-aos="fade-down"
                data-aos-delay={i * 300}
                className={`flex items-center w-72 sm:w-80 gap-4 bg-white/80 p-4 rounded-lg shadow-sm
                ${i === 1 && "flex-row-reverse text-right ml-auto"}`}
              >
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-brown_accent">{content.count}</h3>
                <p className="text-sm sm:text-base text-gray-600">{content.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* sec col */}
        <div className="md:h-[28rem] h-72">
          <img
            src={hero.image}
            data-aos="slide-up"
            alt="..."
            className="h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;