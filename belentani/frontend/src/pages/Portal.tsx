import { useState, useEffect } from 'react';
import { FiLock, FiUnlock, FiEye, FiUser, FiSettings, FiDatabase, FiMusic, FiUsers, FiStar, FiGlobe } from 'react-icons/fi';

interface PortalDimension {
  id: string;
  name: string;
  description: string;
  icon: any;
  color: string;
  access: 'public' | 'premium' | 'locked';
  features: string[];
}

interface UserProfile {
  name: string;
  level: number;
  experience: number;
  unlockedDimensions: string[];
  recentActivity: string[];
}

const Portal = () => {
  const [selectedDimension, setSelectedDimension] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [userProfile, setUserProfile] = useState<UserProfile>({
    name: 'Digital Explorer',
    level: 7,
    experience: 2450,
    unlockedDimensions: ['judas', 'music', 'studio'],
    recentActivity: ['Judas Trial - Chapter 1', 'Music: Cyberpunk Jerusalem', 'Studio: Project Alpha']
  });
  
  const dimensions: PortalDimension[] = [
    {
      id: 'judas',
      name: 'The Judas Trial',
      description: 'Experience the trial of Judas through interactive storytelling',
      icon: FiUsers,
      color: 'from-red-500 to-orange-500',
      access: 'unlocked',
      features: ['Interactive Narrative', 'Character Exploration', 'Multiple Endings']
    },
    {
      id: 'music',
      name: 'Soundscapes',
      description: 'Immerse in electronic music and ambient experiences',
      icon: FiMusic,
      color: 'from-purple-500 to-pink-500',
      access: 'unlocked',
      features: ['3D Audio', 'Interactive Playlists', 'Visualizers']
    },
    {
      id: 'ai-lab',
      name: 'AI Laboratory',
      description: 'Interact with advanced AI systems and generative tools',
      icon: Star,
      color: 'from-blue-500 to-purple-500',
      access: 'premium',
      features: ['AI Chat', 'Content Generation', 'Data Analysis']
    },
    {
      id: 'galaxy',
      name: 'Digital Galaxy',
      description: 'Explore interconnected digital realities and dimensions',
      icon: FiGlobe,
      color: 'from-green-500 to-blue-500',
      access: 'locked',
      features: ['Multi-dimensional Travel', 'Reality Shifting', 'Quantum Computing']
    },
    {
      id: 'studio',
      name: 'Creative Studio',
      description: 'Tools and platforms for digital content creation',
      icon: FiSettings,
      color: 'from-yellow-500 to-orange-500',
      access: 'unlocked',
      features: ['Digital Art', 'Music Production', '3D Modeling']
    },
    {
      id: 'database',
      name: 'Data Stream',
      description: 'Access and manipulate digital information streams',
      icon: FiDatabase,
      color: 'from-indigo-500 to-purple-500',
      access: 'premium',
      features: ['Data Visualization', 'Hacking Tools', 'Security Systems']
    }
  ];
  
  const enterDimension = (dimensionId: string) => {
    setIsLoading(true);
    setSelectedDimension(dimensionId);
    
    // Simulate loading
    setTimeout(() => {
      setIsLoading(false);
      // Here you would navigate to the actual dimension
      console.log(`Entering dimension: ${dimensionId}`);
    }, 2000);
  };
  
  const getAccessBadge = (access: string) => {
    switch (access) {
      case 'unlocked':
        return (
          <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm flex items-center space-x-1">
            <FiUnlock className="w-4 h-4" />
            <span>Unlocked</span>
          </span>
        );
      case 'premium':
        return (
          <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-sm flex items-center space-x-1">
            <FiLock className="w-4 h-4" />
            <span>Premium</span>
          </span>
        );
      default:
        return (
          <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-sm flex items-center space-x-1">
            <FiLock className="w-4 h-4" />
            <span>Locked</span>
          </span>
        );
    }
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white">
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-purple-500/20 rounded-full mb-4 border border-purple-500/50">
            <span className="text-purple-300 text-sm">DIGITAL PORTAL SYSTEM</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Access Portal
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Enter multiple dimensions and realities through our interconnected gateway system
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - User Profile */}
          <div className="lg:col-span-1 space-y-6">
            {/* User Profile Card */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <FiUser className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">{userProfile.name}</h2>
                  <div className="flex items-center space-x-2">
                    <span className="text-purple-400">Level {userProfile.level}</span>
                    <span className="text-gray-400">•</span>
                    <span className="text-gray-400">{userProfile.exp} XP</span>
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-400">Progress to Level {userProfile.level + 1}</span>
                  <span className="text-sm text-purple-400">{(userProfile.exp % 1000)}/1000</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3">
                  <div 
                    className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full" 
                    style={{ width: `${(userProfile.exp % 1000) / 10}%` }}
                  ></div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-white">Unlocked Dimensions</h3>
                <div className="grid grid-cols-2 gap-2">
                  {dimensions.filter(d => d.access === 'unlocked').map((dimension) => (
                    <div key={dimension.id} className="bg-gray-900/50 rounded-lg p-3 border border-gray-600">
                      <div className="flex items-center space-x-2">
                        <div className={`w-8 h-8 bg-gradient-to-r ${dimension.color} rounded-lg flex items-center justify-center`}>
                          <dimension.icon className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-sm text-white">{dimension.name}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Recent Activity */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-4">Recent Activity</h3>
              <div className="space-y-3">
                {userProfile.recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                    <span className="text-sm text-gray-300">{activity}</span>
                    <span className="text-xs text-gray-500 ml-auto">2h ago</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* System Status */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-4">System Status</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">Portal Network</span>
                  <span className="text-sm text-green-400">Online</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">Data Stream</span>
                  <span className="text-sm text-green-400">Active</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">AI Systems</span>
                  <span className="text-sm text-yellow-400">Optimizing</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">Security</span>
                  <span className="text-sm text-green-400">Protected</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Dimensions */}
          <div className="lg:col-span-2 space-y-6">
            {/* Dimensions Grid */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">Access Dimensions</h2>
                <div className="text-sm text-gray-400">
                  {dimensions.filter(d => d.access === 'unlocked').length} of {dimensions.length} dimensions unlocked
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {dimensions.map((dimension) => (
                  <div 
                    key={dimension.id}
                    className={`bg-gray-900/50 rounded-xl p-6 border-2 transition-all duration-300 hover:border-purple-500/50 cursor-pointer ${selectedDimension === dimension.id ? 'border-purple-500 bg-purple-500/10' : 'border-gray-700'}`}
                    onClick={() => enterDimension(dimension.id)}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${dimension.color} rounded-lg flex items-center justify-center`}>
                        <dimension.icon className="w-6 h-6 text-white" />
                      </div>
                      {getAccessBadge(dimension.access)}
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-2">{dimension.name}</h3>
                    <p className="text-gray-400 mb-4">{dimension.description}</p>
                    
                    <div className="space-y-2">
                      {dimension.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <FiEye className="w-4 h-4 text-purple-400" />
                          <span className="text-sm text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-4 pt-4 border-t border-gray-700">
                      <button 
                        className={`w-full py-3 rounded-lg font-semibold transition-all ${dimension.access === 'unlocked' ? 'bg-purple-600 hover:bg-purple-700' : dimension.access === 'premium' ? 'bg-yellow-600 hover:bg-yellow-700' : 'bg-gray-700 cursor-not-allowed'}`}
                        disabled={dimension.access === 'locked'}
                      >
                        {dimension.access === 'unlocked' ? 'Enter Dimension' : 
                         dimension.access === 'premium' ? 'Upgrade Required' : 'Locked'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Loading Screen */}
            {isLoading && (
              <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-4">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Entering Dimension</h3>
                  <p className="text-gray-400">Initializing connection to {selectedDimension}...</p>
                </div>
              </div>
            )}
            
            {/* Dimension Preview */}
            {selectedDimension && !isLoading && (
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
                <h3 className="text-2xl font-bold text-white mb-4">Dimension: {selectedDimension}</h3>
                <div className="text-center py-8">
                  <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FiEye className="w-12 h-12 text-white" />
                  </div>
                  <p className="text-gray-300 mb-6">Welcome to the {selectedDimension} dimension. You are now entering a reality where boundaries between digital and physical blur.</p>
                  <button 
                    className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg font-semibold transition-colors"
                    onClick={() => {
                      // Navigate to the actual dimension
                      console.log(`Navigating to: ${selectedDimension}`);
                    }}
                  >
                    Start Experience
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portal;