// app/page.tsx
'use client';

import Link from 'next/link';
import { ConnectButton } from '@rainbow-me/rainbowkit';

export default function Home() {
  return (
    <div className="min-h-screen grid grid-rows-[auto_1fr_auto] p-8 pb-20 gap-16 sm:p-20">
      <nav className="flex gap-6 w-full justify-center sm:justify-start">
        <Link 
          href="/Marketplace" 
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          Marketplace
        </Link>
        <Link 
          href="/MintNFT" 
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          Mint NFT
        </Link>
      </nav>

      <main className="flex flex-col gap-8 items-center text-center">
        <h1 className="text-4xl sm:text-6xl font-bold text-blue-500">
          Welcome to Upscale: A scaling solution for NFTs
        </h1>
        <ConnectButton />
      </main>

      <footer className="flex gap-6 flex-wrap items-center justify-center">
        <p>Made with love by Aayushman</p>
      </footer>
    </div>
  );
}