import { Roboto, Lexend } from 'next/font/google';
import Image from 'next/image';
import { capitalizeFirstLetter } from '@/utils/utils';
import { useEffect, useMemo, useRef, useState } from 'react';
import axios from 'axios';
import { useScroll } from 'ahooks';
import classNames from 'classnames';

const roboto = Roboto({ weight: ['400', '500'], subsets: ['latin'], display: 'swap' });
const lexend = Lexend({
	weight: ['400'],
	subsets: ['latin'],
	variable: '--font-lexend',
	display: 'swap',
});

const urls: Record<string, string> = {
	project: 'https://fairsharing.xyz/list/',
	github: 'https://github.com/lxdao-official/fairsharing-frontend/',
	twitter: 'https://twitter.com/fairsharing_xyz',
	telegram: 'https://t.me/+KV7n26CipPQwZGZl',
	docs: 'https://docs.google.com/presentation/d/1RDsUksS6fVP6FVmSRyemGMnvwsedysAqa3YQgHNzXh8/edit#slide=id.g26dcc116661_2_353',
};

export default function Home() {
	useScroll(typeof window !== 'undefined' ? window.document : null);
	const [builders, setBuilders] = useState<IBuilder[]>([]);
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		axios.get<{ data: IProject }>('https://api.lxdao.io/project/012').then((res) => {
			setBuilders(res.data.data.buidlersOnProject);
		});
	}, []);

	const openUrl = (url: string) => {
		window.open(url, '_blank');
	};

	const rect = ref.current?.getBoundingClientRect();
	const isLight = !ref.current ? false : (rect?.height || 0) - Math.abs(rect?.top || 0) <= 84;

	const header = useMemo(() => {
		const iconPath = isLight ? '-light' : '';
		return (
			<div
				className={classNames('fixed left-0 right-0 top-0 z-10', {
					'bg-white': isLight,
					'bg-none': !isLight,
				})}
			>
				<header
					className={classNames(
						'flex h-[84px] items-center justify-between px-[90px] text-base text-white',
						{ 'text-main': isLight },
					)}
				>
					<span className="flex items-center gap-1">
						<Image src={`/logo${iconPath}.png`} alt="logo" width={64} height={64} />
						<span className={classNames('font-lexend', { 'text-main': isLight })}>FairSharing</span>
					</span>
					<ul className="flex items-center gap-8">
						{['twitter', 'telegram'].map((item) => (
							<li key={item}>
								<a
									href={urls[item]}
									className="flex cursor-pointer items-center gap-2"
									target="_blank"
								>
									<Image src={`/${item}${iconPath}.png`} alt={item} width={28} height={28} />
									<span className={classNames({ 'text-main': isLight })}>
										{capitalizeFirstLetter(item)}
									</span>
								</a>
							</li>
						))}
					</ul>
				</header>
			</div>
		);
	}, [isLight]);

	return (
		<main className={`${roboto} ${lexend.variable} text-[16px]`}>
			{header}
			<div className="bg-black pt-[84px]" ref={ref}>
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
					<button
						className="button-bg mt-[20px] h-[56px] w-[180px] rounded border-2 border-[#0000] text-base text-main"
						onClick={() => openUrl(urls.project)}
					>
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
					<div className="relative max-w-[639px]">
						<Image src="/post.png" alt="post" width={639} height={501} />
						<div className="absolute right-1/2 w-full max-w-[478px]">
							<Image src="/arrow_1.png" alt="arrow" width={478} height={288} />
						</div>
					</div>
				</div>
				<div className="mt-[288px] flex items-center gap-[71px]">
					<div className="relative max-w-[718px]">
						<Image src="/contribution.png" alt="contribution" width={718} height={378} />
						<div className="absolute left-1/3 w-full max-w-[493px]">
							<Image src="/arrow_2.png" alt="arrow" width={493} height={292} />
						</div>
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
						<div className="absolute right-[-33%] top-[250px] w-full max-w-[478px]">
							<Image src="/arrow_3.png" alt="arrow" width={478} height={289} />
						</div>
					</div>
					<div className="relative max-w-[727px]">
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
			<div className="mt-[177px] flex flex-col items-center">
				<Image src="/resume.png" alt="resume" width={56} height={56} />
				<p className="text-[48px] font-medium leading-[56px]">
					Fully own your non-custodial <span className="gradient-text">identity</span>
				</p>
				<ul className="mt-[60px] grid gap-[24px] sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
					{builders.map((builder) => {
						const { name, avatar } = builder.buidler;
						return (
							<li
								className="flex h-[291px] w-[240px] flex-col items-center rounded p-[20px] shadow-drop"
								key={avatar}
							>
								<img src={avatar} alt={name} width={200} height={200} />
								<span className="mt-[24px] text-[14px] text-main">{name}</span>
							</li>
						);
					})}
				</ul>
			</div>
			<div className="try-wrapper mt-[102px] flex h-[360px] flex-col items-center">
				<p className="mt-[89px] h-[131px] text-[48px] font-medium leading-[131px] text-white">
					If you&apos;ve made it this far, why not give it a try?
				</p>
				<button
					className="mt-[8px] h-[56px] w-[180px] rounded border-2 border-[#fff] bg-white text-base text-main hover:bg-transparent hover:text-white"
					onClick={() => openUrl(urls.project)}
				>
					Launch App
				</button>
			</div>
			<div className="w-full bg-[#F1F5F9] py-[60px]">
				<footer className="mx-auto flex max-w-[1216px] justify-center gap-[200px]">
					<div className="flex flex-col">
						<h6 className="text-[24px] font-semibold leading-[58px] text-black">Developer</h6>
						<a className="leading-[40px] text-[#646F7C]" href={urls.github} target="_blank">
							GitHub
						</a>
					</div>
					<div className="flex flex-col">
						<h6 className="text-[24px] font-semibold leading-[58px] text-black">Follow us</h6>
						<a className="leading-[40px] text-[#646F7C]" href={urls.twitter} target="_blank">
							Twitter
						</a>
						<a className="leading-[40px] text-[#646F7C]" href={urls.telegram} target="_blank">
							Telegram
						</a>
					</div>
					<div className="flex flex-col">
						<h6 className="text-[24px] font-semibold leading-[58px] text-black">Resources</h6>
						<a className="leading-[40px] text-[#646F7C]" href={urls.docs} target="_blank">
							Docs
						</a>
					</div>
				</footer>
			</div>
		</main>
	);
}
