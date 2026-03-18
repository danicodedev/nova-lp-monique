import { motion } from 'motion/react';
import { Calendar, MapPin, Award, Clock } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute left-0 top-24 h-44 w-44 animate-[drift_8s_ease-in-out_infinite] rounded-full bg-blush-200/35 blur-3xl"></div>
      <div className="absolute right-0 top-20 h-56 w-56 animate-[drift_10s_ease-in-out_infinite_reverse] rounded-full bg-sage-300/30 blur-3xl"></div>
      
      <div className="mx-auto grid max-w-7xl gap-14 px-6 pb-20 pt-14 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:pb-28 lg:pt-20">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative order-1 lg:order-none lg:col-start-2 lg:row-start-1 lg:pl-10"
        >
          <div className="absolute -left-2 top-12 hidden h-24 w-24 rounded-full bg-mist-200/70 blur-2xl lg:block"></div>
          <div className="relative rounded-[2rem] border border-white/70 bg-white/80 p-4 shadow-soft backdrop-blur">
            <div className="absolute right-6 top-6 z-10 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-ink-500 shadow-sm">
              Ciência + afeto
            </div>

            <div className="overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-blush-100 via-sand-100 to-sage-100 p-5">
              <div className="relative flex aspect-[4/5] items-end rounded-[1.5rem] border border-white/70 bg-soft-grid bg-[size:22px_22px] bg-center p-6 overflow-hidden">
                {/* Placeholder for the uploaded image */}
                <img 
                  src="\dist\imgs\01.jpeg?auto=format&fit=crop&q=80&w=800" 
                  alt="Monique Bacin" 
                  className="absolute inset-0 h-full w-full object-cover mix-blend-multiply opacity-90"
                  referrerPolicy="no-referrer"
                />
                <div className="relative z-10 max-w-xs rounded-[1.5rem] border border-white/70 bg-white/85 p-6 shadow-card backdrop-blur">
                  <p className="text-xs font-bold uppercase tracking-[0.26em] text-ink-500">Monique Bacin</p>
                  <p className="mt-2 font-display text-2xl leading-tight text-ink-900">Terapeuta Ocupacional</p>
                </div>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="rounded-2xl bg-sand-100 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-500">Clínica</p>
                <p className="mt-2 text-sm font-semibold text-ink-900">Clínica Bacin</p>
                <p className="mt-1 text-sm text-ink-500">Santo André/SP</p>
              </div>
              <div className="rounded-2xl bg-mist-100 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-500">Atuação</p>
                <p className="mt-2 text-sm font-semibold text-ink-900">Infância à vida adulta</p>
                <p className="mt-1 text-sm text-ink-500">Foco forte em pediatria</p>
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
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-blush-200 bg-white/80 px-4 py-2 text-sm font-medium text-ink-700 shadow-sm backdrop-blur">
            <span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
            Santo André/SP • Clínica Bacin • Atendimento e Mentoria
          </div>

          <h1 className="max-w-3xl font-display text-3xl leading-tight text-ink-900 sm:text-4xl lg:text-4xl">
            Te ajudo a entender e regular o sistema sensorial da sua criança com acolhimento, ciência e direção clínica.
          </h1>

          <p className="mt-4 max-w-2xl text-lg leading-8 text-ink-500 md:text-xl">
            Monique Bacin é terapeuta ocupacional com certificação internacional ISA-CLASI, 10 anos de experiência e atuação focada em integração sensorial, autismo e neurodesenvolvimento. Um cuidado que olha além do diagnóstico e busca o que realmente faz sentido no cotidiano da família.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="https://wa.me/5511986314497?text=Ol%C3%A1%2C%20Monique.%20Quero%20agendar%20uma%20avalia%C3%A7%C3%A3o%20para%20entender%20melhor%20as%20necessidades%20da%20minha%20crian%C3%A7a."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-emerald-600 px-7 py-4 text-base font-semibold text-white shadow-lg shadow-emerald-600/20 transition hover:-translate-y-0.5 hover:bg-emerald-700"
            >
              <Calendar className="h-5 w-5" />
              Agendar avaliação pelo WhatsApp
            </a>

            <a
              href="#servicos"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-ink-900/10 bg-white/80 px-7 py-4 text-base font-semibold text-ink-900 shadow-sm transition hover:-translate-y-0.5 hover:border-sage-300 hover:text-ink-700"
            >
              Conhecer atendimentos e mentoria
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-3 text-sm font-medium text-ink-700">
            <span className="rounded-full bg-white/80 px-4 py-2 shadow-sm">Integração Sensorial</span>
            <span className="rounded-full bg-white/80 px-4 py-2 shadow-sm">Autismo</span>
            <span className="rounded-full bg-white/80 px-4 py-2 shadow-sm">Neurodesenvolvimento</span>
            <span className="rounded-full bg-white/80 px-4 py-2 shadow-sm">Mentoria e Supervisão</span>
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
              <div className="rounded-3xl border border-white/80 bg-white/75 p-5 shadow-card backdrop-blur">
                <Clock className="mb-3 h-8 w-8 text-blush-400" />
                <p className="text-3xl font-extrabold text-ink-900">10 anos</p>
                <p className="mt-2 text-sm leading-6 text-ink-500">de atuação clínica com olhar individualizado e construção de vínculo.</p>
              </div>
              <div className="rounded-3xl border border-white/80 bg-white/75 p-5 shadow-card backdrop-blur">
                <Award className="mb-3 h-8 w-8 text-sage-400" />
                <p className="text-3xl font-extrabold text-ink-900">ISA-CLASI</p>
                <p className="mt-2 text-sm leading-6 text-ink-500">certificação internacional em Integração Sensorial aplicada à prática.</p>
              </div>
              <div className="rounded-3xl border border-white/80 bg-white/75 p-5 shadow-card backdrop-blur">
                <MapPin className="mb-3 h-8 w-8 text-mist-300" />
                <p className="text-3xl font-extrabold text-ink-900">SP + online</p>
                <p className="mt-2 text-sm leading-6 text-ink-500">atendimento em Santo André e suporte profissional conforme a necessidade.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
