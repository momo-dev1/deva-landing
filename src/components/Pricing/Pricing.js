import React from "react";
import Tabs from "../Tabs/Tabs";

function Pricing() {
  return (
    <section className="pricing">
      <div className="pricing-container">
        <div className="pricing-header">
          <h3 className="pricing-sub-heading">Pricing Plans</h3>
          <h2 className="pricing-heading">Pricing that suits your needs</h2>
          <p className="pricing-description">
            endi optio cumque nihil impedit quo minus id quod maxime placeat
            facere possimus.
          </p>
        </div>
        <Tabs />
      </div>
    </section>
  );
}

export default Pricing;
