// app/layout.tsx
import './globals.css';
import '@rainbow-me/rainbowkit/styles.css';
import { Providers } from '../components/Providers';

export default function RootLayout({ 
  children 
}: { 
  children: React.ReactNode 
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}