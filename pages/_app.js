import '../styles/globals.css';
import '@rainbow-me/rainbowkit/styles.css';

import {
  getDefaultConfig,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';

import { WagmiProvider } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { alfajores } from '../lib/chains';

const config = getDefaultConfig({
  appName: 'Farcaster MiniApp',
  projectId: 'your_walletconnect_project_id', // Optional
  chains: [alfajores],
  ssr: true,
});

const queryClient = new QueryClient();

export default function App({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <WagmiProvider config={config}>
        <RainbowKitProvider chains={[alfajores]}>
          <Component {...pageProps} />
        </RainbowKitProvider>
      </WagmiProvider>
    </QueryClientProvider>
  );
}

