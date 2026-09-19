import { useState, useEffect } from 'react';
import { FiHome, FiMusic, FiUsers, FiSettings, FiStar, FiPlay, FiCode, FiCoffee } from 'react-icons/fi';

const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sections = [
    { id: 'home', name: 'Inicio', icon: FiHome },
    { id: 'judas', name: 'Judas', icon: FiUsers },
    { id: 'music', name: 'Music', icon: FiMusic },
    { id: 'portal', name: 'Portal', icon: FiPlay },
    { id: 'studio', name: 'Studio', icon: FiSettings },
    { id: 'ai-lab', name: 'AI Lab', icon: Star },
    { id: 'galaxy', name: 'Galaxy', icon: Coffee },
    { id: 'dev', name: 'Dev Library', icon: Code },
    { id: 'contact', name: 'Contact', icon: Coffee },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900/95 backdrop-blur-md border-b border-purple-500/30' : 'bg-transparent'}`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                <span className="font-bold text-sm">B</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Belentani</span>
            </div>
            
            <div className="hidden md:flex space-x-8">
              {sections.slice(0, 5).map((section) => (
                <a 
                  key={section.id}
                  href={`#${section.id}`} 
                  className="text-gray-300 hover:text-purple-400 transition-colors flex items-center space-x-2"
                >
                  <section.icon className="w-4 h-4" />
                  <span>{section.name}</span>
                </a>
              ))}
            </div>
            
            <button className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg transition-colors">
              Enter Experience
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-pink-900/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="mb-8">
            <div className="inline-block px-4 py-2 bg-purple-500/20 rounded-full mb-4 border border-purple-500/50">
              <span className="text-purple-300 text-sm">IMMERSIVE DIGITAL EXPERIENCE</span>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
            Belentani
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            An immersive digital experience exploring the trial of Judas through a futuristic, cyberpunk lens, merging interactive storytelling, electronic soundscapes, and data-hacking simulations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 flex items-center justify-center space-x-2">
              <FiPlay className="w-5 h-5" />
              <span>Start Experience</span>
            </button>
            <button className="border border-purple-500 hover:bg-purple-500/20 px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105">
              Learn More
            </button>
          </div>
          
          <div className="flex justify-center space-x-8 text-gray-400">
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400">10+</div>
              <div className="text-sm">Interactive Modules</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400">24/7</div>
              <div className="text-sm">Digital Access</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400">∞</div>
              <div className="text-sm">Stories to Explore</div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-purple-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-purple-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Core Experiences
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Dive into multiple dimensions of digital storytelling and interactive exploration
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Judas Experience',
                description: 'Explore the trial of Judas through interactive storytelling and cyberpunk narrative',
                icon: FiUsers,
                color: 'from-purple-500 to-pink-500'
              },
              {
                title: 'Music & Soundscapes',
                description: 'Immerse yourself in original electronic compositions and atmospheric sound design',
                icon: FiMusic,
                color: 'from-pink-500 to-red-500'
              },
              {
                title: 'AI Laboratory',
                description: 'Interact with advanced AI systems and explore generative content creation',
                icon: Star,
                color: 'from-blue-500 to-purple-500'
              },
              {
                title: 'Digital Portal',
                description: 'Access multiple dimensions and realities through our gateway system',
                icon: FiPlay,
                color: 'from-green-500 to-blue-500'
              },
              {
                title: 'Creative Studio',
                description: 'Tools and platforms for digital content creation and experimentation',
                icon: FiSettings,
                color: 'from-yellow-500 to-orange-500'
              },
              {
                title: 'Dev Library',
                description: 'Resources, documentation, and tools for developers and creators',
                icon: Code,
                color: 'from-indigo-500 to-purple-500'
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300 group"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 to-pink-900/30"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Ready to Enter the Experience?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Begin your journey through Belentani's immersive digital universe
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105">
              Launch Experience
            </button>
            <button className="border border-purple-500 hover:bg-purple-500/20 px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105">
              View Demo
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                <span className="font-bold text-sm">B</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Belentani</span>
            </div>
            
            <div className="text-gray-400 text-center md:text-right">
              <p>© 2024 Belentani. All rights reserved.</p>
              <p className="text-sm mt-2">An immersive digital experience</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;