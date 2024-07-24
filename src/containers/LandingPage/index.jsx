// LandingPage.js
import React from 'react';
import Layout from '../../layouts/Layout';
import AboutComponent from '../../components/AboutComponent';
import BannerComponent from '../../components/BannerComponent';
import FeaturesComponent from '../../components/FeaturesComponent';
import PricingComponent from '../../components/PricingComponent';
import ReviewComponent from '../../components/ReviewComponent';
import { useSectionRefs } from '../../contexts/sectionRefContext';

const LandingPageContent = () => {
  const { bannerRef, featuresRef, pricingRef, reviewRef, aboutRef } = useSectionRefs();

  return (
    <>
      <div ref={bannerRef}><BannerComponent /></div>
      <div ref={featuresRef}><FeaturesComponent /></div>
      <div ref={pricingRef}><PricingComponent /></div>
      <div ref={reviewRef}><ReviewComponent /></div>
      <div ref={aboutRef}><AboutComponent /></div>
    </>
  );
};

const LandingPage = () => (
  <Layout withRef={true}>
    <LandingPageContent />
  </Layout>
);

export default LandingPage;
