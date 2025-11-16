import { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface GlassPanelProps {
  children: ReactNode
  className?: string
  onClick?: () => void
}

function GlassPanel({ children, className = '', onClick }: GlassPanelProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onClick={onClick}
      className={`
        backdrop-blur-[40px] saturate-180
        bg-gradient-to-br from-white/10 via-white/5 to-transparent
        border border-white/20
        rounded-3xl
        shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]
        hover:bg-white/15 hover:border-white/30
        transition-all duration-500
        ${onClick ? 'cursor-pointer' : ''}
        ${className}
      `}
      whileHover={onClick ? { scale: 1.02, y: -5 } : {}}
      whileTap={onClick ? { scale: 0.98 } : {}}
    >
      {children}
    </motion.div>
  )
}

export default GlassPanel

