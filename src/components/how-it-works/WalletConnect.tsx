
import React from "react";
import { Wallet } from "lucide-react";
import StepHeader from "./StepHeader";
import StepIndicator from "./StepIndicator";
import AnimatedWalletConnect from "../AnimatedWalletConnect";

interface WalletConnectProps {
  onComplete: () => void;
  currentStep: number;
  loading?: boolean;
  selectedWallet?: string;
  error?: Error;
  connectWallet?: (walletName: string) => void;
}

const WalletConnect = ({ 
  onComplete, 
  currentStep, 
  loading,
  selectedWallet,
  error,
  connectWallet
}: WalletConnectProps) => {
  return (
    <div className="flex flex-col items-center animate-fade-in">
      <StepHeader
        icon={<Wallet className="h-5 w-5 text-white" />}
        title="Connect your wallet"
        description="First, connect your crypto wallet to begin the process."
      />

      <div className="flex justify-center my-8 relative w-full">
        <StepIndicator 
          activeStep={currentStep} 
          setActiveStep={() => {}}
          steps={[
            {
              number: 1,
              title: "Connect Wallet",
              description: "Connect your crypto wallet",
              icon: <Wallet className="h-5 w-5" />
            },
            {
              number: 2,
              title: "Convert Currency",
              description: "Convert your currency",
              icon: <Wallet className="h-5 w-5" />
            },
            {
              number: 3,
              title: "Complete Transaction",
              description: "Finalize your investment",
              icon: <Wallet className="h-5 w-5" />
            }
          ]}
        />
      </div>

      <div className="bg-card shadow-lg rounded-xl p-8 max-w-md w-full mx-auto border border-border">
        <h3 className="text-2xl font-bold text-center mb-6">Wallet Connection</h3>
        
        <p className="text-center text-muted-foreground mb-8">
          Please connect your wallet to continue with the investment process. 
          We support MetaMask, WalletConnect, and other popular providers.
        </p>

        <div className="flex justify-center mt-6">
          <AnimatedWalletConnect onConnect={onComplete} />
        </div>
      </div>
    </div>
  );
};

export default WalletConnect;
