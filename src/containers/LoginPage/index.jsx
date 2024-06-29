import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { Layout } from '../../layouts';

import { useAuth } from '../../contexts/authContext';

import { doCreateUserWithEmailAndPassword, doSignInWithEmailAndPassword, doSignInWithGoogle } from '../../firebase/auth';
import { auth } from '../../firebase/firebase';

const Login = () => {
  const [isSigningIn, setIsSigningIn] = useState(false);

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setconfirmPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const [isLogin, setIsLogin] = useState(true)

  const { userLoggedIn , currentUser } = useAuth();

  console.log({currentUser})

  const onSubmit = async e => {
    try {
      e.preventDefault();
    if (isLogin) {
      setIsSigningIn(true);
      await doSignInWithEmailAndPassword(email, password);
    }else{
      setIsRegistering(true);
      const response = await doCreateUserWithEmailAndPassword(email, password);
      console.log({response})
    }
    } catch (error) {
      console.log({error})
    }
    
  };

  // useEffect(() => {
  //  let unsubscribe = auth.onAuthStateChanged(user => {
  //     if (user) {
  //       console.log(user)
  //     }
  //   })
  //   return unsubscribe;
  // }, [])
  

  const onGoogleSignIn = e => {
    e.preventDefault();
    if (!isSigningIn) {
      setIsSigningIn(true);
      doSignInWithGoogle().catch(err => {
        setIsSigningIn(false);
      });
    }
  };

  return (
    <Layout>
      <section class="bg-gray-50 dark:bg-gray-900 h-100">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                {isLogin ? 'Sign in to your account' : 'Create an account'}
              </h1>
              <form onSubmit={onSubmit} class="space-y-4 md:space-y-6" action="#">
                <div>
                  <label
                    for="email"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={e => {
                      setEmail(e.target.value);
                    }}
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required=""
                  />
                </div>
                {isLogin ? (
                  <>
                    {' '}
                    <div>
                      <label
                        for="password"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        value={password}
                        onChange={e => {
                          setPassword(e.target.value);
                        }}
                        placeholder="••••••••"
                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required=""
                      />
                    </div>
                    {errorMessage && (
                            <span className='text-red-600 font-bold'>{errorMessage}</span>
                        )}
                    <div class="flex items-center justify-between">
                      {/* <div class="flex items-start">
                        <div class="flex items-center h-5">
                          <input
                            id="remember"
                            aria-describedby="remember"
                            type="checkbox"
                            class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                            required=""
                          />
                        </div>
                        <div class="ml-3 text-sm">
                          <label for="remember" class="text-gray-500 dark:text-gray-300">
                            Remember me
                          </label>
                        </div>
                      </div> */}
                      <a
                        href="#"
                        class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                      >
                        Forgot password?
                      </a>
                    </div>
                  </>
                ) : (
                  <></>
                )}
                <button
                  type="submit"
                  class="flex w-full justify-center rounded-md bg-sky-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  {isLogin ? 'Sign in' : 'Send Email Verification'}
                </button>

                {isLogin ? (
                  <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                    Don’t have an account yet?{' '}
                    <a
                      href="#"
                      onClick={() => setIsLogin(false)}
                      class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                    >
                      Sign up
                    </a>
                  </p>
                ) : (
                  <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                    Already have an account{' '}
                    <a
                      href="#"
                      onClick={() => setIsLogin(true)}
                      class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                    >
                      Sign In
                    </a>{' '}
                  </p>
                )}

                <div className="flex flex-row text-center w-full">
                  <div className="border-b-2 mb-2.5 mr-2 w-full"></div>
                  <div className="text-sm font-bold w-fit">OR</div>
                  <div className="border-b-2 mb-2.5 ml-2 w-full"></div>
                </div>
                <button
                  disabled={isSigningIn}
                  onClick={e => {
                    onGoogleSignIn(e);
                  }}
                  className={`w-full flex items-center justify-center gap-x-3 py-2.5 border rounded-lg text-sm font-medium  ${
                    isSigningIn
                      ? 'cursor-not-allowed'
                      : 'hover:bg-gray-100 transition duration-300 active:bg-gray-100'
                  }`}
                >
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
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
      </section>
    </Layout>
  );
};

export default Login;
