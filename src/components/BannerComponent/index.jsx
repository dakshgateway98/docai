import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import bannerSvg from '../../Assests/images/banner_image2.jpeg';
import { routes } from '../../utils';
import { useSectionRefs } from '../../contexts/sectionRefContext';
const BannerComponent = () => {

  const navigate = useNavigate();
  const { featuresRef } = useSectionRefs();

  const scrollToSection = ref => {
    ref?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="w-full flex justify-center pt-16 pb-6 md:pt-16 md:pb-6 lg:pt-20 lg:pb-12 xl:pt-20 xl:pb-12">
          <div className="container max-w-7xl px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none mb-4">
                    Revolutionize Medical Reporting with DocAi
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    DocAi is an AI-powered application that helps doctors and medical students generate comprehensive
                    reports from medical images and data. Streamline your workflow and improve patient care.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <button
                    onClick={() => {
                      navigate(routes.login);
                    }}
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    
                  >
                    Try For Free
                  </button>
                  <button
                    onClick={() => {scrollToSection(featuresRef)}}
                    className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                   
                  >
                    Learn More
                  </button>
                </div>
              </div>
              <img
                src={bannerSvg}
                width="550"
                height="310"
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>
  )
}

export default BannerComponent