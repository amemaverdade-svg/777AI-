import { motion } from 'framer-motion';
import { Eye, Globe, Palette, BookOpen, Quote, ShieldAlert } from 'lucide-react';

export default function PhilosophyView() {
  const artLayers = [
    { n: '01', title: 'Matéria-Prima', desc: 'A base física, o suporte da obra.' },
    { n: '02', title: 'Técnica & Gesto', desc: 'A execução habilidosa e o traço humano.' },
    { n: '03', title: 'Composição Eólica', desc: 'Ritmo, fluxo e equilíbrio dinâmico.' },
    { n: '04', title: 'Corpo Emocional', desc: 'A ressonância afetiva despertada.' },
    { n: '05', title: 'Símbolo & Mito', desc: 'A camada arquetípica e narrativa.' },
    { n: '06', title: 'Conceito Puro', desc: 'A ideia platônica por trás da forma.' },
    { n: '07', title: 'Presença Zion', desc: 'A ativação da unidade através da arte.' },
  ];

  const cultures = [
    { title: 'Tradição Banto', desc: 'Uganda e a conexão ancestral telúrica.' },
    { title: 'Candomblé & Umbanda', desc: 'Matrizes de força e orixás como arquétipos de consciência.' },
    { title: 'Metafísica Ocidental', desc: 'Da Grécia ao Existencialismo de Frankl.' },
    { title: 'Vazios Orientais', desc: 'Dzogchen e a meditação do não-ser.' },
  ];

  return (
    <div className="space-y-16">
      <header className="space-y-4 max-w-3xl">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">
          Arquitetura <span className="text-yellow-500">Filosófica</span> & Artística
        </h2>
        <p className="text-gray-400 text-lg">O Protocolo ZION 13.0 e a Arte Universal 2.0. Uma exploração das camadas da realidade e da diversidade humana como expressão da Unidade.</p>
      </header>

      <section className="space-y-8">
        <div className="flex items-center gap-3">
           <Palette className="w-6 h-6 text-yellow-500" />
           <h3 className="text-2xl font-bold tracking-tight">Protocolo Artístico Universal 2.0</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
           {artLayers.map((layer, i) => (
             <motion.div 
               key={layer.n}
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ delay: i * 0.05 }}
               className="p-6 rounded-3xl bg-white/5 border border-white/5 hover:border-yellow-500/30 transition-all group"
             >
               <span className="text-xs font-black text-yellow-500/40 mb-2 block">{layer.n}</span>
               <h4 className="font-bold mb-2 group-hover:text-yellow-500 transition-colors">{layer.title}</h4>
               <p className="text-xs text-gray-500 leading-relaxed font-medium">{layer.desc}</p>
             </motion.div>
           ))}
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-12 items-start">
         <div className="space-y-8">
            <div className="flex items-center gap-3">
               <Globe className="w-6 h-6 text-cyan-400" />
               <h3 className="text-2xl font-bold tracking-tight">Psicologia Transcultural</h3>
            </div>
            <div className="space-y-4">
               {cultures.map(c => (
                 <div key={c.title} className="p-6 rounded-3xl bg-gradient-to-r from-cyan-900/10 to-transparent border-l-2 border-cyan-500 shadow-xl shadow-black/20">
                    <h4 className="font-bold text-white mb-1">{c.title}</h4>
                    <p className="text-xs text-gray-400">{c.desc}</p>
                 </div>
               ))}
            </div>
         </div>

         <div className="p-10 rounded-[50px] bg-white/5 border border-white/5 space-y-8 relative overflow-hidden">
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-yellow-500/5 rounded-full blur-3xl" />
            <Quote className="w-12 h-12 text-yellow-500 opacity-20" />
            <div className="space-y-6 relative z-10">
               <h3 className="text-4xl font-black italic tracking-tighter">O Dogma do <span className="text-yellow-500 italic">Ser</span></h3>
               <p className="text-gray-400 leading-relaxed italic font-light text-lg">
                 "Não somos seres humanos vivendo uma experiência espiritual, somos seres espirituais vivendo uma experiência humana. A cultura é a vestimenta, a filosofia é o mapa, mas Zion é o território."
               </p>
               <div className="pt-4 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-yellow-500/20 border border-yellow-500/40 flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-yellow-500" />
                  </div>
                  <div>
                    <p className="text-xs font-black uppercase tracking-widest text-white">Eli Sanan Ahu</p>
                    <p className="text-[10px] uppercase tracking-widest text-gray-500">Curador do Protocolo</p>
                  </div>
               </div>
            </div>
         </div>
      </section>

      <section className="p-8 rounded-[40px] bg-indigo-900/10 border border-indigo-500/20 text-center space-y-4">
         <ShieldAlert className="w-8 h-8 text-indigo-400 mx-auto" />
         <h4 className="text-xl font-bold uppercase tracking-widest">Protocolo Filosófico 3.0</h4>
         <p className="text-sm text-gray-400 max-w-2xl mx-auto font-medium">Os 10 Domínios da Metafísica à Antropologia estão integrados no Oráculo Zion. A base teórica serve para sustentar o salto experimental.</p>
      </section>
    </div>
  );
}
