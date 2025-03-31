
import React from 'react';
import { Button } from './ui/button';
import { Lock, Unlock, Info, TrendingUp } from 'lucide-react';

const StakingSection = () => {
  // For demo purposes, assume staking is disabled initially
  const stakingEnabled = false;

  return (
    <section id="staking" className="container-section bg-gray-50">
      <div className="text-center mb-16">
        <h2 className="heading-lg mb-4">Maximize Your Returns with Staking</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Lock your VAIOT tokens to earn passive income. Our flexible staking options allow you to choose the period and rewards that best suit your investment strategy.
        </p>
      </div>
      
      <div className="max-w-5xl mx-auto">
        <div className="relative">
          {/* Staking Disabled Overlay */}
          {!stakingEnabled && (
            <div className="absolute inset-0 bg-gray-200/80 backdrop-blur-sm rounded-xl z-10 flex flex-col items-center justify-center">
              <Lock className="h-16 w-16 text-gray-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Staking Currently Locked</h3>
              <p className="text-gray-600 text-center max-w-md px-4">
                Complete your first VAIOT token purchase to unlock staking features and start earning rewards.
              </p>
              <Button className="mt-6 bg-gray-600 hover:bg-gray-700 text-white">
                Purchase Tokens to Unlock
              </Button>
            </div>
          )}
          
          {/* Staking Content - Visible but disabled initially */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="col-span-1">
              <div className="bg-white rounded-xl shadow-md p-6 h-full border border-gray-100">
                <h3 className="heading-sm mb-4">Staking Options</h3>
                
                <div className="space-y-4">
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-investment-dark">30 Days</span>
                      <span className="text-investment-blue font-semibold">5% APY</span>
                    </div>
                  </div>
                  
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-investment-dark">90 Days</span>
                      <span className="text-investment-blue font-semibold">8% APY</span>
                    </div>
                  </div>
                  
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-investment-dark">180 Days</span>
                      <span className="text-investment-blue font-semibold">12% APY</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 flex items-center text-gray-600">
                  <Info className="h-4 w-4 mr-2" />
                  <span className="text-sm">Early unstaking is subject to a 2% fee</span>
                </div>
              </div>
            </div>
            
            <div className="col-span-1 lg:col-span-2">
              <div className="bg-white rounded-xl shadow-md p-6 h-full border border-gray-100">
                <h3 className="heading-sm mb-6">Start Staking</h3>
                
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Amount to Stake</label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <input
                      type="text"
                      className="focus:ring-investment-blue focus:border-investment-blue block w-full pr-24 sm:text-sm border-gray-300 rounded-md py-3"
                      placeholder="0.00"
                    />
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                      <span className="text-gray-500 sm:text-sm">VAIOT</span>
                    </div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Staking Period</label>
                  <select className="focus:ring-investment-blue focus:border-investment-blue block w-full sm:text-sm border-gray-300 rounded-md py-3">
                    <option>30 Days - 5% APY</option>
                    <option>90 Days - 8% APY</option>
                    <option>180 Days - 12% APY</option>
                  </select>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">Potential Earnings</span>
                    <div className="flex items-center text-investment-green">
                      <TrendingUp className="h-4 w-4 mr-1" />
                      <span className="font-semibold">+250 VAIOT</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Unlocks On</span>
                    <span className="text-investment-dark">June 15, 2023</span>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="btn-primary flex-1">
                    Stake Now
                  </Button>
                  <Button variant="outline" className="flex-1">
                    Calculate Returns
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StakingSection;
