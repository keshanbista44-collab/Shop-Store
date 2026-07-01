const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">

        <div>
          <h2 className="text-2xl font-bold mb-3">
            ShopStore
          </h2>

          <p className="text-gray-400">
            Premium shopping experience with secure payment,
            fast delivery and quality products.
          </p>
        </div>

        <div>
          <h3 className="font-bold mb-3">
            Quick Links
          </h3>

          <ul className="space-y-2 text-gray-400">
            <li>Home</li>
            <li>Products</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-3">
            Contact
          </h3>

          <p className="text-gray-400">
            Email: support@shopstore.com
          </p>

          <p className="text-gray-400">
            Phone: +977 9800000000
          </p>
        </div>

      </div>

      <div className="border-t border-gray-700 py-4 text-center text-gray-500">
        © 2026 ShopStore. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;