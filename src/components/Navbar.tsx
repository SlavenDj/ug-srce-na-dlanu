import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { Button } from '@/components/ui/button';
import { X, Menu, ChevronDown, Sun, Moon } from 'lucide-react';
import {
	DropdownMenu,
	DropdownMenuTrigger,
	DropdownMenuPortal,
	DropdownMenuPositioner,
	DropdownMenuPopup,
	DropdownMenuItem,
} from '@/components/ui/dropdown-menu';

const langs = [
	{ code: 'sr' as const, label: 'СР' },
	{ code: 'sr-latin' as const, label: 'SR' },
	{ code: 'en' as const, label: 'EN' },
];

export default function Navbar() {
	const { language, setLanguage, t } = useLanguage();
	const { theme, toggleTheme } = useTheme();
	const location = useLocation();
	const [menuOpen, setMenuOpen] = useState(false);

	useEffect(() => {
		setMenuOpen(false);
	}, [location.pathname]);

	useEffect(() => {
		document.body.style.overflow = menuOpen ? 'hidden' : '';
		return () => {
			document.body.style.overflow = '';
		};
	}, [menuOpen]);

	const dropdowns = [
		{
			label: t.nav.organization,
			items: [
				{ to: '/about', label: t.nav.about },
				{ to: '/about#team', label: t.nav.team },
				{ to: '/about#partners', label: t.nav.partners },
			],
		},
		{
			label: t.nav.ourWork,
			items: [
				{ to: '/projects', label: t.nav.actions },
				{ to: '/news', label: t.nav.news },
				{ to: '/archive', label: t.nav.archive },
			],
		},
		{
			label: t.nav.support,
			items: [
				{ to: '/donate', label: t.nav.donate },
				{ to: '/bazar', label: language === 'sr' ? 'Базар' : 'Bazar' },
				{
					to: '/request-help',
					label: language === 'sr' ? 'Помоћ' : 'Pomoć',
				},
			],
		},
	];

	function isActive(to: string) {
		if (to === '/') return location.pathname === '/';
		if (to.includes('#')) return location.pathname === to.split('#')[0];
		return location.pathname.startsWith(to);
	}

	return (
		<nav className='fixed top-0 left-0 right-0 z-[1000] bg-white/95 dark:bg-[#0f1117]/95 backdrop-blur-3xl border-b border-gray-200 dark:border-gray-200/10'>
			<div className='mx-auto max-w-7xl px-4 sm:px-6 flex items-center justify-between h-[64px] sm:h-[70px]'>
				<Link
					to='/'
					className='text-[1.2rem] sm:text-[1.4rem] font-bold text-primary no-underline flex items-center gap-1.5 shrink-0'
					onClick={() => setMenuOpen(false)}
				>
					<span className='text-[1.3rem] sm:text-[1.5rem]'>❤</span>
					<span className='max-sm:hidden'>Срце на Длану</span>
					<span className='sm:hidden'>Срце</span>
				</Link>

				{/* Desktop */}
				<div className='hidden md:flex items-center gap-0.5 xl:gap-1 min-w-0 flex-1 justify-end overflow-x-auto [&::-webkit-scrollbar]:hidden'>
					<Link
						to='/'
						className={`no-underline text-gray-700 dark:text-gray-300 text-[0.8rem] xl:text-[0.85rem] font-medium py-2 px-2 xl:px-3 rounded-card-sm transition-all duration-300 whitespace-nowrap hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-800 shrink-0 ${
							location.pathname === '/'
								? 'text-primary bg-gray-100 dark:bg-gray-800'
								: ''
						}`}
					>
						{t.nav.home}
					</Link>

					{dropdowns.map((dropdown) => (
						<DropdownMenu key={dropdown.label}>
							<DropdownMenuTrigger
								className={`flex items-center gap-0.5 no-underline text-gray-700 dark:text-gray-300 text-[0.8rem] xl:text-[0.85rem] font-medium py-2 px-2 xl:px-3 rounded-card-sm transition-all duration-300 whitespace-nowrap hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-800 shrink-0 cursor-pointer border-none bg-transparent ${
									dropdown.items.some((item) =>
										isActive(item.to),
									)
										? 'text-primary bg-gray-100 dark:bg-gray-800'
										: ''
								}`}
							>
								{dropdown.label}
								<ChevronDown className='w-3 h-3 mt-0.5 opacity-60' />
							</DropdownMenuTrigger>
							<DropdownMenuPortal>
								<DropdownMenuPositioner
									align='start'
									sideOffset={6}
								>
									<DropdownMenuPopup>
										{dropdown.items.map((item) => (
											<DropdownMenuItem
												key={item.to}
												render={<Link to={item.to} />}
												className={
													isActive(item.to)
														? 'text-primary! bg-gray-100! dark:bg-gray-800!'
														: ''
												}
											>
												{item.label}
											</DropdownMenuItem>
										))}
									</DropdownMenuPopup>
								</DropdownMenuPositioner>
							</DropdownMenuPortal>
						</DropdownMenu>
					))}

					<Link
						to='/contact'
						className={`no-underline text-gray-700 dark:text-gray-300 text-[0.8rem] xl:text-[0.85rem] font-medium py-2 px-2 xl:px-3 rounded-card-sm transition-all duration-300 whitespace-nowrap hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-800 shrink-0 ${
							location.pathname === '/contact'
								? 'text-primary bg-gray-100 dark:bg-gray-800'
								: ''
						}`}
					>
						{t.nav.contact}
					</Link>

					<Button
						variant='default'
						size='sm'
						className='rounded-xl ml-1 shrink-0 text-xs xl:text-sm'
						render={<Link to='/volunteering' />}
					>
						{t.nav.volunteer}
					</Button>

					<div className='flex items-center gap-1 ml-1.5 shrink-0'>
						<Button
							variant='ghost'
							size='icon-sm'
							className='rounded-[6px]'
							onClick={toggleTheme}
							aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
						>
							{theme === 'dark' ? (
								<Sun className='w-3.5 h-3.5' />
							) : (
								<Moon className='w-3.5 h-3.5' />
							)}
						</Button>
						{langs.map(({ code, label }) => (
							<Button
								key={code}
								variant={
									language === code ? 'default' : 'outline'
								}
								size='sm'
								className='rounded-[6px] text-xs font-semibold !px-1.5 xl:!px-2'
								onClick={() => setLanguage(code)}
							>
								{label}
							</Button>
						))}
					</div>
				</div>

				{/* Mobile hamburger */}
				<Button
					variant='ghost'
					size='icon'
					className='md:hidden'
					onClick={() => setMenuOpen(!menuOpen)}
					aria-label={menuOpen ? 'Close menu' : 'Open menu'}
				>
					{menuOpen ? (
						<X className='w-5 h-5' />
					) : (
						<Menu className='w-5 h-5' />
					)}
				</Button>
			</div>

			{/* Mobile backdrop */}
			{menuOpen && (
				<div
					className='fixed inset-0 bg-black/30 z-40 md:hidden'
					onClick={() => setMenuOpen(false)}
				/>
			)}

			{/* Mobile menu */}
			<div
				className={`fixed top-[64px] sm:top-[70px] left-0 right-0 bottom-0 z-50 bg-white dark:bg-[#0f1117] md:hidden flex flex-col transition-transform duration-300 ease-in-out ${
					menuOpen ? 'translate-x-0' : 'translate-x-full'
				}`}
			>
				<div className='flex-1 overflow-y-auto px-4 py-3'>
					<Link
						to='/'
						className={`block no-underline text-gray-700 dark:text-gray-300 text-base font-medium py-3 px-4 rounded-card-sm transition-all duration-200 hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-800 ${
							location.pathname === '/'
								? 'text-primary bg-gray-100 dark:bg-gray-800'
								: ''
						}`}
						onClick={() => setMenuOpen(false)}
					>
						{t.nav.home}
					</Link>

					{dropdowns.map((dropdown) => (
						<div key={dropdown.label}>
							<div className='text-[0.7rem] font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 px-4 pt-4 pb-1'>
								{dropdown.label}
							</div>
							{dropdown.items.map((item) => (
								<Link
									key={item.to}
									to={item.to}
									className={`block no-underline text-gray-700 dark:text-gray-300 text-base font-medium py-3 px-4 rounded-card-sm transition-all duration-200 hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-800 ${
										isActive(item.to)
											? 'text-primary bg-gray-100 dark:bg-gray-800'
											: ''
									}`}
									onClick={() => setMenuOpen(false)}
								>
									{item.label}
								</Link>
							))}
						</div>
					))}

					<Link
						to='/contact'
						className={`block no-underline text-gray-700 dark:text-gray-300 text-base font-medium py-3 px-4 rounded-card-sm transition-all duration-200 hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-800 ${
							location.pathname === '/contact'
								? 'text-primary bg-gray-100 dark:bg-gray-800'
								: ''
						}`}
						onClick={() => setMenuOpen(false)}
					>
						{t.nav.contact}
					</Link>
				</div>

				<div className='border-t border-gray-200 dark:border-gray-200/10 p-4 flex flex-col gap-3'>
					<div className='flex items-center gap-2 justify-center mb-2'>
						<Button
							variant='ghost'
							size='sm'
							className='rounded-[6px]'
							onClick={toggleTheme}
						>
							{theme === 'dark' ? (
								<Sun className='w-4 h-4' />
							) : (
								<Moon className='w-4 h-4' />
							)}
							<span className='ml-2 text-xs'>
								{theme === 'dark' ? 'Light' : 'Dark'}
							</span>
						</Button>
					</div>
					<Button
						variant='default'
						className='w-full rounded-xl'
						render={<Link to='/volunteering' />}
						onClick={() => setMenuOpen(false)}
					>
						{t.nav.volunteer}
					</Button>
					<div className='flex gap-2 justify-center'>
						{langs.map(({ code, label }) => (
							<Button
								key={code}
								variant={
									language === code ? 'default' : 'outline'
								}
								size='sm'
								className='rounded-[6px] text-xs font-semibold flex-1 max-w-[80px]'
								onClick={() => setLanguage(code)}
							>
								{label}
							</Button>
						))}
					</div>
				</div>
			</div>
		</nav>
	);
}
