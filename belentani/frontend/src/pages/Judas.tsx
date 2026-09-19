import { useState, useEffect } from 'react';
import { FiUsers, FiGlobe, FiLock, FiEye, FiClock, FiBook, FiMusic, FiVideo } from 'react-icons/fi';

interface Chapter {
  id: string;
  title: string;
  description: string;
  duration: string;
  icon: any;
  color: string;
  completed: boolean;
}

interface Character {
  id: string;
  name: string;
  role: string;
  description: string;
  avatar: string;
}

const Judas = () => {
  const [selectedChapter, setSelectedChapter] = useState<string>('1');
  const [progress, setProgress] = useState(35);
  
  const chapters: Chapter[] = [
    {
      id: '1',
      title: 'The Betrayal',
      description: 'Witness the critical moment that changed history forever',
      duration: '15 min',
      icon: FiUsers,
      color: 'from-red-500 to-orange-500',
      completed: true
    },
    {
      id: '2',
      title: 'The Trial',
      description: 'Experience the judgment in a cyberpunk courtroom of the future',
      duration: '25 min',
      icon: FiLock,
      color: 'from-purple-500 to-pink-500',
      completed: true
    },
    {
      id: '3',
      title: 'The Revelation',
      description: 'Uncover hidden truths through data exploration and hacking',
      duration: '20 min',
      icon: FiEye,
      color: 'from-blue-500 to-purple-500',
      completed: false
    },
    {
      id: '4',
      title: 'The Redemption',
      description: 'Navigate the path to forgiveness in a digital purgatory',
      duration: '30 min',
      icon: FiGlobe,
      color: 'from-green-500 to-blue-500',
      completed: false
    }
  ];
  
  const characters: Character[] = [
    {
      id: '1',
      name: 'Judas Iscariot',
      role: 'The Betrayer',
      description: 'A complex figure torn between loyalty and survival in a cyberpunk Jerusalem',
      avatar: '/judas-avatar.jpg'
    },
    {
      id: '2',
      name: 'The Judge',
      role: 'AI Arbitrator',
      description: 'An advanced artificial intelligence overseeing the digital trial',
      avatar: '/judge-avatar.jpg'
    },
    {
      id: '3',
      name: 'The Witnesses',
      role: 'Data Entities',
      description: 'Fragmented memories and recorded testimonies from the past',
      avatar: '/witnesses-avatar.jpg'
    },
    {
      id: '4',
      name: 'The Observer',
      role: 'Your Guide',
      description: 'Navigate through the experience with the help of an AI companion',
      avatar: '/observer-avatar.jpg'
    }
  ];
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white">
      {/* Header */}
      <div className="container mx-auto px-6 py-8">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-red-500/20 rounded-full mb-4 border border-red-500/50">
            <span className="text-red-300 text-sm">THE JUDAS EXPERIENCE</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-red-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            The Judas Trial
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the trial of Judas Iscariot through a futuristic, cyberpunk lens
          </p>
        </div>
        
        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-4">
            <span className="text-gray-400">Experience Progress</span>
            <span className="text-purple-400 font-semibold">{progress}% Complete</span>
          </div>
          <div className="w-full bg-gray-800 rounded-full h-3">
            <div 
              className="bg-gradient-to-r from-red-500 to-purple-500 h-3 rounded-full transition-all duration-500" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Chapters */}
          <div className="lg:col-span-2">
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">Story Chapters</h2>
                <div className="flex space-x-2">
                  <button className="px-3 py-1 bg-gray-700 rounded-lg text-sm text-gray-300">Timeline</button>
                  <button className="px-3 py-1 bg-purple-600 rounded-lg text-sm text-white">Interactive</button>
                </div>
              </div>
              
              <div className="space-y-4">
                {chapters.map((chapter) => (
                  <div 
                    key={chapter.id}
                    className={`p-4 rounded-lg border cursor-pointer transition-all duration-300 ${selectedChapter === chapter.id ? 'border-purple-500 bg-purple-500/10' : 'border-gray-700 hover:border-purple-500/50'}`}
                    onClick={() => setSelectedChapter(chapter.id)}
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${chapter.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                        <chapter.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-lg font-semibold text-white">Chapter {chapter.id}: {chapter.title}</h3>
                          <div className="flex items-center space-x-2 text-sm text-gray-400">
                            <FiClock className="w-4 h-4" />
                            <span>{chapter.duration}</span>
                            {chapter.completed && (
                              <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded-full text-xs">Completed</span>
                            )}
                          </div>
                        </div>
                        <p className="text-gray-400 text-sm">{chapter.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Interactive Experience */}
              <div className="mt-8 bg-gray-900/50 rounded-xl p-6 border border-gray-600">
                <h3 className="text-xl font-bold mb-4 text-white">Current Experience</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-800 rounded-lg p-4 flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                      <FiBook className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">Narrative Mode</div>
                      <div className="text-sm text-gray-400">Interactive story progression</div>
                    </div>
                  </div>
                  <div className="bg-gray-800 rounded-lg p-4 flex items-center space-x-3">
                    <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                      <FiMusic className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">Ambient Sound</div>
                      <div className="text-sm text-gray-400">Cyberpunk atmosphere</div>
                    </div>
                  </div>
                  <div className="bg-gray-800 rounded-lg p-4 flex items-center space-x-3">
                    <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center">
                      <FiVideo className="w-5 h-5 text-red-400" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">Visual Effects</div>
                      <div className="text-sm text-gray-400">Dynamic holographic displays</div>
                    </div>
                  </div>
                  <div className="bg-gray-800 rounded-lg p-4 flex items-center space-x-3">
                    <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                      <FiEye className="w-5 h-5 text-green-400" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">Data Exploration</div>
                      <div className="text-sm text-gray-400">Hack into memories</div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 flex space-x-4">
                  <button className="flex-1 bg-purple-600 hover:bg-purple-700 py-3 rounded-lg font-semibold transition-colors">
                    Start Chapter
                  </button>
                  <button className="px-6 border border-gray-600 hover:bg-gray-700 py-3 rounded-lg font-semibold transition-colors">
                    Continue
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Characters & Info */}
          <div className="space-y-6">
            {/* Characters */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
              <h2 className="text-2xl font-bold mb-6 text-white">Key Characters</h2>
              <div className="space-y-4">
                {characters.map((character) => (
                  <div key={character.id} className="flex items-center space-x-4 p-3 bg-gray-900/50 rounded-lg border border-gray-600 hover:border-purple-500/50 transition-colors">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="font-bold text-sm">{character.name.charAt(0)}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">{character.name}</h3>
                      <p className="text-sm text-gray-400">{character.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Timeline */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
              <h2 className="text-2xl font-bold mb-6 text-white">Historical Context</h2>
              <div className="space-y-4">
                <div className="flex space-x-4">
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-sm font-bold">33</div>
                    <div className="w-0.5 h-16 bg-gray-600 mt-2"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">The Last Supper</h3>
                    <p className="text-sm text-gray-400">Where the betrayal was planned</p>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-sm font-bold">30</div>
                    <div className="w-0.5 h-16 bg-gray-600 mt-2"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">The Arrest</h3>
                    <p className="text-sm text-gray-400">Judas identifies Jesus to authorities</p>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-sm font-bold">14</div>
                    <div className="w-0.5 h-16 bg-gray-600 mt-2"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">The Suicide</h3>
                    <p className="text-sm text-gray-400">Judas takes his own life</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Audio Experience */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
              <h2 className="text-2xl font-bold mb-4 text-white">Audio Experience</h2>
              <div className="space-y-4">
                <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-600">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-white font-medium">Cyberpunk Jerusalem</span>
                    <span className="text-sm text-gray-400">4:32</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2 mb-3">
                    <div className="bg-purple-500 h-2 rounded-full w-1/3"></div>
                  </div>
                  <div className="flex items-center justify-between">
                    <button className="text-purple-400 hover:text-purple-300">
                      <FiMusic className="w-5 h-5" />
                    </button>
                    <div className="flex space-x-2">
                      <button className="text-gray-400 hover:text-gray-300">Skip</button>
                      <button className="text-purple-400 hover:text-purple-300">Replay</button>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-2">
                  <button className="bg-gray-700 hover:bg-gray-600 py-2 rounded-lg text-sm transition-colors">
                    Rain Sounds
                  </button>
                  <button className="bg-gray-700 hover:bg-gray-600 py-2 rounded-lg text-sm transition-colors">
                    City Noise
                  </button>
                  <button className="bg-gray-700 hover:bg-gray-600 py-2 rounded-lg text-sm transition-colors">
                    Electronic
                  </button>
                  <button className="bg-gray-700 hover:bg-gray-600 py-2 rounded-lg text-sm transition-colors">
                    Ambient
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Judas;