import { motion } from 'motion/react';
import { GraduationCap, Award, BookOpen, HeartHandshake, Sparkles } from 'lucide-react';

export default function About() {
  return (
    <section id="sobre" className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.26em] text-blush-400">Sobre Monique</p>
          <h2 className="mt-3 max-w-2xl font-display text-4xl text-ink-900 md:text-5xl">Um olhar terapêutico que vai além do diagnóstico.</h2>
          <p className="mt-6 text-lg leading-8 text-ink-500">
            Monique Bacin é graduada em Terapia Ocupacional pela Faculdade de Medicina do ABC, tem certificação internacional em Integração Sensorial pela ISA-CLASI e segue aprofundando sua formação em aprendizagem, desenvolvimento e controle motor. Sua prática une ciência, experiência clínica e afeto.
          </p>
          <p className="mt-5 text-lg leading-8 text-ink-500">
            Ao longo de 10 anos de atuação, Monique construiu um trabalho atento às pequenas conquistas, à participação real no cotidiano e à individualidade de cada criança, família e profissional que acompanha.
          </p>

          <blockquote className="relative mt-8 rounded-[2rem] border border-blush-200 bg-blush-100/45 p-8 shadow-card">
            <Sparkles className="absolute -top-3 -left-3 h-8 w-8 text-blush-400 bg-white rounded-full p-1 shadow-sm" />
            <p className="font-display text-2xl leading-9 text-ink-900">
              “O olhar vai além do diagnóstico. É sobre compreender a pessoa, o contexto e o que realmente faz sentido no cotidiano.”
            </p>
            <footer className="mt-4 text-sm font-semibold uppercase tracking-[0.22em] text-ink-500">Monique Bacin</footer>
          </blockquote>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-4"
        >
          <div className="relative h-64 w-full overflow-hidden rounded-[2rem] shadow-card" >
            <img 
              src="\dist\imgs\02.jpeg?auto=format&fit=crop&q=80&w=800" 
              alt="Monique Bacin em atendimento" 
              className="absolute inset-0 h-full w-full object-cover"
              referrerPolicy="no-referrer"
              style={{ objectPosition: 'center 20%' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-900/60 to-transparent"></div>
            <div className="absolute bottom-6 left-6">
              <p className="text-white font-semibold">Atendimento humanizado</p>
              <p className="text-white/80 text-sm">Foco no vínculo e na individualidade</p>
            </div>
          </div>

          <div className="rounded-[2rem] bg-white p-6 shadow-card">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-ink-500">Formação e atualização</p>
            <div className="mt-5 space-y-4">
              <div className="flex items-start gap-4 rounded-2xl bg-sand-100 p-5">
                <div className="rounded-xl bg-white p-2 shadow-sm">
                  <GraduationCap className="h-6 w-6 text-ink-700" />
                </div>
                <div>
                  <p className="font-semibold text-ink-900">Graduação em Terapia Ocupacional</p>
                  <p className="mt-1 text-sm text-ink-500">Faculdade de Medicina do ABC</p>
                </div>
              </div>
              <div className="flex items-start gap-4 rounded-2xl bg-sage-100 p-5">
                <div className="rounded-xl bg-white p-2 shadow-sm">
                  <Award className="h-6 w-6 text-sage-500" />
                </div>
                <div>
                  <p className="font-semibold text-ink-900">Certificação Internacional ISA-CLASI</p>
                  <p className="mt-1 text-sm text-ink-500">Integração Sensorial com base técnica e aplicação clínica.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 rounded-2xl bg-mist-100 p-5">
                <div className="rounded-xl bg-white p-2 shadow-sm">
                  <BookOpen className="h-6 w-6 text-mist-400" />
                </div>
                <div>
                  <p className="font-semibold text-ink-900">Especialização em andamento</p>
                  <p className="mt-1 text-sm text-ink-500">Aprendizagem, Desenvolvimento e Controle Motor • USCS</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-[2rem] bg-white p-6 shadow-card">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-ink-500">Experiência</p>
              <p className="mt-3 text-xl font-semibold text-ink-900">10 anos de prática clínica</p>
              <p className="mt-2 text-sm leading-6 text-ink-500">Atuação em clínica própria e passagens por Clinsaúde Equilíbrio e Vida, Clínica Sefape e Grupo Método.</p>
            </div>
            <div className="rounded-[2rem] bg-white p-6 shadow-card">
              <div className="mb-3 inline-flex rounded-xl bg-blush-100 p-2 text-blush-400">
                <HeartHandshake className="h-6 w-6" />
              </div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-ink-500">Filosofia de trabalho</p>
              <p className="mt-1 text-xl font-semibold text-ink-900">Ciência + experiência + afeto</p>
              <p className="mt-2 text-sm leading-6 text-ink-500">Intervenções com leitura clínica, vínculo, metas funcionais e respeito ao processo.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
