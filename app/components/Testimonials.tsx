const testimonials = [
  {
    quote:
      'Reduzimos em 40% o tempo de planejamento. Agora cada sprint começa com tarefas claras e prontas para execução.',
    name: 'Mariana Costa',
    role: 'Head de Produto',
    company: 'Pulse Labs'
  },
  {
    quote:
      'Como freelancer, a IA me ajuda a justificar entregas e manter clientes atualizados sem esforço adicional.',
    name: 'Rafael Lima',
    role: 'Consultor de Growth',
    company: 'RL Studio'
  },
  {
    quote:
      'A automação de status fez nosso time remoto ganhar confiança e previsibilidade nas entregas.',
    name: 'Beatriz Souza',
    role: 'COO',
    company: 'SparkHub'
  }
];

export default function Testimonials() {
  return (
    <section
      id="depoimentos"
      className="mx-auto flex w-full max-w-6xl flex-col gap-10"
    >
      <div className="flex flex-col gap-4">
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">
          Times que entregam mais falam melhor
        </h2>
        <p className="max-w-2xl text-sm text-slate-300 sm:text-base">
          A TaskFlow AI é construída com feedback de profissionais que vivem de
          produtividade. Veja o que mudou para eles.
        </p>
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <figure
            key={testimonial.name}
            className="flex h-full flex-col justify-between gap-6 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur"
          >
            <blockquote className="text-sm text-slate-200">
              “{testimonial.quote}”
            </blockquote>
            <figcaption>
              <p className="text-sm font-semibold text-white">
                {testimonial.name}
              </p>
              <p className="text-xs text-slate-400">
                {testimonial.role} · {testimonial.company}
              </p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
