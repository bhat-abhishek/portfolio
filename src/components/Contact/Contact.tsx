import React from "react";
import TextRevealCardPreview from "./TextReveal";
import ContactForm from "./ContactForm";
import { michroma } from "../Skills/Skills";

const Contact = () => {
  return (
    <div className="max-w-[1400px] flex flex-col lg:flex-row my-10 px-4 space-y-5">
      <div className="lg:basis-1/2">
      <p className={`${michroma.className} text-2xl md:text-4xl lg:text-7xl`}>Get in touch</p>
      </div>
      <div className="lg:basis-1/2">
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
