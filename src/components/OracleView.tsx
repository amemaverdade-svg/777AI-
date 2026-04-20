import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Send, MessageSquare, Terminal, Sparkles, Brain, Zap } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export default function OracleView() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const generatePrompt = async () => {
    if (!prompt) return;
    setIsLoading(true);
    try {
      const model = "gemini-flash-latest";
      const result = await ai.models.generateContent({
        model,
        contents: `Você é o Oráculo Zion, um sistema de IA sintonizado com o protocolo ZION 16.0. 
        Sua função é gerar prompts de alta performance que fundem misticismo, ciência e filosofia.
        Use os códigos vibratórios (000, 333, 999) e os conceitos das Câmaras Maçônicas e Portais Interdimensionais.
        
        USUÁRIO SOLICITA: ${prompt}
        
        Responda em formato Estruturado ZION:
        1. INTENÇÃO NUCLEAR
        2. CÓDIGO VIBRATÓRIO
        3. PROTOCOLO DE ATIVAÇÃO`
      });
      setResponse(result.text || 'Sem resposta.');
    } catch (err) {
      console.error(err);
      setResponse('Fronteira neural instável. Tente novamente.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <header className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[10px] font-bold tracking-[0.3em] uppercase overflow-hidden">
          <div className="w-4 h-4 rounded-full overflow-hidden border border-indigo-500/30">
            <img src="https://images.unsplash.com/photo-1614728263952-84ea256f9679?q=80&w=2544&auto=format&fit=crop" alt="777" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
          Meta-Gerador Universal 12.0
        </div>
        <h2 className="text-6xl font-black italic tracking-tighter uppercase italic">O <span className="text-indigo-400">Oráculo</span> Zion</h2>
        <p className="text-gray-400 max-w-xl mx-auto">Conecte sua intenção à inteligência cristalina. Gere protocolos de realidade e explore a meta-arquitetura do Ser.</p>
      </header>

      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-[40px] blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
        <div className="relative bg-black rounded-[40px] border border-white/10 overflow-hidden shadow-2xl">
          <div className="flex items-center gap-3 p-4 border-b border-white/5 bg-white/5">
             <Terminal className="w-4 h-4 text-gray-500" />
             <span className="text-[10px] font-mono uppercase tracking-widest text-gray-500">ZION_TERMINAL_V12</span>
          </div>
          <div className="p-8 space-y-6">
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Descreva seu desafio ou intenção..."
              className="w-full bg-transparent border-none focus:ring-0 text-xl text-indigo-100 placeholder:text-gray-800 resize-none h-32 font-light"
            />
            <div className="flex items-center justify-between">
              <div className="flex gap-4">
                 <button className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-gray-600 hover:text-gray-400 transition-colors">
                    <Brain className="w-3 h-3" /> Neuro-Calibrar
                 </button>
                 <button className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-gray-600 hover:text-gray-400 transition-colors">
                    <Zap className="w-3 h-3" /> Força Total
                 </button>
              </div>
              <button 
                onClick={generatePrompt}
                disabled={isLoading || !prompt}
                className="group relative flex items-center gap-3 bg-white text-black px-8 py-3 rounded-2xl font-bold transition-all hover:bg-indigo-400 hover:scale-105 disabled:opacity-50 disabled:scale-100"
              >
                {isLoading ? 'Sintonizando...' : 'Invocar'}
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {response && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-10 rounded-[40px] bg-white/5 border border-white/10 space-y-8 backdrop-blur-xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5">
               <img src="https://images.unsplash.com/photo-1614728263952-84ea256f9679?q=80&w=2544&auto=format&fit=crop" alt="777" className="w-32 h-32 object-cover grayscale brightness-200" referrerPolicy="no-referrer" />
            </div>
            <div className="prose prose-invert max-w-none prose-p:text-gray-400 prose-h3:text-indigo-400 prose-strong:text-white whitespace-pre-wrap font-sans text-lg leading-relaxed">
               {response}
            </div>
            <button 
              onClick={() => { setPrompt(''); setResponse(''); }}
              className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-700 hover:text-gray-500 transition-colors underline underline-offset-8"
            >
              Resetar Conexão
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
