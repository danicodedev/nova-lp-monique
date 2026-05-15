import { motion } from 'motion/react';
import { GraduationCap, Award, BookOpen, HeartHandshake, Sparkles } from 'lucide-react';

export default function About() {
  return (
    <section id="sobre" className="relative mx-auto max-w-full overflow-hidden bg-wine-900 py-20 px-6 lg:px-8">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-10 mix-blend-overlay"
        style={{ backgroundImage: 'url(/imgs/bg-hero.png)', backgroundSize: 'cover', backgroundPosition: 'bottom' }}
      ></div>

      <div className="relative mx-auto max-w-7xl grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.26em] text-terra-400">Sobre Monique</p>
          <h2 className="mt-3 max-w-2xl font-display text-4xl text-cream-50 md:text-5xl">Um olhar terapêutico que vai <span className="italic font-light">além</span> do diagnóstico.</h2>
          <p className="mt-6 text-lg leading-8 text-cream-200">
            Monique Bacin é graduada em Terapia Ocupacional pela Faculdade de Medicina do ABC, tem certificação internacional em Integração Sensorial pela ISA-CLASI e segue aprofundando sua formação em aprendizagem, desenvolvimento e controle motor. Sua prática une ciência, experiência clínica e afeto.
          </p>
          <p className="mt-5 text-lg leading-8 text-cream-200">
            Ao longo de 10 anos de atuação, Monique construiu um trabalho atento às pequenas conquistas, à participação real no cotidiano e à história única de cada criança, família e profissional que acompanha.
          </p>

          <blockquote className="relative mt-8 rounded-[2rem] border border-wine-700 bg-wine-800/50 p-8 shadow-card backdrop-blur">
            <Sparkles className="absolute -top-3 -left-3 h-8 w-8 text-terra-500 bg-wine-900 rounded-full p-1 shadow-sm" />
            <p className="font-display text-2xl leading-9 text-cream-100">
              “O olhar vai além do diagnóstico. É sobre compreender a pessoa, o contexto e o que realmente faz sentido no cotidiano.”
            </p>
            <footer className="mt-4 text-sm font-semibold uppercase tracking-[0.22em] text-terra-400">— Monique Bacin</footer>
          </blockquote>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative lg:pl-10"
        >
          <div className="space-y-4">
            <div className="relative h-[28rem] w-full overflow-hidden rounded-[2rem] shadow-card border border-wine-700 md:h-[32rem]">
              <img 
                src="/imgs/02.jpeg" 
                alt="Monique Bacin em atendimento" 
                className="absolute inset-0 h-full w-full object-cover"
                referrerPolicy="no-referrer"
                style={{ objectPosition: 'center 20%' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-wine-900/90 via-transparent to-transparent"></div>
            </div>

            <div className="w-full rounded-[2rem] bg-cream-50 p-6 shadow-card border border-cream-200">
              <p className="text-xs font-bold uppercase tracking-[0.26em] text-ink-500">Formação e atualização</p>
              <div className="mt-4 space-y-3">
                <div className="flex items-center gap-4 rounded-xl bg-cream-100 p-3">
                  <div className="rounded-full bg-white p-2 shadow-sm border border-cream-200">
                    <GraduationCap className="h-5 w-5 text-terra-500" />
                  </div>
                  <div>
                    <p className="font-bold text-ink-900 text-sm">Graduação em Terapia Ocupacional</p>
                    <p className="text-xs text-ink-600">Faculdade de Medicina do ABC</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 rounded-xl bg-cream-100 p-3">
                  <div className="rounded-full bg-white p-2 shadow-sm border border-cream-200">
                    <Award className="h-5 w-5 text-terra-500" />
                  </div>
                  <div>
                    <p className="font-bold text-ink-900 text-sm">Certificação Internacional ISA-CLASI</p>
                    <p className="text-xs text-ink-600">Formação superior com ênfase clínica.</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 rounded-xl bg-cream-100 p-3">
                  <div className="rounded-full bg-white p-2 shadow-sm border border-cream-200">
                    <BookOpen className="h-5 w-5 text-terra-500" />
                  </div>
                  <div>
                    <p className="font-bold text-ink-900 text-sm">Especialização em andamento</p>
                    <p className="text-xs text-ink-600">Aprendizagem, Desenvolvimento e Controle Motor</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
