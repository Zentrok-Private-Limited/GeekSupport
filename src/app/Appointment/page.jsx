"use client"
import React, { useState } from 'react';
import { Head } from 'next/head';
import Link from 'next/link';

const BookAppointment = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Appointment Request Sent!");
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      {/* Hero Section */}
      <section className="bg-gray-200 py-12 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Book an Appointment With GeekSupportPro Services</h1>
          <nav className="text-sm text-[#086BAF]">
            <Link href="/" className="hover:text-black cursor-pointer">Home</Link> / <span>Book an Appointment</span>
          </nav>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="container mx-auto px-4 py-12 flex flex-col lg:flex-row gap-12">
        
        {/* Left Side: Form */}
        <div className="lg:w-1/2 bg-white p-8 rounded-lg shadow-sm border border-gray-100">
          <h2 className="text-2xl font-semibold mb-2">We'd love to hear from you</h2>
          <p className="text-gray-500 mb-8 italic">Tell us what issue you're facing, and when we can reach you - our experts will connect with you shortly.</p>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={handleChange}
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                required
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={handleChange}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={handleChange}
              />
              <select
                name="service"
                required
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                onChange={handleChange}
              >
                <option value="">Select Service</option>
                <option value="computer-tablet">Select Computer & Tablet</option>
                <option value="wifi-network">Wifi & Network</option>
                <option value="printer">Printer</option>
                <option value="virus-protection">PC Virus Protection</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="date"
                name="date"
                required
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={handleChange}
              />
              <input
                type="time"
                name="time"
                required
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={handleChange}
              />
            </div>

            <textarea
              name="message"
              placeholder="Message"
              rows="4"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleChange}
            ></textarea>

            <p className="text-xs text-gray-500">
              All the fields are required. By sending the form you agree to the <span className="text-blue-600 underline cursor-pointer">Terms & Conditions</span> and <span className="text-blue-600 underline cursor-pointer">Privacy Policy</span>.
            </p>

            <button
              type="submit"
              className="bg-[#086BAF] text-white font-bold py-3 px-8 rounded transition-colors duration-200"
            >
              Book Appointment
            </button>
          </form>
        </div>

        {/* Right Side: Informational Content */}
        <div className="lg:w-1/2 space-y-8">
          <div>
            <h3 className="text-2xl font-bold text-[#086BAF] mb-4">Why Choose GeekSupportPro Over Others?</h3>
            <p className="text-gray-600 leading-relaxed">
              When it comes to technology and appliance assistance, you have many choices—but none deliver the reliability and expertise of Geek Support from Geek Care. Our brand is built on trust, speed, and convenience.
            </p>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-[#086BAF]">
            <h3 className="text-xl font-bold text-[#086BAF] mb-4">How to Schedule in 3 Easy Steps</h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <span className="bg-[#086BAF] text-white w-6 h-6 rounded-full flex items-center justify-center text-sm shrink-0">1</span>
                <p><strong>Choose Your Service</strong> – Select from computer, network, or appliance help.</p>
              </li>
              <li className="flex gap-3">
                <span className="bg-[#086BAF] text-white w-6 h-6 rounded-full flex items-center justify-center text-sm shrink-0">2</span>
                <p><strong>Book Your Appointment</strong> – Pick a date and time that works best for you.</p>
              </li>
              <li className="flex gap-3">
                <span className="bg-[#086BAF] text-white w-6 h-6 rounded-full flex items-center justify-center text-sm shrink-0">3</span>
                <p><strong>Get Expert Assistance</strong> – Our technician arrives on time to solve your issue.</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Footer-like CTA Section */}
      <section className="bg-gray-100 py-12 mt-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Same-Day Geek Help – Remote or On-Site</h2>
          <p className="max-w-3xl mx-auto text-gray-600">
            Life doesn't wait, and neither should your tech support. That's why GeekSupportPro offers same-day Geek Help, available both remotely and at your doorstep.
          </p>
        </div>
      </section>
    </div>
  );
};

export default BookAppointment;