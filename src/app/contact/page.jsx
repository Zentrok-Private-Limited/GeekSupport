"use client"
import React, { useState } from 'react';
import { MapPin, Mail, PhoneCall } from 'lucide-react'; // Optional icons

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      {/* --- HERO SECTION --- */}
      <section className="bg-gray-200 py-16 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Contact for Geek Help</h1>
          <nav className="text-sm text-[#086BAF]">
            <span className="hover:text-white cursor-pointer">Home</span> / <span>Contact Us</span>
          </nav>
          <p className="max-w-3xl mx-auto mt-6 leading-relaxed">
            For fast and reliable Geek Help, connect with us today. Whether you need support, guidance, or expert assistance, our team is ready to respond.
          </p>
        </div>
      </section>

      {/* --- CONTACT INFO CARDS --- */}
      <section className="container mx-auto px-4 -mt-10 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Address */}
          <div className="bg-white p-8 rounded-lg shadow-lg text-center border-b-4 border-[#086BAF]">
            <div className="flex justify-center mb-4 text-[#086BAF]"><MapPin size={40} /></div>
            <h3 className="text-xl font-bold mb-2">Address</h3>
            <p className="text-gray-600 mb-4">205 Holiday Blvd, Covington, LA 70433</p>
            <button className="text-[#086BAF] font-bold hover:underline">See Map</button>
          </div>
          {/* Email */}
          <div className="bg-white p-8 rounded-lg shadow-lg text-center border-b-4 border-[#086BAF]">
            <div className="flex justify-center mb-4 text-[#086BAF]"><Mail size={40} /></div>
            <h3 className="text-xl font-bold mb-2">Email</h3>
            <p className="text-gray-600 mb-4">support@geeksupportpro.com</p>
            <button className="text-[#086BAF] font-bold hover:underline">Say Hello</button>
          </div>
          {/* Phone */}
          <div className="bg-white p-8 rounded-lg shadow-lg text-center border-b-4 border-[#086BAF]">
            <div className="flex justify-center mb-4 text-[#086BAF]"><PhoneCall size={40} /></div>
            <h3 className="text-xl font-bold mb-2">Live Help</h3>
            <p className="text-gray-600 mb-4">+1-855-690-4040</p>
            <button className="text-[#086BAF] font-bold hover:underline">Call us</button>
          </div>
        </div>
      </section>

      {/* --- MAIN CONTENT SECTION --- */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* LEFT: Contact Form */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-[#086BAF] mb-6">We'd love to hear from you</h2>
            <form className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="w-full p-4 bg-gray-50 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-[#086BAF]"
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full p-4 bg-gray-50 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-[#086BAF]"
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder="Message"
                rows="5"
                className="w-full p-4 bg-gray-50 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-[#086BAF]"
                onChange={handleChange}
                required
              ></textarea>
              <p className="text-xs text-gray-500">
                All the fields are required. By sending the form you agree to the <span className="underline">Terms & Conditions</span> and <span className="underline">Privacy Policy</span>.
              </p>
              <button
                type="submit"
                className="bg-[#086BAF] text-white font-bold py-4 px-10 rounded transition-all uppercase tracking-wide"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* RIGHT: Informational Content */}
          <div className="lg:w-1/2 space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-[#086BAF] mb-4">Why Reach Out to Geek Help?</h3>
              <p className="text-gray-600 leading-relaxed">
                At Geek Help, we're dedicated to making your tech experience smooth and hassle-free. Whether you're facing a technical issue, need product guidance, or want help troubleshooting a device, our experts provide quick, clear, and dependable support.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#086BAF] mb-4">What Our Geek Experts Can Help You With</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-600">
                <li>• Computer and laptop issues</li>
                <li>• Printer setup & errors</li>
                <li>• Wi-Fi connectivity</li>
                <li>• Software installation</li>
                <li>• Performance concerns</li>
                <li>• Device configuration</li>
                <li>• Account/Login issues</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 bg-blue-50 p-6 rounded-lg mt-10">
            <div>
                <h3 className="text-xl font-bold text-[#086BAF] mb-2">How Quickly We Respond</h3>
                <p className="text-gray-600">We understand that tech issues can slow you down, so fast support matters. Our team typically responds within a few hours during business hours, ensuring you get timely and reliable help when you need it most.</p>
            </div>
            <div>
                <h3 className="text-xl font-bold text-[#086BAF] mb-2">When Our Geek Help Team Is Available</h3>
                <p className="text-gray-600">We’re here for you 24×7, providing round-the-clock support whenever you need it. No matter the time of day, you can submit your query, and our team will respond as quickly as possible with reliable, expert assistance.</p>
            </div>
            <div>
                <h3 className="text-xl font-bold text-[#086BAF] mb-2">Your Privacy & Security Matter to Us</h3>
                <p className="text-gray-600">Your trust is important. All information shared through our contact form or communication channels is handled securely and kept confidential. Our trained professionals ensure your data remains safe while delivering the assistance you need.</p>
            </div>
            <div>
                <h3 className="text-xl font-bold text-[#086BAF] mb-2">We’re Here to Help — Just Send Us Your Query</h3>
                <p className="text-gray-600">Whether you’re facing a technical challenge or simply need expert guidance, Geek Help is ready to assist. Use the contact form or reach out through the provided details—your issue becomes our priority the moment you connect with us.</p>
            </div>
        </div>
      </section>
    </div>
  );
}