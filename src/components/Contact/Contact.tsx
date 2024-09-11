import React from "react";
import TextRevealCardPreview from "./TextReveal";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div className="max-w-[1400px] flex flex-col lg:flex-row my-10">
      <div className="lg:basis-1/2">
      <p className="">You know the business</p>
      <p className="first-letter:text-7xl">I know the Technology</p>
      </div>
      <div className="lg:basis-1/2">
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
