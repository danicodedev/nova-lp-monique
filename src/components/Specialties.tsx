import { motion } from 'motion/react';
import { ActivitySquare, Puzzle, Brain, Network } from 'lucide-react';

export default function Specialties() {
  const specialties = [
    {
      icon: <ActivitySquare className="h-6 w-6" />,
      title: "Integração Sensorial",
      desc: "Compreensão e manejo do sistema sensorial para apoiar regulação, engajamento e funcionalidade no dia a dia.",
      bg: "bg-blush-100",
      text: "text-blush-400"
    },
    {
      icon: <Puzzle className="h-6 w-6" />,
      title: "Autismo",
      desc: "Planejamento terapêutico que respeita perfil, contexto e demandas reais, sem respostas genéricas ou prontas.",
      bg: "bg-sage-100",
      text: "text-sage-400"
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: "Neurodesenvolvimento",
      desc: "Intervenções que conectam desenvolvimento, aprendizagem, motricidade e participação cotidiana.",
      bg: "bg-mist-100",
      text: "text-mist-400"
    },
    {
      icon: <Network className="h-6 w-6" />,
      title: "Generalização de habilidades",
      desc: "Construção de estratégias para que a habilidade aprendida faça sentido em diferentes ambientes, pessoas e rotinas.",
      bg: "bg-sand-200",
      text: "text-ink-600"
    }
  ];

  return (
    <section id="especialidades" className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.26em] text-blush-400">Especialidades</p>
        <h2 className="mt-3 font-display text-4xl text-ink-900 md:text-5xl">Áreas em que Monique pode ajudar você com mais profundidade.</h2>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {specialties.map((spec, index) => (
          <motion.article 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="rounded-[2rem] bg-white p-6 shadow-card transition hover:-translate-y-1"
          >
            <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${spec.bg} ${spec.text}`}>
              {spec.icon}
            </div>
            <h3 className="mt-5 text-xl font-semibold text-ink-900">{spec.title}</h3>
            <p className="mt-3 text-sm leading-7 text-ink-500">{spec.desc}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
