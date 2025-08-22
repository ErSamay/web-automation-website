

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-500">
            © 2024 AutoBot Pro. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-sm text-gray-500 hover:text-gray-700">Privacy</a>
            <a href="#" className="text-sm text-gray-500 hover:text-gray-700">Terms</a>
            <a href="#" className="text-sm text-gray-500 hover:text-gray-700">Support</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;