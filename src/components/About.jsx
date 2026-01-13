import React from 'react'

function About () {
  return (
    <div className='py-20'>
        <div className='flex w-full'>
            <div className='w-1/2'>
                <h1>About Geek Support</h1>
                <p>At Geek Care, we are more than just a support service—we are your reliable partner for all things tech and home. From computers & tablets, and WiFi & network troubleshooting to fixing printer offline issues, providing PC virus protection, and assisting with major appliance services, we deliver complete solutions that customers trust.</p>
                <p>Our mission is simple: to provide fast, professional, and dependable geek support that keeps your devices and appliances running smoothly. Whether you need urgent geek help for a technical issue or want to schedule a geek's squad appointment, our expert squad is ready to assist you anytime, anywhere.</p>
                <p>With Geek Care, you can easily book a geek appointment online and get connected to our trained specialists. We combine professionalism, accountability, and innovation to deliver results that matter. Every geek squad expert in our team is dedicated to solving problems efficiently and ensuring your satisfaction.</p>
                <p>Choosing Geek Care means choosing a partner committed to excellence, integrity, and reliable service. We don’t just fix issues—we provide peace of mind with every solution.</p>
            </div>

            <div className='w-1/2'>
                <img src="/about-img.jpg" 
                className="w-full h-full object-cover" alt="" />
            </div>
        </div>

        <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-12">
          {[
            { step: "01", title: "Trusted Service", desc: "Our staff of qualified professionals is committed to providing dependable, effective, and open remote tech support services." },
            { step: "02", title: "100% Satisfaction", desc: "Our services are customized to fit your specific needs with a customer-first approach, guaranteeing that every problem is handled efficiently and quickly." },
            { step: "03", title: "One Time Service", desc: "Our goal is to minimize downtime and maximize productivity by resolving your technical difficulties in a single service session." },
          ].map((stat, i) => (
            <div key={i} className="space-y-4 border p-6">
              <span className="text-5xl font-black text-blue-500 opacity-50">{stat.step}</span>
              <h3 className="text-2xl font-bold">{stat.title}</h3>
              <p className="leading-relaxed">{stat.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default About 