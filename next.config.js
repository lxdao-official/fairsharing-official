/** @type {import('next').NextConfig} */
const nextConfig = {
	output: 'standalone',
	reactStrictMode: true,
	transpilePackages: ['ahooks'],

	async redirects() {
		return [
			{
				source: '/list',
				destination: 'https://app.fairsharing.xyz/list',
				permanent: false,
			},
			{
				source: '/project/:path*',
				destination: 'https://app.fairsharing.xyz/project/:path*',
				permanent: false,
			},
		];
	},
};

module.exports = nextConfig;
