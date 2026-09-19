import { Link } from 'react-router-dom';
import { FiHome, FiArrowLeft } from 'react-icons/fi';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white flex items-center justify-center">
      <div className="text-center px-6">
        <div className="mb-8">
          <div className="text-8xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            404
          </div>
          <h1 className="text-3xl font-bold text-white mb-4">Dimension Not Found</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            The digital dimension you're looking for has been disconnected from the network.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Link 
            to="/" 
            className="bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 flex items-center justify-center space-x-2"
          >
            <FiHome className="w-5 h-5" />
            <span>Return to Main Portal</span>
          </Link>
          <Link 
            to="/portal" 
            className="border border-purple-500 hover:bg-purple-500/20 px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 flex items-center justify-center space-x-2"
          >
            <FiArrowLeft className="w-5 h-5" />
            <span>Access Other Dimensions</span>
          </Link>
        </div>
        
        <div className="text-gray-400 text-sm">
          <p>Error Code: DIMENSION_DISCONNECTED</p>
          <p className="mt-2">Belentani Digital Experience System</p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;