import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Shield, 
  Wind, 
  Zap, 
  Sun, 
  Moon, 
  Activity, 
  Compass, 
  MessageSquare, 
  Layers,
  Heart,
  ChevronRight,
  Menu,
  X,
  Dna,
  Eye,
  Crown
} from 'lucide-react';
import { View } from './types';
import Dashboard from './components/Dashboard';
import ProtocolView from './components/ProtocolView';
import MeasurementView from './components/MeasurementView';
import RitualView from './components/RitualView';
import PortalView from './components/PortalView';
import PhilosophyView from './components/PhilosophyView';
import OracleView from './components/OracleView';

export default function App() {
  const [currentView, setCurrentView] = useState<View>('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Shield },
    { id: 'protocols', label: 'ZION 10.0', icon: Wind },
    { id: 'measurements', label: 'Mensuração', icon: Activity },
    { id: 'rituals', label: 'Alquimia Maçônica', icon: Layers },
    { id: 'portals', label: 'Navegação', icon: Compass },
    { id: 'philosophy', label: 'Filosofia & Arte', icon: Eye },
    { id: 'oracle', label: 'Oráculo ZION', icon: MessageSquare },
  ];

  useEffect(() => {
    // Basic body locking for mobile menu
    if (isSidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isSidebarOpen]);

  return (
    <div className="min-h-screen bg-[#050505] text-gray-100 font-sans selection:bg-cyan-500/30 overflow-x-hidden">
      {/* Background Atmosphere */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden isolate">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-cyan-900/10 rounded-full blur-[140px] opacity-20" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-900/10 rounded-full blur-[140px] opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(16,18,20,1)_0%,rgba(5,5,5,1)_100%)]" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-5 mix-blend-overlay"></div>
      </div>

      {/* Sidebar / Navigation */}
      <nav className={`fixed inset-y-0 left-0 z-50 w-72 bg-black/80 backdrop-blur-3xl border-r border-white/5 transform transition-transform duration-500 cubic-bezier(0.4, 0, 0.2, 1) ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}>
        <div className="flex flex-col h-full p-8">
          <div className="flex items-center gap-4 mb-14 px-1">
            <div className="w-12 h-12 bg-black rounded-2xl overflow-hidden flex items-center justify-center shadow-[0_0_25px_rgba(34,211,238,0.3)] border border-cyan-400 group-hover:border-cyan-300 transition-all duration-700 relative">
              <div className="absolute inset-0 bg-cyan-500/5 animate-pulse" />
              <img src="https://images.unsplash.com/photo-1614728263952-84ea256f9679?q=80&w=2544&auto=format&fit=crop" alt="Logo" className="w-full h-full object-cover saturate-150 brightness-110" referrerPolicy="no-referrer" />
            </div>
            <div>
              <h1 className="font-black text-2xl tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-500">
                ZION
              </h1>
              <p className="text-[9px] uppercase tracking-[0.4em] text-cyan-500 font-black leading-none">Protocol</p>
            </div>
          </div>

          <div className="space-y-2 flex-1 overflow-y-auto pr-2 no-scrollbar">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setCurrentView(item.id as View);
                  setIsSidebarOpen(false);
                }}
                className={`w-full flex items-center gap-4 px-5 py-4 rounded-2xl transition-all group relative overflow-hidden ${
                  currentView === item.id 
                    ? 'text-white' 
                    : 'text-gray-500 hover:text-gray-200'
                }`}
              >
                {currentView === item.id && (
                  <motion.div 
                    layoutId="sidebar-accent" 
                    className="absolute inset-0 bg-white/10 ring-1 ring-white/10" 
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <item.icon className={`w-5 h-5 relative z-10 transition-transform duration-500 ${currentView === item.id ? 'scale-110 text-cyan-400' : 'group-hover:scale-110'}`} />
                <span className="font-bold tracking-tight relative z-10 text-sm italic">{item.label}</span>
                {currentView === item.id && (
                  <motion.div 
                    layoutId="active-dot" 
                    className="ml-auto w-1 h-1 rounded-full bg-cyan-400 relative z-10 shadow-[0_0_8px_#22d3ee]" 
                  />
                )}
              </button>
            ))}
          </div>

          <div className="mt-8 pt-8 border-t border-white/5">
            <div className="p-6 rounded-3xl bg-gradient-to-br from-gray-900 to-black border border-white/5 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_#22c55e]" />
                <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Status Quântico</span>
              </div>
              <div className="space-y-1">
                 <div className="flex justify-between text-[8px] font-black uppercase text-gray-600">
                    <span>Sincronicidade</span>
                    <span className="text-cyan-400">98.2%</span>
                 </div>
                 <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-cyan-500 w-[98.2%]" />
                 </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Header */}
      <header className="lg:hidden fixed top-0 inset-x-0 z-40 bg-black/60 backdrop-blur-2xl border-b border-white/5 p-4 flex items-center justify-between">
         <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg overflow-hidden border border-white/10">
              <img src="https://images.unsplash.com/photo-1614728263952-84ea256f9679?q=80&w=2544&auto=format&fit=crop" alt="Logo" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <span className="font-black tracking-tighter text-xl italic uppercase">ZION</span>
         </div>
         <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-3 rounded-xl bg-white/5 border border-white/10 text-gray-400 active:scale-95 transition-all">
            {isSidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
         </button>
      </header>

      {/* Main Content Area */}
      <main className="lg:pl-72 min-h-screen relative z-10">
        <div className="max-w-6xl mx-auto p-6 md:p-12 pt-28 lg:pt-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentView}
              initial={{ opacity: 0, filter: 'blur(10px)', y: 30 }}
              animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
              exit={{ opacity: 0, filter: 'blur(10px)', y: -30 }}
              transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
            >
              <div className="pb-12 border-b border-white/5 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
                 <div>
                    <h2 className="text-gray-500 font-black uppercase tracking-[0.4em] text-[10px] mb-2">{currentView.replace('-', ' ')}</h2>
                    <div className="flex items-center gap-4">
                       <Shield className="w-10 h-10 text-cyan-500 opacity-20" />
                       <div className="h-10 w-[1px] bg-white/5 md:block hidden" />
                       <p className="text-xs font-mono text-gray-700 tracking-tighter">ID_PROTOCOL_ZION_V16_SESSION_{new Date().getFullYear()}</p>
                    </div>
                 </div>
                 <div className="flex gap-2">
                    <div className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-widest text-gray-500">
                       Safe Mode: OFF
                    </div>
                    <div className="px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-[10px] font-black uppercase tracking-widest text-cyan-400">
                       Live Node: 0333
                    </div>
                 </div>
              </div>

              {currentView === 'dashboard' && <Dashboard onNavigate={setCurrentView} />}
              {currentView === 'protocols' && <ProtocolView />}
              {currentView === 'measurements' && <MeasurementView />}
              {currentView === 'rituals' && <RitualView />}
              {currentView === 'portals' && <PortalView />}
              {currentView === 'philosophy' && <PhilosophyView />}
              {currentView === 'oracle' && <OracleView />}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      <footer className="lg:pl-72 p-12 text-center relative z-10">
        <div className="h-[1px] w-24 bg-white/5 mx-auto mb-8" />
        <p className="text-[10px] text-gray-700 uppercase tracking-[0.5em] font-black">
          Protocolo Zion • Transmutação Através da Frequência • 2026
        </p>
      </footer>
    </div>
  );
}
