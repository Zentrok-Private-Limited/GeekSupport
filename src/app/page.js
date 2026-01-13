"use client"
import Image from "next/image";
import { motion } from "framer-motion";
import About from "@/components/About";
import { 
  Phone, 
  MessageSquare, 
  Monitor, 
  Wifi, 
  Printer, 
  ShieldCheck, 
  Settings, 
  ChevronRight, 
  Star,
  CheckCircle2,
  PhoneCall,
  MessageCircleMore,
  Wrench
} from 'lucide-react';

export default function Home() {
  return (
    <main>
    <section className="relative bg-gradient-to-br from-blue-50 to-white py-10 pb-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <span className="bg-blue-100 text-[#086BAF] px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider">
              Expert Tech Support
            </span>
            <h1 className="text-5xl md:text-4xl font-bold text-blue-950 leading-tight mt-5">
              Geek Support : <span className="text-[#086BAF]">Computer Repair, Printer Help & Wi-Fi Setup Services</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
              Experience fast, reliable support for computers, printers, Wi-Fi, and home devices by expert technicians. Our geek's squad handles repair, installation, and troubleshooting with precision and care. Help is always just a click away. Book your geek appointment now!
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-[#086BAF] text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 shadow-lg shadow-blue-200 hover:scale-105 transition-transform">
                Book Appointment Now <ChevronRight size={20} />
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
        <div className="flex gap-5 justify-center pt-5">
          <button className="px-6 py-3 rounded-full font-medium text-sm flex items-center gap-2 shadow-lg shadow-gray-300 hover:scale-105 transition-transform">
            <span className="text-[#086BAF] text-sm px-1"><PhoneCall/></span>Call an Expert Now <ChevronRight size={20} />
          </button>
          <button className="px-6 py-3 rounded-full font-medium text-sm flex items-center gap-2 shadow-lg shadow-gray-300 hover:scale-105 transition-transform">
            <span className="text-[#086BAF] text-sm px-1"><MessageCircleMore/></span>Start with Chat Support <ChevronRight size={20} />
          </button>
          <button className="px-6 py-3 rounded-full font-medium text-sm flex items-center gap-2 shadow-lg shadow-gray-300 hover:scale-105 transition-transform">
            <span className="text-[#086BAF] text-sm px-1"><Wrench/></span>Effective Support Service <ChevronRight size={20} />
          </button>
        </div>
      </section>

      {/* --- WHAT SERVICE DO YOU NEED? --- */}
      <section className="py-20 w-full px-4 bg-[#F6F6F6]">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-blue-950 mb-4">Schedule Your Geek Service Now</h2>
          <p className="text-gray-600">What service do you need?</p>
          
        </div>
        
        <div className="grid grid-cols-2  md:grid-cols-5 gap-6">
          {[
            { icon: <Monitor />, label: "Computer & Tablets", color: "bg-blue-50" },
            { icon: <Wifi />, label: "WiFi & Network", color: "bg-green-50" },
            { icon: <Printer />, label: "Printer Offline", color: "bg-purple-50" },
            { icon: <ShieldCheck />, label: "Virus Protection", color: "bg-red-50" },
            { icon: <Settings />, label: "Major Appliance", color: "bg-orange-50" },
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

      {/* --- WHY CHOOSE US (STATS) --- */}
      <About/>

      {/* --- CTA SECTION --- */}
      <section className="py-24 bg-orange-500">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-4xl font-extrabold mb-6">Repair is just a click away.</h2>
          <p className="text-xl mb-10 opacity-90">No hidden fees. You'll never be charged until you approve the cost.</p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <button className="bg-white text-orange-600 px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:bg-gray-100 transition-colors">
              Start Chat Support
            </button>
            <button className="bg-blue-900 text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:bg-blue-950 transition-colors">
              Call (800) GEEK-HELP
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
