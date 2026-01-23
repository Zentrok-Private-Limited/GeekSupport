"use client"
import React, { useState } from 'react';
import { 
  Laptop, Tablet, ShieldCheck, Settings, Search, 
  Wrench, MessageSquare, Calendar, Monitor, Cpu,ChevronDown
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { faqs3 } from "@/data/faq3";

export default function VirusRemovalPage() {

  const [active, setActive] = useState(0);

  const categories = [
    { icon: <Search size={32} />, label: "AntiVirus Software" },
    { icon: <Wrench size={32} />, label: "Malware" },
    { icon: <Settings size={32} />, label: "Firewall" },
    { icon: <ShieldCheck size={32} />, label: "Privacy Security" }
  ];

  return (
    <div className="min-h-screen font-sans bg-white text-gray-800">
      {/* --- HERO SECTION --- */}
      <section className="bg-gray-200 py-16 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Worried About Viruses? Geek’s Team Has the PC Virus Protection You Need
          </h1>
          <p className="text-lg opacity-90 mb-8">Virus Protection Service </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4  gap-4 mt-10">
            {categories.map((item, idx) => (
              <div key={idx} className="flex flex-col bg-[#086BAF]/20 items-center p-4 rounded-lg hover:bg-white/20 transition cursor-pointer">
                {item.icon}
                <span className="mt-2 text-sm font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SERVICES CONTENT --- */}
      <section className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto py-16 px-6">
        <div className='w-1/2'>
          <div>
            <h2 className="text-3xl font-bold text-[#086BAF] mb-6">Geek's PC & Virus Protection Support Services</h2>
            <p className="mb-4 leading-relaxed text-gray-600">
              Keeping your computer safe is more important than ever. At GeekSupportPro, we provide expert computer virus protection to secure your data, prevent threats, and keep your system running at its best. Our team recommends only the best virus protection for PC users, ensuring your home or office devices stay protected from malware, spyware, and ransomware.
            </p>
            <button className="bg-[#086BAF] text-white font-bold py-3 px-8 rounded-full shadow-lg transition">
              Start Chat for Quick Solutions
            </button>
          </div>
          <div className="bg-gray-100 p-8 rounded-2xl mt-10">
            <h3 className="text-xl font-bold mb-4">Why You Need Strong PC Virus Protection</h3>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start gap-3">
                <ShieldCheck className="text-blue-600 shrink-0" />
                <span>Cyber threats are constantly evolving. Without reliable pc virus protection, your files, personal information, and even your identity could be at risk. That’s why we guide our customers toward the best rated computer virus protection and top rated computer virus protection options available.</span>
              </li>
              <li className="flex items-start gap-3">
                <Cpu className="text-blue-600 shrink-0" />
                <span>Whether you’re setting up a new device or upgrading your defenses, Geek Care ensures your system has the best pc virus protection software installed and configured correctly.</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center">
  <Image
    src="/pc_virus.png"
    alt="Computer Repair"
    width={500}
    height={500}
    className="rounded-xl object-cover"
  />
  </div>
      </section>

      {/* --- FEATURES GRID --- */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Geek’s Computer Virus Protection Support Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              title="Virus Protection Software Installation" 
              desc="We set up and configure virus protection software for PC, making sure your devices are safeguarded with the latest updates and features."
            />
            <FeatureCard 
              title="Windows PC Virus Protection" 
              desc="Our experts specialize in Windows PC virus protection, ensuring your system runs smoothly without performance slowdowns."
            />
            <FeatureCard 
              title="Home PC Security" 
              desc="Protect your family’s computers with the best home PC virus protection. From parental controls to secure browsing, Geek Care helps you stay safe online."
            />
            <FeatureCard 
              title="Custom Recommendations" 
              desc="Not sure what’s right for you? Our team evaluates your needs and suggests good virus protection for PC or good computer virus protection that balances performance, affordability, and reliability. "
            />
          </div>
        </div>
      </section>

      <section>
        <div className="space-y-6 p-20">
          <h1 className="text-2xl font-bold leading-tight">
            Why Choose{" "}
            <span className="text-blue-600">
              GeekSupportPro for Virus Protection?
            </span>
          </h1>

          <ul className="text-base text-gray-800 space-y-4">
            <li>✔ Guidance on the best computer virus protection tailored to your needs</li>
            <li>✔ Installation of the best pc virus protection software with expert setup</li>
            <li>✔ Support for both home and business systems</li>
            <li>✔ Ongoing monitoring and updates to ensure continued safety</li>
            <li>✔ Friendly technicians who explain security in plain, simple terms</li>
          </ul>
        </div>
      </section>


      <section>
        <div className="space-y-6 px-20 pb-10">
          <h1 className="text-2xl font-bold leading-tight">How It Works</h1>
          <ul className="text-base text-gray-800 space-y-4 list-disc">
            <li className='ml-10'>Book Your Service – Choose remote wifi support, in-home internet setup, or advanced computer network services.</li>
            <li className='ml-10'>Meet Your Technician – A network support technician will diagnose the issue.</li>
            <li className='ml-10'>Get It Fixed – From setup internet connections to network congestion fixes, we make it simple.</li>
            <li className='ml-10'>Stay Connected – Ongoing wifi support and computer network support keep you online, stress-free.</li>
          </ul>
        </div>
      </section>

      <section className="bg-[#F6F6F6] py-10 px-10 lg:px-25 mb-10 flex flex-col items-center">
        <h1 className="text-4xl">Talk to a Geek Care Specialist Today</h1>
        <p className="text-base text-gray-600 py-3 text-center">Need fast help with your computer or tablet? Our friendly computer support and services team is ready to assist with everything from remote computer repair to on-site computer service and support.</p>
        <Link href="/appointment" className="bg-[#086BAF] text-white px-8 py-4 font-bold flex items-center gap-2 shadow-lg shadow-blue-200 hover:scale-102 transition-transform hover:bg-blue-700">
          👉 Book geek appointment or start a chat for a secure remote computer support session with our squad today.
        </Link>
      </section>

      <section className="py-20">
            <h2 className="text-center text-3xl font-semibold mb-10">
              Frequently Asked Questions
            </h2>
      
            <div className="max-w-5xl mx-auto border rounded-xl overflow-hidden">
              {faqs3.map((item, i) => {
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
    </div>
  );
}

function FeatureCard({ title, desc }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition">
      <h3 className="text-xl font-bold text-blue-900 mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{desc}</p>
    </div>
  );
}