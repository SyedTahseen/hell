const withOptimizedImages = require('next-optimized-images');
const withOffline = require('next-offline');

const nextConfig = {
	workboxOpts: {
		swDest: 'static/service-worker.js',
		runtimeCaching: [
			{
				urlPattern: /^https?.*/,
				handler: 'NetworkFirst',
				options: {
					cacheName: 'https-calls',
					networkTimeoutSeconds: 15,
					expiration: {
						maxEntries: 150,
						maxAgeSeconds: 30 * 24 * 60 * 60 // 1 month
					},
					cacheableResponse: {
						statuses: [0, 200]
					}
				}
			}
		]
	},
	reactStrictMode: true,
	experimental: {
		optimizeFonts: true,
		optimizeImages: true
	}
};

module.exports = withOptimizedImages(withOffline(nextConfig));

