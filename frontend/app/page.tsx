import Link from 'next/link';
import WalletConnectButton from '@/components/WalletConnect'


export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
         
         <nav className="row-start-1 flex gap-6 w-full justify-center sm:justify-start">
         <Link href="/Marketplace" className="px-4 py-2 bg-blue-500 rounded-lg ">
          Marketplace
        </Link>
        <Link href="/page2" className="px-4 py-2 bg-blue-500 rounded-lg ">
          Mint NFT
        </Link>
      </nav>

      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-center text-center">
      <h1 className='text-4xl sm:text-6xl font-bold text-blue-500'>Welcome to Upscale: A scaling solution for NFTs</h1>
              <WalletConnectButton />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <p>Made with love by Aayushman</p>
      </footer>
    </div>
  );
}
