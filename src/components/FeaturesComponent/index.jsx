import React from 'react';
import medicalReportingImage from '../../Assests/images/medicalReporting.jpeg';
const FeaturesComponent = () => {
  return (
    <section className="w-full flex justify-center py-6 md:py-12 lg:py-16">
      <div className="container max-w-7xl px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Key Features</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Streamline Your Medical Reporting
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              DocAi's powerful AI algorithms analyze medical images and data, generating detailed
              reports that save you time and improve patient care.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <img
            src={medicalReportingImage}
            width="550"
            height="310"
            alt="Image"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
          />
          <div className="flex flex-col justify-center space-y-4">
            <ul className="grid gap-6">
              <li>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Automated Reporting</h3>
                  <p className="text-muted-foreground">
                    DocAi's AI algorithms generate comprehensive reports from medical images and
                    data, saving you time and effort.
                  </p>
                </div>
              </li>
              <li>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">AI-Generated Reports</h3>
                  <p className="text-muted-foreground">
                  DocAi's AI will generate a report in a proper format to meet your diagnostic needs.
                  </p>
                </div>
              </li>
              <li>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Collaborative Tools</h3>
                  <p className="text-muted-foreground">
                    Share reports with colleagues, add annotations, and collaborate on patient care
                    with ease.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesComponent;
