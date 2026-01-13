import React from 'react'
import { Settings } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-gray-200 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2 space-y-4">
              <div className="flex items-center gap-2">
                <Settings className="text-blue-600 w-6 h-6" />
                <span className="text-xl font-black text-blue-900 uppercase">Geek Care</span>
              </div>
              <p className="text-gray-500 max-w-sm">
                Your reliable partner for all things tech and home. From troubleshooting WiFi to fixing major appliances.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-blue-950 mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-blue-600">Terms & Conditions</a></li>
                <li><a href="#" className="hover:text-blue-600">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-blue-600">Refund Policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-blue-950 mb-4">Support</h4>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-blue-600">Contact Us</a></li>
                <li><a href="#" className="hover:text-blue-600">Book Appointment</a></li>
                <li><a href="#" className="hover:text-blue-600">Services</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-8 text-center text-gray-400 text-sm">
            <p>© 2024 Geek Care. All rights reserved.</p>
          </div>
        </div>
      </footer>
  )
}

export default Footer