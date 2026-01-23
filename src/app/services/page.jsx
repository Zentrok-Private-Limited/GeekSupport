import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const ServiceCard = ({ title,hyperlink, description, imagePlaceholder, reverse = false }) => {
  return (
    <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center py-16 px-6 md:px-20 gap-10 border-b border-gray-100`}>

      {/* Text Content */}
      <div className="flex-1">
        <h2 className="text-4xl font-medium text-black mb-4">{title}</h2>
        <p className="text-gray-600 leading-relaxed mb-6">
          {description}
        </p>
        <Link href={`${hyperlink}`} className="bg-[#086BAF] text-white font-semibold py-3 px-8 rounded-lg transition duration-300">
          Know More
        </Link>
      </div>

      {/* Image Placeholder */}
      <div className="flex-1 w-full h-80 relative overflow-hidden rounded-lg bg-gray-200">
        {/* Fixed: Use Next.js Image correctly. It does not wrap other tags. */}
        <Image
          src={imagePlaceholder}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    </div>
  );
};

export default function ServicesPage() {
  const services = [
  {
    title: "Computer & Laptop Repair",
    description:
      "We diagnose and repair a wide range of computer and laptop issues, including hardware faults, software errors, system crashes, slow performance, and startup problems. Our goal is to restore your device to optimal working condition quickly and reliably.",
    imagePlaceholder: "/computer.jpg",
    hyperlink:"/computer-repair",
    reverse: false
  },
  {
    title: "Virus & Malware Removal",
    imagePlaceholder: "/pc_virus.png",
    description:
      "Protect your system from harmful viruses, malware, spyware, and ransomware. We perform deep security scans, remove malicious threats, and help secure your device to prevent future infections and data compromise.",
    hyperlink:"/virus-removal",
      reverse: true
  },
  {
    title: "Troubleshooting & Optimization",
    imagePlaceholder: "/troubleshoot.jpg",
    description:
      "Experiencing errors, freezes, or slow performance? We identify and resolve software conflicts, driver issues, and system misconfigurations while optimizing your device for faster speed, better stability, and improved performance.",
    
    reverse: false
  },
  {
    title: "New Device Setup",
    imagePlaceholder: "/setup.jpg",
    description:
      "Get your new computer, laptop, or tablet set up the right way. We handle operating system configuration, software installation, account setup, data transfer, and personalization so your device is ready to use from day one.",
    reverse: true
  },
  {
    title: "Remote IT Services",
    imagePlaceholder: "/pc.jpg",
    description:
      "Receive professional IT support without leaving your home or office. Our remote services allow us to troubleshoot issues, remove viruses, install software, optimize performance, and provide technical assistance securely and efficiently.",
    reverse: false
  }
];


  return (
    <div className="font-sans text-gray-900">
      <section className="bg-gray-200 py-12 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">GeekSupportPro Services</h1>
          <nav className="text-sm text-[#086BAF]">
            <Link href="/" className="hover:text-black cursor-pointer">Home</Link> / <span>Services</span>
          </nav>
        </div>
      </section>

      {/* Services List */}
      <section>
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </section>

      
    </div>
  );
}