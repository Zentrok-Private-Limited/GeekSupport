"use client"
import React, { useState } from 'react';
import { 
  Laptop, Tablet, ShieldCheck, Settings, Search, 
  Wrench, MessageSquare, Calendar, Monitor, Cpu,ChevronDown
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { faqs2 } from "@/data/faq2";

export default function ComputerTabletPage() {

  const [active, setActive] = useState(0);

  const categories = [
    { icon: <Search size={32} />, label: "Troubleshooting" },
    { icon: <Wrench size={32} />, label: "Hardware Repair" },
    { icon: <Settings size={32} />, label: "Software Install" },
    { icon: <ShieldCheck size={32} />, label: "Virus Removal" },
    { icon: <Monitor size={32} />, label: "Computer Set-up" },
  ];

  return (
    <div className="min-h-screen font-sans bg-white text-gray-800">
      {/* --- HERO SECTION --- */}
      <section className="bg-gray-200 py-16 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Glitchy, Slow, or Crashed? Geek's Computer Repair Gets You Back Fast
          </h1>
          <p className="text-lg opacity-90 mb-8">Home Service Computer & Laptop Repair</p>
          
          <div className="grid grid-cols-2 md:grid-cols-5  gap-4 mt-10">
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
            <h2 className="text-3xl font-bold text-[#086BAF] mb-6">Geek's Computer & Tablet Support Services</h2>
            <p className="mb-4 leading-relaxed text-gray-600">
              Our comprehensive computer repair services and computer support cover everything you need to keep your devices running smoothly. 
              Whether it's a laptop, desktop, or tablet, our skilled computer repair technicians are here to provide quick, reliable, and affordable solutions.
            </p>
            <button className="bg-[#086BAF] text-white font-bold py-3 px-8 rounded-full shadow-lg transition">
              Start Chat for Quick Solutions
            </button>
          </div>
          <div className="bg-gray-100 p-8 rounded-2xl mt-10">
            <h3 className="text-xl font-bold mb-4">What Our Geek's Team Delivers</h3>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start gap-3">
                <ShieldCheck className="text-blue-600 shrink-0" />
                <span>Expert software installation and OS optimization.</span>
              </li>
              <li className="flex items-start gap-3">
                <Cpu className="text-blue-600 shrink-0" />
                <span>Malware and virus removal to restore device security.</span>
              </li>
              <li className="flex items-start gap-3">
                <Settings className="text-blue-600 shrink-0" />
                <span>Complete computer set-up for new devices and network connections.</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center">
  <Image
    src="/computer.jpg"
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
          <h2 className="text-3xl font-bold text-center mb-12">Geek Care Solutions for Every Issue</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              title="Hardware Repair" 
              desc="Broken screens, faulty keyboards, or sluggish performance? We provide expert component upgrades."
            />
            <FeatureCard 
              title="Remote Support" 
              desc="Get expert help without leaving home. Our online support connects you with technicians instantly."
            />
            <FeatureCard 
              title="Virus & Malware" 
              desc="We run full diagnostic scans, eliminate threats, and restore your system security."
            />
            <FeatureCard 
              title="Software Installation & Setup" 
              desc="From operating system installs to productivity apps, our computer service and support ensures everything runs efficiently from day one. "
            />
            <FeatureCard 
              title="Troubleshooting & Diagnostics" 
              desc="Experiencing slowdowns, freezing, or connectivity problems? Our pc support technicians identify issues quickly and get you back on track."
            />
          </div>
        </div>
      </section>

      <section>
        <div className="space-y-6 p-20">
          <h1 className="text-2xl font-bold leading-tight">
            Why Choose{" "}
            <span className="text-blue-600">
              GeekSupportPro for Computer & Tablet Support?
            </span>
          </h1>

          <ul className="text-base text-gray-800 space-y-4">
            <li>✔ Certified computer support and services team.</li>
            <li>✔ Reliable IT desktop support technicians available remotely and on site.</li>
            <li>✔ Convenient options: computer repair at home, remote pc repair, or at the closest computer repair shop.</li>
            <li>✔ Affordable pricing with transparent estimates.</li>
            <li>✔ Fast response times and American-based computer IT support.</li>
          </ul>
        </div>
      </section>


      <section>
        <div className="space-y-6 px-20 pb-10">
          <h1 className="text-2xl font-bold leading-tight">Common Computer Issues and Quick Fix Solutions</h1>
          <p className='font-semibold'>Check if any of these common issues match what you’re facing. You can try the simple tips first, and if it persists, our Geeks are ready to help.</p>

          <ul className="text-base text-gray-800 space-y-4 list-disc">
            <li className='ml-10'><span className='font-semibold'>Overheating:</span> Clean out dust and ensure proper airflow. If your PC still overheats, let a Geek cool it down and check your fans.</li>
            <li className='ml-10'><span className='font-semibold'>Blue Screen of Death: </span>Often caused by software or hardware conflicts. A Geek can quickly diagnose and restore system stability.</li>
            <li className='ml-10'><span className='font-semibold'>Internet Connectivity Issues: </span>Restart your router or check cables. Still dropping? A Geek will ensure smooth, uninterrupted browsing.</li>
            <li className='ml-10'><span className='font-semibold'>Malware Infections: </span> Run a security scan first. If threats remain, a Geek will remove them safely and secure your system.</li>
            <li className='ml-10'><span className='font-semibold'>Slow Computer Performance: </span>Clear cache and temp files. Still sluggish? A Geek can optimize speed and boost performance.</li>
            <li className='ml-10'><span className='font-semibold'>Hardware Failure: </span>From RAM to hard drives, parts can fail anytime. A Geek replaces and restores your system smoothly.</li>
            <li className='ml-10'><span className='font-semibold'>Software Crashes: </span> Updating often helps. If crashes persist, a Geek can stabilize your system and prevent future errors.</li>
            <li className='ml-10'><span className='font-semibold'>Difficulty Turning On:  </span>Check your cables and power button. Still dead? A Geek will bring your PC back to life.</li>
            <li className='ml-10'><span className='font-semibold'>Strange Noises: </span>Clicking or grinding sounds? A Geek will inspect fans or drives before a major failure occurs.</li>
            <li className='ml-10'><span className='font-semibold'>Boot Errors: </span>Try booting in Safe Mode. If errors loop, a Geek will restore proper startup and data access.</li>
            <li className='ml-10'><span className='font-semibold'>Data Loss Issues: </span>Stop using the drive immediately. A Geek can recover your valuable files safely and securely.</li>
            <li className='ml-10'><span className='font-semibold'>Frozen Screen: </span> A quick restart may help. If it freezes often, a Geek will uncover and fix the root cause.</li>
            <li className='ml-10'><span className='font-semibold'>Battery Drain Issues:  </span>Adjust power settings or replace the battery. A Geek can extend your laptop’s battery life.</li>
            <li className='ml-10'><span className='font-semibold'>Constant Freezes: </span> Could be bad RAM or drivers. A Geek fixes it fast and stress-free.</li>
            <li className='ml-10'><span className='font-semibold'>Dropped Internet Connections: </span>Restart your modem. Still unstable? A Geek ensures a reliable connection.</li>
            <li className='ml-10'><span className='font-semibold'>Graphics Card Failure:  </span>Seeing glitches or no display? A Geek will repair or replace your GPU professionally.</li>
            <li className='ml-10'><span className='font-semibold'>Hard Drive Failure: </span>Hearing clicking sounds? A Geek backs up your data and replaces the drive before a crash.</li>
            <li className='ml-10'><span className='font-semibold'>Keyboard & Mouse Failure: </span>Try another USB port. Still not working? A Geek provides a quick, effective fix.</li>
            <li className='ml-10'><span className='font-semibold'>Malware Attack:  </span>Don’t risk your data — let a Geek remove malicious software and secure your device.</li>
            <li className='ml-10'><span className='font-semibold'>Motherboard Issues:  </span>Complex but fixable. A Geek handles precision repairs with care and expertise.</li>
            <li className='ml-10'><span className='font-semibold'>Peripheral Device Issues: </span> Printers, webcams, or USBs not working? A Geek gets every device connected again.</li>
            <li className='ml-10'><span className='font-semibold'>Powering Issues: </span> Faulty batteries or power supplies can fail. A Geek tests and restores full functionality.</li>
            <li className='ml-10'><span className='font-semibold'>Slow Internet:  </span>Restart your modem or contact your provider. A Geek optimizes your network for faster speeds.</li>
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
              {faqs2.map((item, i) => {
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