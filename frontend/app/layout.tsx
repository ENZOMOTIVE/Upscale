import '../styles/global.css';
import '@rainbow-me/rainbowkit/styles.css';
import { Providers } from '../components/Providers';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <Providers>{children}</Providers>;
}