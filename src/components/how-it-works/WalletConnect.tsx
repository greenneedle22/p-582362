
import React from 'react';
import { Button } from '../ui/button';
import { ArrowRight, AlertCircle } from 'lucide-react';

interface WalletConnectProps {
  loading: boolean;
  selectedWallet: string;
  connectWallet: (walletName: string) => void;
  error: Error | null;
  onNextStep: () => void;
}

const WalletConnect: React.FC<WalletConnectProps> = ({
  loading,
  selectedWallet,
  connectWallet,
  error,
  onNextStep
}) => {
  return (
    <div className="flex flex-col items-center py-6">
      <div className="mb-8 w-full max-w-md">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-semibold mb-3">Connect Your Wallet</h3>
          <p className="text-gray-600">Connect your wallet to view real-time data and proceed with your investment</p>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <Button 
            className={`flex items-center justify-center space-x-2 py-6 ${loading && selectedWallet === 'MetaMask' ? 'bg-gray-200' : 'bg-gray-100 hover:bg-gray-200'} text-investment-dark border border-gray-200`}
            onClick={() => connectWallet('MetaMask')}
            disabled={loading}
          >
            <img src="https://upload.wikimedia.org/wikipedia/commons/3/36/MetaMask_Fox.svg" alt="MetaMask" className="h-8 w-8" />
            <span>{loading && selectedWallet === 'MetaMask' ? 'Connecting...' : 'MetaMask'}</span>
          </Button>
          <Button 
            className={`flex items-center justify-center space-x-2 py-6 ${loading && selectedWallet === 'Trust Wallet' ? 'bg-gray-200' : 'bg-gray-100 hover:bg-gray-200'} text-investment-dark border border-gray-200`}
            onClick={() => connectWallet('Trust Wallet')}
            disabled={loading}
          >
            <img src="https://trustwallet.com/assets/images/media/assets/trust_platform.svg" alt="Trust Wallet" className="h-8 w-8" />
            <span>{loading && selectedWallet === 'Trust Wallet' ? 'Connecting...' : 'Trust Wallet'}</span>
          </Button>
          <Button 
            className={`flex items-center justify-center space-x-2 py-6 ${loading && selectedWallet === 'Coinbase' ? 'bg-gray-200' : 'bg-gray-100 hover:bg-gray-200'} text-investment-dark border border-gray-200`}
            onClick={() => connectWallet('Coinbase')}
            disabled={loading}
          >
            <img src="https://www.coinbase.com/assets/press/coinbase-mark-white-9c15b8c484634bc44b24cdc4744e42a45568357f5e6bf667805a033d5fd6664e.png" alt="Coinbase" className="h-8 w-8" />
            <span>{loading && selectedWallet === 'Coinbase' ? 'Connecting...' : 'Coinbase'}</span>
          </Button>
          <Button 
            className="flex items-center justify-center space-x-2 py-6 bg-gray-100 hover:bg-gray-200 text-investment-dark border border-gray-200"
            disabled={loading}
          >
            <span>More Options</span>
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
      
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 p-3 rounded-md flex items-start space-x-2 mb-4">
          <AlertCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
          <p className="text-sm">Unable to fetch current prices. Please try again later.</p>
        </div>
      )}
      
      <Button 
        className="btn-primary mt-6"
        onClick={onNextStep}
      >
        Continue to Next Step
      </Button>
    </div>
  );
};

export default WalletConnect;
