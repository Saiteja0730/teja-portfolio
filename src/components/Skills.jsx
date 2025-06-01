// import content
import { createElement } from "react";
import { content } from "../Content";

const Skills = () => {
  const { skills } = content;

  return (
    <section className="min-h-fit bg-bg_light_primary" id="skills">
      <div className="md:container px-4 py-12">
        <h2 className="title text-center" data-aos="fade-down">
          {skills.title}
        </h2>
        <h4 className="subtitle text-center" data-aos="fade-down">
          {skills.subtitle}
        </h4>
        <br />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {skills.skills_content.map((skill, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 300}
              className="bg-white sm:cursor-pointer 
               relative group flex items-center
                gap-4 p-4 rounded-md border border-slate-200 hover:border-brown_accent/50 transition-colors"
            >
              <div>
                <img
                  src={skill.logo}
                  alt={skill.name}
                  className="w-9 group-hover:scale-125 duration-200"
                />
              </div>
              <div className="flex-1">
                <h6 className="text-brown_accent font-semibold text-[0.95rem]">{skill.name}</h6>
                <p className="italic text-gray-600 text-sm leading-snug">{skill.para}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
