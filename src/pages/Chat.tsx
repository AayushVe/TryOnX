import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { MessageCircle, Send, Bot, User, Sparkles } from 'lucide-react'
import GlassPanel from '../components/GlassPanel'

interface Message {
  id: string
  text: string
  sender: 'user' | 'bot'
  timestamp: Date
}

function Chat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I'm your AI fashion assistant. I can help with design suggestions, fabric recommendations, style corrections, and technical questions. What would you like to know?",
      sender: 'bot',
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSend = async () => {
    if (!input.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: 'user',
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput('')
    setIsTyping(true)

    // Simulate AI response - replace with actual API call
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "That's a great question! Based on your description, I'd recommend considering the fabric weight and drape. For a pastel draped top, I suggest using lightweight materials like chiffon or silk for better flow. Would you like me to suggest specific color palettes or help refine the design further?",
        sender: 'bot',
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botMessage])
      setIsTyping(false)
    }, 1500)
  }

  const quickQuestions = [
    'What fabrics work best for summer dresses?',
    'How do I choose colors for my design?',
    'What is the difference between draping and structured designs?',
    'Can you suggest accessories for this outfit?',
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 pt-24 pb-16">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center space-x-2 mb-4">
              <MessageCircle className="w-8 h-8 text-indigo-400" />
              <h1 className="text-5xl font-bold text-white">AI Fashion Assistant</h1>
            </div>
            <p className="text-xl text-gray-300">
              Get design suggestions, fabric recommendations, and style advice from our 
              fashion-specialized LLM assistant powered by LLaMA 3.
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-6">
            {/* Chat Panel */}
            <div className="lg:col-span-3">
              <GlassPanel className="h-[600px] flex flex-col">
                {/* Messages */}
                <div className="flex-1 overflow-y-auto space-y-4 mb-4 pr-2">
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex items-start space-x-3 ${
                        message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                      }`}
                    >
                      <div
                        className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
                          message.sender === 'user'
                            ? 'bg-indigo-500'
                            : 'bg-gradient-to-br from-purple-500 to-pink-500'
                        }`}
                      >
                        {message.sender === 'user' ? (
                          <User className="w-5 h-5 text-white" />
                        ) : (
                          <Bot className="w-5 h-5 text-white" />
                        )}
                      </div>
                      <div
                        className={`flex-1 rounded-2xl px-4 py-3 ${
                          message.sender === 'user'
                            ? 'bg-indigo-500/30 text-white'
                            : 'bg-white/10 text-gray-200'
                        }`}
                      >
                        <p className="text-sm leading-relaxed">{message.text}</p>
                        <p className="text-xs mt-2 opacity-60">
                          {message.timestamp.toLocaleTimeString()}
                        </p>
                      </div>
                    </motion.div>
                  ))}

                  {isTyping && (
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                        <Bot className="w-5 h-5 text-white" />
                      </div>
                      <div className="bg-white/10 rounded-2xl px-4 py-3">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                      </div>
                    </div>
                  )}

                  <div ref={messagesEndRef} />
                </div>

                {/* Input */}
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                    placeholder="Ask me anything about fashion design..."
                    className="flex-1 px-4 py-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                  <button
                    onClick={handleSend}
                    disabled={!input.trim() || isTyping}
                    className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-xl hover:from-indigo-600 hover:to-purple-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send className="w-5 h-5" />
                  </button>
                </div>
              </GlassPanel>
            </div>

            {/* Quick Questions Sidebar */}
            <div>
              <GlassPanel>
                <div className="flex items-center space-x-2 mb-4">
                  <Sparkles className="w-5 h-5 text-indigo-400" />
                  <h3 className="text-white font-semibold">Quick Questions</h3>
                </div>
                <div className="space-y-2">
                  {quickQuestions.map((question, idx) => (
                    <button
                      key={idx}
                      onClick={() => setInput(question)}
                      className="w-full text-left px-3 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-sm text-gray-300 hover:text-white transition-all"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </GlassPanel>

              <GlassPanel className="mt-6">
                <h3 className="text-white font-semibold mb-3">Capabilities</h3>
                <div className="space-y-2 text-sm text-gray-300">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
                    <span>Design suggestions</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
                    <span>Fabric recommendations</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
                    <span>Style corrections</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
                    <span>Technical questions</span>
                  </div>
                </div>
              </GlassPanel>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Chat


