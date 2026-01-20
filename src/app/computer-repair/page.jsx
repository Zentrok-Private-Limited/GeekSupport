import React from 'react';
import { 
  Laptop, Tablet, ShieldCheck, Settings, Search, 
  Wrench, MessageSquare, Calendar, Monitor, Cpu 
} from 'lucide-react';
import Image from 'next/image';

export default function ComputerTabletPage() {
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
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-16 px-6 text-center bg-blue-50">
        <h2 className="text-3xl font-bold mb-6">Talk to a Geek Care Specialist Today</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="flex items-center gap-2 bg-blue-900 text-white px-6 py-3 rounded-md">
            <MessageSquare size={20}/> Start Chat
          </button>
          <button className="flex items-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-md">
            <Calendar size={20}/> Schedule Appointment
          </button>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 opacity-80 text-sm">
          <div>
            <h4 className="font-bold mb-4">Geek Care</h4>
            <p>Independent third-party IT service provider.</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>About Us</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-12 pt-8 border-t border-gray-800 text-xs">
          Copyrights © 2019-2025. All Rights Reserved by Geek Care.
        </div>
      </footer>
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