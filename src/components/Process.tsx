import { motion } from 'motion/react';

export default function Process() {
  const steps = [
    {
      num: "1",
      title: "Mensagem no WhatsApp",
      desc: "Você conta brevemente sua demanda e recebe orientação sobre o melhor caminho inicial."
    },
    {
      num: "2",
      title: "Avaliação e escuta",
      desc: "As demandas da família são combinadas aos instrumentos de avaliação e às observações clínicas."
    },
    {
      num: "3",
      title: "Plano com direção palpável",
      desc: "Os objetivos são definidos com intencionalidade, alinhamento familiar e foco em generalização."
    }
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden rounded-[2.25rem] border border-wine-800 bg-wine-900 p-8 shadow-card md:p-10"
      >
        {/* Background Pattern */}
        <div 
          className="absolute inset-0 opacity-10 mix-blend-overlay"
          style={{ backgroundImage: 'url(/imgs/bg-hero.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}
        ></div>

        <div className="relative z-10 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.26em] text-terra-400">Como funciona</p>
            <h2 className="mt-3 font-display text-4xl text-cream-50">Um processo pensado para trazer clareza desde o primeiro contato.</h2>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="rounded-3xl bg-white/5 p-6 shadow-sm border border-white/10 backdrop-blur transition hover:bg-white/10 hover:-translate-y-0.5"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-terra-400">{step.num}</p>
                <p className="mt-4 text-lg font-semibold text-cream-50">{step.title}</p>
                <p className="mt-2 text-sm leading-6 text-cream-100/70">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
