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
        className="rounded-[2.25rem] border border-white/80 bg-gradient-to-br from-sage-100 via-white to-blush-100 p-8 shadow-card md:p-10"
      >
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.26em] text-ink-500">Como funciona</p>
            <h2 className="mt-3 font-display text-4xl text-ink-900">Um processo pensado para trazer clareza desde o primeiro contato.</h2>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="rounded-3xl bg-white/90 p-6 shadow-sm"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blush-400">{step.num}</p>
                <p className="mt-4 text-lg font-semibold text-ink-900">{step.title}</p>
                <p className="mt-2 text-sm leading-6 text-ink-500">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
