import { content } from "../Content";

const Hireme = () => {
  const { Hireme } = content;

  return (
    <section className="bg-bg_light_primary">
      <div className="md:container px-4 sm:px-5 pt-14">
        <h2 className="title text-2xl sm:text-3xl md:text-4xl" data-aos="fade-down">
          {Hireme.title}
        </h2>
        <h4 className="subtitle text-base sm:text-lg md:text-xl" data-aos="fade-down">
          {Hireme.subtitle}
        </h4>
        <br />
        <div className="flex items-center justify-between md:flex-row flex-col-reverse gap-8">
          <img
            src={Hireme.image1}
            alt="..."
            data-aos="fade-right"
            className="max-w-sm md:block hidden w-full md:w-2/5 rounded-xl shadow-lg"
          />
          <img
            src={Hireme.image2}
            data-aos="fade-up"
            alt="..."
            className="max-w-sm md:hidden w-full rounded-xl shadow-lg"
          />
          <div
            data-aos="fade-left"
            className="border-2 border-brown_accent max-w-sm w-full
           p-4 sm:p-6 shadow-sm rounded-xl rounded-br-[8rem] sm:min-w-[22rem] md:w-1/2 bg-white/80"
          >
            <p className="leading-7 text-sm sm:text-base">{Hireme.para}</p>
            <br />
            <button className="btn bg-brown_accent text-white hover:bg-brown_light hover:text-dark_primary transition-colors text-sm sm:text-base">
              {Hireme.btnText}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hireme;
