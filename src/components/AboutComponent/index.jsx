import React from 'react';

const AboutComponent = () => {
  return (
    <section id="about" className="w-full flex justify-center pt-6 pb-24 md:pt-12 md:pb-24 lg:pt-16 lg:pb-32">
      <div className="container max-w-7xl px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">About</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">About DocAi</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              DocAi is an innovative AI-powered medical reporting application that was founded in
              2024 by a team of healthcare professionals and technology experts. Our mission is to
              revolution
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutComponent;
