import { motion } from 'motion/react';
import { UserCheck, Activity, BrainCircuit, UsersRound } from 'lucide-react';

export default function InfographicSection() {
  const points = [
    {
      icon: <UserCheck className="h-8 w-8 text-terra-500" />,
      title: "Autonomia e participação social",
      desc: "Rotina, autocuidado, alimentação, brincar e participação de forma mais independente."
    },
    {
      icon: <Activity className="h-8 w-8 text-wine-700" />,
      title: "Regulação sensorial e emocional",
      desc: "Estratégias para lidar melhor com estímulos, transições, frustrações e demandas do ambiente."
    },
    {
      icon: <BrainCircuit className="h-8 w-8 text-terra-500" />,
      title: "Maior autonomia e independência nas atividades do dia a dia",
      desc: "Ações mais organizadas no corpo, no movimento e na execução das atividades."
    },
    {
      icon: <UsersRound className="h-8 w-8 text-wine-700" />,
      title: "Maior segurança e previsibilidade para a família",
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
        className="rounded-[2.25rem] border border-cream-200 bg-gradient-to-br from-cream-100 to-cream-200 px-8 py-10 shadow-card md:px-10 relative overflow-hidden"
      >
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-terra-400/10 blur-3xl"></div>
        <div className="absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-wine-400/10 blur-3xl"></div>
        <div className="absolute right-1/3 bottom-0 h-48 w-48 rounded-full bg-cream-300/30 blur-3xl"></div>

        <div className="relative z-10 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.26em] text-terra-500">O que a Terapia Ocupacional trabalha</p>
            <h2 className="mt-3 font-display text-4xl text-wine-900">Entender é o primeiro passo para transformar.</h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-ink-600">
              Uma avaliação profissional especializada permite compreender, com profundidade, o que está por trás dos comportamentos e dificuldades no desenvolvimento. A partir disso é possível construir um plano terapêutico individualizado, com estratégias claras e eficazes para promover:
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
                className="rounded-3xl border border-cream-200 bg-cream-50 p-6 shadow-sm transition hover:shadow-md hover:-translate-y-0.5"
              >
                <div className="mb-4 inline-flex rounded-2xl bg-cream-100 p-3 border border-cream-200">
                  {point.icon}
                </div>
                <p className="text-lg font-semibold text-ink-900">{point.title}</p>
                <p className="mt-2 text-sm leading-6 text-ink-500">{point.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
