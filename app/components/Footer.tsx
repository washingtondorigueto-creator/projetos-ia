const socialLinks = [
  { label: 'LinkedIn', href: '#', aria: 'Visitar LinkedIn da Exemplo Inc.' },
  { label: 'Instagram', href: '#', aria: 'Visitar Instagram da Exemplo Inc.' },
  { label: 'YouTube', href: '#', aria: 'Visitar YouTube da Exemplo Inc.' }
];

const usefulLinks = [
  { label: 'Central de ajuda', href: '#' },
  { label: 'Política de privacidade', href: '#' },
  { label: 'Termos de uso', href: '#' }
];

export default function Footer() {
  return (
    <footer
      id="contato"
      className="border-t border-white/10 bg-slate-950/70 px-6 py-12 backdrop-blur sm:px-10"
    >
      <div className="mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[1.5fr_1fr_1fr]">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white">Exemplo Inc.</h3>
          <p className="text-sm text-slate-300">
            Transforme texto em tarefas inteligentes e mantenha seu time alinhado
            do briefing à entrega.
          </p>
          <div className="space-y-1 text-sm text-slate-300">
            <p>contato@exemploinc.com</p>
            <p>+55 (11) 99999-0000</p>
          </div>
        </div>
        <div className="space-y-3">
          <p className="text-sm font-semibold text-white">Links úteis</p>
          <ul className="space-y-2 text-sm text-slate-300">
            {usefulLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="transition hover:text-white">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-3">
          <p className="text-sm font-semibold text-white">Redes sociais</p>
          <ul className="space-y-2 text-sm text-slate-300">
            {socialLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  aria-label={link.aria}
                  className="transition hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-10 w-full max-w-6xl border-t border-white/10 pt-6 text-xs text-slate-500">
        © 2024 Exemplo Inc. Todos os direitos reservados.
      </div>
    </footer>
  );
}
