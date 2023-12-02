import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<title>FairSharing - Decentralizing Collaboration</title>
				<meta
					name="description"
					content="Decentralizing coordination, power, and identity for a truly inclusive digital era."
				/>
				<meta property="og:title" content="FairSharing | Decentralizing Collaboration" />
				<meta
					property="og:description"
					content="FairSharing empowers web3 contributors to record onchain, gain community attestations, claim token rewards, and experience fair allocation based on contributions."
				/>
				<meta property="og:url" content="https://app.fairsharing.xyz/" />
				<meta property="og:image" content="https://app.fairsharing.xyz/twitter_og.png" />
				<meta property="og:type" content="website" />
				<meta property="twitter:image" content="https://app.fairsharing.xyz/twitter_og.png" />
				<meta property="twitter:card" content="summary" />
				<meta property="twitter:title" content="FairSharing | Decentralizing Collaboration" />
				<meta
					property="twitter:description"
					content="FairSharing empowers web3 contributors to record onchain, gain community attestations, claim token rewards, and experience fair allocation based on contributions."
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
