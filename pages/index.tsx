import { Roboto, Lexend } from 'next/font/google';
import Image from 'next/image';
import { capitalizeFirstLetter } from '@/utils/utils';

const roboto = Roboto({ weight: ['400', '500'], subsets: ['vietnamese'], display: 'swap' });
const lexend = Lexend({
	weight: ['400'],
	subsets: ['latin'],
	variable: '--font-lexend',
	display: 'swap',
});

export default function Home() {
	return (
		<main className={`${roboto.className} ${lexend.variable} text-[16px]`}>
			<header className="bg-black h-[110px] flex justify-between items-center text-white px-[90px] text-[20px]">
				<span className="flex items-center gap-1">
					<Image src="/logo.png" alt="logo" width={64} height={64} />
					<span className="font-lexend">FairSharing</span>
				</span>
				<ul className="flex items-center gap-8">
					{['twitter', 'telegram'].map((item) => (
						<li className="flex items-center gap-2 cursor-pointer">
							<Image src={`/${item}.png`} alt={item} width={28} height={28} />
							<span>{capitalizeFirstLetter(item)}</span>
						</li>
					))}
				</ul>
			</header>
		</main>
	);
}
