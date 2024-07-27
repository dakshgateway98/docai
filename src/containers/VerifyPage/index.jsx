import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { resetPasswordUserAPI } from '../../api/auth';
import { routes } from '../../utils';
import { displayErrorToast } from '../../helpers/displayToast';

const VerifyPage = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const criteria = [
    { label: 'Password must be at least 8 characters long', regex: /.{8,}/ },
    { label: 'One lowercase letter', regex: /[a-z]/ },
    { label: 'One uppercase letter', regex: /[A-Z]/ },
    { label: 'One number', regex: /\d/ },
    { label: 'One special character', regex: /[@$!%*?&]/ },
  ];

  const validatePassword = (password) => {
    return criteria.map((criterion) => ({
      ...criterion,
      isValid: criterion.regex.test(password),
    }));
  };

  const handleResetPassword = async () => {
    const validatedCriteria = validatePassword(password);

    if (password !== confirmPassword) {
      setConfirmPasswordError('Passwords do not match');
      return;
    }

    if (!validatedCriteria.every((criterion) => criterion.isValid)) {
      displayErrorToast('Password does not meet the criteria.');
      return;
    }

    try {
      const dataObj = {
        newPassword: password,
        token: searchParams.get('token'),
      };
      const res = await resetPasswordUserAPI(dataObj);
      navigate(routes.login);
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
  };

  const handleConfirmPasswordChange = (e) => {
    const value = e.target.value;
    setConfirmPassword(value);
    setConfirmPasswordError(value !== password ? 'Passwords do not match' : '');
  };

  const passwordCriteria = validatePassword(password);

  return (
    <section className="bg-gray-50 dark:bg-gray-900 h-screen">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Create a New Password
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={password}
                  onChange={handlePasswordChange}
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required={true}
                />
                {passwordCriteria.map((criterion, index) => (
                  <p
                    key={index}
                    className={`text-sm font-medium mb-1 ${criterion.isValid ? 'text-green-600' : 'text-red-600'}`}
                  >
                    {criterion.label}
                  </p>
                ))}
              </div>
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required={true}
                />
                {confirmPasswordError && <span className="text-red-600 font-bold">{confirmPasswordError}</span>}
              </div>
              {errorMessage && <span className="text-red-600 font-bold">{errorMessage}</span>}
              <button
                onClick={handleResetPassword}
                type="button"
                className="flex w-full justify-center rounded-md bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              >
                Reset Password
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VerifyPage;
