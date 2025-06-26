import { Check, X, Crown, Zap } from "lucide-react";

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Escolha Seu Caminho para o Poder
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Investimento mínimo para conhecimento máximo. Escolha o plano que
            melhor se adapta à sua jornada.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="p-8 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 relative">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">
                Iniciante Digital
              </h3>
              <p className="text-gray-400 mb-4">Para quem está começando</p>
              <div className="text-4xl font-bold text-white mb-2">
                R$ 47
                <span className="text-lg text-gray-400 font-normal">
                  /único
                </span>
              </div>
              <div className="text-gray-400 line-through">De R$ 97</div>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">
                  Ebook completo (200+ páginas)
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">Templates de posts virais</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">
                  Planilha de controle de resultados
                </span>
              </li>
              <li className="flex items-center gap-3">
                <X className="w-5 h-5 text-red-400" />
                <span className="text-gray-500">Bônus exclusivos</span>
              </li>
              <li className="flex items-center gap-3">
                <X className="w-5 h-5 text-red-400" />
                <span className="text-gray-500">Comunidade VIP</span>
              </li>
            </ul>

            <button className="w-full bg-gray-700 text-white py-4 rounded-lg font-semibold hover:bg-gray-600 transition-colors">
              Começar Agora
            </button>
          </div>
          <div className="p-8 bg-gradient-to-br from-purple-900 to-pink-900 rounded-2xl border-2 border-purple-500 relative transform scale-105">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-bold flex items-center gap-2">
                <Crown className="w-4 h-4" />
                MAIS POPULAR
              </div>
            </div>

            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">
                Influencer Pro
              </h3>
              <p className="text-purple-200 mb-4">Para resultados máximos</p>
              <div className="text-4xl font-bold text-white mb-2">
                R$ 97
                <span className="text-lg text-purple-200 font-normal">
                  /único
                </span>
              </div>
              <div className="text-purple-300 line-through">De R$ 297</div>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-400" />
                <span className="text-white">
                  Ebook completo (200+ páginas)
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-400" />
                <span className="text-white">Templates de posts virais</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-400" />
                <span className="text-white">
                  Planilha de controle de resultados
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-400" />
                <span className="text-white">
                  5 Bônus: Cursos de Instagram, TikTok, YouTube
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-400" />
                <span className="text-white">Grupo VIP no Telegram</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-400" />
                <span className="text-white">
                  Mentoria em grupo (1x/semana)
                </span>
              </li>
            </ul>

            <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 flex items-center justify-center gap-2">
              <Zap className="w-5 h-5" />
              Quero Ser Mestre
            </button>
          </div>

          <div className="p-8 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 relative">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">
                Magnata Digital
              </h3>
              <p className="text-gray-400 mb-4">
                Para os verdadeiros empreendedores
              </p>
              <div className="text-4xl font-bold text-white mb-2">
                R$ 197
                <span className="text-lg text-gray-400 font-normal">
                  /único
                </span>
              </div>
              <div className="text-gray-400 line-through">De R$ 497</div>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">Tudo do plano Mestre</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">10 Bônus exclusivos</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">3 Sessões de mentoria</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">Acesso ao curso avançado</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">Certificado de conclusão</span>
              </li>
            </ul>

            <button className="w-full bg-gradient-to-r from-yellow-600 to-orange-600 text-white py-4 rounded-lg font-semibold hover:from-yellow-700 hover:to-orange-700 transition-colors">
              Ser Elite
            </button>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block p-6 bg-gradient-to-r from-green-900/30 to-emerald-900/30 rounded-xl border border-green-500/30">
            <h3 className="text-xl font-bold text-white mb-2">
              🛡️ Garantia de 30 Dias
            </h3>
            <p className="text-gray-300">
              Se não ficar satisfeito, devolvemos 100% do seu dinheiro. Sem
              perguntas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
