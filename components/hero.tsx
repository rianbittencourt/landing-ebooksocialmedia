import { Download, Play } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/50 to-gray-900"></div>

      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-600/5 to-pink-600/5 rounded-full blur-3xl animate-spin-slow"></div>
      </div>

      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-purple-400/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          <div className="inline-block mb-8">
            <div className="px-6 py-3 bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-full text-purple-300 text-sm font-medium backdrop-blur-sm">
              💰 Método Comprovado • +50K Pessoas Transformadas
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight mb-8">
            Transforme suas
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 animate-gradient">
              Redes Sociais
            </span>
            <br />
            em Máquinas de
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
              {" "}
              Dinheiro
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-12 max-w-4xl mx-auto">
            Descubra as estratégias secretas que influenciadores usam para
            faturar{" "}
            <span className="text-green-400 font-bold">milhares por mês</span>.
            Um guia completo para monetizar Instagram, TikTok, YouTube e muito
            mais.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button className="group bg-gradient-to-r from-purple-600 to-pink-600 text-white px-10 py-5 rounded-xl font-bold text-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center gap-3">
              <Download className="w-6 h-6 group-hover:animate-bounce" />
              BAIXAR AGORA - R$ 47
            </button>
            <button className="group border-2 border-gray-600 text-white px-10 py-5 rounded-xl font-bold text-xl hover:bg-gray-800 hover:border-purple-500 transition-all duration-300 flex items-center gap-3">
              <Play className="w-6 h-6" />
              Ver Demonstração
            </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            <div className="text-center p-6 bg-gray-900/50 rounded-xl border border-gray-700/50 backdrop-blur-sm">
              <div className="text-3xl font-bold text-green-400 mb-2">
                R$ 50K+
              </div>
              <div className="text-gray-400 text-sm">Faturamento/mês</div>
            </div>
            <div className="text-center p-6 bg-gray-900/50 rounded-xl border border-gray-700/50 backdrop-blur-sm">
              <div className="text-3xl font-bold text-purple-400 mb-2">
                10K+
              </div>
              <div className="text-gray-400 text-sm">Alunos</div>
            </div>
            <div className="text-center p-6 bg-gray-900/50 rounded-xl border border-gray-700/50 backdrop-blur-sm">
              <div className="text-3xl font-bold text-pink-400 mb-2">200+</div>
              <div className="text-gray-400 text-sm">Estratégias</div>
            </div>
            <div className="text-center p-6 bg-gray-900/50 rounded-xl border border-gray-700/50 backdrop-blur-sm">
              <div className="text-3xl font-bold text-yellow-400 mb-2">
                4.9★
              </div>
              <div className="text-gray-400 text-sm">Avaliação</div>
            </div>
          </div>

          <div className="mt-16 relative">
            <div className="relative z-10 max-w-md mx-auto">
              <Image
                src="/main.png"
                alt="Ebook Cover"
                width={400}
                height={600}
                className="mx-auto rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg blur-3xl animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
