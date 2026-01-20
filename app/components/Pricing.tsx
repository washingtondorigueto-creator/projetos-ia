const plans = [
  {
    name: 'Starter',
    price: 'R$ 59',
    description: 'Para freelancers iniciando automação.',
    benefits: [
      'Até 5 projetos ativos',
      'Geração de tarefas por prompt',
      'Relatórios semanais'
    ]
  },
  {
    name: 'Pro',
    price: 'R$ 149',
    description: 'Para times enxutos com metas agressivas.',
    benefits: [
      'Projetos ilimitados',
      'Priorização inteligente',
      'Integrações com Slack e Notion',
      'Automação de status'
    ],
    highlighted: true
  },
  {
    name: 'Business',
    price: 'R$ 299',
    description: 'Para operações que precisam de escala.',
    benefits: [
      'Times multi-equipe',
      'Workflows personalizados',
      'Suporte dedicado',
      'Relatórios em tempo real'
    ]
  }
];

export default function Pricing() {
  return (
    <section id="planos" className="mx-auto flex w-full max-w-6xl flex-col gap-10">
      <div className="flex flex-col gap-4">
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">
          Planos flexíveis para acelerar entregas
        </h2>
        <p className="max-w-2xl text-sm text-slate-300 sm:text-base">
          Escolha o pacote ideal para o seu ritmo. Todos os planos incluem
          onboarding guiado e acesso às atualizações contínuas da IA.
        </p>
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`flex h-full flex-col justify-between rounded-3xl border bg-white/5 p-6 backdrop-blur transition ${
              plan.highlighted
                ? 'border-indigo-400/60 bg-indigo-500/10 shadow-glow'
                : 'border-white/10'
            }`}
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-white">{plan.name}</h3>
                {plan.highlighted && (
                  <span className="rounded-full bg-indigo-500/20 px-3 py-1 text-xs font-semibold text-indigo-100">
                    Recomendado
                  </span>
                )}
              </div>
              <p className="text-sm text-slate-300">{plan.description}</p>
              <div className="text-3xl font-semibold text-white">
                {plan.price}
                <span className="text-sm font-normal text-slate-400">/mês</span>
              </div>
              <ul className="space-y-2 text-sm text-slate-200">
                {plan.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-indigo-400" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
            <button
              type="button"
              aria-label={`Selecionar plano ${plan.name}`}
              className={`mt-6 rounded-full px-5 py-2 text-sm font-semibold transition ${
                plan.highlighted
                  ? 'bg-indigo-500 text-white hover:bg-indigo-400'
                  : 'border border-white/20 bg-white/5 text-white/90 hover:border-white/40'
              }`}
            >
              Escolher {plan.name}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
