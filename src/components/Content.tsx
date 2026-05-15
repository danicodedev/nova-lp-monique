import { motion } from 'motion/react';
import { Play, X } from 'lucide-react';
import { useEffect, useMemo, useRef, useState } from 'react';

export default function Content() {
  const youtubeUrl = 'https://www.youtube.com/watch?v=7G6JP5bKRrI';

  const reels = [
    {
      title: "Quem sou eu e como trabalho",
      desc: "Conheça um pouco mais sobre a minha trajetória e a forma como enxergo o processo terapêutico.",
      link: "https://www.instagram.com/p/DUT3RhPEXOJ/",
      bg: "bg-cream-100"
    },
    {
      title: "O que faz uma Terapeuta Ocupacional?",
      desc: "Entenda na prática como a Terapia Ocupacional atua para promover autonomia e qualidade de vida.",
      link: "https://www.instagram.com/p/DUG52j_kTQt/",
      bg: "bg-cream-200"
    }
  ];

  const [activeReelLink, setActiveReelLink] = useState<string | null>(null);
  const [isReelLoading, setIsReelLoading] = useState(false);
  const [isReelHintVisible, setIsReelHintVisible] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const [isYoutubeOpen, setIsYoutubeOpen] = useState(false);

  const youtubeVideoId = useMemo(() => {
    try {
      const url = new URL(youtubeUrl);
      return url.searchParams.get('v');
    } catch {
      return null;
    }
  }, [youtubeUrl]);

  const youtubeEmbedUrl = useMemo(() => {
    if (!youtubeVideoId) return null;
    const embedUrl = new URL(`https://www.youtube-nocookie.com/embed/${youtubeVideoId}`);
    embedUrl.searchParams.set('autoplay', '1');
    embedUrl.searchParams.set('rel', '0');
    embedUrl.searchParams.set('modestbranding', '1');
    embedUrl.searchParams.set('playsinline', '1');
    return embedUrl.toString();
  }, [youtubeVideoId]);

  const youtubeThumbnailUrl = useMemo(() => {
    if (!youtubeVideoId) return null;
    return `https://img.youtube.com/vi/${youtubeVideoId}/hqdefault.jpg`;
  }, [youtubeVideoId]);

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

  useEffect(() => {
    if (!isYoutubeOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsYoutubeOpen(false);
    };

    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [isYoutubeOpen]);

  const articles = [
    {
      tag: "Trajetória",
      tagColor: "text-terra-500",
      title: "10 anos de prática clínica",
      desc: "Cada conquista, por menor que pareça, carrega um significado enorme. O desenvolvimento acontece com intenção, leitura clínica e respeito ao processo."
    },
    {
      tag: "Autismo",
      tagColor: "text-wine-800",
      title: "Generalização não é automática",
      desc: "Para que uma habilidade apareça em contextos diferentes, é preciso construir treino em ambientes, pessoas e situações variadas."
    },
    {
      tag: "Planejamento",
      tagColor: "text-terra-500",
      title: "Processo terapêutico com direção",
      desc: "O que importa é ter uma direção palpável, baseada na avaliação, nas observações e nas demandas da família."
    },
    {
      tag: "TO na prática",
      tagColor: "text-wine-800",
      title: "A TO vai muito além do básico",
      desc: "Autonomia, coordenação, autorregulação e participação social caminham juntas. Potencializar o fazer é fortalecer o ser."
    }
  ];

  return (
    <>
      <section id="conteudo" className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="max-w-2xl mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.26em] text-terra-500">Conteúdo educativo</p>
          <h2 className="mt-3 font-display text-4xl text-wine-900 md:text-5xl">Temas que Monique já aborda com clareza, afeto e profundidade.</h2>
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
              className={`group relative overflow-hidden rounded-[2rem] border border-cream-200 p-8 text-left shadow-card transition hover:-translate-y-1 hover:shadow-lg ${reel.bg}`}
            >
              <div className="absolute right-6 top-6 rounded-full bg-white p-3 shadow-sm transition group-hover:bg-white group-hover:scale-110">
                <Play className="h-6 w-6 text-terra-500 fill-terra-500 ml-0.5" />
              </div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-terra-500 mb-4">Assistir Vídeo</p>
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
            onClick={() => setActiveReelLink(null)}
          >
            <button
              type="button"
              aria-label="Fechar vídeo"
              onClick={() => setActiveReelLink(null)}
              className="fixed right-5 top-5 z-[70] inline-flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition hover:bg-white/20"
            >
              <X className="h-6 w-6" />
            </button>

            <div className="relative flex w-full items-center justify-center">
              <div
                className="relative h-[90vh] w-full max-w-[380px] overflow-hidden rounded-[2rem] bg-black shadow-soft sm:max-w-[420px] md:max-w-[520px]"
                onClick={(event) => event.stopPropagation()}
              >
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
                    <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-terra-500 shadow-lg shadow-terra-500/30">
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
              className="rounded-[2rem] bg-cream-50 border border-cream-200 p-6 shadow-card transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              <p className={`text-sm font-semibold uppercase tracking-[0.22em] ${article.tagColor}`}>{article.tag}</p>
              <h3 className="mt-4 text-xl font-semibold text-ink-900">{article.title}</h3>
              <p className="mt-4 text-sm leading-7 text-ink-500">{article.desc}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="na-midia" className="mx-auto max-w-7xl px-6 pb-14 lg:px-8">
        <div className="rounded-[2.25rem] border border-cream-200 bg-gradient-to-br from-cream-100 to-cream-200 p-8 shadow-card md:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.26em] text-terra-500">Na mídia</p>
              <h2 className="mt-3 font-display text-4xl text-wine-900 md:text-5xl">Participação no Plantão Doutor TV</h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-ink-600 md:text-lg">
                Monique participou do Plantão Doutor TV, da Band Vale, falando sobre como a Terapia Ocupacional pode contribuir para a qualidade de vida no TEA.
              </p>
            </div>

            <motion.button
              type="button"
              onClick={() => setIsYoutubeOpen(true)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="group relative overflow-hidden rounded-[2rem] bg-ink-900 shadow-soft"
            >
              <div className="relative aspect-video w-full">
                {youtubeThumbnailUrl && (
                  <img
                    src={youtubeThumbnailUrl}
                    alt="Prévia do vídeo no YouTube"
                    className="absolute inset-0 h-full w-full object-cover opacity-90 transition group-hover:opacity-100"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-br from-black/35 via-black/20 to-black/50" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-terra-500 shadow-lg shadow-terra-500/30 transition group-hover:bg-terra-400">
                    <Play className="h-8 w-8 text-white fill-white ml-0.5" />
                  </span>
                </div>
              </div>

              <div className="p-6 text-left">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/70">Assistir no YouTube</p>
                <p className="mt-2 text-lg font-semibold text-white">TEA: como a Terapia Ocupacional pode melhorar a qualidade de vida</p>
                <p className="mt-3 text-sm leading-6 text-white/70">Clique para abrir em tela cheia.</p>
              </div>
            </motion.button>
          </div>
        </div>
      </section>

      {isYoutubeOpen && youtubeEmbedUrl && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 px-4 py-8"
          role="dialog"
          aria-modal="true"
          onClick={() => setIsYoutubeOpen(false)}
        >
          <button
            type="button"
            aria-label="Fechar vídeo"
            onClick={() => setIsYoutubeOpen(false)}
            className="fixed right-5 top-5 z-[70] inline-flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition hover:bg-white/20"
          >
            <X className="h-6 w-6" />
          </button>

          <div className="relative flex w-full items-center justify-center">
            <div
              className="relative w-full max-w-5xl overflow-hidden rounded-[2rem] bg-black shadow-soft"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="aspect-video w-full">
                <iframe
                  title="Vídeo do YouTube"
                  src={youtubeEmbedUrl}
                  className="h-full w-full"
                  allow="autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
