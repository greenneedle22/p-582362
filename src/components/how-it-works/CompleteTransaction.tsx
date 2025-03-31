
import React from 'react';
import { Button } from '../ui/button';

interface CompleteTransactionProps {
  ethAmount: string;
  prices: any;
  onPrevStep: () => void;
}

const CompleteTransaction: React.FC<CompleteTransactionProps> = ({
  ethAmount,
  prices,
  onPrevStep
}) => {
  return (
    <div className="flex flex-col items-center py-6">
      <div className="mb-8 w-full max-w-lg">
        <div className="space-y-6">
          <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
            <h4 className="text-lg font-medium mb-4">Send ETH to Complete Purchase</h4>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Unique ETH Address</label>
              <div className="flex">
                <input
                  type="text"
                  className="flex-grow focus:ring-investment-blue focus:border-investment-blue block w-full sm:text-sm border-gray-300 rounded-l-md py-2"
                  value="0x71C7656EC7ab88b098defB751B7401B5f6d8976F"
                  readOnly
                />
                <button className="bg-gray-200 px-4 rounded-r-md hover:bg-gray-300">
                  Copy
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-1">This address is unique to your transaction. Do not send funds to any other address.</p>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">ETH Amount (Est.)</label>
              <div className="flex">
                <input
                  type="text"
                  className="flex-grow focus:ring-investment-blue focus:border-investment-blue block w-full sm:text-sm border-gray-300 rounded-md py-2"
                  value={`${ethAmount} ETH`}
                  readOnly
                />
              </div>
              <p className="text-xs text-gray-500 mt-1">
                Based on current ETH price of {prices ? `$${prices.ethereum.usd.toFixed(2)}` : 'loading...'}
              </p>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
            <h4 className="text-lg font-medium mb-4">Receive VAIOT Tokens</h4>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Your VAIOT Wallet Address</label>
              <input
                type="text"
                className="focus:ring-investment-blue focus:border-investment-blue block w-full sm:text-sm border-gray-300 rounded-md py-2"
                placeholder="Enter your VAIOT wallet address"
              />
              <p className="text-xs text-gray-500 mt-1">Enter the wallet address where you want to receive your VAIOT tokens.</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4">
        <Button 
          variant="outline"
          onClick={onPrevStep}
        >
          Back
        </Button>
        <Button 
          className="btn-primary"
        >
          Complete Purchase
        </Button>
      </div>
    </div>
  );
};

export default CompleteTransaction;
