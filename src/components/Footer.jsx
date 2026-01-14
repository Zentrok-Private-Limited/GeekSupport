export default function Footer() {
  return (
    <footer>
      {/* CTA Section */}
      <div className="bg-gradient-to-r from-[#FFEDEA] to-[#FDE1BE] py-16 text-center px-6">
        <h3 className="text-2xl font-semibold mb-4">
          Get Help Fast! Chat With Us & Save on Today’s Service
        </h3>

        <p className="w-full mx-auto text-gray-600 mb-8">
          Join Geek Care today and unlock savings on your service. As a member,
          you’ll enjoy unlimited expert help for your tech plus access to 100+
          included or discounted services—all designed to give you more value,
          every time.
        </p>

        <button className="bg-[#086BAF] text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition">
          Start Chat With Our Squad
        </button>
      </div>

      {/* Main Footer */}
      <div className="bg-black text-white">
        <div className="max-w-6xl mx-auto px-6 py-10">
          {/* Links */}
          <ul className="flex flex-wrap justify-center gap-8 text-sm font-medium mb-6">
            <li className="hover:text-gray-300 cursor-pointer">About Us</li>
            <li className="hover:text-gray-300 cursor-pointer">Geek's Squad</li>
            <li className="hover:text-gray-300 cursor-pointer">Terms & Conditions</li>
            <li className="hover:text-gray-300 cursor-pointer">Privacy Policy</li>
            <li className="hover:text-gray-300 cursor-pointer">Refund Policy</li>
            <li className="hover:text-gray-300 cursor-pointer">Contact</li>
          </ul>

          {/* Divider */}
          <div className="border-t border-gray-800 pt-6 text-center text-sm text-cyan-400">
            Copyrights © 2019-2024. All Rights Reserved by Geek Support.
          </div>
        </div>
      </div>
    </footer>
  );
}
