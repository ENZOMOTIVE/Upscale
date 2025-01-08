import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Upscale</title>
        <meta
          content="NFT Project"
          name="description"
        />
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <main className={styles.main}>
       

        <h1 className={styles.title}>
          Welcome to <a>Upscale:</a> Your NFT Scaling Solution
        </h1>

        <p className={styles.description}>
          Get started Uploading your NFTs to the Market
          
        </p>

        <div className={styles.grid}>
          <a className={styles.card} href="https://rainbowkit.com">
            <h2>RainbowKit Documentation &rarr;</h2>
            <p>Learn how to customize your wallet connection flow.</p>
          </a>

          <a className={styles.card} href="https://wagmi.sh">
            <h2>wagmi Documentation &rarr;</h2>
            <p>Learn how to interact with Ethereum.</p>
          </a>
  
         
        </div>

        <ConnectButton />
        
      </main>
      
      <footer className={styles.footer}>
        <a href="https://github.com/ENZOMOTIVE" rel="noopener noreferrer" target="_blank">
          Made with ❤️ Aayushman
        </a>
      </footer>
    </div>
  );
};

export default Home;
