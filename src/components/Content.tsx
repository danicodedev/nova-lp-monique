import { motion } from 'motion/react';
import { Play } from 'lucide-react';

export default function Content() {
  const reels = [
    {
      title: "Quem sou eu e como trabalho",
      desc: "Conheça um pouco mais sobre a minha trajetória e a forma como enxergo o processo terapêutico.",
      link: "https://www.instagram.com/p/DUT3RhPEXOJ/",
      bg: "bg-blush-100"
    },
    {
      title: "O que faz uma Terapeuta Ocupacional?",
      desc: "Entenda na prática como a Terapia Ocupacional atua para promover autonomia e qualidade de vida.",
      link: "https://www.instagram.com/p/DUG52j_kTQt/",
      bg: "bg-sage-100"
    }
  ];

  const articles = [
    {
      tag: "Trajetória",
      tagColor: "text-blush-400",
      title: "10 anos de prática clínica",
      desc: "Cada conquista, por menor que pareça, carrega um significado enorme. O desenvolvimento acontece com intenção, leitura clínica e respeito ao processo."
    },
    {
      tag: "Autismo",
      tagColor: "text-sage-400",
      title: "Generalização não é automática",
      desc: "Para que uma habilidade apareça em contextos diferentes, é preciso construir treino em ambientes, pessoas e situações variadas."
    },
    {
      tag: "Planejamento",
      tagColor: "text-mist-400",
      title: "Processo terapêutico com direção",
      desc: "O que importa é ter uma direção palpável, baseada na avaliação, nas observações e nas demandas da família."
    },
    {
      tag: "TO na prática",
      tagColor: "text-ink-500",
      title: "A TO vai muito além do básico",
      desc: "Autonomia, coordenação, autorregulação e participação social caminham juntas. Potencializar o fazer é fortalecer o ser."
    }
  ];

  return (
    <section id="conteudo" className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
      <div className="max-w-2xl mb-10">
        <p className="text-sm font-semibold uppercase tracking-[0.26em] text-blush-400">Conteúdo educativo</p>
        <h2 className="mt-3 font-display text-4xl text-ink-900 md:text-5xl">Temas que Monique já aborda com clareza, afeto e profundidade.</h2>
      </div>

      <div className="grid gap-6 lg:grid-cols-2 mb-10">
        {reels.map((reel, index) => (
          <motion.a 
            key={index}
            href={reel.link}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className={`group relative overflow-hidden rounded-[2rem] p-8 shadow-card transition hover:-translate-y-1 ${reel.bg}`}
          >
            <div className="absolute right-6 top-6 rounded-full bg-white/50 p-3 backdrop-blur-sm transition group-hover:bg-white group-hover:scale-110">
              <Play className="h-6 w-6 text-ink-900 fill-ink-900 ml-0.5" />
            </div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-ink-500 mb-4">Assistir Vídeo</p>
            <h3 className="text-2xl font-semibold text-ink-900">{reel.title}</h3>
            <p className="mt-4 text-base leading-7 text-ink-700 max-w-md">{reel.desc}</p>
          </motion.a>
        ))}
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {articles.map((article, index) => (
          <motion.article 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="rounded-[2rem] bg-white p-6 shadow-card"
          >
            <p className={`text-sm font-semibold uppercase tracking-[0.22em] ${article.tagColor}`}>{article.tag}</p>
            <h3 className="mt-4 text-xl font-semibold text-ink-900">{article.title}</h3>
            <p className="mt-4 text-sm leading-7 text-ink-500">{article.desc}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
