import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const faqs = [
    {
      q: "Como funciona a primeira avaliação?",
      a: "O processo considera as demandas da família, instrumentos de avaliação e observações clínicas. A partir disso, é construída uma direção terapêutica clara e alinhada com o cotidiano."
    },
    {
      q: "A Terapia Ocupacional é só para crianças?",
      a: "Monique atua da infância até a vida adulta, embora seu foco mais forte hoje esteja na pediatria, no neurodesenvolvimento e no suporte às famílias."
    },
    {
      q: "Você atende online?",
      a: "Sim. Há possibilidade de apoio online conforme a necessidade e o tipo de demanda. O melhor caminho pode ser combinado diretamente no WhatsApp."
    },
    {
      q: "Mentoria e supervisão são para quais profissionais?",
      a: "Para terapeutas ocupacionais e profissionais que buscam mais direção clínica, troca qualificada e segurança na condução dos casos."
    }
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-[1fr_0.95fr] lg:items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.26em] text-terra-500">Perguntas frequentes</p>
          <h2 className="mt-3 font-display text-4xl text-wine-900 md:text-5xl">Dúvidas comuns antes do primeiro contato.</h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.details 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group rounded-[1.75rem] bg-cream-50 border border-cream-200 p-6 shadow-card open:bg-cream-100 transition-colors hover:shadow-lg"
              open={index === 0}
            >
              <summary className="flex cursor-pointer list-none items-center justify-between text-lg font-semibold text-ink-900">
                {faq.q}
                <span className="ml-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cream-200 transition group-open:rotate-180">
                  <ChevronDown className="h-5 w-5 text-terra-500" />
                </span>
              </summary>
              <p className="mt-4 text-sm leading-7 text-ink-500 pr-10">{faq.a}</p>
            </motion.details>
          ))}
        </div>
      </div>
    </section>
  );
}
