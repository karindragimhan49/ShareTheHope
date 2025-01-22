import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please fill in both fields.");
      return;
    }

    setError(null); // Clear previous errors
    setLoading(true); // Show loading state

    try {
      const response = await fetch("http://localhost:5000/api/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Login successful:", data);
        localStorage.setItem("token", data.token); // Save token in localStorage
        setError(null); // Clear errors
        // Redirect or update UI (adjust the URL as needed)
        window.location.href = "/dashboard";
      } else {
        setError(data.message || "Invalid credentials. Please try again.");
      }
    } catch (err) {
      setError("An error occurred. Please try again later.");
    } finally {
      setLoading(false); // Hide loading state
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side: Image Section */}
      <div className="hidden lg:flex flex-1 relative">
        <img
          src="https://images.pexels.com/photos/5829607/pexels-photo-5829607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Login Illustration"
          className="object-cover h-full w-full"
          style={{
            clipPath: "polygon(0% 0, 100% 0, 100% 100%, 0% 100%)",
          }}
        />
      </div>

      {/* Right Side: Login Form */}
      <div className="flex-1 flex items-center justify-center bg-white">
        <div className="max-w-md w-full px-8">
          <div className="border border-gray-300 shadow-lg rounded-lg p-6 bg-gradient-to-br from-blue-200 to-blue-100 text-blue-900">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-blue-600">Welcome Back!</h1>
              <p className="text-gray-500">Log in to your account to continue</p>
            </div>

            {/* Error Message */}
            {error && (
              <div className="mb-4 text-red-500 text-center">
                <p>{error}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Password */}
              <div>
                <label htmlFor="password" className="block text-gray-700 font-medium">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Remember Me and Forgot Password */}
              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <span className="ml-2 text-gray-600">Remember me</span>
                </label>
                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                >
                  Forgot Password?
                </a>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded-md transition duration-300"
                disabled={loading}
              >
                {loading ? "Logging in..." : "Log In"}
              </button>
            </form>

            <p className="text-center mt-6 text-gray-600">
              Don’t have an account?{" "}
              <a
                href="/register"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Register
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
