// SectionRefsContext.js
import React, { createContext, useContext } from 'react';

const SectionRefsContext = createContext(null);

export const useSectionRefs = () => useContext(SectionRefsContext);

export const SectionRefsProvider = ({ children }) => {
  const featuresRef = React.useRef(null);
  const pricingRef = React.useRef(null);
  const reviewRef = React.useRef(null);
  const aboutRef = React.useRef(null);

  return (
    <SectionRefsContext.Provider value={{  featuresRef, pricingRef, reviewRef, aboutRef }}>
      {children}
    </SectionRefsContext.Provider>
  );
};
