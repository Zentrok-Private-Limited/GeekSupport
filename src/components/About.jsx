import React from 'react'
import {ShieldCheck, ThumbsUp,ClockCheck} from 'lucide-react'

function About () {
  return (
    <div className='pt-20 px-20'>
        <div className='flex w-full gap-8'>
            <div className='w-1/2'>
                <h1 className='text-4xl font-semibold mb-5'>About Geek Support</h1>
                <p className='text-base py-2'>At Geek Care, we are more than just a support service—we are your reliable partner for all things tech and home. From computers & tablets, and WiFi & network troubleshooting to fixing printer offline issues,and assisting with major appliance services, we deliver complete solutions that customers trust.</p>
                <p className='text-base py-2'>Our mission is simple: to provide fast, professional, and dependable geek support that keeps your devices and appliances running smoothly. Whether you need urgent geek help for a technical issue or want to schedule a geek's squad appointment, our expert squad is ready to assist you anytime, anywhere.</p>
                <p className='text-base py-2'>With Geek Care, you can easily book a geek appointment online and get connected to our trained specialists. We combine professionalism, accountability, and innovation to deliver results that matter. Every geek squad expert in our team is dedicated to solving problems efficiently and ensuring your satisfaction.</p>
                <p className='text-base py-2'>Choosing Geek Care means choosing a partner committed to excellence, integrity, and reliable service. We don’t just fix issues—we provide peace of mind with every solution.</p>
            </div>

            <div className='w-1/2'>
                <img src="/about-img.jpg" 
                className="object-cover rounded-lg" alt="support-team" />
            </div>
        </div>

        <section className="py-20 ">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-12">
            <div className="space-y-4 border border-black/20 rounded-xl p-6">
              <p className="text-5xl font-black">01</p>
              <h3 className="flex items-center gap-2 text-2xl font-bold text-[#086BAF]"><span className='text-xl text-black'><ShieldCheck /></span>Trusted Service</h3>
              <p className="leading-relaxed">Our staff of qualified professionals is committed to providing dependable, effective, and open remote tech support services.</p>
            </div>

            <div className="space-y-4 border border-black/20 rounded-xl p-6">
              <span className="text-5xl font-black ">02</span>
              <h3 className="flex items-center gap-2 text-2xl font-bold text-[#086BAF]"><span className='text-xl text-black'><ThumbsUp /></span>100% Satisfaction</h3>
              <p className="leading-relaxed">Our services are customized to fit your specific needs with a customer-first approach, guaranteeing that every problem is handled efficiently and quickly.</p>
            </div>

            <div className="space-y-4 border border-black/20 rounded-xl p-6">
              <span className="text-5xl font-black ">03</span>
              <h3 className="flex items-center gap-2 text-2xl font-bold text-[#086BAF]"><span className='text-xl text-black'><ClockCheck /></span>One Time Service</h3>
              <p className="leading-relaxed">Our goal is to minimize downtime and maximize productivity by resolving your technical difficulties in a single service session.</p>
            </div>
        </div>
      </section>

      
    </div>
  )
}

export default About 