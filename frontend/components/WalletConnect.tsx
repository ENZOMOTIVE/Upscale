"use client";

export default function WalletConnectButton (){
    const connectWallet = () => {
        console.log('Connect Wallet button clicked');
    };


    return(
        <button onClick={connectWallet} className="px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700">Connect Wallet</button>
    );
}