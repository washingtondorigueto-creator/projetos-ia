import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import './globals.css';

const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-manrope'
});

export const metadata: Metadata = {
  title: 'Exemplo Inc. | Gestão de tarefas com IA',
  description:
    'Plataforma de gestão de tarefas com IA que transforma prompts em planos de ação claros para startups e freelancers.'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="dark">
      <body
        className={`${manrope.className} min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950 text-slate-100`}
      >
        {children}
      </body>
    </html>
  );
}
