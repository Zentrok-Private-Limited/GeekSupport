import React from "react";
import About from "@/components/About";

function AboutUs() {
  return (
    <div>
      <div className=" py-14 bg-[#F6F6F6]">
        <p className="text-center text-3xl font-bold text-black/80">About Us</p>
      </div>
      <About />

      <section className="flex lg:p-20 gap-10">
        <div className="space-y-4 border border-black/20 rounded-xl p-6">
          <h3 className="flex items-center gap-2 text-4xl font-bold text-black">
            Our Mission
          </h3>
          <p className="leading-relaxed">
            At Geek Care, our mission is to simplify technology and appliance
            care by delivering reliable, professional, and affordable support
            services. We aim to provide every customer with peace of mind,
            knowing that expert help is only a click away.
          </p>
        </div>
        <div className="space-y-4 border border-black/20 rounded-xl p-6">
          <h3 className="flex items-center gap-2 text-4xl font-bold text-black">
            Our Vision
          </h3>
          <p className="leading-relaxed">
            We envision a world where technology works seamlessly for everyone.
            By combining innovation, accountability, and customer focus, Geek
            Care strives to be the most trusted name in tech and appliance
            support for households and businesses alike.
          </p>
        </div>
      </section>

      <section className="bg-[#F6F6F6] pt-10 px-25 mb-10 flex flex-col">
        <h1 className="text-4xl">Why Choose Us?</h1>
        <ul className="list-disc pt-4">
          <li className="flex gap-2 "><span className="text-base font-bold">24/7 Availability -</span>
            <p className="text-base">Get expert support whenever you need it.</p>
          </li>
          <li className="flex gap-2 "><span className="text-base font-bold">Certified Experts -</span>
            <p className="text-base">Skilled professionals for computers, WiFi, printers, and appliances.</p>
          </li>
          <li className="flex gap-2 "><span className="text-base font-bold">Same-Day Appointments -</span>
            <p className="text-base">Book a Geek Appointment at your convenience.</p>
          </li>
          <li className="flex gap-2 "><span className="text-base font-bold">Remote & On-Site Help -</span>
            <p className="text-base">Flexible solutions designed around your needs.</p>
          </li>
          <li className="flex gap-2 "><span className="text-base font-bold">Proven Trust -</span>
            <p className="text-base">Hundreds of satisfied customers rely on Geek Help every day.</p>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default AboutUs;
