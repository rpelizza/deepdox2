import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { LandingHeaderComponent } from '../components/landing-header.component';

interface FAQ {
	id: number;
	question: string;
	answer: string;
	open: ReturnType<typeof signal<boolean>>;
}

@Component({
	selector: 'app-landing',
	templateUrl: './landing.page.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
	standalone: true,
	imports: [LandingHeaderComponent, ButtonModule, CardModule],
})
export class LandingPage {
	faqs: FAQ[] = [
		{
			id: 1,
			question: 'O que é o DeepDox e como ele funciona?',
			answer:
				'O DeepDox é uma plataforma de inteligência empresarial que usa IA para gerar dossiês completos de empresas em minutos. Basta inserir o nome ou CNPJ da empresa e nossa IA investiga 26 dimensões diferentes (história, clientes, concorrentes, saúde financeira, ESG, processos judiciais, etc.), cruza dados de múltiplas fontes e entrega um dossiê 360° com insights estratégicos, podcasts persuasivos e relatórios personalizados.',
			open: signal(false),
		},
		{
			id: 2,
			question: 'Quanto tempo leva para gerar um dossiê completo?',
			answer:
				'Em média, um dossiê completo é gerado em poucos minutos. O tempo pode variar dependendo da complexidade da empresa e da quantidade de dados disponíveis, mas nossa IA otimiza o processo para entregar resultados rápidos sem comprometer a qualidade.',
			open: signal(false),
		},
		{
			id: 3,
			question: 'Quais são as fontes de dados utilizadas?',
			answer:
				'Utilizamos múltiplas fontes de dados confiáveis, incluindo registros públicos, bases de dados governamentais, informações financeiras, processos judiciais, propriedade intelectual, redes sociais e outras fontes relevantes do mercado brasileiro. Todos os dados são validados e cruzados para garantir precisão.',
			open: signal(false),
		},
		{
			id: 4,
			question: 'Os dados são seguros e privados?',
			answer:
				'Sim, segurança e privacidade são nossas prioridades. Utilizamos criptografia de ponta a ponta, protocolos de segurança avançados e seguimos as melhores práticas de proteção de dados. Suas pesquisas e informações são confidenciais e não são compartilhadas com terceiros.',
			open: signal(false),
		},
		{
			id: 5,
			question: 'Posso cancelar minha assinatura a qualquer momento?',
			answer:
				'Sim, você pode cancelar sua assinatura a qualquer momento sem taxas ou multas. O acesso permanecerá ativo até o final do período pago.',
			open: signal(false),
		},
		{
			id: 6,
			question: 'Qual a diferença entre os planos?',
			answer:
				'Os planos variam principalmente na quantidade de dossiês mensais, podcasts, armazenamento e nível de suporte. O plano Starter é ideal para uso individual, o Professional para profissionais que precisam de mais volume, e o Enterprise oferece recursos avançados e suporte prioritário para equipes.',
			open: signal(false),
		},
		{
			id: 7,
			question: 'O DeepDox funciona para empresas de qualquer setor?',
			answer:
				'Sim, o DeepDox funciona para empresas de qualquer setor, desde startups até grandes corporações. Nossa IA adapta a análise conforme o contexto e características específicas de cada empresa.',
			open: signal(false),
		},
		{
			id: 8,
			question: 'Posso exportar os dossiês e relatórios?',
			answer:
				'Sim, você pode exportar dossiês completos em PDF ou Excel com design profissional. Os relatórios são estruturados e prontos para apresentação, facilitando o compartilhamento com clientes e equipes.',
			open: signal(false),
		},
	];

	scrollToSection(sectionId: string): void {
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth', block: 'start' });
		}
	}

	toggleFaq(id: number): void {
		const faq = this.faqs.find(f => f.id === id);
		if (faq) {
			faq.open.update(open => !open);
		}
	}
}
