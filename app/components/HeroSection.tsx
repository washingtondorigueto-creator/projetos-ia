export default function HeroSection() {
  return (
    <section className="mx-auto flex w-full max-w-6xl flex-col gap-12">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-1 flex-col gap-6">
          <span className="w-fit rounded-full border border-indigo-400/30 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-200">
            IA para produtividade real
          </span>
          <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
            Converta prompts em planos de ação e entregue projetos 2x mais rápido.
          </h1>
          <p className="text-base text-slate-300 sm:text-lg">
            A TaskFlow AI transforma instruções em tarefas estruturadas, sugere
            prioridades e acompanha entregas em tempo real. Ideal para startups e
            freelancers que precisam de foco e automação.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#planos"
              className="rounded-full bg-indigo-500 px-6 py-3 text-center text-sm font-semibold text-white shadow-glow transition hover:bg-indigo-400"
            >
              Começar agora
            </a>
            <a
              href="#recursos"
              className="rounded-full border border-white/20 bg-white/5 px-6 py-3 text-center text-sm font-semibold text-white/90 transition hover:border-white/40 hover:text-white"
            >
              Ver recursos
            </a>
          </div>
          <div className="flex flex-wrap gap-6 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Sem necessidade de setup técnico
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-indigo-400" />
              Integrações com ferramentas populares
            </div>
          </div>
        </div>
        <div className="flex flex-1 justify-center">
          <div className="w-full max-w-md space-y-4 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-slate-300">Resumo do projeto</p>
                <p className="text-lg font-semibold text-white">Lançamento do MVP</p>
              </div>
              <span className="rounded-full bg-emerald-400/20 px-3 py-1 text-xs font-semibold text-emerald-200">
                68% concluído
              </span>
            </div>
            <div className="space-y-3">
              {[
                'Definir roadmap com a IA',
                'Priorizar tarefas críticas',
                'Enviar status automático para o time'
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-3"
                >
                  <span className="h-2 w-2 rounded-full bg-indigo-400" />
                  <p className="text-sm text-slate-200">{item}</p>
                </div>
              ))}
            </div>
            <div className="rounded-2xl border border-indigo-400/30 bg-indigo-500/10 px-4 py-3 text-xs text-indigo-100">
              "Crie tarefas para validar onboarding de usuários em 7 dias"
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
