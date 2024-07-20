import { useTranslation } from 'react-i18next';
import { IoHomeOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { logout } from '../../helpers/logout';


const NavBar = () => {
  const { t, i18n } = useTranslation();

  const handleLogout = () => {
    logout();
  }

  return (
    <div className="bg-blue-500 px-6 py-4 text-white flex justify-between items-center w-full">
      <Link to="/" className="flex items-center space-x-2">
        <IoHomeOutline size={24} title="Home" />
      </Link>
      <Link onClick={handleLogout} to="/login" className="flex items-center space-x-2">
        <span>Logout</span>
      </Link>
    </div>
  );
};

export default NavBar;
