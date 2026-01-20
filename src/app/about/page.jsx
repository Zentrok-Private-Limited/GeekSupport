import React from "react";
import About from "@/components/About";
import Link from "next/link";

function AboutUs() {
  return (
    <div>
      <section className="bg-gray-200 py-12 text-center">
              <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold mb-4">About Us</h1>
                <nav className="text-sm text-[#086BAF]">
                  <Link href="/" className="hover:text-black cursor-pointer">Home</Link> / <span>About Us</span>
                </nav>
              </div>
      </section>
      <About />

      <section className="flex lg:p-20 gap-10">
        <div className="space-y-4 border border-black/20 rounded-xl p-6">
          <h3 className="flex items-center gap-2 text-4xl font-bold text-black">
            Our Mission
          </h3>
          <p className="leading-relaxed">
            At GeekSupportPro, our mission is to simplify technology and appliance
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
            By combining innovation, accountability, and customer focus, GeekSupportPro strives to be the most trusted name in tech and appliance
            support for households and businesses alike.
          </p>
        </div>
      </section>

      <section className="bg-[#F6F6F6] py-10 px-25 flex flex-col">
        <h1 className="text-4xl mb-6">Why Choose Us?</h1>
        <ul className="text-base text-gray-800 space-y-4">
              <li>✔ Certified and experienced technicians</li>
              <li>✔ Fast response with same‑day service available</li>
              <li>✔ Transparent pricing with no hidden charges</li>
              <li>✔ Support for Windows, macOS, printers, and peripherals</li>
              <li>✔ Clear explanations — no technical jargon</li>
            </ul>
      </section>
    </div>
  );
}

export default AboutUs;
