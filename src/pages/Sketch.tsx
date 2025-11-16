import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Upload, Image as ImageIcon, Loader2, CheckCircle, X } from 'lucide-react'
import GlassPanel from '../components/GlassPanel'

function Sketch() {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null)
  const [isProcessing, setIsProcessing] = useState(false)
  const [processedImage, setProcessedImage] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setUploadedImage(reader.result as string)
        setProcessedImage(null)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleProcess = async () => {
    if (!uploadedImage) return
    
    setIsProcessing(true)
    // Simulate YOLOv8 detection + ControlNet refinement
    setTimeout(() => {
      setProcessedImage('https://via.placeholder.com/512x512/8b5cf6/ffffff?text=Refined+Design')
      setIsProcessing(false)
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
              <ImageIcon className="w-8 h-8 text-indigo-400" />
              <h1 className="text-5xl font-bold text-white">Sketch-to-Design AI</h1>
            </div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Upload your rough fashion sketch. YOLOv8 detects components (sleeve, collar, hem) 
              and ControlNet refines it into a polished fashion illustration.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Upload Panel */}
            <GlassPanel>
              <div className="space-y-6">
                <div>
                  <h3 className="text-white font-semibold mb-4 text-lg">Upload Your Sketch</h3>
                  
                  {!uploadedImage ? (
                    <div
                      onClick={() => fileInputRef.current?.click()}
                      className="border-2 border-dashed border-white/20 rounded-xl p-12 text-center cursor-pointer hover:border-indigo-400 transition-colors"
                    >
                      <Upload className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                      <p className="text-white font-medium mb-2">Click to upload or drag and drop</p>
                      <p className="text-sm text-gray-400">PNG, JPG, or SVG (max 10MB)</p>
                      <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/*"
                        onChange={handleFileUpload}
                        className="hidden"
                      />
                    </div>
                  ) : (
                    <div className="relative">
                      <img
                        src={uploadedImage}
                        alt="Uploaded sketch"
                        className="w-full rounded-xl"
                      />
                      <button
                        onClick={() => {
                          setUploadedImage(null)
                          setProcessedImage(null)
                        }}
                        className="absolute top-2 right-2 p-2 bg-red-500/80 hover:bg-red-500 rounded-lg transition-colors"
                      >
                        <X className="w-4 h-4 text-white" />
                      </button>
                    </div>
                  )}
                </div>

                {uploadedImage && (
                  <button
                    onClick={handleProcess}
                    disabled={isProcessing}
                    className="w-full px-6 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-xl hover:from-indigo-600 hover:to-purple-600 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                  >
                    {isProcessing ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Processing Sketch...</span>
                      </>
                    ) : (
                      <>
                        <ImageIcon className="w-5 h-5" />
                        <span>Refine Design</span>
                      </>
                    )}
                  </button>
                )}
              </div>
            </GlassPanel>

            {/* Output Panel */}
            <GlassPanel>
              <div className="space-y-4">
                <h3 className="text-white font-semibold text-lg">Refined Design</h3>
                
                <div className="aspect-square bg-gradient-to-br from-indigo-900/30 to-purple-900/30 rounded-xl flex items-center justify-center border border-white/10 min-h-[400px]">
                  {isProcessing ? (
                    <div className="text-center">
                      <Loader2 className="w-12 h-12 text-indigo-400 animate-spin mx-auto mb-4" />
                      <p className="text-gray-300 mb-2">Detecting components...</p>
                      <p className="text-sm text-gray-400">YOLOv8 analyzing your sketch</p>
                    </div>
                  ) : processedImage ? (
                    <div className="relative w-full h-full">
                      <img
                        src={processedImage}
                        alt="Refined design"
                        className="w-full h-full object-cover rounded-xl"
                      />
                      <div className="absolute top-4 right-4 p-2 bg-green-500/80 rounded-lg">
                        <CheckCircle className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  ) : (
                    <div className="text-center text-gray-400">
                      <ImageIcon className="w-16 h-16 mx-auto mb-4 opacity-50" />
                      <p>Your refined design will appear here</p>
                    </div>
                  )}
                </div>

                {processedImage && (
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

          {/* Info Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-12"
          >
            <GlassPanel>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="text-white font-semibold mb-2">Component Detection</h4>
                  <p className="text-sm text-gray-400">
                    YOLOv8 automatically identifies sleeves, collars, hems, and other fashion components
                  </p>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">AI Refinement</h4>
                  <p className="text-sm text-gray-400">
                    ControlNet transforms your rough sketch into a polished, professional fashion illustration
                  </p>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Export Options</h4>
                  <p className="text-sm text-gray-400">
                    Download your refined design or continue to 3D conversion and virtual try-on
                  </p>
                </div>
              </div>
            </GlassPanel>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Sketch


