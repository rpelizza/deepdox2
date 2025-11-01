import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ButtonModule } from 'primeng/button';

interface MenuItem {
	label: string;
	icon: string;
	route?: string;
	children?: MenuItem[];
}

@Component({
	selector: 'app-sidebar',
	standalone: true,
	imports: [RouterLink, RouterLinkActive, ButtonModule],
	templateUrl: './sidebar.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent {
	sidebarVisible = input.required<boolean>();
	toggleSidebar = output<void>();

	menuItems: MenuItem[] = [
		{
			label: 'Início',
			icon: 'pi pi-home',
			children: [{ label: 'Dashboard', icon: 'pi pi-chart-line', route: '/dashboard' }],
		},
		{
			label: 'Empresas',
			icon: 'pi pi-building',
			children: [
				{ label: 'Adicionar empresa', icon: 'pi pi-plus-circle', route: '/empresas/nova' },
				{ label: 'Listar empresas', icon: 'pi pi-list', route: '/empresas' },
				{ label: 'Relatórios', icon: 'pi pi-file-pdf', route: '/empresas/relatorios' },
			],
		},
		{
			label: 'Documentos',
			icon: 'pi pi-file',
			children: [
				{ label: 'Meus documentos', icon: 'pi pi-folder', route: '/documentos' },
				{ label: 'Upload', icon: 'pi pi-upload', route: '/documentos/upload' },
				{ label: 'Histórico', icon: 'pi pi-history', route: '/documentos/historico' },
				{ label: 'Arquivos compartilhados', icon: 'pi pi-share-alt', route: '/documentos/compartilhados' },
			],
		},
		{
			label: 'Usuários',
			icon: 'pi pi-users',
			children: [
				{ label: 'Listar usuários', icon: 'pi pi-list', route: '/usuarios' },
				{ label: 'Adicionar usuário', icon: 'pi pi-user-plus', route: '/usuarios/novo' },
				{ label: 'Permissões', icon: 'pi pi-shield', route: '/usuarios/permissoes' },
			],
		},
		{
			label: 'Configurações',
			icon: 'pi pi-cog',
			children: [
				{ label: 'Perfil', icon: 'pi pi-user', route: '/configuracoes/perfil' },
				{ label: 'Preferências', icon: 'pi pi-sliders-h', route: '/configuracoes/preferencias' },
				{ label: 'Notificações', icon: 'pi pi-bell', route: '/configuracoes/notificacoes' },
			],
		},
	];
}
