
import Footer from '../components/Footer';
import NavBar from '../components/Navbar';

import { SectionRefsProvider } from '../contexts/sectionRefContext';

const Layout = ({ withRef, ...props }) => {
  return (
    <SectionRefsProvider>
      <div className="flex flex-col min-h-[100dvh]">
        <NavBar withRef={withRef} />
        <div>{props.children}</div>
        <Footer />
      </div>
    </SectionRefsProvider>
  );
};

export default Layout;
