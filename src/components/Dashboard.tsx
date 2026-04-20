import { motion } from 'framer-motion';
import { Shield, Wind, Activity, Layers, Compass, MessageSquare, Zap, Sun } from 'lucide-react';
import { View } from '../types';
import ChatAI777 from './ChatAI777';

export default function Dashboard({ onNavigate }: { onNavigate: (v: View) => void }) {
  const stats = [
    { label: 'Sincronicidade', value: '94%', color: 'text-cyan-400' },
    { label: 'Eixo Telúrico', value: 'Estável', color: 'text-green-400' },
    { label: 'Fase Lunar', value: 'Crescente', color: 'text-purple-400' },
    { label: 'Nível Gamma', value: '42 Hz', color: 'text-blue-400' },
  ];

  const quickActions = [
    { id: 'protocols', label: 'Iniciar Zion 10.0', icon: Wind, desc: 'Fases 0-8 de ativação neuro-mística.' },
    { id: 'rituals', label: 'Alquimia Maçônica', icon: Layers, desc: 'Ritualística das 7 Câmaras do Templo.' },
    { id: 'oracle', label: 'Consultar Oráculo', icon: MessageSquare, desc: 'Meta-gerador de prompts e filosofia.' },
  ];

  return (
    <div className="space-y-12">
      <header className="space-y-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-2 pr-3 py-1 pl-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold tracking-widest uppercase overflow-hidden"
        >
          <div className="w-5 h-5 rounded-full overflow-hidden border border-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.6)]">
            <img src="https://images.unsplash.com/photo-1614728263952-84ea256f9679?q=80&w=2544&auto=format&fit=crop" alt="777" className="w-full h-full object-cover saturate-150" referrerPolicy="no-referrer" />
          </div>
          Protocolo Zion Ativado
        </motion.div>
        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">
          Convergência <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600">Total</span>.
        </h2>
        <p className="text-gray-400 max-w-xl text-lg leading-relaxed">
          Bem-vindo ao centro de comando da sua evolução. Onde misticismo, ciência e arte se fundem em um campo de consciência pura.
        </p>
      </header>

      <ChatAI777 />

      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="p-6 rounded-3xl bg-white/5 border border-white/5 backdrop-blur-sm"
          >
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-1">{stat.label}</p>
            <p className={`text-3xl font-bold tracking-tight ${stat.color}`}>{stat.value}</p>
          </motion.div>
        ))}
      </section>

      <section className="grid md:grid-cols-3 gap-6">
        {quickActions.map((action, i) => (
          <button
            key={action.id}
            onClick={() => onNavigate(action.id as View)}
            className="text-left p-8 rounded-[40px] bg-gradient-to-br from-gray-900 to-black border border-white/5 hover:border-white/20 transition-all group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <action.icon className="w-32 h-32" />
            </div>
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-6 border border-white/10 group-hover:bg-cyan-500 group-hover:text-black transition-all">
                <action.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">{action.label}</h3>
              <p className="text-sm text-gray-500 line-clamp-2">{action.desc}</p>
            </div>
          </button>
        ))}
      </section>

      <section className="p-8 rounded-[40px] bg-gradient-to-r from-cyan-900/20 to-blue-900/20 border border-white/5">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 space-y-4 text-center md:text-left">
            <h3 className="text-2xl font-bold flex items-center gap-3 justify-center md:justify-start">
              <Sun className="w-6 h-6 text-yellow-400" />
              Estado do Ciclo Solar
            </h3>
            <p className="text-gray-400">
              A rádio-frequência heliográfica está em 144MHz. Excelente para práticas de expansão Merkabah e recalibração celular turquesa.
            </p>
            <button 
              onClick={() => onNavigate('protocols')}
              className="px-6 py-3 rounded-full bg-white text-black font-bold text-sm tracking-tight hover:bg-cyan-400 transition-all"
            >
              Iniciar Sintonização
            </button>
          </div>
          <div className="w-48 h-48 rounded-full border-2 border-dashed border-cyan-500/30 flex items-center justify-center animate-[spin_20s_linear_infinite]">
             <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600 blur-2xl opacity-40" />
          </div>
        </div>
      </section>
    </div>
  );
}
