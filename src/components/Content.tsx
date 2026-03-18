import { motion } from 'motion/react';
import { Play, X } from 'lucide-react';
import { useEffect, useMemo, useRef, useState } from 'react';

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

  const [activeReelLink, setActiveReelLink] = useState<string | null>(null);
  const [isReelLoading, setIsReelLoading] = useState(false);
  const [isReelHintVisible, setIsReelHintVisible] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  const activeEmbedUrl = useMemo(() => {
    if (!activeReelLink) return null;
    try {
      const url = new URL(activeReelLink);
      const parts = url.pathname.split('/').filter(Boolean);
      const type = parts[0];
      const code = parts[1];
      if (!type || !code) return activeReelLink;
      if (type !== 'p' && type !== 'reel' && type !== 'tv') return activeReelLink;
      const embedUrl = new URL(`https://www.instagram.com/${type}/${code}/embed/`);
      embedUrl.searchParams.set('autoplay', '1');
      return embedUrl.toString();
    } catch {
      return activeReelLink;
    }
  }, [activeReelLink]);

  useEffect(() => {
    if (!activeEmbedUrl) return;
    setIsReelLoading(true);
    setIsReelHintVisible(false);
    document.body.style.overflow = 'hidden';

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActiveReelLink(null);
    };

    const onWindowBlur = () => {
      if (document.activeElement && document.activeElement === iframeRef.current) {
        setIsReelHintVisible(false);
      }
    };

    document.addEventListener('keydown', onKeyDown);
    window.addEventListener('blur', onWindowBlur);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('blur', onWindowBlur);
    };
  }, [activeEmbedUrl]);

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
          <motion.button
            key={index}
            type="button"
            onClick={() => setActiveReelLink(reel.link)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className={`group relative overflow-hidden rounded-[2rem] p-8 text-left shadow-card transition hover:-translate-y-1 ${reel.bg}`}
          >
            <div className="absolute right-6 top-6 rounded-full bg-white/50 p-3 backdrop-blur-sm transition group-hover:bg-white group-hover:scale-110">
              <Play className="h-6 w-6 text-ink-900 fill-ink-900 ml-0.5" />
            </div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-ink-500 mb-4">Assistir Vídeo</p>
            <h3 className="text-2xl font-semibold text-ink-900">{reel.title}</h3>
            <p className="mt-4 text-base leading-7 text-ink-700 max-w-md">{reel.desc}</p>
          </motion.button>
        ))}
      </div>

      {activeEmbedUrl && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 px-4 py-8"
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            aria-label="Fechar vídeo"
            onClick={() => setActiveReelLink(null)}
            className="fixed right-6 top-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition hover:bg-white/20"
          >
            <X className="h-6 w-6" />
          </button>

          <div className="relative flex w-full items-center justify-center">
            <div className="relative h-[90vh] w-full max-w-[380px] overflow-hidden rounded-[2rem] bg-black shadow-soft sm:max-w-[420px] md:max-w-[520px]">
              <iframe
                id="instaFrame"
                ref={iframeRef}
                title="Vídeo do Instagram"
                src={activeEmbedUrl}
                className="h-full w-full"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                allowFullScreen
                onLoad={() => {
                  window.setTimeout(() => {
                    setIsReelLoading(false);
                    setIsReelHintVisible(true);
                  }, 600);
                }}
              />

              {isReelLoading && (
                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-4 bg-black">
                  <div className="h-10 w-10 animate-spin rounded-full border-2 border-white/20 border-t-white" />
                  <span className="text-xs font-semibold uppercase tracking-[0.22em] text-white/60">
                    Carregando…
                  </span>
                </div>
              )}

              {!isReelLoading && (
                <div
                  className={`pointer-events-none absolute inset-0 z-30 flex flex-col items-center justify-center gap-4 bg-black/30 text-center text-white transition-opacity duration-500 ${isReelHintVisible ? 'opacity-100' : 'opacity-0'}`}
                >
                  <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-emerald-600 shadow-lg shadow-emerald-600/30">
                    <Play className="h-8 w-8 text-white fill-white ml-0.5" />
                  </div>
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] drop-shadow-xl bg-black/20 px-4 py-1 rounded-full">
                    Toque no vídeo para iniciar
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

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
