import { useState, useEffect } from 'react';
import { FiMusic, FiPlay, FiPause, FiSkipForward, FiSkipBack, FiVolume2, FiClock, FiList } from 'react-icons/fi';

interface Track {
  id: string;
  title: string;
  artist: string;
  duration: string;
  genre: string;
  album: string;
  year: number;
  plays: number;
  color: string;
}

interface Album {
  id: string;
  title: string;
  artist: string;
  year: number;
  tracks: number;
  cover: string;
}

const Music = () => {
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(70);
  const [selectedAlbum, setSelectedAlbum] = useState<string>('all');
  
  const tracks: Track[] = [
    {
      id: '1',
      title: 'Cyberpunk Jerusalem',
      artist: 'Belentani Soundscape',
      duration: '4:32',
      genre: 'Ambient Electronic',
      album: 'Judas Experience',
      year: 2024,
      plays: 15420,
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: '2',
      title: 'Digital Trial',
      artist: 'Belentani Soundscape',
      duration: '6:15',
      genre: 'Electronic',
      album: 'Judas Experience',
      year: 2024,
      plays: 12380,
      color: 'from-blue-500 to-purple-500'
    },
    {
      id: '3',
      title: 'Holographic Memories',
      artist: 'Belentani Soundscape',
      duration: '5:48',
      genre: 'Ambient',
      album: 'Judas Experience',
      year: 2024,
      plays: 9840,
      color: 'from-green-500 to-blue-500'
    },
    {
      id: '4',
      title: 'Data Stream',
      artist: 'Belentani Soundscape',
      duration: '3:22',
      genre: 'Electronic',
      album: 'Judas Experience',
      year: 2024,
      plays: 8760,
      color: 'from-red-500 to-orange-500'
    },
    {
      id: '5',
      title: 'Neon Nights',
      artist: 'Belentani Soundscape',
      duration: '4:56',
      genre: 'Synthwave',
      album: 'Cyberpunk Chronicles',
      year: 2024,
      plays: 11230,
      color: 'from-yellow-500 to-red-500'
    },
    {
      id: '6',
      title: 'Quantum Dreams',
      artist: 'Belentani Soundscape',
      duration: '7:12',
      genre: 'Ambient Electronic',
      album: 'Cyberpunk Chronicles',
      year: 2024,
      plays: 7650,
      color: 'from-indigo-500 to-purple-500'
    },
    {
      id: '7',
      title: 'Electric Soul',
      artist: 'Belentani Soundscape',
      duration: '5:33',
      genre: 'House',
      album: 'Digital Experience',
      year: 2024,
      plays: 9340,
      color: 'from-pink-500 to-red-500'
    },
    {
      id: '8',
      title: 'Binary Sunset',
      artist: 'Belentani Soundscape',
      duration: '6:45',
      genre: 'Ambient',
      album: 'Digital Experience',
      year: 2024,
      plays: 6890,
      color: 'from-cyan-500 to-blue-500'
    }
  ];
  
  const albums: Album[] = [
    {
      id: 'judas',
      title: 'Judas Experience',
      artist: 'Belentani Soundscape',
      year: 2024,
      tracks: 4,
      cover: '/judas-album.jpg'
    },
    {
      id: 'chronicles',
      title: 'Cyberpunk Chronicles',
      artist: 'Belentani Soundscape',
      year: 2024,
      tracks: 2,
      cover: '/chronicles-album.jpg'
    },
    {
      id: 'digital',
      title: 'Digital Experience',
      artist: 'Belentani Soundscape',
      year: 2024,
      tracks: 2,
      cover: '/digital-album.jpg'
    }
  ];
  
  const filteredTracks = selectedAlbum === 'all' 
    ? tracks 
    : tracks.filter(track => track.album === albums.find(album => album.id === selectedAlbum)?.title);
  
  const playTrack = (track: Track) => {
    setCurrentTrack(track);
    setIsPlaying(true);
    // Simulate audio playing
    setTimeout(() => {
      if (isPlaying) {
        setCurrentTime(Math.min(currentTime + 1, 300)); // Simulate progress
      }
    }, 1000);
  };
  
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white">
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-purple-500/20 rounded-full mb-4 border border-purple-500/50">
            <span className="text-purple-300 text-sm">BELLENTANI MUSIC EXPERIENCE</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Music & Soundscapes
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Immerse yourself in electronic soundscapes and cyberpunk audio experiences
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Player Section */}
          <div className="lg:col-span-1">
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 sticky top-8">
              <div className="mb-6">
                <h2 className="text-2xl font-bold mb-4 text-white">Now Playing</h2>
                {currentTrack ? (
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className={`w-16 h-16 bg-gradient-to-r ${currentTrack.color} rounded-lg flex items-center justify-center`}>
                        <FiMusic className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white">{currentTrack.title}</h3>
                        <p className="text-gray-400">{currentTrack.artist}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm text-gray-400">
                        <span>{formatTime(currentTime)}</span>
                        <span>{currentTrack.duration}</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-300" 
                          style={{ width: `${(currentTime / 300) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <button className="text-gray-400 hover:text-white">
                        <FiSkipBack className="w-5 h-5" />
                      </button>
                      <button 
                        className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center hover:scale-105 transition-transform"
                        onClick={() => setIsPlaying(!isPlaying)}
                      >
                        {isPlaying ? <FiPause className="w-6 h-6 text-white" /> : <FiPlay className="w-6 h-6 text-white" />}
                      </button>
                      <button className="text-gray-400 hover:text-white">
                        <FiSkipForward className="w-5 h-5" />
                      </button>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <FiVolume2 className="w-5 h-5 text-gray-400" />
                      <div className="flex-1 bg-gray-700 rounded-full h-2">
                        <div 
                          className="bg-purple-500 h-2 rounded-full" 
                          style={{ width: `${volume}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-8 text-gray-400">
                    <FiMusic className="w-12 h-12 mx-auto mb-4 text-purple-400" />
                    <p>Select a track to start playing</p>
                  </div>
                )}
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-white">Playlists</h3>
                <div className="space-y-2">
                  <button className="w-full bg-gray-700 hover:bg-gray-600 p-3 rounded-lg text-left transition-colors">
                    <div className="font-medium text-white">Judas Experience</div>
                    <div className="text-sm text-gray-400">4 tracks • 19:55</div>
                  </button>
                  <button className="w-full bg-gray-700 hover:bg-gray-600 p-3 rounded-lg text-left transition-colors">
                    <div className="font-medium text-white">Cyberpunk Chronicles</div>
                    <div className="text-sm text-gray-400">2 tracks • 11:07</div>
                  </button>
                  <button className="w-full bg-gray-700 hover:bg-gray-600 p-3 rounded-lg text-left transition-colors">
                    <div className="font-medium text-white">Digital Experience</div>
                    <div className="text-sm text-gray-400">2 tracks • 12:18</div>
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Albums & Tracks */}
          <div className="lg:col-span-2 space-y-6">
            {/* Albums */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
              <h2 className="text-2xl font-bold mb-6 text-white">Albums</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {albums.map((album) => (
                  <div 
                    key={album.id}
                    className={`bg-gray-900/50 rounded-lg p-4 border cursor-pointer transition-all duration-300 ${selectedAlbum === album.id ? 'border-purple-500 bg-purple-500/10' : 'border-gray-700 hover:border-purple-500/50'}`}
                    onClick={() => setSelectedAlbum(album.id)}
                  >
                    <div className="w-full h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg mb-4 flex items-center justify-center">
                      <span className="text-2xl font-bold">{album.title.charAt(0)}</span>
                    </div>
                    <h3 className="font-semibold text-white mb-1">{album.title}</h3>
                    <p className="text-sm text-gray-400 mb-2">{album.artist}</p>
                    <div className="flex items-center justify-between text-sm text-gray-400">
                      <span>{album.tracks} tracks</span>
                      <span>{album.year}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Track List */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">Tracks</h2>
                <div className="flex items-center space-x-2 text-gray-400">
                  <FiList className="w-5 h-5" />
                  <span>{filteredTracks.length} tracks</span>
                </div>
              </div>
              
              <div className="space-y-2">
                {filteredTracks.map((track, index) => (
                  <div 
                    key={track.id}
                    className={`flex items-center space-x-4 p-3 rounded-lg cursor-pointer transition-colors ${currentTrack?.id === track.id ? 'bg-purple-500/20 border border-purple-500/50' : 'hover:bg-gray-700/50'}`}
                    onClick={() => playTrack(track)}
                  >
                    <div className="w-10 h-10 text-gray-400">{index + 1}</div>
                    <div className="flex-1">
                      <h3 className="font-medium text-white">{track.title}</h3>
                      <p className="text-sm text-gray-400">{track.artist}</p>
                    </div>
                    <div className="text-sm text-gray-400">{track.duration}</div>
                    <div className="text-sm text-gray-400">{track.genre}</div>
                    <div className="text-sm text-gray-400 flex items-center space-x-1">
                      <FiClock className="w-4 h-4" />
                      <span>{track.plays.toLocaleString()}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Music;