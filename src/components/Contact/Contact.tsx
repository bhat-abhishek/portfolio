import React from "react";
import ContactIcons from "../Hero/ContactIcons";
import Reveal from "../ui/Reveal";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div className="px-4 py-24 lg:py-28">
      <Reveal>
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-16">
          {/* left: editorial copy + socials */}
          <div className="lg:basis-1/2">
            <p className="font-serif text-xl italic text-muted-foreground">
              Let&apos;s build something
            </p>
            <h2 className="mt-3 font-display text-4xl tracking-tight text-foreground md:text-6xl lg:text-7xl">
              Get in touch
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Have a project or a role in mind? My inbox is always open —
              I&apos;ll do my best to get back to you.
            </p>
            <div className="mt-10">
              <ContactIcons />
            </div>
          </div>

          {/* right: the form */}
          <div className="w-full lg:basis-1/2">
            <ContactForm />
          </div>
        </div>
      </Reveal>
    </div>
  );
};

export default Contact;
