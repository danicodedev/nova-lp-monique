import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

export default function Services() {
  const services = [
    {
      tag: "Atendimento",
      tagColor: "text-blush-400",
      title: "Terapia Ocupacional",
      desc: "Atendimentos com foco principal em infância, integração sensorial, autorregulação, autonomia e participação no cotidiano.",
      bullets: [
        "Presencial em Santo André/SP e possibilidade de apoio online conforme a necessidade.",
        "Plano terapêutico alinhado à família e às demandas reais do dia a dia."
      ],
      bulletColor: "bg-emerald-500"
    },
    {
      tag: "Mentoria",
      tagColor: "text-sage-400",
      title: "Mentoria para profissionais",
      desc: "Espaço de orientação para quem quer raciocinar melhor casos, ganhar clareza clínica e fortalecer a prática com mais segurança.",
      bullets: [
        "Direção para quem se sente confuso ou sozinho na prática clínica.",
        "Cuidado ético com a formação e impacto direto na qualidade do atendimento."
      ],
      bulletColor: "bg-sage-400"
    },
    {
      tag: "Supervisão",
      tagColor: "text-mist-400",
      title: "Supervisão clínica",
      desc: "Discussão de caso, análise de conduta e suporte para construir intervenções mais coerentes, individualizadas e sustentáveis.",
      bullets: [
        "Ideal para profissionais que querem aprofundar leitura clínica e tomada de decisão.",
        "Comunidade, troca e direção para sair do isolamento profissional."
      ],
      bulletColor: "bg-mist-400"
    },
    {
      tag: "Conteúdo e palestras",
      tagColor: "text-ink-500",
      title: "Palestras e educação",
      desc: "Conteúdos educativos para famílias, equipes e profissionais, com linguagem clara, acessível e baseada em prática clínica.",
      bullets: [
        "Temas como integração sensorial, processo terapêutico, autismo e desenvolvimento funcional.",
        "Formato ideal para eventos, grupos e ações educativas."
      ],
      bulletColor: "bg-blush-300"
    }
  ];

  return (
    <section id="servicos" className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.26em] text-blush-400">Serviços</p>
          <h2 className="mt-3 font-display text-4xl text-ink-900 md:text-5xl">Apoio para famílias, crianças e profissionais.</h2>
        </div>
        <a
          href="https://wa.me/5511986314497?text=Ol%C3%A1%2C%20Monique.%20Quero%20entender%20qual%20servi%C3%A7o%20faz%20mais%20sentido%20para%20o%20meu%20caso."
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full border border-emerald-600 px-6 py-3 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-50"
        >
          <MessageCircle className="h-4 w-4" />
          Tirar dúvidas no WhatsApp
        </a>
      </div>

      <div className="mt-10 grid gap-5 xl:grid-cols-4 md:grid-cols-2">
        {services.map((service, index) => (
          <motion.article 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="rounded-[2rem] bg-white p-6 shadow-card flex flex-col h-full"
          >
            <p className={`text-sm font-semibold uppercase tracking-[0.22em] ${service.tagColor}`}>{service.tag}</p>
            <h3 className="mt-4 text-2xl font-semibold text-ink-900">{service.title}</h3>
            <p className="mt-4 text-sm leading-7 text-ink-500 flex-grow">{service.desc}</p>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-ink-500">
              {service.bullets.map((bullet, i) => (
                <li key={i} className="flex gap-3">
                  <span className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${service.bulletColor}`}></span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
