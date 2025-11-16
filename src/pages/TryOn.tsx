import { useState } from 'react'
import { motion } from 'framer-motion'
import { Shirt, Upload, Palette, Sun, Moon, Download, RotateCw } from 'lucide-react'
import GlassPanel from '../components/GlassPanel'
import Canvas3D from '../components/Canvas3D'

function TryOn() {
  const [fabricImage, setFabricImage] = useState<string | null>(null)
  const [lighting, setLighting] = useState<'soft' | 'bright' | 'dramatic'>('soft')
  const [fabricColor, setFabricColor] = useState('#a78bfa')

  const fabricColors = [
    { name: 'Purple', value: '#a78bfa' },
    { name: 'Indigo', value: '#818cf8' },
    { name: 'Pink', value: '#f472b6' },
    { name: 'Blue', value: '#60a5fa' },
    { name: 'Green', value: '#34d399' },
    { name: 'Red', value: '#f87171' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 pt-24 pb-16">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-7xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 mb-4">
              <Shirt className="w-8 h-8 text-indigo-400" />
              <h1 className="text-5xl font-bold text-white">3D Virtual Try-On</h1>
            </div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Upload cloth images, change fabrics, adjust lighting, and preview physical draping 
              in real-time. Export GLB/FBX files for production.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Panel - Controls */}
            <div className="space-y-6">
              {/* Fabric Upload */}
              <GlassPanel>
                <h3 className="text-white font-semibold mb-4 text-lg flex items-center space-x-2">
                  <Upload className="w-5 h-5" />
                  <span>Upload Fabric</span>
                </h3>
                <div className="border-2 border-dashed border-white/20 rounded-xl p-8 text-center cursor-pointer hover:border-indigo-400 transition-colors">
                  <Upload className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                  <p className="text-white text-sm mb-1">Click to upload fabric image</p>
                  <p className="text-xs text-gray-400">Extract texture, color, and folds</p>
                </div>
                {fabricImage && (
                  <div className="mt-4 relative">
                    <img
                      src={fabricImage}
                      alt="Fabric"
                      className="w-full rounded-lg"
                    />
                  </div>
                )}
              </GlassPanel>

              {/* Fabric Color */}
              <GlassPanel>
                <h3 className="text-white font-semibold mb-4 text-lg flex items-center space-x-2">
                  <Palette className="w-5 h-5" />
                  <span>Fabric Color</span>
                </h3>
                <div className="grid grid-cols-3 gap-3">
                  {fabricColors.map((color) => (
                    <button
                      key={color.value}
                      onClick={() => setFabricColor(color.value)}
                      className={`aspect-square rounded-lg transition-all ${
                        fabricColor === color.value
                          ? 'ring-2 ring-white scale-110'
                          : 'hover:scale-105'
                      }`}
                      style={{ backgroundColor: color.value }}
                    >
                      <span className="sr-only">{color.name}</span>
                    </button>
                  ))}
                </div>
              </GlassPanel>

              {/* Lighting Controls */}
              <GlassPanel>
                <h3 className="text-white font-semibold mb-4 text-lg flex items-center space-x-2">
                  <Sun className="w-5 h-5" />
                  <span>Lighting</span>
                </h3>
                <div className="space-y-2">
                  {(['soft', 'bright', 'dramatic'] as const).map((light) => (
                    <button
                      key={light}
                      onClick={() => setLighting(light)}
                      className={`w-full px-4 py-3 rounded-lg transition-all text-left ${
                        lighting === light
                          ? 'bg-indigo-500/30 text-white border border-indigo-400'
                          : 'bg-white/5 text-gray-300 hover:bg-white/10'
                      }`}
                    >
                      <span className="capitalize">{light}</span>
                    </button>
                  ))}
                </div>
              </GlassPanel>

              {/* Export Options */}
              <GlassPanel>
                <h3 className="text-white font-semibold mb-4 text-lg">Export</h3>
                <div className="space-y-2">
                  <button className="w-full px-4 py-3 bg-indigo-500/20 hover:bg-indigo-500/30 text-indigo-300 rounded-lg transition-colors flex items-center justify-center space-x-2">
                    <Download className="w-4 h-4" />
                    <span>Export GLB</span>
                  </button>
                  <button className="w-full px-4 py-3 bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 rounded-lg transition-colors flex items-center justify-center space-x-2">
                    <Download className="w-4 h-4" />
                    <span>Export FBX</span>
                  </button>
                </div>
              </GlassPanel>
            </div>

            {/* Center - 3D Viewer */}
            <div className="lg:col-span-2">
              <GlassPanel className="h-full min-h-[600px]">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-white font-semibold text-lg">3D Preview</h3>
                  <button className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors">
                    <RotateCw className="w-4 h-4 text-white" />
                  </button>
                </div>
                <div className="h-[600px] rounded-xl overflow-hidden">
                  <Canvas3D />
                </div>
                <div className="mt-4 flex items-center justify-center space-x-4 text-sm text-gray-400">
                  <span>🖱️ Drag to rotate</span>
                  <span>•</span>
                  <span>🔍 Scroll to zoom</span>
                  <span>•</span>
                  <span>🖱️ Right-click to pan</span>
                </div>
              </GlassPanel>
            </div>
          </div>

          {/* Features Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-12"
          >
            <GlassPanel>
              <div className="grid md:grid-cols-4 gap-6">
                <div>
                  <h4 className="text-white font-semibold mb-2">Real-Time Preview</h4>
                  <p className="text-sm text-gray-400">
                    Interactive Three.js viewer with smooth rotations and zoom
                  </p>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Physics Simulation</h4>
                  <p className="text-sm text-gray-400">
                    Realistic cloth draping with physics-based simulation
                  </p>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Material Mapping</h4>
                  <p className="text-sm text-gray-400">
                    Fabric textures and colors mapped accurately to 3D models
                  </p>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Production Ready</h4>
                  <p className="text-sm text-gray-400">
                    Export industry-standard GLB and FBX formats
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

export default TryOn


