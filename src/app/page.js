"use client"
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import About from "@/components/About";
import { 
  Phone, 
  MessageSquare, 
  Monitor, 
  Wifi, 
  Printer, 
  ShieldCheck,
  LaptopMinimalCheck,
  MonitorSmartphone,
  Power, 
  Settings, 
  ChevronRight, 
  Star,
  CheckCircle2,
  PhoneCall,
  MessageCircleMore,
  Wrench
} from 'lucide-react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { ChevronLeft,ChevronDown, User } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";

import { testimonials } from "@/data/testimonals";
import { faqs } from "@/data/faq";

export default function Home() {

  const [active, setActive] = useState(0);

  return (
    <main>
    <section className="relative py-10 pb-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <h1 className="text-5xl md:text-4xl font-bold text-blue-950 leading-tight mt-5">
              GeekSupportPro : <span className="text-[#086BAF]"> Computer Repair & IT Services</span>
            </h1>
            <h4 className="text-2xl font-semibold">Fast, Reliable Help for Computer & Device Issues</h4>
            <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
              Work with certified technicians today. GeekSupportPro provides professional computer repair,troubleshooting, and IT services for home users and small businesses across the United States.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-[#086BAF] text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 shadow-lg shadow-blue-200 hover:scale-105 transition-transform">
                <Phone size={20} /> Call now to get immediate assistance
              </button>
              
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative flex justify-center"
          >
            <div className="flex">
              <img 
                src="/header-imgbg.png" 
                alt="Support Specialist" 
                className=""
              />
            </div>
            <div className="absolute top-1/2 right-[40%] transform translate-x-1/2 -translate-y-1/2 flex items-center justify-center z-10">
              <Image 
                src="/home-image-2.png" 
                alt="Support Specialist" 
                width={400}
                height={400}
                className="w-full h-full object-contain "
              />
            </div>
          </motion.div>
          
        </div>
        {/* <div className="flex gap-5 justify-center pt-5">
          <button className="px-6 py-3 rounded-full font-medium text-sm flex items-center gap-2 shadow-lg shadow-gray-300 hover:scale-105 transition-transform">
            <span className="text-[#086BAF] text-sm px-1"><PhoneCall/></span>Call an Expert Now <ChevronRight size={20} />
          </button>
          <button className="px-6 py-3 rounded-full font-medium text-sm flex items-center gap-2 shadow-lg shadow-gray-300 hover:scale-105 transition-transform">
            <span className="text-[#086BAF] text-sm px-1"><MessageCircleMore/></span>Start with Chat Support <ChevronRight size={20} />
          </button>
          <button className="px-6 py-3 rounded-full font-medium text-sm flex items-center gap-2 shadow-lg shadow-gray-300 hover:scale-105 transition-transform">
            <span className="text-[#086BAF] text-sm px-1"><Wrench/></span>Effective Support Service <ChevronRight size={20} />
          </button>
        </div> */}
      </section>

      {/* --- WHAT SERVICE DO YOU NEED? --- */}
      <section className="py-20 w-full px-4 bg-[#F6F6F6]">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-blue-950 mb-4">Schedule Your Geek Service Now</h2>
          <p className="text-gray-600">What service do you need?</p>
          
        </div>
        
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 lg:mx-8">
          {[
            { icon: <Monitor />, label: "Computer & Laptop Repair", color: "bg-blue-50" },
            { icon: <ShieldCheck />, label: "Virus & Malware Removal", color: "bg-pink-50" },
            { icon: <Power />, label: "Troubleshooting & Optimization", color: "bg-green-50" },
            { icon: <MonitorSmartphone />, label: "New Device Setup", color: "bg-purple-50" },
            { icon: <LaptopMinimalCheck />, label: "Remote IT Services", color: "bg-orange-50" },
          ].map((item, i) => (
            <motion.div 
              whileHover={{ y: -5 }}
              key={i} 
              className={`${item.color} p-8 rounded-2xl text-center border border-black/10 hover:border-blue-200 transition-all cursor-pointer`}
            >
              <div className="mb-4 inline-block p-4 bg-white rounded-xl shadow-sm text-blue-600">
                {item.icon}
              </div>
              <h3 className="font-bold text-blue-900 leading-tight">{item.label}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      <About/>

      <section className="py-10 px-25 mb-10">
        <h1 className="text-4xl">Dedicated to Every Customer, Every Time</h1>
        <p className="text-base text-gray-600 py-1">Every time you reach out, you get our full attention. We listen, understand, and get things done quickly — 9 out of 10 issues resolved in just 45 minutes.</p>
      </section>



      <section className="relative w-full min-h-screen overflow-hidden">
      {/* Background Image */}
      <Image
        src="/bg2.jpg"
        alt="Support agent"
        fill
        priority
        className="object-cover object-right"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-white/20" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-20 grid lg:grid-cols-2 gap-14">
        
        {/* LEFT CONTENT */}
        <div className="space-y-6">
          <h1 className="text-4xl font-bold leading-tight">
            Why Choose{" "}
            <span className="text-blue-600">
              GeekSupportPro?
            </span>
          </h1>

          <ul className="text-xl text-gray-800 space-y-4">
              <li>✔ Certified and experienced technicians</li>
              <li>✔ Fast response with same‑day service available</li>
              <li>✔ Transparent pricing with no hidden charges</li>
              <li>✔ Support for Windows, macOS, printers, and peripherals</li>
              <li>✔ Clear explanations — no technical jargon</li>
            </ul>
          {/* <p className="text-gray-600 leading-relaxed max-w-xl">
            At Geek Care, tech support has never been this easy. Sit back,
            relax, and chat with our Support Squad from the comfort of your
            home. No waiting lines. No hidden fees. Just real solutions from
            real experts.
          </p>

          <p className="text-gray-600 leading-relaxed max-w-xl">
            Here’s the best part: you’ll never be charged until you approve
            the cost of repair. That’s our commitment to trust, transparency,
            and total peace of mind.
          </p> */}

          <h3 className="text-lg font-semibold">
            Repair is just a click away.
          </h3>
        </div>

        {/* RIGHT CARDS */}
        <div className="grid sm:grid-cols-2 gap-6">
          
          {/* CARD 1 */}
          {/* <div className="bg-white rounded-xl shadow-lg p-6 space-y-4">
            <h4 className="font-semibold text-lg">
              Virus and Spyware Removal
            </h4>
            <p className="text-sm text-gray-600">
              ✔ Comprehensive cleanup to restore speed, security, and performance.
            </p>
            <p className="text-xl font-bold">$139.99 <span className="text-sm font-normal">each</span></p>
          </div> */}

          {/* CARD 2 */}
          {/* <div className="bg-white rounded-xl shadow-lg p-6 space-y-4">
            <h4 className="font-semibold text-lg">
              Smooth Tech. Stress-Free Life.
            </h4>
            <p className="text-sm text-gray-600">
              ✔ On-Demand Computer Tune-ups
            </p>
            <p className="text-xl font-bold">$29.99 <span className="text-sm font-normal">each</span></p>
          </div> */}

          {/* CARD 3 */}
          {/* <div className="bg-white rounded-xl shadow-lg p-6 space-y-4">
            <h4 className="font-semibold text-lg">
              Troubleshooting Made Simple — Leave it to Us
            </h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>✔ Computer</li>
              <li>✔ Connected Home</li>
              <li>✔ Home Theater</li>
              <li>✔ Printer</li>
              <li>✔ Network</li>
              <li>✔ Appliance</li>
            </ul>
            <p className="text-xl font-bold">$29.99 <span className="text-sm font-normal">each</span></p>
          </div> */}

          {/* CARD 4 */}
          {/* <div className="bg-white rounded-xl shadow-lg p-6 space-y-4">
            <h4 className="font-semibold text-lg">
              Beyond Repairs — Full Online Support
            </h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>✔ Secure Data Backup & Transfer</li>
              <li>✔ New Computer Setup</li>
              <li>✔ Software Installation Made Easy</li>
              <li>✔ Printer Installation & Configuration</li>
              <li>✔ Quick Password Resets</li>
            </ul>
          </div> */}

        </div>
      </div>
    </section>


    <div className="p-20">
      <div className='flex w-full gap-8'>
        <div className='w-1/2'>
          <img src="/blog-img4.jpg" 
          className="object-cover rounded-lg" alt="support-team" />
        </div>
        <div className='w-1/2 text-gray-600'>
          <h1 className='text-4xl font-semibold mb-5 text-black'>Simple Steps To Connect With Us</h1>
          <p className='text-base py-2'>Contacting GeekSupportPro is fast, simple, and designed around your convenience. We know how important your devices and appliances are, which is why we’ve made our process hassle-free and transparent.</p>
          <ul className="list-disc">
            <li><span className="font-bold text-black">Step 1 – Contact Us</span>
              <p className="p-2">Describe the issue you’re facing and our support team technicians will connect with you within 24 hours.</p>
            </li>
            <li><span className="font-bold text-black">Step 2 – Connect with a technician</span>
              <p className="p-2">Our certified technicians will arrive at your home or office and diagnose the issue.</p>
            </li>
            <li><span className="font-bold text-black">Step 3 –  Diagnosis and repair</span>
              <p className="p-2">We’ll diagnose the issue and get your device or home back up and running in no time.</p>
            </li>
            <li><span className="font-bold text-black">Step 4 –  Your system restored and ready to use</span>
              <p className="p-2"> Your device will be ready to use and fully dignosed.</p>
            </li>
          </ul>
          <p className='text-base py-2'>Consulting us means more than solving problems—it’s about gaining peace of mind, knowing your tech and home are in the best hands.</p>
        </div>
      </div>
    </div>



    <section className="bg-[#F6F6F6] py-10 px-25 mb-10 flex flex-col items-center">
      <h1 className="text-4xl">Need immediate help?</h1>
      <p className="text-base text-gray-600 py-3 text-center">Don’t wait for problems to slow you down. Whether it’s a printer offline issue, WiFi connection problem, computer setup, or major appliance service, GeekSupportPro has you covered.</p>
      <button className="bg-[#086BAF] text-white px-8 py-4 font-bold flex items-center gap-2 shadow-lg shadow-blue-200 hover:scale-102 transition-transform hover:bg-blue-700">
        <Phone size={20} /> Call now to get immediate assistance
      </button>
    </section>



    <section className="py-20">
      <h2 className="text-center text-3xl font-semibold mb-14">
        Testimonials
      </h2>

      <div className="relative max-w-4xl mx-auto">
        <Swiper
          modules={[Navigation, Autoplay]}
  slidesPerView={1}
  loop={true}
  autoplay={{
    delay: 3000,               
    disableOnInteraction: false,
    pauseOnMouseEnter: true,   
  }}
  navigation={{
    prevEl: ".prev-btn",
    nextEl: ".next-btn",
  }}
        >
          {testimonials.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="flex border rounded-xl overflow-hidden bg-white">
                
                {/* Left vertical name */}
                <div className="w-14 bg-gray-50 flex items-center justify-center">
                  <span className="-rotate-90 text-sm font-semibold text-[#086BAF]">
                    — {item.name}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 px-10 py-8 text-center">
                  {/* Avatar */}
                  <div className="mx-auto mb-6 h-16 w-16 rounded-full bg-[#086BAF] flex items-center justify-center">
                    <User className="text-white" size={32} />
                  </div>

                  {/* Text */}
                  <p className="text-gray-600 leading-relaxed mb-6">
                    “{item.text}”
                  </p>

                  {/* Stars */}
                  <div className="flex justify-center gap-1">
                    {Array.from({ length: item.rating }).map((_, idx) => (
                      <Star
                        key={idx}
                        size={18}
                        className="fill-[#086BAF] text-[#086BAF]"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation buttons */}
        <div className="flex justify-center gap-6 mt-10">
          <button className="prev-btn h-12 w-12 rounded-lg border flex items-center justify-center hover:bg-gray-50">
            <ChevronLeft />
          </button>
          <button className="next-btn h-12 w-12 rounded-lg border flex items-center justify-center hover:bg-gray-50">
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>

    <section className="py-20">
      <h2 className="text-center text-3xl font-semibold mb-10">
        Frequently Asked Questions
      </h2>

      <div className="max-w-5xl mx-auto border rounded-xl overflow-hidden">
        {faqs.map((item, i) => {
          const isOpen = active === i;

          return (
            <div
              key={i}
            >
              {/* Question */}
              <button
                onClick={() => setActive(isOpen ? null : i)}
                className={`w-full flex items-center justify-between px-6 py-5 text-left font-medium ${
                  isOpen ? "border-3 border-[#086BAF]/40 rounded-md" : ""
                }`}
              >
                <span>
                  Q{i + 1}. {item.q}
                </span>

                <ChevronDown
                  className={`transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Answer */}
              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden px-6 py-1 text-gray-600">
                  {item.a}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
    </main>
  );
}
