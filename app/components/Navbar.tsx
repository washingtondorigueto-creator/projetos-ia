const navLinks = [
  { label: 'Recursos', href: '#recursos' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Planos', href: '#planos' },
  { label: 'Contato', href: '#contato' }
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-slate-950/70 backdrop-blur">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 sm:px-10">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-indigo-500/20 text-lg font-semibold text-indigo-200 shadow-glow">
            E
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-200">
              Exemplo Inc.
            </p>
            <p className="text-xs text-slate-300">TaskFlow AI</p>
          </div>
        </div>
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-slate-200 transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>
        <a
          href="#planos"
          className="rounded-full border border-indigo-400/40 bg-indigo-500/20 px-5 py-2 text-sm font-semibold text-indigo-100 shadow-glow transition hover:border-indigo-300/70 hover:bg-indigo-500/30"
        >
          Quero uma demo
        </a>
      </nav>
    </header>
  );
}
