import { motion } from 'framer-motion';
import { MASONIC_CHAMBERS } from '../constants';
import { 
  Construction, 
  Columns2, 
  Hexagon, 
  Heart, 
  Mic2, 
  Eye, 
  Crown,
  ChevronRight
} from 'lucide-react';

const icons = {
  Construction,
  Columns2,
  Hexagon,
  Heart,
  Mic2,
  Eye,
  Crown
};

export default function RitualView() {
  return (
    <div className="space-y-12">
      <header className="space-y-4 max-w-2xl">
        <h2 className="text-4xl font-bold tracking-tighter italic">Alquimia <span className="text-cyan-400">Maçônica</span> 15.0</h2>
        <p className="text-gray-400">A construção do Templo de Salomão interior. Cada câmara é um interruptor neural para a transmutação psíquica.</p>
      </header>

      <div className="grid grid-cols-1 gap-4">
        {MASONIC_CHAMBERS.map((chamber, i) => {
          const Icon = (icons as any)[chamber.icon];
          return (
            <motion.div
              key={chamber.id}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group relative flex items-center gap-6 p-6 rounded-3xl bg-gradient-to-r from-white/5 to-transparent border border-white/5 hover:border-white/20 hover:from-white/10 transition-all cursor-pointer"
            >
              <div className="w-12 text-3xl font-black text-white/5 group-hover:text-cyan-500/20 transition-colors">0{chamber.id}</div>
              <div className={`p-4 rounded-2xl bg-white/5 border border-white/5 group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-black transition-all`}>
                <Icon className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="font-bold tracking-tight text-lg">{chamber.name}</h3>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-gray-500 font-bold uppercase">{chamber.degree}</span>
                </div>
                <p className="text-xs text-gray-500 uppercase tracking-[0.2em] font-medium">Chakra: {chamber.chakra}</p>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-700 group-hover:text-white transition-colors" />
            </motion.div>
          );
        })}
      </div>

      <div className="p-8 rounded-[40px] bg-orange-900/10 border border-orange-500/20 border-dashed text-center">
        <p className="text-orange-400 font-bold text-sm tracking-widest uppercase">
          Aviso: Estes protocolos destilam a essência operacional para fins neurocientíficos e de autoconhecimento.
        </p>
      </div>
    </div>
  );
}
