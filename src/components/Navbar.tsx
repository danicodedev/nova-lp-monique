import { MessageCircle } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/60 bg-white/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#topo" className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blush-200 to-sage-300 text-sm font-extrabold text-white shadow-card">MB</div>
          <div>
            <p className="text-sm font-semibold text-ink-900">Monique Bacin</p>
            <p className="text-xs text-ink-500">Terapia Ocupacional</p>
          </div>
        </a>

        <nav className="hidden items-center gap-8 text-sm font-medium text-ink-500 lg:flex">
          <a href="#sobre" className="transition hover:text-ink-900">Sobre</a>
          <a href="#especialidades" className="transition hover:text-ink-900">Especialidades</a>
          <a href="#servicos" className="transition hover:text-ink-900">Serviços</a>
          <a href="#conteudo" className="transition hover:text-ink-900">Conteúdo</a>
          <a href="#depoimentos" className="transition hover:text-ink-900">Depoimentos</a>
          <a href="#contato" className="transition hover:text-ink-900">Contato</a>
        </nav>

        <a
          href="https://wa.me/5511986314497?text=Ol%C3%A1%2C%20Monique.%20Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20ou%20entender%20qual%20atendimento%20faz%20mais%20sentido%20para%20mim."
          target="_blank"
          rel="noreferrer"
          className="hidden items-center gap-2 rounded-full bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-600/20 transition hover:-translate-y-0.5 hover:bg-emerald-700 md:inline-flex"
        >
          <MessageCircle className="h-4 w-4" />
          Falar no WhatsApp
        </a>
      </div>
    </header>
  );
}
