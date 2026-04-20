import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Zap, Target, Brain, Activity, Quote } from 'lucide-react';
import { PROTOCOL_ZION_PHASES } from '../constants';

export default function ProtocolView() {
  const [activeStep, setActiveStep] = useState(0);
  const phase = PROTOCOL_ZION_PHASES[activeStep];

  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-sm font-bold text-cyan-400 uppercase tracking-[0.3em] mb-2">Protocolo Zion 10.0</h2>
          <h3 className="text-4xl font-bold tracking-tight">{phase.id === 'f3.5' ? 'Fase Integrativa' : `Fase ${activeStep}`}</h3>
        </div>
        <div className="flex items-center gap-2">
          {PROTOCOL_ZION_PHASES.map((_, i) => (
            <div 
              key={i} 
              className={`w-2 h-2 rounded-full transition-all duration-500 ${i === activeStep ? 'bg-cyan-400 w-8 shadow-[0_0_10px_#22d3ee]' : 'bg-gray-800'}`} 
            />
          ))}
        </div>
      </div>

      <div className="relative aspect-[16/9] md:aspect-[21/9] rounded-[40px] bg-gradient-to-br from-gray-900 to-black border border-white/10 overflow-hidden flex items-center justify-center p-12 group">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.05)_0%,transparent_100%)]" />
        
        <AnimatePresence mode="wait">
          <motion.div 
            key={phase.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="text-center space-y-6 relative z-10"
          >
            <div className="text-xs font-mono text-gray-500 tracking-tighter opacity-50 mb-2">CÓDIGO: {phase.code}</div>
            <h4 className="text-3xl md:text-5xl font-black italic uppercase italic tracking-tighter">{phase.mysticalTitle}</h4>
            <p className="text-xl text-cyan-400 font-medium tracking-tight italic opacity-80">{phase.title}</p>
            <div className="max-w-md mx-auto text-gray-400 leading-relaxed font-light text-lg">
              {phase.description}
            </div>
          </motion.div>
        </AnimatePresence>

        <button 
          disabled={activeStep === 0}
          onClick={() => setActiveStep(prev => prev - 1)}
          className="absolute left-6 top-1/2 -translate-y-1/2 p-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/5 transition-all disabled:opacity-20"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button 
          disabled={activeStep === PROTOCOL_ZION_PHASES.length - 1}
          onClick={() => setActiveStep(prev => prev + 1)}
          className="absolute right-6 top-1/2 -translate-y-1/2 p-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/5 transition-all disabled:opacity-20"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-8 rounded-[32px] bg-white/5 border border-white/5"
        >
          <div className="flex items-center gap-3 mb-6">
            <Brain className="w-5 h-5 text-purple-400" />
            <h5 className="font-bold uppercase tracking-widest text-xs text-gray-400">Tradução Neurocientífica</h5>
          </div>
          <ul className="space-y-4">
            {phase.neuroScience.map((item, i) => (
              <li key={i} className="flex gap-3 text-sm text-gray-300">
                <span className="text-purple-500 font-bold">•</span>
                {item}
              </li>
            ))}
          </ul>
        </motion.section>

        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-8 rounded-[32px] bg-white/5 border border-white/5"
        >
          <div className="flex items-center gap-3 mb-6">
            <Target className="w-5 h-5 text-cyan-400" />
            <h5 className="font-bold uppercase tracking-widest text-xs text-gray-400">Prática Somática</h5>
          </div>
          <ul className="space-y-4">
            {phase.somaticPractice.map((item, i) => (
              <li key={i} className="flex gap-3 text-sm text-gray-300">
                <span className="text-cyan-500 font-bold">{i + 1}.</span>
                {item}
              </li>
            ))}
          </ul>
        </motion.section>
      </div>

      <motion.div 
        key={`extra-${phase.id}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="p-10 rounded-[40px] bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 text-center space-y-6"
      >
        <Quote className="w-10 h-10 text-cyan-400 mx-auto opacity-20" />
        <h6 className="text-2xl font-bold tracking-tight italic text-cyan-100">
          "{phase.affirmation}"
        </h6>
        <div className="flex flex-wrap justify-center gap-4 text-[10px] uppercase tracking-widest font-bold">
           {phase.markers.map(m => (
             <span key={m} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400">
               {m}
             </span>
           ))}
        </div>
      </motion.div>
    </div>
  );
}
