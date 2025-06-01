import { createElement, useRef } from "react";
import { content } from "../Content";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const { Contact } = content;
  const form = useRef();

  
  emailjs.init("R1wg-3MVZVSziCtt7"); 

  // Sending Email
  const sendEmail = (e) => {
    e.preventDefault();
    
    // Show loading toast
    const loadingToast = toast.loading("Sending message...");

    emailjs
      .sendForm(
        'service_yypu2yi', // Replace with your Service ID from EmailJS
        'template_ij68hje', // Replace with your Template ID from EmailJS
        form.current,
        'R1wg-3MVZVSziCtt7' // Replace with your Public Key from EmailJS
      )
      .then(
        (result) => {
          toast.dismiss(loadingToast);
          console.log(result.text);
          form.current.reset();
          toast.success("Message sent successfully!");
        },
        (error) => {
          toast.dismiss(loadingToast);
          console.log(error.text);
          toast.error("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section className="bg-[rgb(169,111,61)] text-white" id="contact">
      <Toaster />
      <div className="md:container px-5 py-14">
        <h2 className="title !text-white" data-aos="fade-down">
          {Contact.title}
        </h2>
        <h4 className="subtitle !text-white/80" data-aos="fade-down">
          {Contact.subtitle}
        </h4>
        <br />
        <div className="flex gap-10 md:flex-row flex-col">
          <form
            ref={form}
            onSubmit={sendEmail}
            data-aos="fade-up"
            className="flex-1 flex flex-col gap-5"
          >
            {/* Input Name as same as email js templates values */}
            <input
              type="text"
              name="from_name"
              placeholder="Name"
              required
              className="border border-white/20 p-3 rounded bg-white/5 placeholder:text-white/50"
            />
            <input
              type="email"
              name="user_email"
              pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
              placeholder="Email Id"
              required
              className="border border-white/20 p-3 rounded bg-white/5 placeholder:text-white/50"
            />
            <textarea
              name="message"
              placeholder="Message"
              className="border border-white/20 p-3 rounded h-44 bg-white/5 placeholder:text-white/50"
              required
            ></textarea>
            <button
              className="btn self-start
            bg-white text-[rgb(169,111,61)] hover:bg-white/90 transition-colors"
            >
              Submit
            </button>
          </form>
          <div className="flex-1 flex flex-col gap-5">
            {Contact.social_media.map((content, i) => (
              <div
                key={i}
                data-aos="fade-down"
                data-aos-delay={i * 430}
                className="flex items-center gap-2"
              >
                <h4 className="text-white">{createElement(content.icon)}</h4>
                <a className="font-Poppins" href={content.link} target="_blank">
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