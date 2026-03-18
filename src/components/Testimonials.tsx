import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      text: "Vc é MARAVILHOSA! Obrigada por fazer a diferença em nossas vidas!",
      author: "Comentário real de família atendida"
    },
    {
      text: "Você é uma profissional incrível. A melhor terapeuta ocupacional que já conheci…",
      author: "Comentário real de paciente/família"
    },
    {
      text: "Maravilhosa!!",
      author: "Comentário real nas redes sociais"
    }
  ];

  return (
    <section id="depoimentos" className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.26em] text-blush-400">Depoimentos</p>
        <h2 className="mt-3 font-display text-4xl text-ink-900 md:text-5xl">Confiança construída no cuidado e na prática.</h2>
      </div>

      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {testimonials.map((test, index) => (
          <motion.article 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="rounded-[2rem] bg-white p-7 shadow-card relative"
          >
            <Quote className="absolute top-6 right-6 h-8 w-8 text-blush-200 opacity-50" />
            <p className="font-display text-3xl text-blush-300">“</p>
            <p className="mt-4 text-lg leading-8 text-ink-700">{test.text}</p>
            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.22em] text-ink-500">{test.author}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
