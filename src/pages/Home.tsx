import { useNavigate } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Sparkles, Upload, Wand2, Shirt, ArrowDown, Play, Star, Quote, Twitter, Linkedin, Instagram, Mail } from 'lucide-react'
import { useRef } from 'react'
import Canvas3D from '../components/Canvas3D'
import GlassPanel from '../components/GlassPanel'

function Home() {
  const navigate = useNavigate()
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])

  return (
    <div ref={containerRef} className="relative">
      {/* Full-Screen Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-gray-50 via-indigo-50 to-indigo-950">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-100/50 via-purple-100/50 to-indigo-950/80"></div>
          <motion.div
            className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-indigo-500/30 rounded-full blur-[120px]"
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/30 rounded-full blur-[120px]"
            animate={{
              x: [0, -80, 0],
              y: [0, -60, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12 items-center min-h-screen py-24">
            {/* Left Column - Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="lg:col-span-5 space-y-8"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="inline-flex items-center space-x-3 px-4 py-2 rounded-full bg-white/80 backdrop-blur-xl border border-indigo-200/50 shadow-lg"
              >
                <div className="w-2 h-2 bg-indigo-600 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-indigo-600 uppercase tracking-widest">
                  AI-Powered Fashion
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-7xl lg:text-8xl font-light text-gray-900 leading-[1.1] tracking-tight"
              >
                <span className="block">TryOn</span>
                <span className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent font-light">
                  X
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-xl lg:text-2xl text-gray-700 leading-relaxed font-light max-w-lg"
              >
                Transcend time, creating fashion that harmonizes timeless elegance with futuristic innovation.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 pt-4"
              >
                <button
                  onClick={() => navigate('/generate')}
                  className="group relative px-8 py-4 bg-white text-black font-medium rounded-full overflow-hidden transition-all duration-300 hover:scale-105"
                >
                  <span className="relative z-10 flex items-center space-x-2">
                    <span>Explore Collection</span>
                    <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </button>
                <button
                  onClick={() => navigate('/tryon')}
                  className="px-8 py-4 bg-white/5 backdrop-blur-xl text-white font-medium rounded-full border border-white/20 hover:bg-white/10 transition-all duration-300"
                >
                  Try It Now
                </button>
              </motion.div>
            </motion.div>

            {/* Center Column - 3D Mannequin */}
            <motion.div
              style={{ opacity, scale }}
              className="lg:col-span-7 h-[600px] lg:h-[800px] relative"
            >
              <div className="relative h-full">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-3xl"></div>
                
                {/* Glass Container */}
                <div className="relative h-full backdrop-blur-2xl bg-gradient-to-br from-white/5 to-white/0 rounded-3xl border border-white/10 p-6 shadow-2xl">
                  <Canvas3D />
                </div>

                {/* Material Properties Display (Chronothreads style) */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 }}
                  className="absolute bottom-6 left-6 right-6"
                >
                  <div className="grid grid-cols-3 gap-4">
                    <GlassPanel className="p-4">
                      <div className="text-xs text-gray-400 mb-1">Light Refraction</div>
                      <div className="text-2xl font-light text-white">89%</div>
                    </GlassPanel>
                    <GlassPanel className="p-4">
                      <div className="text-xs text-gray-400 mb-1">Weight</div>
                      <div className="text-2xl font-light text-white">55%</div>
                    </GlassPanel>
                    <GlassPanel className="p-4">
                      <div className="text-xs text-gray-400 mb-1">Transparency</div>
                      <div className="text-2xl font-light text-white">83%</div>
                    </GlassPanel>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center space-y-2 text-gray-400"
            >
              <span className="text-sm font-light">Scroll to explore</span>
              <ArrowDown className="w-5 h-5" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Interactive Features Section */}
      <section className="min-h-screen bg-black relative py-24 smooth-transition">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-20"
          >
            <h2 className="text-6xl lg:text-7xl font-light text-white mb-6">
              Designed to Transform
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">
              Blending haute couture sophistication with a contemporary edge, ensuring you stand out in any era.
            </p>
          </motion.div>

          {/* Floating Action Panels */}
          <div className="grid md:grid-cols-3 gap-8 mb-24">
            {[
              {
                icon: Wand2,
                title: 'Generate via Prompt',
                description: 'Describe designs in natural language',
                gradient: 'from-indigo-500 to-purple-500',
                route: '/generate',
                index: 0,
              },
              {
                icon: Upload,
                title: 'Upload Sketch',
                description: 'Transform rough sketches into polished designs',
                gradient: 'from-purple-500 to-pink-500',
                route: '/sketch',
                index: 1,
              },
              {
                icon: Shirt,
                title: 'Try On Fabric',
                description: 'See cloth images on 3D models in real-time',
                gradient: 'from-pink-500 to-red-500',
                route: '/tryon',
                index: 2,
              },
            ].map((panel, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: idx * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => navigate(panel.route)}
              >
                <GlassPanel className="h-full cursor-pointer group">
                  <div className="space-y-6">
                    <div className={`p-4 bg-gradient-to-br ${panel.gradient} rounded-2xl w-fit transition-transform group-hover:scale-110`}>
                      <panel.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-light text-white mb-2">{panel.title}</h3>
                      <p className="text-gray-400 font-light">{panel.description}</p>
                    </div>
                    <div className="pt-4 border-t border-white/10">
                      <span className="text-sm text-indigo-400 group-hover:text-indigo-300 transition-colors">
                        Explore →
                      </span>
                    </div>
                  </div>
                </GlassPanel>
              </motion.div>
            ))}
          </div>

          {/* Material Showcase (Chronothreads inspired) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-12"
          >
            <div className="text-center">
              <h2 className="text-5xl font-light text-white mb-4">Garments</h2>
              <p className="text-gray-400 font-light">Explore our collection of retrofuturistic garments</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: 'Holographic PVC', color: 'from-indigo-500/20 to-purple-500/20', image: '/holographic-pvc.jpg' },
                { name: 'Prism Lucite', color: 'from-purple-500/20 to-pink-500/20', image: '/prism-lucite.jpg' },
                { name: 'Metallic Leather', color: 'from-pink-500/20 to-red-500/20', image: '/metallic-leather.jpg' },
              ].map((material, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9, y: 30 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ delay: idx * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ scale: 1.05, y: -10 }}
                  className="relative h-96 rounded-3xl overflow-hidden cursor-pointer group"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${material.color} backdrop-blur-xl`}></div>
                  <img src={material.image} className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-75 transition-opacity" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <h3 className="text-2xl font-light text-white">{material.name}</h3>
                    </div>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <GlassPanel className="p-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-400">Durability</span>
                        <span className="text-white font-light">82%</span>
                      </div>
                    </GlassPanel>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="min-h-screen bg-gradient-to-b from-black to-indigo-950/50 py-24 smooth-transition">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="grid lg:grid-cols-3 gap-8"
          >
            {[
              {
                title: 'AI Design Generation',
                description: 'LLaMA 3 interprets style and ControlNet generates high-quality 2D concepts',
                icon: Sparkles,
              },
              {
                title: '2D to 3D Conversion',
                description: 'Neural reconstructions transform designs into realistic 3D garments',
                icon: Shirt,
              },
              {
                title: 'Real-Time Try-On',
                description: 'Interactive 3D viewer with physics-based cloth simulation',
                icon: Play,
              },
            ].map((capability, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: idx * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <GlassPanel className="h-full">
                  <div className="space-y-4">
                    <capability.icon className="w-10 h-10 text-indigo-400" />
                    <h3 className="text-2xl font-light text-white">{capability.title}</h3>
                    <p className="text-gray-400 font-light leading-relaxed">{capability.description}</p>
                  </div>
                </GlassPanel>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="min-h-screen bg-gradient-to-b from-indigo-950/50 to-black py-24 relative overflow-hidden smooth-transition">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-purple-500/10 rounded-full blur-[150px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-20"
          >
            <h2 className="text-6xl lg:text-7xl font-light text-white mb-6">
              What Designers Say
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">
              Trusted by independent designers, fashion studios, and apparel manufacturers worldwide
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                name: 'Sarah Chen',
                role: 'Independent Fashion Designer',
                company: 'Chen Studios',
                image: '👩‍🎨',
                rating: 5,
                text: 'TryOnX has revolutionized my design process. The AI understands my vision perfectly and the 3D previews are incredibly realistic. It\'s like having a design assistant that never sleeps.',
              },
              {
                name: 'Marcus Rodriguez',
                role: 'Creative Director',
                company: 'Urban Threads',
                image: '👨‍💼',
                rating: 5,
                text: 'The sketch-to-design feature is mind-blowing. I can quickly iterate on concepts and see them come to life in 3D. This tool has cut our design time in half.',
              },
              {
                name: 'Emma Thompson',
                role: 'Fashion Tech Lead',
                company: 'StyleLab Inc.',
                image: '👩‍💻',
                rating: 5,
                text: 'As someone who works with both traditional and digital fashion, TryOnX bridges that gap beautifully. The fabric simulation and material properties are spot-on.',
              },
              {
                name: 'David Kim',
                role: 'E-commerce Brand Owner',
                company: 'Modern Apparel Co.',
                image: '👨‍💻',
                rating: 5,
                text: 'The virtual try-on feature has transformed how we present products to customers. The 3D models are so realistic that our return rates have dropped significantly.',
              },
              {
                name: 'Isabella Martinez',
                role: 'Fashion Illustrator',
                company: 'Freelance',
                image: '👩‍🎨',
                rating: 5,
                text: 'I love how intuitive the interface is. The AI chatbot helps me explore new design directions I wouldn\'t have thought of. It\'s like having a creative partner.',
              },
              {
                name: 'James Wilson',
                role: 'Apparel Manufacturer',
                company: 'Wilson Textiles',
                image: '👨‍🏭',
                rating: 5,
                text: 'The 2D to 3D conversion is incredibly accurate. We can now visualize garments before production, saving us time and resources. The export features are production-ready.',
              },
            ].map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: idx * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <GlassPanel className="h-full">
                  <div className="space-y-6">
                    {/* Quote Icon */}
                    <div className="flex items-start justify-between">
                      <Quote className="w-8 h-8 text-indigo-400/50" />
                      <div className="flex space-x-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-gray-300 font-light leading-relaxed text-lg">
                      "{testimonial.text}"
                    </p>

                    {/* Author Info */}
                    <div className="pt-6 border-t border-white/10">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-2xl">
                          {testimonial.image}
                        </div>
                        <div>
                          <h4 className="text-white font-medium">{testimonial.name}</h4>
                          <p className="text-sm text-gray-400">{testimonial.role}</p>
                          <p className="text-xs text-indigo-400">{testimonial.company}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </GlassPanel>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-black border-t border-white/5 relative overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-950/20 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 relative z-10">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Brand Column */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative">
                  <Sparkles className="w-10 h-10 text-indigo-400" />
                  <div className="absolute inset-0 bg-indigo-400/20 blur-xl rounded-full"></div>
                </div>
                <span className="text-3xl font-light bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  TryOnX
                </span>
              </div>
              <p className="text-gray-400 font-light leading-relaxed max-w-md mb-6">
                AI-Powered 3D Fashion Designer & Virtual Try-On System. 
                Transcending time, creating fashion that harmonizes timeless elegance with futuristic innovation.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <Twitter className="w-5 h-5 text-gray-400 hover:text-white" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <Linkedin className="w-5 h-5 text-gray-400 hover:text-white" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <Instagram className="w-5 h-5 text-gray-400 hover:text-white" />
                </a>
                <a
                  href="mailto:contact@tryonx.com"
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <Mail className="w-5 h-5 text-gray-400 hover:text-white" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-medium mb-4">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <button
                    onClick={() => navigate('/generate')}
                    className="text-gray-400 hover:text-white font-light transition-colors"
                  >
                    Generate Design
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigate('/sketch')}
                    className="text-gray-400 hover:text-white font-light transition-colors"
                  >
                    Sketch to Design
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigate('/tryon')}
                    className="text-gray-400 hover:text-white font-light transition-colors"
                  >
                    Virtual Try-On
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigate('/chat')}
                    className="text-gray-400 hover:text-white font-light transition-colors"
                  >
                    AI Assistant
                  </button>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-white font-medium mb-4">Resources</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white font-light transition-colors">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white font-light transition-colors">
                    API Reference
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white font-light transition-colors">
                    Tutorials
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white font-light transition-colors">
                    Support
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-white/5">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400 text-sm font-light">
                © {new Date().getFullYear()} TryOnX. All rights reserved.
              </p>
              <div className="flex space-x-6 text-sm">
                <a href="#" className="text-gray-400 hover:text-white font-light transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-400 hover:text-white font-light transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="text-gray-400 hover:text-white font-light transition-colors">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home
