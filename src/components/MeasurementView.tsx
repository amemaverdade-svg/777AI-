import { useState } from 'react';
import { motion } from 'framer-motion';
import { Activity, Heart, Brain, Moon, Info, Calendar } from 'lucide-react';

export default function MeasurementView() {
  const [metrics, setMetrics] = useState([
    { id: 'hrv', label: 'HRV (RMSSD)', value: 65, unit: 'ms', color: 'text-green-400' },
    { id: 'gamma', label: 'Gamma Waves', value: 42, unit: 'Hz', color: 'text-blue-400' },
    { id: 'cortisol', label: 'Bio-Cortisol', value: 12, unit: 'ng/ml', color: 'text-yellow-400' },
    { id: 'sync', label: 'Sync Coherence', value: 89, unit: '%', color: 'text-cyan-400' },
  ]);

  return (
    <div className="space-y-12">
      <header className="space-y-4">
        <h2 className="text-4xl font-bold tracking-tighter">Bio-Mensuração <span className="text-cyan-500">Zion</span></h2>
        <p className="text-gray-400 max-w-2xl">Mantenha o controle da sua recalibração celular. O protocolo ZION 11.1 integra métricas quantitativas com sua jornada mística.</p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, i) => (
          <motion.div
            key={metric.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="p-8 rounded-[32px] bg-white/5 border border-white/5 hover:border-white/20 transition-all flex flex-col justify-between"
          >
            <div className="flex justify-between items-start mb-6">
               <div className={`p-3 rounded-2xl bg-white/10 ${metric.color}`}>
                  {metric.id === 'hrv' && <Heart className="w-5 h-5" />}
                  {metric.id === 'gamma' && <Brain className="w-5 h-5" />}
                  {metric.id === 'cortisol' && <Activity className="w-5 h-5" />}
                  {metric.id === 'sync' && <Calendar className="w-5 h-5" />}
               </div>
               <Info className="w-4 h-4 text-gray-700 cursor-help" />
            </div>
            <div>
               <p className="text-[10px] uppercase font-bold tracking-[0.2em] text-gray-500 mb-1">{metric.label}</p>
               <div className="flex items-baseline gap-2">
                  <span className={`text-4xl font-bold tracking-tighter ${metric.color}`}>{metric.value}</span>
                  <span className="text-gray-600 font-medium text-sm">{metric.unit}</span>
               </div>
            </div>
          </motion.div>
        ))}
      </section>

      <div className="grid md:grid-cols-2 gap-8">
         <section className="p-8 rounded-[40px] bg-gradient-to-br from-indigo-900/20 to-black border border-white/5 relative overflow-hidden">
            <div className="relative z-10 space-y-6">
               <div className="flex items-center gap-3">
                  <Moon className="w-6 h-6 text-purple-400" />
                  <h3 className="text-2xl font-bold tracking-tight text-white">Ciclo Lunar 11.1</h3>
               </div>
               <p className="text-gray-400 leading-relaxed text-sm">Sincronize sua prática com as energias planetárias. A lua atual está em fase **Crescente**, ideal para rituais de expansão e manifestação.</p>
               <div className="flex gap-2">
                 {['Nova', 'Crescente', 'Cheia', 'Minguante'].map(phase => (
                   <div key={phase} className={`flex-1 p-3 rounded-xl border text-[10px] font-bold text-center uppercase tracking-widest ${phase === 'Crescente' ? 'bg-purple-500/20 border-purple-500/40 text-purple-200' : 'bg-white/5 border-white/5 text-gray-600'}`}>
                     {phase}
                   </div>
                 ))}
               </div>
            </div>
         </section>

         <section className="p-8 rounded-[40px] bg-gradient-to-br from-cyan-900/20 to-black border border-white/5 space-y-6">
            <h3 className="text-2xl font-bold tracking-tight text-white">Testes Psicométricos</h3>
            <p className="text-gray-400 text-sm">Questionários validados para medir sua evolução emocional e resiliência espiritual.</p>
            <div className="space-y-3">
               {['DERS - Regulação Emocional', 'SCS - Autocompaixão', 'FFMQ - Mindfulness', 'PIL - Propósito de Vida'].map(test => (
                 <button key={test} className="w-full p-4 rounded-2xl bg-white/5 hover:bg-white/10 text-left text-xs font-bold uppercase tracking-widest text-gray-300 transition-all border border-transparent hover:border-white/10">
                   {test}
                 </button>
               ))}
            </div>
         </section>
      </div>
    </div>
  );
}
