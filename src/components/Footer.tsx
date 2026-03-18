import { motion } from 'motion/react';
import { MessageCircle, Instagram, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <>
      <section id="contato" className="mx-auto max-w-7xl px-6 pb-28 pt-14 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-[2.5rem] bg-gradient-to-br from-ink-900 via-ink-700 to-ink-900 px-8 py-12 text-white shadow-soft md:px-12 relative overflow-hidden"
        >
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl"></div>
          
          <div className="relative z-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.26em] text-blush-100">Contato</p>
              <h2 className="mt-3 max-w-2xl font-display text-4xl text-white md:text-5xl">Se você precisa de clareza, acolhimento e um plano terapêutico com sentido real, o próximo passo pode começar por uma conversa.</h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-white/75">
                Fale com Monique pelo WhatsApp para agendar uma avaliação, entender o formato do atendimento ou saber mais sobre mentoria e supervisão.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="https://wa.me/5511986314497?text=Ol%C3%A1%2C%20Monique.%20Gostaria%20de%20falar%20sobre%20atendimento%2C%20mentoria%20ou%20supervis%C3%A3o."
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-emerald-500 px-7 py-4 text-base font-semibold text-white transition hover:-translate-y-0.5 hover:bg-emerald-400"
                >
                  <MessageCircle className="h-5 w-5" />
                  Chamar no WhatsApp
                </a>

                <a
                  href="https://www.instagram.com/bacinmonique/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-4 text-base font-semibold text-white transition hover:bg-white/10"
                >
                  <Instagram className="h-5 w-5" />
                  Ver Instagram @bacinmonique
                </a>
              </div>
            </div>

            <div className="rounded-[2rem] bg-white/10 p-7 backdrop-blur">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/60">Informações rápidas</p>
              <div className="mt-6 space-y-5">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-white/10 p-2 mt-1">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-white/60">WhatsApp</p>
                    <a href="tel:+5511986314497" className="mt-1 block text-xl font-semibold text-white transition hover:text-emerald-300">(11) 98631-4497</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-white/10 p-2 mt-1">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-white/60">Localização</p>
                    <p className="mt-1 text-xl font-semibold text-white">Santo André / SP</p>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-white/60">Serviços</p>
                  <p className="mt-1 text-base leading-7 text-white/80">Atendimentos em Terapia Ocupacional, mentoria, supervisão clínica, palestras e conteúdo educativo.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <footer className="border-t border-ink-900/5 bg-white/70">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-6 text-sm text-ink-500 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>Monique Bacin | Terapeuta Ocupacional • Clínica Bacin</p>
          <p>Desenvolvido com carinho.</p>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/5511986314497?text=Ol%C3%A1%2C%20Monique.%20Quero%20agendar%20uma%20conversa."
        target="_blank"
        rel="noreferrer"
        aria-label="Abrir conversa no WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg shadow-emerald-500/30 transition hover:-translate-y-1 hover:bg-emerald-400"
      >
        <MessageCircle className="h-8 w-8" />
      </a>
    </>
  );
}
