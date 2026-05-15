import { motion } from 'motion/react';
import { Calendar, MapPin, Award, Clock } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-wine-900">
      {/* Abstract Background Image */}
      <div 
        className="absolute inset-0 opacity-40 mix-blend-overlay"
        style={{ backgroundImage: 'url(/imgs/bg-hero.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}
      ></div>
      
      {/* Floating Gradient Orbs */}
      <div className="absolute left-0 top-24 h-44 w-44 animate-[drift_8s_ease-in-out_infinite] rounded-full bg-terra-500/20 blur-3xl"></div>
      <div className="absolute right-0 top-20 h-56 w-56 animate-[drift_10s_ease-in-out_infinite_reverse] rounded-full bg-wine-500/20 blur-3xl"></div>
      <div className="absolute left-1/2 top-40 h-32 w-32 animate-[drift_12s_ease-in-out_infinite] rounded-full bg-terra-400/10 blur-3xl"></div>
      
      <div className="relative mx-auto grid max-w-7xl gap-14 px-6 pb-20 pt-14 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:pb-28 lg:pt-20">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative order-1 lg:order-none lg:col-start-2 lg:row-start-1 lg:pl-10"
        >
          <div className="absolute -left-2 top-12 hidden h-24 w-24 rounded-full bg-terra-400/30 blur-2xl lg:block"></div>
          <div className="relative rounded-[2rem] bg-cream-50 p-4 shadow-soft">
            <div className="absolute right-6 top-6 z-10 rounded-full bg-cream-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-ink-500 shadow-sm">
              Ciência • Afeto
            </div>

            <div className="overflow-hidden rounded-[1.75rem] bg-cream-100 p-2">
              <div className="relative flex aspect-[4/5] items-end rounded-[1.5rem] bg-cream-200 overflow-hidden">
                <img 
                  src="/imgs/01.jpeg" 
                  alt="Monique Bacin" 
                  className="absolute inset-0 h-full w-full object-cover opacity-90"
                  referrerPolicy="no-referrer"
                />
                <div className="relative z-10 m-6 w-full rounded-[1.5rem] bg-cream-50 p-6 shadow-card">
                  <p className="text-xs font-bold uppercase tracking-[0.26em] text-ink-500">Monique Bacin</p>
                  <p className="mt-2 font-display text-2xl leading-tight text-ink-900">Terapeuta Ocupacional</p>
                </div>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-cream-200 bg-cream-50 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-terra-500">Clínica</p>
                <p className="mt-2 text-sm font-semibold text-ink-900">Clínica Bacin</p>
                <p className="mt-1 text-sm text-ink-500">Santo André/SP</p>
              </div>
              <div className="rounded-2xl border border-cream-200 bg-cream-50 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-terra-500">Atuação</p>
                <p className="mt-2 text-sm font-semibold text-ink-900">Infância à vida adulta</p>
                <p className="mt-1 text-sm text-ink-500">Foco leve em pediatria</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="relative order-2 lg:order-none lg:col-start-1 lg:row-start-1"
        >
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-cream-100 backdrop-blur">
            <span className="uppercase tracking-widest text-xs font-semibold text-terra-400">Terapia Ocupacional • Ciência • Acolhimento • Direção Clínica</span>
          </div>

          <h1 className="max-w-3xl font-display text-4xl leading-tight text-cream-50 sm:text-5xl lg:text-5xl">
            Te ajudo a entender e regular seu sistema sensorial com acolhimento, ciência e direção clínica.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-cream-200 md:text-xl">
            Monique Bacin é terapeuta ocupacional com certificação internacional ISA-CLASI, 10 anos de experiência e atuação focada em integração sensorial, autismo e neurodesenvolvimento. Um cuidado que olha além do diagnóstico e busca o que realmente faz sentido no cotidiano da família.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="https://wa.me/5511986314497?text=Ol%C3%A1%2C%20Monique.%20Quero%20agendar%20uma%20avalia%C3%A7%C3%A3o%20para%20entender%20melhor%20as%20necessidades%20da%20minha%20crian%C3%A7a."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-terra-500 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-terra-500/30 transition hover:-translate-y-0.5 hover:bg-terra-400"
            >
              <Calendar className="h-5 w-5" />
              Agendar avaliação pelo WhatsApp
            </a>

            <a
              href="#servicos"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-transparent px-8 py-4 text-base font-semibold text-cream-100 transition hover:-translate-y-0.5 hover:bg-white/10"
            >
              Conhecer atendimentos e mentoria
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-3 text-sm font-medium text-cream-200">
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur cursor-default">Integração Sensorial</span>
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur cursor-default">Autismo</span>
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur cursor-default">Neurodesenvolvimento</span>
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur cursor-default">Mentoria e Supervisão</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="order-3 lg:order-none lg:col-span-2 lg:row-start-2"
        >
          <div className="mt-12 flex justify-center">
            <div className="grid w-full max-w-5xl gap-4 sm:grid-cols-3">
              <div className="rounded-3xl border border-cream-200 bg-cream-50 p-6 shadow-card">
                <div className="mb-4 inline-flex rounded-full bg-terra-100 p-3">
                  <Clock className="h-6 w-6 text-terra-500" />
                </div>
                <p className="text-2xl font-display font-semibold text-ink-900">10 anos</p>
                <p className="mt-2 text-sm leading-6 text-ink-500">de experiência com olhar individualizado e centrado no vínculo.</p>
              </div>
              <div className="rounded-3xl border border-cream-200 bg-cream-50 p-6 shadow-card">
                <div className="mb-4 inline-flex rounded-full bg-terra-100 p-3">
                  <Award className="h-6 w-6 text-terra-500" />
                </div>
                <p className="text-2xl font-display font-semibold text-ink-900">ISA-CLASI</p>
                <p className="mt-2 text-sm leading-6 text-ink-500">Certificação internacional em integração sensorial e práticas baseadas em ciência.</p>
              </div>
              <div className="rounded-3xl border border-cream-200 bg-cream-50 p-6 shadow-card">
                <div className="mb-4 inline-flex rounded-full bg-terra-100 p-3">
                  <MapPin className="h-6 w-6 text-terra-500" />
                </div>
                <p className="text-2xl font-display font-semibold text-ink-900">SP + online</p>
                <p className="mt-2 text-sm leading-6 text-ink-500">Atendimento em Santo André e suporte profissional online para todo o Brasil.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
