import React from 'react';
import Document, {Html, Head, Main, NextScript, DocumentContext} from 'next/document';
import {ServerStyleSheet} from 'styled-components';

export default class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const sheet = new ServerStyleSheet();
		const originalRenderPage = ctx.renderPage;

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: App => props => sheet.collectStyles(<App {...props}/>)
				});

			const initialProps = await Document.getInitialProps(ctx);
			return {
				...initialProps,
				styles: (
					<>
						{initialProps.styles}
						{sheet.getStyleElement()}
					</>
				)
			};
		} finally {
			sheet.seal();
		}
	}

	render(): JSX.Element {
		return (
			<Html lang="en">
				<Head>
					<meta charSet="utf-8"/>
					<meta name="description" content="Hi, my name is Antoni Kepinski and I like programming, especially in JavaScript & Rust. Come and visit my site!"/>
					<meta name="theme-color" content="#131415"/>
					<meta name="msapplication-TileColor" content="#131415"/>
					<meta name="apple-mobile-web-app-capable" content="yes"/>
					<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"/>
					<meta name="twitter:card" content="summary_large_image"/>
					<meta name="twitter:site" content="@dokwadratu"/>
					<meta name="twitter:title" content="Antoni Kepinski"/>
					<meta name="twitter:description" content="Hi, my name is Antoni Kepinski and I like programming, especially in JavaScript & Rust. Come and visit my site!"/>
					<meta name="twitter:image" content="https://og.kepinski.me/Antoni%20Kepinski.png?theme=dark&md=0&fontSize=125px&images=https%3A%2F%2Fkepinski.me%2Fimages%2Fflash-outline.svg"/>
					<meta property="og:title" content="Antoni Kepinski"/>
					<meta property="og:site_name" content="Antoni Kepinski"/>
					<meta property="og:url" content="https://kepinski.me"/>
					<meta property="og:description" content="Hi, my name is Antoni Kepinski and I like programming, especially in JavaScript & Rust. Come and visit my site!"/>
					<meta property="og:type" content="website"/>
					<meta property="og:image" content="https://og.kepinski.me/Antoni%20Kepinski.png?theme=dark&md=0&fontSize=125px&images=https%3A%2F%2Fkepinski.me%2Fimages%2Fflash-outline.svg"/>
					<link rel="manifest" href="/manifest.json"/>
					<link rel="icon" href="/favicon.png"/>
					<link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180.png"/>
					<link rel="apple-touch-icon" sizes="167x167" href="/apple-icon-167.png"/>
					<link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152.png"/>
					<link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120.png"/>
					<meta name="apple-mobile-web-app-capable" content="yes"/>
					<link
						rel="apple-touch-startup-image"
						href="/apple-splash-2048-2732.png"
						media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"/>
					<link
						rel="apple-touch-startup-image"
						href="/apple-splash-2732-2048.png"
						media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"/>
					<link
						rel="apple-touch-startup-image"
						href="/apple-splash-1668-2388.png"
						media="(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"/>
					<link
						rel="apple-touch-startup-image"
						href="/apple-splash-2388-1668.png"
						media="(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"/>
					<link
						rel="apple-touch-startup-image"
						href="/apple-splash-1668-2224.png"
						media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"/>
					<link
						rel="apple-touch-startup-image"
						href="/apple-splash-2224-1668.png"
						media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"/>
					<link
						rel="apple-touch-startup-image"
						href="/apple-splash-1536-2048.png"
						media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"/>
					<link
						rel="apple-touch-startup-image"
						href="/apple-splash-2048-1536.png"
						media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"/>
					<link
						rel="apple-touch-startup-image"
						href="/apple-splash-1242-2688.png"
						media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"/>
					<link
						rel="apple-touch-startup-image"
						href="/apple-splash-2688-1242.png"
						media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"/>
					<link
						rel="/apple-touch-startup-image"
						href="/apple-splash-1125-2436.png"
						media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"/>
					<link
						rel="apple-touch-startup-image"
						href="/apple-splash-2436-1125.png"
						media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"/>
					<link
						rel="apple-touch-startup-image"
						href="/apple-splash-828-1792.png"
						media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"/>
					<link
						rel="apple-touch-startup-image"
						href="/apple-splash-1792-828.png"
						media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"/>
					<link
						rel="apple-touch-startup-image"
						href="/apple-splash-1242-2208.png"
						media="(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"/>
					<link
						rel="apple-touch-startup-image"
						href="/apple-splash-2208-1242.png"
						media="(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"/>
					<link
						rel="apple-touch-startup-image"
						href="/apple-splash-750-1334.png"
						media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"/>
					<link
						rel="apple-touch-startup-image"
						href="/apple-splash-1334-750.png"
						media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"/>
					<link
						rel="apple-touch-startup-image"
						href="/apple-splash-640-1136.png"
						media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"/>
					<link
						rel="apple-touch-startup-image"
						href="/apple-splash-1136-640.png"
						media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"/>
					<link rel="preconnect" href="https://changelog.com" crossOrigin=""/>
				</Head>
				<body>
					<Main/>
					<NextScript/>
				</body>
			</Html>
		);
	}
}
