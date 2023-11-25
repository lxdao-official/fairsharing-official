import { Roboto, Lexend } from 'next/font/google';
import Image from 'next/image';
import { capitalizeFirstLetter } from '@/utils/utils';

const roboto = Roboto({ weight: ['400', '500'], subsets: ['latin'], display: 'swap' });
const lexend = Lexend({
	weight: ['400'],
	subsets: ['latin'],
	variable: '--font-lexend',
	display: 'swap',
});

export default function Home() {
	return (
		<main className={`${roboto} ${lexend.variable} text-[16px]`}>
			<div className="bg-black">
				<header className="sticky top-0 flex h-[110px] items-center justify-between px-[90px] text-base text-white">
					<span className="flex items-center gap-1">
						<Image src="/logo.png" alt="logo" width={64} height={64} />
						<span className="font-lexend">FairSharing</span>
					</span>
					<ul className="flex items-center gap-8">
						{['twitter', 'telegram'].map((item) => (
							<li className="flex cursor-pointer items-center gap-2">
								<Image src={`/${item}.png`} alt={item} width={28} height={28} />
								<span>{capitalizeFirstLetter(item)}</span>
							</li>
						))}
					</ul>
				</header>
				<div className="flex flex-col items-center pb-[181px] pt-[76px] text-white">
					<Image src="/pizza.png" alt="pizza" width={719} height={248} />
					<h1 className="mt-[41px] text-center font-lexend text-[90px] font-medium leading-[90px]">
						Decentralize coordination,
						<br />
						power, and identity
					</h1>
					<p className="mt-[25px] text-center text-base leading-[20px] opacity-80">
						Connect, collaborate, and contribute,
						<br />
						for community recognition, fair rewards, and non-custodial identity.
					</p>
					<button className="bg-gradient text-main mt-[20px] h-[56px] w-[180px] rounded text-base">
						Launch App
					</button>
				</div>
			</div>
		</main>
	);
}
