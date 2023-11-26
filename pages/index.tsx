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
					<button className="button-bg text-main mt-[20px] h-[56px] w-[180px] rounded border-2 border-[#0000] text-base">
						Launch App
					</button>
				</div>
			</div>
			<div className="mt-[161px] flex flex-col items-center px-[60px]">
				<div className="flex items-center gap-[71px]">
					<div className="relative top-[-80px]">
						<Image src="/on_chain.png" alt="on chain" width={56} height={56} />
						<p className="mt-[20px] text-[48px] font-medium leading-[56px]">
							Easy interface to
							<br />
							<span className="gradient-text">post</span> a contribution on-chain
						</p>
					</div>
					<div className="max-w-[639px]">
						<Image src="/post.png" alt="post" width={639} height={501} />
					</div>
				</div>
				<div className="mt-[288px] flex items-center gap-[71px]">
					<div className="max-w-[718px]">
						<Image src="/contribution.png" alt="contribution" width={718} height={378} />
					</div>
					<div className="relative top-[-46px]">
						<Image src="/help.png" alt="help" width={56} height={56} />
						<p className="mt-[20px] text-[48px] font-medium leading-[56px]">
							Vote, interact and reach
							<br />
							<span className="gradient-text">consensus</span> within the community
						</p>
					</div>
				</div>
				<div className="mt-[191px] flex items-center gap-[43px]">
					<div className="relative top-[-16px]">
						<Image src="/wallet.png" alt="wallet" width={56} height={56} />
						<p className="mt-[20px] text-[48px] font-medium leading-[56px]">
							<span className="gradient-text">Claim $tokens</span>
							<br />
							with one-click to your wallet
						</p>
					</div>
					<div className="max-w-[727px]">
						<Image src="/claim.png" alt="claim" width={727} height={599} />
					</div>
				</div>
				<div className="mt-[184px] flex items-center gap-[185px]">
					<div className="max-w-[564px]">
						<Image src="/dashboard.png" alt="dashboard" width={564} height={313} />
					</div>
					<div className="relative top-[-6px]">
						<Image src="/time.png" alt="time" width={56} height={56} />
						<p className="mt-[20px] text-[48px] font-medium leading-[56px]">
							<span className="gradient-text">Allocate</span> rewards on-chain
							<br />
							in a fairer way
						</p>
					</div>
				</div>
			</div>
			<div>
				<p></p>
			</div>
		</main>
	);
}
