import { createElement, useRef } from "react";
import { content } from "../Content";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const { Contact } = content;
  const form = useRef();

  // Sending Email
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
      'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY'
      )
      .then(
        (result) => {
          console.log(result.text);
          // Clear all input field values
          form.current.reset();
          // Success toast message
          toast.success("Email send Successfully");
        },
        (error) => {
          console.log(error.text);
          toast.error(error.text);
        }
      );
  };

  return (
    <section className="bg-dark_primary text-white" id="contact">
      <Toaster />
      <div className="md:container px-4 sm:px-5 py-10 sm:py-14">
        <h2 className="title !text-brown_light text-2xl sm:text-3xl md:text-4xl" data-aos="fade-down">
          {Contact.title}
        </h2>
        <h4 className="subtitle text-brown_light/80 text-base sm:text-lg" data-aos="fade-down">
          {Contact.subtitle}
        </h4>
        <br />
        <div className="flex gap-8 sm:gap-10 md:flex-row flex-col">
          <form
            ref={form}
            onSubmit={sendEmail}
            data-aos="fade-up"
            className="flex-1 flex flex-col gap-4 sm:gap-5"
          >
            <input
              type="text"
              name="from_name"
              placeholder="Name"
              required
              className="border border-brown_light/50 p-2 sm:p-3 rounded bg-transparent focus:border-brown_light text-sm sm:text-base"
            />
            <input
              type="email"
              name="user_email"
              pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
              placeholder="Email Id"
              required
              className="border border-brown_light/50 p-2 sm:p-3 rounded bg-transparent focus:border-brown_light text-sm sm:text-base"
            />
            <textarea
              name="message"
              placeholder="Message"
              className="border border-brown_light/50 p-2 sm:p-3 rounded h-32 sm:h-44 bg-transparent focus:border-brown_light text-sm sm:text-base"
              required
            ></textarea>
            <button className="btn self-start bg-brown_light text-dark_primary hover:bg-brown_accent hover:text-white transition-colors text-sm sm:text-base">
              Submit
            </button>
          </form>
          <div className="flex-1 flex flex-col gap-4 sm:gap-5">
            {Contact.social_media.map((content, i) => (
              <div
                key={i}
                data-aos="fade-down"
                data-aos-delay={i * 430}
                className="flex items-center gap-2 sm:gap-3"
              >
                <h4 className="text-white text-xl sm:text-2xl">{createElement(content.icon)}</h4>
                <a className="font-Poppins text-sm sm:text-base hover:text-brown_light transition-colors" href={content.link} target="_blank">
                  {content.text}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
