import React from 'react';

const PricingComponent = () => {
  return (
    <section id="pricing" className="w-full flex justify-center py-6 md:py-12 lg:py-16 bg-muted">
      <div className="container max-w-7xl grid items-center gap-6 px-4 md:px-6">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Pricing (Free For Now in Testing Mode)</h2>
          <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Choose the plan that best fits your needs and budget.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Basic</h3>
              <p className="text-muted-foreground">Perfect for individual practitioners</p>
            </div>
            <div className="mt-4">
              <div className="text-4xl font-bold">$9/mo</div>
              <ul className="space-y-2 text-muted-foreground mt-4">
                <li>
                  <span className="inline-block w-5 h-5 text-green-500 mr-2">✔️</span>
                  Automated report generation
                </li>
                <li>
                  <span className="inline-block w-5 h-5 text-green-500 mr-2">✔️</span>
                  Customizable templates
                </li>
                <li>
                  <span className="inline-block w-5 h-5 text-green-500 mr-2">✔️</span>
                  Secure data management
                </li>
                <li>
                  <span className="inline-block w-5 h-5 text-red-500 mr-2">❌</span>
                  Collaborative features
                </li>
                <li>
                  <span className="inline-block w-5 h-5 text-red-500 mr-2">❌</span>
                  Advanced analytics
                </li>
              </ul>
            </div>
            <div className="mt-6">
              <button className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg">Get Started</button>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Pro</h3>
              <p className="text-muted-foreground">Ideal for clinics and small practices</p>
            </div>
            <div className="mt-4">
              <div className="text-4xl font-bold">$29/mo</div>
              <ul className="space-y-2 text-muted-foreground mt-4">
                <li>
                  <span className="inline-block w-5 h-5 text-green-500 mr-2">✔️</span>
                  Automated report generation
                </li>
                <li>
                  <span className="inline-block w-5 h-5 text-green-500 mr-2">✔️</span>
                  Customizable templates
                </li>
                <li>
                  <span className="inline-block w-5 h-5 text-green-500 mr-2">✔️</span>
                  Secure data management
                </li>
                <li>
                  <span className="inline-block w-5 h-5 text-green-500 mr-2">✔️</span>
                  Collaborative features
                </li>
                <li>
                  <span className="inline-block w-5 h-5 text-green-500 mr-2">✔️</span>
                  Advanced analytics
                </li>
              </ul>
            </div>
            <div className="mt-6">
              <button className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg">Get Started</button>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Enterprise</h3>
              <p className="text-muted-foreground">Tailored for large healthcare organizations</p>
            </div>
            <div className="mt-4">
              <div className="text-4xl font-bold">Custom Pricing</div>
              <ul className="space-y-2 text-muted-foreground mt-4">
                <li>
                  <span className="inline-block w-5 h-5 text-green-500 mr-2">✔️</span>
                  Automated report generation
                </li>
                <li>
                  <span className="inline-block w-5 h-5 text-green-500 mr-2">✔️</span>
                  Customizable templates
                </li>
                <li>
                  <span className="inline-block w-5 h-5 text-green-500 mr-2">✔️</span>
                  Secure data management
                </li>
                <li>
                  <span className="inline-block w-5 h-5 text-green-500 mr-2">✔️</span>
                  Collaborative features
                </li>
                <li>
                  <span className="inline-block w-5 h-5 text-green-500 mr-2">✔️</span>
                  Advanced analytics
                </li>
                <li>
                  <span className="inline-block w-5 h-5 text-green-500 mr-2">✔️</span>
                  Dedicated support
                </li>
                <li>
                  <span className="inline-block w-5 h-5 text-green-500 mr-2">✔️</span>
                  Custom integrations
                </li>
              </ul>
            </div>
            <div className="mt-6">
              <button className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg">Contact Sales</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingComponent;
