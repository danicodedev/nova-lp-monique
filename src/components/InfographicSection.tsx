import { motion } from 'motion/react';
import { UserCheck, Activity, BrainCircuit, UsersRound } from 'lucide-react';

export default function InfographicSection() {
  const points = [
    {
      icon: <UserCheck className="h-8 w-8 text-blush-300" />,
      title: "Autonomia funcional",
      desc: "Rotina, autocuidado, alimentação, brincar e participação de forma mais independente."
    },
    {
      icon: <Activity className="h-8 w-8 text-sage-300" />,
      title: "Autorregulação",
      desc: "Estratégias para lidar melhor com estímulos, transições, frustrações e demandas do ambiente."
    },
    {
      icon: <BrainCircuit className="h-8 w-8 text-mist-300" />,
      title: "Coordenação e planejamento",
      desc: "Ações mais organizadas no corpo, no movimento e na execução das atividades."
    },
    {
      icon: <UsersRound className="h-8 w-8 text-sand-200" />,
      title: "Participação social",
      desc: "Mais possibilidades de presença, vínculo e repertório nos contextos que importam."
    }
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="rounded-[2.25rem] bg-ink-900 px-8 py-10 text-white shadow-soft md:px-10 relative overflow-hidden"
      >
        {/* Decorative background elements */}
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blush-400/20 blur-3xl"></div>
        <div className="absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-sage-400/20 blur-3xl"></div>

        <div className="relative z-10 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.26em] text-blush-100">O que a Terapia Ocupacional trabalha</p>
            <h2 className="mt-3 font-display text-4xl text-white">Muito além das atividades do dia a dia.</h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-white/75">
              O objetivo não é apenas cumprir tarefas. É desenvolver autonomia, coordenação, autorregulação, participação social e um fazer com mais intenção, segurança e qualidade de vida.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {points.map((point, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:bg-white/10"
              >
                <div className="mb-4 inline-flex rounded-2xl bg-white/10 p-3">
                  {point.icon}
                </div>
                <p className="text-lg font-semibold">{point.title}</p>
                <p className="mt-2 text-sm leading-6 text-white/70">{point.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
