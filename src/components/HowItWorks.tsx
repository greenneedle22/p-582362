
import React, { useState } from 'react';
import { Button } from './ui/button';
import { Wallet, RefreshCw, SendHorizonal, ArrowRight } from 'lucide-react';

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [eurAmount, setEurAmount] = useState('1000');
  const vaiotTokens = (parseFloat(eurAmount) / 0.427).toFixed(2);
  
  const steps = [
    {
      number: 1,
      title: "Connect Your Wallet",
      description: "Securely link your cryptocurrency wallet to begin the investment process.",
      icon: <Wallet className="h-6 w-6" />
    },
    {
      number: 2,
      title: "Convert EUR to VAIOT",
      description: "Specify the amount of EUR you wish to invest and see the equivalent VAIOT tokens in real-time.",
      icon: <RefreshCw className="h-6 w-6" />
    },
    {
      number: 3,
      title: "Complete Transaction",
      description: "Send ETH to the generated unique address and provide your VAIOT wallet for token delivery.",
      icon: <SendHorizonal className="h-6 w-6" />
    }
  ];

  return (
    <section id="how-it-works" className="container-section">
      <div className="text-center mb-16">
        <h2 className="heading-lg mb-4">How It Works</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Start your investment journey in just a few simple steps. Our streamlined process ensures a smooth experience from wallet connection to token acquisition.
        </p>
      </div>

      {/* Steps Indicator */}
      <div className="flex justify-center mb-12">
        <div className="relative flex items-center max-w-3xl w-full">
          {steps.map((step, index) => (
            <React.Fragment key={step.number}>
              {/* Step Circle */}
              <div 
                className={`relative z-10 flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all duration-500 ${
                  activeStep >= step.number 
                    ? 'bg-investment-blue border-investment-blue text-white' 
                    : 'bg-white border-gray-300 text-gray-500'
                }`}
                onClick={() => setActiveStep(step.number)}
              >
                {step.number}
              </div>
              
              {/* Connecting Line */}
              {index < steps.length - 1 && (
                <div className="flex-1 h-0.5 mx-2">
                  <div 
                    className="h-full transition-all duration-500" 
                    style={{
                      background: `linear-gradient(to right, ${activeStep > step.number ? '#1A365D' : '#E2E8F0'} 50%, ${activeStep > step.number + 1 ? '#1A365D' : '#E2E8F0'} 50%)`,
                    }}
                  ></div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Active Step Content */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-investment-blue to-blue-700 text-white p-6">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-white/20 rounded-full">
              {steps[activeStep - 1].icon}
            </div>
            <h3 className="text-xl font-semibold">
              Step {activeStep}: {steps[activeStep - 1].title}
            </h3>
          </div>
          <p className="mt-2 text-gray-100">
            {steps[activeStep - 1].description}
          </p>
        </div>

        <div className="p-6">
          {activeStep === 1 && (
            <div className="flex flex-col items-center py-6">
              <div className="mb-8 w-full max-w-md">
                <div className="text-center mb-6">
                  <p className="text-gray-600">Connect your wallet to view real-time data and proceed with your investment</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <Button className="flex items-center justify-center space-x-2 py-6 bg-gray-100 hover:bg-gray-200 text-investment-dark border border-gray-200">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/3/36/MetaMask_Fox.svg" alt="MetaMask" className="h-8 w-8" />
                    <span>MetaMask</span>
                  </Button>
                  <Button className="flex items-center justify-center space-x-2 py-6 bg-gray-100 hover:bg-gray-200 text-investment-dark border border-gray-200">
                    <img src="https://trustwallet.com/assets/images/media/assets/trust_platform.svg" alt="Trust Wallet" className="h-8 w-8" />
                    <span>Trust Wallet</span>
                  </Button>
                  <Button className="flex items-center justify-center space-x-2 py-6 bg-gray-100 hover:bg-gray-200 text-investment-dark border border-gray-200">
                    <img src="https://www.coinbase.com/assets/press/coinbase-mark-white-9c15b8c484634bc44b24cdc4744e42a45568357f5e6bf667805a033d5fd6664e.png" alt="Coinbase" className="h-8 w-8" />
                    <span>Coinbase</span>
                  </Button>
                  <Button className="flex items-center justify-center space-x-2 py-6 bg-gray-100 hover:bg-gray-200 text-investment-dark border border-gray-200">
                    <span>More Options</span>
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <Button 
                className="btn-primary mt-6"
                onClick={() => setActiveStep(2)}
              >
                Continue to Next Step
              </Button>
            </div>
          )}
          
          {activeStep === 2 && (
            <div className="flex flex-col items-center py-6">
              <div className="mb-8 w-full max-w-lg">
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                  <div className="mb-6">
                    <label htmlFor="eurAmount" className="block text-sm font-medium text-gray-700 mb-1">Amount in EUR</label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <span className="text-gray-500 sm:text-sm">€</span>
                      </div>
                      <input
                        type="text"
                        name="eurAmount"
                        id="eurAmount"
                        className="focus:ring-investment-blue focus:border-investment-blue block w-full pl-8 pr-12 sm:text-sm border-gray-300 rounded-md py-3"
                        placeholder="0.00"
                        value={eurAmount}
                        onChange={(e) => setEurAmount(e.target.value)}
                      />
                    </div>
                  </div>
                  
                  <div className="flex justify-center my-4">
                    <RefreshCw className="text-gray-400 animate-pulse-subtle" />
                  </div>
                  
                  <div>
                    <label htmlFor="vaiotAmount" className="block text-sm font-medium text-gray-700 mb-1">Equivalent in VAIOT Tokens</label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                      <input
                        type="text"
                        name="vaiotAmount"
                        id="vaiotAmount"
                        className="focus:ring-investment-blue focus:border-investment-blue block w-full pr-12 sm:text-sm border-gray-300 rounded-md py-3 bg-gray-100"
                        value={vaiotTokens}
                        readOnly
                      />
                      <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                        <span className="text-gray-500 sm:text-sm">VAIOT</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-500">Exchange Rate</span>
                      <span className="text-gray-700">1 VAIOT = €0.427</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Last Updated</span>
                      <span className="text-gray-700">Just now</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  variant="outline"
                  onClick={() => setActiveStep(1)}
                >
                  Back
                </Button>
                <Button 
                  className="btn-primary"
                  onClick={() => setActiveStep(3)}
                >
                  Proceed to Transaction
                </Button>
              </div>
            </div>
          )}
          
          {activeStep === 3 && (
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
                          value="0.3084 ETH"
                          readOnly
                        />
                      </div>
                      <p className="text-xs text-gray-500 mt-1">Based on current ETH price of $3,245.78</p>
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
                  onClick={() => setActiveStep(2)}
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
          )}
        </div>
      </div>
      
      <div className="mt-12 text-center">
        <p className="text-gray-600">
          Need help with the process? <a href="#" className="text-investment-blue hover:underline">Contact our support team</a>
        </p>
      </div>
    </section>
  );
};

export default HowItWorks;
