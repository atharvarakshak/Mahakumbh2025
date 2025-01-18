export function Footer() {
  return (
    <footer className="bg-[#1E3932] text-white mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Mahakumbh 2025</h3>
            <p className="text-gray-300">
              Join us in making Mahakumbh 2025 the most environmentally conscious spiritual gathering through smart waste management initiatives.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Contact</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Terms of Service</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <p className="text-gray-300 mb-2">Email: contact@mahakumbh2025.com</p>
            <p className="text-gray-300">Phone: +91 1234567890</p>
            <div className="mt-4">
              <p className="text-sm text-gray-300">
                © 2024 Mahakumbh 2025. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}