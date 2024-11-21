import React from 'react';
import './PricingPlans.css';

const PricingPlans = () => {
  const handleBuyPremium = () => {
    // Redirect to the Stripe payment link
    window.location.href = 'https://buy.stripe.com/test_4gw4k6fj65degOkfYY';
  };

  const handleBuyFree = () => {
    // Show an alert for the free plan
    alert('Your Free Plan is now active! Thank you!');
  };

  return (
    <div className="pricing-plans-container">
      <h1 className="plans-title">Choose Your Plan</h1>
      
      <div className="plans-cards">
        {/* Free Plan Card */}
        <div className="plan-card free-plan-card" onClick={handleBuyFree}>
          <h2>Free Plan</h2>
          <p>Access basic features with limited customization.</p>
          <div className="plan-price">$0/month</div>
          <button className="select-plan-btn">Choose Free</button>
        </div>

        {/* Premium Plan Card */}
        <div className="plan-card premium-plan-card">
          <h2>Premium Plan</h2>
          <p>Unlock all features, including themes, content controls, and analytics.</p>
          <div className="plan-price">$100/month</div>
          <button className="select-plan-btn" onClick={handleBuyPremium}>
            Buy Premium
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;
