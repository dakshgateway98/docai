import { faHospital } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import _ from 'lodash';
import { useTranslation } from 'react-i18next';
import { IoHomeOutline } from 'react-icons/io5';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { useSectionRefs } from '../../contexts/sectionRefContext';
import { logout } from '../../helpers/logout';
import { routes } from '../../utils';

const NavBar = ({ withRef }) => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const isLogged = useSelector(state => _.get(state, 'user.isLogged', false));
  const { featuresRef, pricingRef, reviewRef, aboutRef } = useSectionRefs();

  const handleLogout = () => {
    logout();
    navigate(routes.login);
  };
  const scrollToSection = ref => {
    ref?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDisplayLastButton = () => {
    const isOnLoginPage = window.location.pathname.includes(routes.login);
    if (isOnLoginPage) {
      return (
        <div
          onClick={() => {
            navigate(routes.landingPage);
          }}
          className="inline-flex h-7 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
        >
          Home
        </div>
      );
    }

    if (isLogged) {
      return (
        <div
          onClick={handleLogout}
          className="inline-flex h-7 items-center justify-center rounded-md bg-red-400 px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
        >
          Logout
        </div>
      );
    } else {
      return (
        <div
          onClick={() => {
            navigate(routes.login);
          }}
          className="inline-flex h-7 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
        >
          Login
        </div>
      );
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 px-4 lg:px-6 h-14 flex items-center bg-muted ">
      <div
        onClick={() => navigate(routes.landingPage)}
        className="flex items-center justify-center cursor-pointer"
      >
        <FontAwesomeIcon icon={faHospital} className="h-6 w-6" />
        <span className="sr-only">DocAi</span>
      </div>
      <nav className="ml-auto flex items-center gap-4 sm:gap-6">
        {withRef && (
          <>
            <div
              onClick={() => scrollToSection(featuresRef)}
              className="text-sm font-medium hover:underline underline-offset-4 cursor-pointer"
            >
              Features
            </div>
            <div
              onClick={() => scrollToSection(pricingRef)}
              className="text-sm font-medium hover:underline underline-offset-4 cursor-pointer"
            >
              Pricing
            </div>
            <div
              onClick={() => scrollToSection(reviewRef)}
              className="text-sm font-medium hover:underline underline-offset-4 cursor-pointer"
            >
              Review
            </div>
            <div
              onClick={() => scrollToSection(aboutRef)}
              className="text-sm font-medium hover:underline underline-offset-4 cursor-pointer"
            >
              About
            </div>
          </>
        )}

        {handleDisplayLastButton()}
        {/* {isLogged ? (
          <div
            onClick={handleLogout}
            className="inline-flex h-7 items-center justify-center rounded-md bg-red-400 px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          >
            <span>Logout</span>
          </div>
        ) : (
          <div
            onClick={() => {
              navigate(routes.login);
            }}
            className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          >
            <span>Sign Up</span>
          </div>
        )} */}
      </nav>
    </header>
  );
};

export default NavBar;
