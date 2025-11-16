import { useState } from 'react'
import { motion } from 'framer-motion'
import { Wand2, Sparkles, Loader2, Download, RefreshCw } from 'lucide-react'
import GlassPanel from '../components/GlassPanel'

function Generate() {
  const [prompt, setPrompt] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedImage, setGeneratedImage] = useState<string | null>(null)

  const examplePrompts = [
    'A pastel draped top with mesh sleeves and asymmetric hem',
    'A minimalist black dress with geometric cutouts',
    'A flowy bohemian maxi dress with floral embroidery',
    'A structured blazer with oversized lapels and wide-leg trousers',
  ]

  const handleGenerate = async () => {
    if (!prompt.trim()) return
    
    setIsGenerating(true)
    // Simulate API call - replace with actual backend call
    setTimeout(() => {
      setGeneratedImage('https://via.placeholder.com/512x512/6366f1/ffffff?text=Generated+Design')
      setIsGenerating(false)
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 pt-24 pb-16">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-6xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 mb-4">
              <Wand2 className="w-8 h-8 text-indigo-400" />
              <h1 className="text-5xl font-bold text-white">AI Prompt-Based Generation</h1>
            </div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Describe your fashion design in natural language. Our AI will interpret your style 
              and generate high-quality 2D outfit concepts using LLaMA 3 and ControlNet.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Input Panel */}
            <GlassPanel className="h-full">
              <div className="space-y-6">
                <div>
                  <label className="block text-white font-semibold mb-3 text-lg">
                    Describe Your Design
                  </label>
                  <textarea
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="e.g., A pastel draped top with mesh sleeves and asymmetric hem..."
                    className="w-full h-40 px-4 py-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
                  />
                  <div className="mt-2 text-sm text-gray-400">
                    {prompt.length} characters
                  </div>
                </div>

                <div>
                  <h3 className="text-white font-semibold mb-3">Example Prompts</h3>
                  <div className="space-y-2">
                    {examplePrompts.map((example, idx) => (
                      <button
                        key={idx}
                        onClick={() => setPrompt(example)}
                        className="w-full text-left px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-gray-300 hover:text-white transition-all text-sm"
                      >
                        {example}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  onClick={handleGenerate}
                  disabled={!prompt.trim() || isGenerating}
                  className="w-full px-6 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-xl hover:from-indigo-600 hover:to-purple-600 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  {isGenerating ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Generating Design...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-5 h-5" />
                      <span>Generate Design</span>
                    </>
                  )}
                </button>
              </div>
            </GlassPanel>

            {/* Output Panel */}
            <GlassPanel className="h-full">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-semibold text-lg">Generated Design</h3>
                  {generatedImage && (
                    <div className="flex space-x-2">
                      <button className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors">
                        <RefreshCw className="w-4 h-4 text-white" />
                      </button>
                      <button className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors">
                        <Download className="w-4 h-4 text-white" />
                      </button>
                    </div>
                  )}
                </div>

                <div className="aspect-square bg-gradient-to-br from-indigo-900/30 to-purple-900/30 rounded-xl flex items-center justify-center border border-white/10 min-h-[400px]">
                  {isGenerating ? (
                    <div className="text-center">
                      <Loader2 className="w-12 h-12 text-indigo-400 animate-spin mx-auto mb-4" />
                      <p className="text-gray-300">AI is creating your design...</p>
                    </div>
                  ) : generatedImage ? (
                    <img
                      src={generatedImage}
                      alt="Generated design"
                      className="w-full h-full object-cover rounded-xl"
                    />
                  ) : (
                    <div className="text-center text-gray-400">
                      <Wand2 className="w-16 h-16 mx-auto mb-4 opacity-50" />
                      <p>Your generated design will appear here</p>
                    </div>
                  )}
                </div>

                {generatedImage && (
                  <div className="pt-4 border-t border-white/10">
                    <div className="flex space-x-2">
                      <button className="flex-1 px-4 py-2 bg-indigo-500/20 hover:bg-indigo-500/30 text-indigo-300 rounded-lg transition-colors text-sm font-medium">
                        Convert to 3D
                      </button>
                      <button className="flex-1 px-4 py-2 bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 rounded-lg transition-colors text-sm font-medium">
                        Try On
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </GlassPanel>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Generate


