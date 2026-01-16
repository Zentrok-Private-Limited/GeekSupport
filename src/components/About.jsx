import React from 'react'
import {ShieldCheck, ThumbsUp,ClockCheck} from 'lucide-react'

function About () {
  return (
    <div className='pt-20 px-20'>
        <div className='flex w-full gap-8'>
            <div className='w-1/2'>
                <h1 className='text-4xl font-semibold mb-5'>About GeekSupportPro</h1>
                <p className='text-base py-2'><span className='font-semibold'>GeekSupportPro is an independent computer repair and IT support service</span> dedicated to helping individuals and small businesses resolve everyday technology issues quickly and reliably. We specialize in diagnosing and fixing computer problems, optimizing system performance, setting up new devices, and providing ongoing technical assistance across a wide range of hardware and software platforms.</p>
                <p className='text-base py-2'>Our services include general troubleshooting, operating system support, device setup, performance tuning, software installation, network assistance, and preventive maintenance to keep your systems running smoothly. We focus on clear communication, practical solutions, and customer-first support—without unnecessary upsells or technical jargon.</p>
                <p className='text-base py-2'>GeekSupportPro operates as a completely independent service provider.<span className='font-semibold'> We are not affiliated with, endorsed by, or connected to Best Buy, Geek Squad, or any other consumer technology brand.</span> All trademarks and brand names referenced are the property of their respective owners and are used solely for identification purposes.</p>
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