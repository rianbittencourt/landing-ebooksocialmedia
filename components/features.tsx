import { Instagram, Youtube, DollarSign, TrendingUp, Users, Zap } from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: Instagram,
      title: "Instagram Lucrativo",
      description: "Domine stories, reels e posts que convertem seguidores em clientes pagantes.",
    },
    {
      icon: Youtube,
      title: "YouTube Monetizado",
      description: "Crie um canal que gera receita passiva através de anúncios e parcerias.",
    },
    {
      icon: DollarSign,
      title: "Múltiplas Fontes de Renda",
      description: "Aprenda 15+ formas diferentes de monetizar suas redes sociais.",
    },
    {
      icon: TrendingUp,
      title: "Crescimento Viral",
      description: "Técnicas para fazer seu conteúdo alcançar milhões de pessoas organicamente.",
    },
    {
      icon: Users,
      title: "Audiência Engajada",
      description: "Construa uma comunidade fiel que compra tudo que você oferece.",
    },
    {
      icon: Zap,
      title: "Resultados Rápidos",
      description: "Veja os primeiros resultados em até 30 dias aplicando o método.",
    },
  ]

  return (
    <section id="features" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">O Que Você Vai Dominar</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Cada capítulo foi desenvolvido para transformar você em uma máquina de fazer dinheiro online.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="mb-4">
                <feature.icon className="w-12 h-12 text-purple-400 group-hover:text-purple-300 transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block p-8 bg-gradient-to-r from-green-900/50 to-emerald-900/50 rounded-2xl border border-green-500/30">
            <h3 className="text-2xl font-bold text-white mb-4">💰 Garantia de Resultado</h3>
            <p className="text-gray-300 max-w-2xl">
              Se você não faturar pelo menos R$ 1.000 nos primeiros 60 dias aplicando nosso método, devolvemos seu
              dinheiro + R$ 500 pelo seu tempo.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
