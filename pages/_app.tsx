import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { WagmiConfig, createClient } from 'wagmi';
import { ConnectKitProvider, getDefaultClient } from 'connectkit';

const alchemyId = process.env.ALCHEMY_ID;

const client = createClient(
  getDefaultClient({
    appName: 'Outsider Trading',
    alchemyId,
  })
);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig client={client}>
      <ConnectKitProvider
        customTheme={{
          '--ck-accent-color': '#00D54B',
          '--ck-accent-text-color': '#ffffff',
          '--ck-primary-button-background': '#00D54B',
        }}
      >
        <Component {...pageProps} />
      </ConnectKitProvider>
    </WagmiConfig>
  );
}

export default MyApp;
