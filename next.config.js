/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	typescript: {
		ignoreBuildErrors: true,
	},
	experimental: {
		serverActions: true,
		// serverComponentsExternalPackages: ['mongoose'],
	},

	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'cdn.sanity.io',
			},
			{
				protocol: 'https',
				hostname: 'fastly.picsum.photos',
			},
		],
	},
};

module.exports = nextConfig;
