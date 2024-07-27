import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Layout } from '../../layouts';

import { apiEndPoint } from '../../api/apiEndPoint';
import { forgotPasswordUserAPI, registerUserAPI, signInUserAPI } from '../../api/auth';
import Loader from '../../common/Loader';
import { displayInfoToast } from '../../helpers/displayToast';
import { addUser, updateIsLogged } from '../../redux/userAuthSlice';
import { routes } from '../../utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import { validateEmail, validatePassword, validateUserName } from '../../helpers/validations';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [userName, setUserName] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const [isForgotpass, setIsForgotpass] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [userNameError, setUserNameError] = useState('');

  const togglePasswordVisibility = () => {
    setShowPassword(prevShowPassword => !prevShowPassword);
  };

  const onSubmit = async e => {
    e.preventDefault();
    let valid = true;

    if (!validateEmail(email)) {
      setEmailError('Invalid email address');
      valid = false;
    } else {
      setEmailError('');
    }

    if (!isLogin && !isForgotpass && !validateUserName(userName)) {
      setUserNameError('Username cannot be empty');
      valid = false;
    } else {
      setUserNameError('');
    }

    if (!valid) {
      return;
    }


    try {
      setLoading(true);
      if (isForgotpass) {
        const dataObj = {
          email,
        };
        const res = await forgotPasswordUserAPI(dataObj);
        if (res.success) {
          displayInfoToast("We've sent you an email to reset your password.");
        }
      } else if (isLogin) {
        const dataObj = {
          email,
          password,
        };
        const res = await signInUserAPI(dataObj);

        if (res.success) {
          const userDetails = {
            email,
            isLoginByEmail: true,
            isLoginByGoogle: false,
            token: res.data || '',
          };
          dispatch(addUser(userDetails));
          dispatch(updateIsLogged(true));
          navigate(routes.home);
        }
      } else {
        const dataObj = {
          fullName: userName,
          email,
        };
        const res = await registerUserAPI(dataObj);
        displayInfoToast("We've sent you an email to verify your account.");
      }
    } catch (error) {
      console.error({ error });
    } finally {
      setUserName('');
      setEmail('');
      setPassword('');
      setErrorMessage('');
      setLoading(false);
    }
  };

  const onGoogleSignIn = async e => {
    e.preventDefault();
    if (!isSigningIn) {
      const userDetails = {
        email,
        isLoginByEmail: false,
        isLoginByGoogle: true,
      };
      dispatch(addUser(userDetails));
      dispatch(updateIsLogged(true));
      window.location.href = `${process.env.REACT_APP_API_URL}${apiEndPoint.GOOGLE_LOGIN}`;
      setIsSigningIn(true);
    }
  };

  return (
    <Layout withRef={false}>
      <section className="w-full h-screen flex justify-center items-center bg-muted">
        <div className="container max-w-7xl px-4 md:px-6">
          <div className="flex justify-center items-center">
            <div className="w-full bg-white rounded-lg shadow dark:border sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold tracking-tighter text-gray-900 dark:text-white">
                  {isLogin ? 'Sign in to your account' : isForgotpass ? 'Send an Email' : 'Create an account'}
                </h1>
                <form className="space-y-4 md:space-y-6" onSubmit={onSubmit}>
                  {!isForgotpass && !isLogin && (
                    <div>
                      <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        value={userName}
                        onChange={e => setUserName(e.target.value)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="John Doe"
                        required={true}
                      />
                      {userNameError && <span className="text-red-600 font-bold">{userNameError}</span>}
                    </div>
                  )}
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Your email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="name@company.com"
                      required={true}
                    />
                    {emailError && <span className="text-red-600 font-bold">{emailError}</span>}
                  </div>
                  {!isForgotpass && isLogin && (
                    <div className="relative">
                      <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Password
                      </label>
                      <input
                        type={showPassword ? 'text' : 'password'}
                        name="password"
                        id="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        placeholder="••••••••"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required={true}
                      />
                      <div
                        onClick={togglePasswordVisibility}
                        className="absolute top-10 right-0 pr-3 flex items-center cursor-pointer"
                      >
                        {showPassword ? (
                          <FontAwesomeIcon icon={faEye} className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                        ) : (
                          <FontAwesomeIcon icon={faEyeSlash} className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                        )}
                      </div>
                    </div>
                  )}
                  {errorMessage && <span className="text-red-600 font-bold">{errorMessage}</span>}
                  <div className="flex items-center justify-between">
                    {!isForgotpass && (
                      <div
                        className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500 cursor-pointer"
                        onClick={() => {
                          setIsForgotpass(true);
                          setIsLogin(false);
                        }}
                      >
                        Forgot password?
                      </div>
                    )}
                  </div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    {isLoading ? (
                      'Loading...'
                    ) : !isForgotpass && isLogin ? (
                      'Sign in'
                    ) : (
                      'Send Email Verification'
                    )}
                  </button>
                  {isLogin ? (
                    <p className="text-sm font-light text-gray-500 dark:text-gray-400 flex">
                      Don’t have an account yet?{' '}
                      <div
                        onClick={() => {
                          setIsLogin(false);
                          setIsForgotpass(false);
                        }}
                        className="font-medium text-primary-600 hover:underline dark:text-primary-500 cursor-pointer ml-1"
                      >
                        Sign up
                      </div>
                    </p>
                  ) : (
                    <p className="text-sm font-light text-gray-500 dark:text-gray-400 flex">
                      Already have an account{' '}
                      <div
                        onClick={() => {
                          setIsLogin(true);
                          setIsForgotpass(false);
                        }}
                        className="font-medium text-primary-600 hover:underline dark:text-primary-500 cursor-pointer ml-1"
                      >
                        Sign In
                      </div>
                    </p>
                  )}
                  <div className="flex flex-row text-center w-full">
                    <div className="border-b-2 mb-2.5 mr-2 w-full"></div>
                    <div className="text-sm font-bold w-fit">OR</div>
                    <div className="border-b-2 mb-2.5 ml-2 w-full"></div>
                  </div>
                  <button
                    disabled={isSigningIn}
                    onClick={onGoogleSignIn}
                    className={`w-full flex items-center justify-center gap-x-3 py-2.5 border rounded-lg text-sm font-medium ${
                      isSigningIn
                        ? 'cursor-not-allowed'
                        : 'hover:bg-gray-100 transition duration-300 active:bg-gray-100'
                    }`}
                  >
                    <svg className="w-5 h-5" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_17_40)">
                        <path
                          d="M47.532 24.5528C47.532 22.9214 47.3997 21.2811 47.1175 19.6761H24.48V28.9181H37.4434C36.9055 31.8988 35.177 34.5356 32.6461 36.2111V42.2078H40.3801C44.9217 38.0278 47.532 31.8547 47.532 24.5528Z"
                          fill="#4285F4"
                        />
                        <path
                          d="M24.48 48.0016C30.9529 48.0016 36.4116 45.8764 40.3888 42.2078L32.6549 36.2111C30.5031 37.675 27.7252 38.5039 24.4888 38.5039C18.2275 38.5039 12.9187 34.2798 11.0139 28.6006H3.03296V34.7825C7.10718 42.8868 15.4056 48.0016 24.48 48.0016Z"
                          fill="#34A853"
                        />
                        <path
                          d="M11.0051 28.6006C9.99973 25.6199 9.99973 22.3922 11.0051 19.4115V13.2296H3.03298C-0.371021 20.0112 -0.371021 28.0009 3.03298 34.7825L11.0051 28.6006Z"
                          fill="#FBBC04"
                        />
                        <path
                          d="M24.48 9.49932C27.9016 9.44641 31.2086 10.7339 33.6866 13.0973L40.5387 6.24523C36.2 2.17101 30.4414 -0.068932 24.48 0.00161733C15.4055 0.00161733 7.10718 5.11644 3.03296 13.2296L11.005 19.4115C12.901 13.7235 18.2187 9.49932 24.48 9.49932Z"
                          fill="#EA4335"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_17_40">
                          <rect width="48" height="48" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    {isSigningIn ? 'Signing In...' : 'Continue with Google'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Login;
