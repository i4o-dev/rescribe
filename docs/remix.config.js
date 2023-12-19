const adapter = require('@netlify/remix-adapter')

/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
	...(process.env.NODE_ENV === 'production' ? adapter.config : undefined),
	browserNodeBuiltinsPolyfill: {
		modules: {
			fs: true,
			path: true,
			punycode: true,
		},
	},
	ignoredRouteFiles: ['**/.*'],
	postcss: true,
	// appDirectory: "app",
	// assetsBuildDirectory: "public/build",
	// publicPath: "/build/",
	// serverBuildPath: "build/index.js",
	serverDependenciesToBundle: [/.*/],
	serverModuleFormat: 'cjs',
	tailwind: true,
	watchPaths: ['../packages/'],
}
