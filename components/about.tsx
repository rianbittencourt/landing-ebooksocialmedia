import { BookOpen, Users, Award } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Sobre o Método</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Um sistema completo e testado para transformar qualquer perfil em uma fonte de renda consistente, mesmo
            começando do zero.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6 bg-gray-900/50 rounded-lg border border-gray-700">
            <BookOpen className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">200+ Estratégias</h3>
            <p className="text-gray-300">
              Técnicas práticas para cada rede social, desde criação de conteúdo até vendas.
            </p>
          </div>
          <div className="text-center p-6 bg-gray-900/50 rounded-lg border border-gray-700">
            <Users className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">10K+ Sucessos</h3>
            <p className="text-gray-300">Milhares de pessoas já estão faturando com essas estratégias.</p>
          </div>
          <div className="text-center p-6 bg-gray-900/50 rounded-lg border border-gray-700">
            <Award className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Mentor Expert</h3>
            <p className="text-gray-300">Criado por quem já faturou mais de R$ 1 milhão com redes sociais.</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">O que você vai aprender:</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Como criar conteúdo viral que converte em vendas</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Estratégias de monetização para cada rede social</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Como conseguir milhares de seguidores orgânicos</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Funis de vendas automatizados para redes sociais</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Parcerias e colaborações que geram receita</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-lg p-6 border border-purple-500/30">
                <blockquote className="text-white text-lg italic">
                  "Em 3 meses aplicando essas estratégias, saí de R$ 0 para R$ 15.000 por mês só com Instagram. Mudou
                  minha vida completamente!"
                </blockquote>
                <div className="mt-4 flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                  <div>
                    <div className="text-white font-semibold">Julia Martins</div>
                    <div className="text-gray-400 text-sm">Influenciadora Digital</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
