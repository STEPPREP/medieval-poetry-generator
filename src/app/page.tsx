'use client'

import { useState } from 'react'

interface PoemRequest {
  character: string
  location: string
  event: string
  emotion: string
}

interface GeneratedPoem {
  title: string
  verses: string[]
  language: 'english' | 'chinese'
}

export default function MedievalPoetryGenerator() {
  const [formData, setFormData] = useState<PoemRequest>({
    character: '', location: '', event: '', emotion: ''
  })
  const [poem, setPoem] = useState<GeneratedPoem | null>(null)
  const [isGenerating, setIsGenerating] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsGenerating(true)
    setError(null)
    
    try {
      // Mock poem generation for GitHub Pages
      const mockPoem: GeneratedPoem = {
        title: "The Medieval Tale",
        verses: [
          "In castle halls where shadows dwell",
          "A noble heart begins to swell",
          "With courage bright and spirit true",
          "Adventure calls both me and you",
          "Through forest deep and village wide",
          "With love as guide and hope as tide",
          "No treachery can break this bond",
          "Together we shall stand beyond"
        ],
        language: 'english'
      }
      
      setTimeout(() => {
        setPoem(mockPoem)
        setIsGenerating(false)
      }, 2000)
      
    } catch (err) {
      setError('Failed to generate poem. This is a demo version.')
      setIsGenerating(false)
    }
  }

  const formatVerse = (verse: string, index: number) => {
    if (index === 0) {
      const firstLetter = verse.charAt(0)
      const restOfVerse = verse.slice(1)
      return (
        <span className="inline-block">
          <span className="illuminated-capital">{firstLetter}</span>
          {restOfVerse}
        </span>
      )
    }
    return verse
  }

  return (
    <div className="min-h-screen parchment-background">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-6xl font-medieval text-medieval-brown mb-4">
              Medieval Poetry Generator
            </h1>
            <p className="text-lg text-medieval-dark-brown max-w-2xl mx-auto">
              Craft authentic medieval-style poems with illuminated manuscripts.
            </p>
            <p className="text-sm text-medieval-brown mt-4">
              📜 Demo Version - GitHub Pages Deployment
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="medieval-card border-medieval-gold p-6">
              <h2 className="text-2xl font-medieval text-medieval-brown mb-4">
                Compose Thy Tale
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-medieval-dark-brown font-medieval block">Character</label>
                  <select 
                    value={formData.character} 
                    onChange={(e) => setFormData({...formData, character: e.target.value})}
                    className="medieval-input w-full p-3 border-2 border-yellow-600 rounded bg-white bg-opacity-80 font-medieval"
                  >
                    <option value="">Choose thy character...</option>
                    <option value="hero">Hero</option>
                    <option value="noble">Noble</option>
                    <option value="commoner">Commoner</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-medieval-dark-brown font-medieval block">Location</label>
                  <select 
                    value={formData.location} 
                    onChange={(e) => setFormData({...formData, location: e.target.value})}
                    className="medieval-input w-full p-3 border-2 border-yellow-600 rounded bg-white bg-opacity-80 font-medieval"
                  >
                    <option value="">Choose thy realm...</option>
                    <option value="castle">Castle</option>
                    <option value="forest">Forest</option>
                    <option value="village">Village</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-medieval-dark-brown font-medieval block">Event</label>
                  <select 
                    value={formData.event} 
                    onChange={(e) => setFormData({...formData, event: e.target.value})}
                    className="medieval-input w-full p-3 border-2 border-yellow-600 rounded bg-white bg-opacity-80 font-medieval"
                  >
                    <option value="">Choose thy deed...</option>
                    <option value="battle">Battle</option>
                    <option value="love">Love</option>
                    <option value="treachery">Treachery</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-medieval-dark-brown font-medieval block">Emotion</label>
                  <select 
                    value={formData.emotion} 
                    onChange={(e) => setFormData({...formData, emotion: e.target.value})}
                    className="medieval-input w-full p-3 border-2 border-yellow-600 rounded bg-white bg-opacity-80 font-medieval"
                  >
                    <option value="">Choose thy passion...</option>
                    <option value="joy">Joy</option>
                    <option value="sorrow">Sorrow</option>
                    <option value="rage">Rage</option>
                  </select>
                </div>

                <button 
                  type="submit" 
                  className="medieval-button w-full py-3 px-6 rounded font-bold text-lg"
                  disabled={isGenerating || !formData.character || !formData.location || !formData.event || !formData.emotion}
                >
                  {isGenerating ? (
                    <>
                      <span className="inline-block animate-spin mr-2">⚔️</span>
                      Crafting Thy Verse...
                    </>
                  ) : (
                    'Generate Poem'
                  )}
                </button>
              </form>

              {error && (
                <div className="mt-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                  {error}
                </div>
              )}
            </div>

            <div className="medieval-card border-medieval-gold p-6">
              <h2 className="text-2xl font-medieval text-medieval-brown mb-4">
                Thy Illuminated Verse
              </h2>
              {poem ? (
                <div className="poem-container animate-ink-bleed">
                  <h3 className="text-xl font-medieval text-medieval-crimson mb-6 text-center">
                    {poem.title}
                  </h3>
                  <div className="poem-verses space-y-4">
                    {poem.verses.map((verse, index) => (
                      <p key={index} className="poem-verse text-medieval-dark-brown leading-relaxed">
                        {formatVerse(verse, index)}
                      </p>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="text-center py-12 text-medieval-brown">
                  <div className="text-6xl mb-4">📜</div>
                  <p className="text-lg">
                    Thy illuminated verse shall appear here...
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600&family=Uncial+Antiqua&display=swap');
        
        .parchment-background {
          background-image: 
            radial-gradient(circle at 20% 50%, rgba(139, 69, 19, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(160, 82, 45, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, rgba(139, 69, 19, 0.1) 0%, transparent 50%),
            linear-gradient(45deg, #f4e8d0 0%, #e8dcc0 25%, #f4e8d0 50%, #e8dcc0 75%, #f4e8d0 100%);
          background-size: 400px 400px, 300px 300px, 350px 350px, 100% 100%;
          position: relative;
        }
        
        .font-medieval { font-family: 'Cinzel', 'Uncial Antiqua', serif; }
        .text-medieval-brown { color: #8B4513; }
        .text-medieval-dark-brown { color: #654321; }
        .text-medieval-crimson { color: #8B0000; }
        .border-medieval-gold { border-color: #DAA520; }
        
        .medieval-card {
          background: rgba(244, 232, 208, 0.9);
          backdrop-filter: blur(10px);
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.6), inset 0 -1px 0 rgba(0, 0, 0, 0.1);
          border-radius: 8px;
        }
        
        .medieval-input {
          background: rgba(255, 255, 255, 0.8);
          border: 2px solid #DAA520;
          font-family: 'Cinzel', serif;
        }
        
        .medieval-button {
          background: linear-gradient(135deg, #8B4513 0%, #A0522D 100%);
          border: 2px solid #654321;
          color: #F4E8D0;
          font-family: 'Cinzel', serif;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          transition: all 0.3s ease;
        }
        
        .medieval-button:hover {
          background: linear-gradient(135deg, #A0522D 0%, #8B4513 100%);
          transform: translateY(-2px);
          box-shadow: 0 6px 12px rgba(139, 69, 19, 0.3);
        }
        
        .illuminated-capital {
          display: inline-block;
          font-size: 3em;
          line-height: 0.8;
          font-weight: bold;
          color: #8B0000;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3), 0 0 10px rgba(218, 165, 32, 0.5);
          margin-right: 4px;
        }
        
        .poem-container {
          background: rgba(255, 255, 255, 0.6);
          border: 1px solid #DAA520;
          border-radius: 8px;
          padding: 2rem;
          min-height: 300px;
        }
        
        .poem-verses {
          font-family: 'Cinzel', serif;
          font-size: 1.1em;
          line-height: 1.8;
          text-align: center;
        }
        
        .poem-verse {
          opacity: 0;
          animation: fadeInUp 0.8s ease forwards;
        }
        
        .poem-verse:nth-child(1) { animation-delay: 0.2s; }
        .poem-verse:nth-child(2) { animation-delay: 0.4s; }
        .poem-verse:nth-child(3) { animation-delay: 0.6s; }
        .poem-verse:nth-child(4) { animation-delay: 0.8s; }
        
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-ink-bleed {
          animation: inkBleed 2s ease-in-out;
        }
        
        @keyframes inkBleed {
          0% { filter: blur(2px); opacity: 0; }
          50% { filter: blur(1px); opacity: 0.7; }
          100% { filter: blur(0); opacity: 1; }
        }
      `}</style>
    </div>
  )
}
