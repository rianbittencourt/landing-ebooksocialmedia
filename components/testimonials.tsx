import { Star } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Marina Silva",
      role: "Influenciadora Fitness",
      content: "Saí de 2K seguidores para 50K em 4 meses e já faturo R$ 25.000/mês com parcerias e produtos próprios.",
      rating: 5,
      avatar: "MS",
    },
    {
      name: "Carlos Mendes",
      role: "Coach de Vendas",
      content:
        "Meu Instagram virou uma máquina de leads. Fecho R$ 80K por mês só com clientes que vêm das redes sociais.",
      rating: 5,
      avatar: "CM",
    },
    {
      name: "Ana Rodriguez",
      role: "Criadora de Conteúdo",
      content: "TikTok mudou minha vida! De desempregada para R$ 15K/mês em 3 meses. Esse método realmente funciona.",
      rating: 5,
      avatar: "AR",
    },
    {
      name: "Roberto Oliveira",
      role: "YouTuber",
      content:
        "Meu canal explodiu depois que apliquei as estratégias. Hoje ganho mais com YouTube do que no meu emprego CLT.",
      rating: 5,
      avatar: "RO",
    },
    {
      name: "Lucia Santos",
      role: "Consultora Digital",
      content:
        "LinkedIn virou minha principal fonte de clientes. Fecho contratos de R$ 10K+ todo mês através da plataforma.",
      rating: 5,
      avatar: "LS",
    },
    {
      name: "Pedro Costa",
      role: "E-commerce Owner",
      content: "Minhas vendas triplicaram depois que aprendi a usar Instagram e Facebook Ads da forma certa. Incrível!",
      rating: 5,
      avatar: "PC",
    },
  ]

  return (
    <section id="testimonials" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Sucessos Reais dos Nossos Alunos</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Veja como pessoas comuns estão transformando suas vidas financeiras com redes sociais.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl border border-gray-700 hover:border-purple-500/30 transition-all duration-300"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">"{testimonial.content}"</p>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white font-bold">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="text-white font-semibold">{testimonial.name}</div>
                  <div className="text-gray-400 text-sm">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 p-6 bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-xl border border-purple-500/30">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
            </div>
            <div className="text-left">
              <div className="text-2xl font-bold text-white">4.9/5</div>
              <div className="text-gray-300">Baseado em 2.847 avaliações</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
