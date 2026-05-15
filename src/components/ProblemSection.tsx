import { motion } from 'motion/react';
import { VolumeX, Target, Users, Compass } from 'lucide-react';

export default function ProblemSection() {
  const cards = [
    {
      icon: <VolumeX className="h-6 w-6 text-terra-500" />,
      title: "Seu filho se desorganiza com sons, texturas ou mudanças?",
      desc: "A compreensão do perfil sensorial ajuda a ajustar o ambiente, a rotina e os objetivos terapêuticos.",
      bg: "bg-white ring-1 ring-wine-900/5"
    },
    {
      icon: <Target className="h-6 w-6 text-terra-500" />,
      title: "As conquistas não aparecem fora da sessão?",
      desc: "Generalização é um processo construído em diferentes contextos, pessoas e situações.",
      bg: "bg-white ring-1 ring-wine-900/5"
    },
    {
      icon: <Users className="h-6 w-6 text-terra-500" />,
      title: "Você quer um plano alinhado com a família?",
      desc: "O processo terapêutico precisa unir demanda, observação clínica e objetivos palpáveis no cotidiano.",
      bg: "bg-white ring-1 ring-wine-900/5"
    },
    {
      icon: <Compass className="h-6 w-6 text-terra-500" />,
      title: "É profissional e busca direção clínica?",
      desc: "Mentoria e supervisão ajudam a transformar insegurança em raciocínio, repertório e segurança ética.",
      bg: "bg-white ring-1 ring-wine-900/5"
    }
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 pb-10 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="rounded-[2rem] bg-cream-50 px-6 py-8 shadow-card md:px-8"
      >
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.26em] text-terra-500">Quando procurar ajuda</p>
            <h2 className="mt-3 font-display text-3xl text-wine-900 md:text-4xl">Você não precisa passar por isso sozinho.</h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-ink-600">
              Se o dia a dia está ficando mais difícil e você sente que algo precisa ser compreendido com mais profundidade, uma avaliação terapêutica pode trazer direção, clareza e estratégias reais para a rotina.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {cards.map((card, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`rounded-3xl p-5 transition hover:-translate-y-0.5 hover:shadow-md ${card.bg}`}
              >
                <div className="mb-4 inline-flex rounded-xl bg-cream-100 p-3 shadow-sm">
                  {card.icon}
                </div>
                <p className="text-lg font-semibold text-ink-900">{card.title}</p>
                <p className="mt-2 text-sm leading-6 text-ink-500">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
