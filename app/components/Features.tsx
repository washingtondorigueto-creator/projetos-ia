const features = [
  {
    title: 'Prompt para pipeline completo',
    description:
      'Transforme linguagem natural em backlogs detalhados, com responsáveis e prazos definidos em segundos.',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="h-6 w-6"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 7h12M6 12h6m-6 5h12"
        />
      </svg>
    )
  },
  {
    title: 'Priorização inteligente',
    description:
      'A IA identifica dependências e sugere o próximo passo mais relevante para manter o ritmo da entrega.',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="h-6 w-6"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6v6l4 2"
        />
        <circle cx="12" cy="12" r="9" />
      </svg>
    )
  },
  {
    title: 'Insights em tempo real',
    description:
      'Dashboards vivos mostram gargalos, metas e progresso individual com atualizações automáticas.',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="h-6 w-6"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 19h16M6 16l4-6 4 3 4-7"
        />
      </svg>
    )
  },
  {
    title: 'Automações sem código',
    description:
      'Dispare notificações, atualize status e gere relatórios sem escrever uma linha de código.',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="h-6 w-6"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3v6m0 6v6m9-9h-6m-6 0H3"
        />
      </svg>
    )
  }
];

export default function Features() {
  return (
    <section id="recursos" className="mx-auto flex w-full max-w-6xl flex-col gap-10">
      <div className="flex flex-col gap-4">
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">
          Recursos que liberam tempo para o que importa
        </h2>
        <p className="max-w-2xl text-sm text-slate-300 sm:text-base">
          Automatize o ciclo completo de tarefas, do briefing ao acompanhamento, com
          uma experiência elegante e preparada para equipes ágeis.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="group rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:border-indigo-400/40 hover:bg-white/10"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-500/15 text-indigo-200">
              {feature.icon}
            </div>
            <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
            <p className="mt-2 text-sm text-slate-300">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
