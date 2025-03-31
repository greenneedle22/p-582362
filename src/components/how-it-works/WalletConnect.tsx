
import React from "react";
import StepHeader from "./StepHeader";
import StepIndicator from "./StepIndicator";
import AnimatedWalletConnect from "../AnimatedWalletConnect";

interface WalletConnectProps {
  onComplete: () => void;
  currentStep: number;
}

const WalletConnect = ({ onComplete, currentStep }: WalletConnectProps) => {
  return (
    <div className="flex flex-col items-center animate-fade-in">
      <StepHeader
        title="Connect your wallet"
        description="First, connect your crypto wallet to begin the process."
      />

      <div className="flex justify-center my-8 relative w-full">
        <StepIndicator step={currentStep} />
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
