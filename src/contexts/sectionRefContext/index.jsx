// SectionRefsContext.js
import React, { createContext, useContext, useRef } from 'react';

const SectionRefsContext = createContext(null);

export const useSectionRefs = () => useContext(SectionRefsContext);

export const SectionRefsProvider = ({ children }) => {
  const featuresRef = useRef(null);
  const pricingRef = useRef(null);
  const reviewRef = useRef(null);
  const aboutRef = useRef(null);

  return (
    <SectionRefsContext.Provider value={{  featuresRef, pricingRef, reviewRef, aboutRef }}>
      {children}
    </SectionRefsContext.Provider>
  );
};
