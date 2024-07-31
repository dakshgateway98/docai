import { faHospital } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import _ from 'lodash';
import { useTranslation } from 'react-i18next';
import { IoHomeOutline } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { useSectionRefs } from '../../contexts/sectionRefContext';
import { logout } from '../../helpers/logout';
import { routes } from '../../utils';
import { addUser, updateIsLogged } from '../../redux/userAuthSlice';

const NavBar = ({ withRef }) => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLogged = useSelector(state => _.get(state, 'user.isLogged', false));
  const { featuresRef, pricingRef, reviewRef, aboutRef } = useSectionRefs();

  const handleLogout = () => {
    logout(dispatch , navigate);
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
          className="inline-flex h-7 items-center justify-center rounded-md border border-input bg-background px-4 md:px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 cursor-pointer"
        >
          Home
        </div>
      );
    }

    if (isLogged) {
      return (
        <div
          onClick={handleLogout}
          className="inline-flex h-7 items-center justify-center rounded-md bg-red-400 px-4 md:px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 cursor-pointer"
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
          className="inline-flex h-7 items-center justify-center rounded-md bg-primary px-4 md:px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 cursor-pointer"
        >
          Try for free
        </div>
      );
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 px-4 lg:px-6 h-14 flex items-center bg-muted shadow dark:border">
      <div
        onClick={() =>  navigate(isLogged ? routes.home : routes.landingPage)}
        className="flex items-center justify-center cursor-pointer"
      >
        <FontAwesomeIcon icon={faHospital} className="h-6 w-6" />
        <span className="sr-only">DocAi</span>
      </div>
      <nav className="ml-auto flex items-center gap-2 sm:gap-4 md:gap-6">
        {withRef && (
          <>
            <div
              onClick={() => scrollToSection(featuresRef)}
              className="text-sm font-medium hover:underline underline-offset-4 cursor-pointer hidden sm:block"
            >
              Features
            </div>
            <div
              onClick={() => scrollToSection(pricingRef)}
              className="text-sm font-medium hover:underline underline-offset-4 cursor-pointer hidden sm:block"
            >
              Pricing
            </div>
            <div
              onClick={() => scrollToSection(reviewRef)}
              className="text-sm font-medium hover:underline underline-offset-4 cursor-pointer hidden sm:block"
            >
              Review
            </div>
            <div
              onClick={() => scrollToSection(aboutRef)}
              className="text-sm font-medium hover:underline underline-offset-4 cursor-pointer hidden sm:block"
            >
              About
            </div>
          </>
        )}

        {handleDisplayLastButton()}
      </nav>
    </header>
  );
};

export default NavBar;
