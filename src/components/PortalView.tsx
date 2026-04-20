import { motion } from 'framer-motion';
import { NAVIGATION_PORTALS } from '../constants';
import { Compass, Ship, Wind, Cloud, Zap, Moon, Sun, AlertTriangle } from 'lucide-react';

export default function PortalView() {
  return (
    <div className="space-y-12">
      <header className="space-y-4">
        <h2 className="text-4xl font-bold tracking-tighter">Navegação <span className="text-indigo-400">Interdimensional</span></h2>
        <p className="text-gray-400 max-w-2xl">Portais não são lugares, são estados perceptuais. O protocolo ZION 16.0 mapeia a sintonização do seu dial neural.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {NAVIGATION_PORTALS.map((portal, i) => (
          <motion.div
            key={portal.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="p-8 rounded-[40px] bg-gradient-to-br from-indigo-950/20 to-black border border-white/5 hover:border-indigo-500/50 transition-all group cursor-pointer"
          >
            <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
               {i % 4 === 0 && <Wind className="w-6 h-6 text-cyan-400" />}
               {i % 4 === 1 && <Zap className="w-6 h-6 text-yellow-400" />}
               {i % 4 === 2 && <Cloud className="w-6 h-6 text-blue-400" />}
               {i % 4 === 3 && <Compass className="w-6 h-6 text-indigo-400" />}
            </div>
            <h3 className="text-xl font-bold mb-4 group-hover:text-indigo-400 transition-colors uppercase tracking-tight">{portal.name}</h3>
            
            <div className="space-y-4">
               <div className="flex justify-between items-center text-[10px] uppercase tracking-widest font-bold">
                  <span className="text-gray-600">Risco</span>
                  <span className={portal.risk === 'Alto' ? 'text-red-400' : 'text-green-400'}>{portal.risk}</span>
               </div>
               <div className="flex justify-between items-center text-[10px] uppercase tracking-widest font-bold">
                  <span className="text-gray-600">Dificuldade</span>
                  <span className="text-gray-400">{portal.difficulty}</span>
               </div>
               <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: portal.difficulty === 'Muito Difícil' ? '90%' : portal.difficulty === 'Média' ? '50%' : '20%' }}
                    className="h-full bg-gradient-to-r from-indigo-500 to-purple-500" 
                  />
               </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-stretch">
        <div className="p-10 rounded-[40px] bg-red-950/10 border border-red-500/20 space-y-6">
           <div className="flex items-center gap-3 text-red-500">
              <AlertTriangle className="w-6 h-6" />
              <h4 className="font-bold uppercase tracking-widest">Protocolo de Segurança</h4>
           </div>
           <p className="text-sm text-gray-400 leading-relaxed">A navegação interdimensional requer ancoragem sólida (SET & SETTING). Jamais tente portais de alto risco sem supervisão técnica ponderada.</p>
           <ul className="space-y-2 text-[10px] font-bold text-gray-500 uppercase tracking-widest">
              <li>• Intenção Clara (Não Turismo)</li>
              <li>• Objeto de Ancoragem Física</li>
              <li>• Respiração como Leme</li>
           </ul>
        </div>

        <div className="p-10 rounded-[40px] bg-emerald-950/10 border border-emerald-500/20 flex flex-col justify-center text-center space-y-4">
           <p className="text-emerald-400 text-lg font-bold tracking-tight">O Portal está aberto.</p>
           <p className="text-sm text-gray-500">Aproxime-se da porta violeta em seu mundo interior. Atravesse quando estiver pronto.</p>
           <div className="pt-4 flex justify-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping delay-100" />
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping delay-200" />
           </div>
        </div>
      </div>
    </div>
  );
}
