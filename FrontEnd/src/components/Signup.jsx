import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from "../context/auth.context";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();
  const { storeToken, authenticateUser, API_URL } = useContext(AuthContext);

  const handleSignupSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }

    const requestBody = { name, email, password };

    axios.post(`${API_URL}/auth/signup`, requestBody)
      .then(() => {
        return axios.post(`${API_URL}/auth/login`, { email, password });
      })
      .then((loginResponse) => {
        storeToken(loginResponse.data.authToken);
        authenticateUser();
        navigate('/');
      })
      .catch((error) => {
        const err = error.response?.data?.message || "Signup failed";
        setErrorMessage(err);
      });
  };

  return (
    <div className="mt-7 bg-white border border-gray-200 rounded-xl shadow-2xs">
      <div className="p-4 sm:p-7">
        <div className="text-center">
          <h1 className="block text-2xl font-bold text-gray-800">Sign up</h1>
          <p className="mt-2 text-sm text-gray-600">
            Already have an account?
            <a className="text-blue-600 decoration-2 hover:underline focus:outline-hidden focus:underline font-medium" href="/login">
              Sign in here
            </a>
          </p>
        </div>

        <div className="mt-5">
          <button type="button" className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none">
            {/* Google Icon SVG */}
            Sign up with Google
          </button>

          <div className="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-1 before:border-t before:border-gray-200 before:me-6 after:flex-1 after:border-t after:border-gray-200 after:ms-6">Or</div>

          <form onSubmit={handleSignupSubmit}>
            <div className="grid gap-y-4">

              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm mb-2">Email address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>

              {/* Password Field */}
              <div>
                <label htmlFor="password" className="block text-sm mb-2">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>

              {/* Confirm Password Field */}
              <div>
                <label htmlFor="confirm-password" className="block text-sm mb-2">Confirm Password</label>
                <input
                  type="password"
                  id="confirm-password"
                  name="confirm-password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>

              {/* Terms and Conditions */}
              <div className="flex items-center">
                <input id="terms" name="terms" type="checkbox" className="shrink-0 mt-0.5 border-gray-200 rounded-sm text-blue-600 focus:ring-blue-500" required />
                <label htmlFor="terms" className="ms-3 text-sm">I accept the <a className="text-blue-600 hover:underline font-medium" href="#">Terms and Conditions</a></label>
              </div>

              {/* Submit Button */}
              <button type="submit" className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg bg-blue-600 text-white hover:bg-blue-700">
                Sign up
              </button>

              {/* Error Message */}
              {errorMessage && (
                <p className="text-red-600 text-sm mt-2">{errorMessage}</p>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
