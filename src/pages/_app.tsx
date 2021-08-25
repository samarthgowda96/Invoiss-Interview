import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { CssBaseline, StyledEngineProvider, ThemeProvider } from '@material-ui/core';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { provider, ProviderComposer } from '../providerComposer';

import useTheme from '../useTheme';

const cache = createCache( {
	key    : 'css',
	prepend: true
} );

function MyApp( { Component, pageProps }: AppProps ) {
	const theme = useTheme();
	
	return <>
		<Head>
			<title>Invoiss Interview</title>
			<meta
				name='viewport'
				content='width=device-width,
					minimum-scale=1, maximum-scale=1, initial-scale=1,
					user-scalable=no, viewport-fit=cover'
			/>
		</Head>
		{/* converted providers to providerComposers */}
		<ProviderComposer
		providers={[
			provider(StyledEngineProvider),
			provider(CacheProvider, {value:cache}),
			provider(ThemeProvider ,{theme:theme})
		]}
		>			<CssBaseline/>
					<Component {...pageProps}/>
		</ProviderComposer>
	</>;
}
export default MyApp;
