import { useState } from "react";

const SignUpForm = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => setLoading(false), 1500);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-neutral-950 flex items-center justify-center p-4 ">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center space-y-2">
          <div className="flex justify-center">
            <div className="h-12 w-12 text-white text-4xl">@</div>
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-white">
            Join Threads today
          </h1>
        </div>

        <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6 text-white">
          <div className="mb-6">
            <h2 className="text-lg font-semibold">Create your account</h2>
            <p className="text-neutral-400 text-sm">
              Enter your information to get started
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label
                htmlFor="username"
                className="block text-sm text-neutral-200"
              >
                Username
              </label>
              <div className="relative">
                <span className="absolute left-3 top-2.5 text-neutral-500">
                  @
                </span>
                <input
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="johndoe"
                  className="w-full pl-10 pr-3 py-2 bg-neutral-800 border border-neutral-700 rounded-md text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-700"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm text-neutral-200">
                Email
              </label>
              <div className="relative">
                <span className="absolute left-3 top-2.5 text-neutral-500">
                  ✉
                </span>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full pl-10 pr-3 py-2 bg-neutral-800 border border-neutral-700 rounded-md text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-700"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="password"
                className="block text-sm text-neutral-200"
              >
                Password
              </label>
              <div className="relative">
                <span className="absolute left-3 top-2.5 text-neutral-500">
                  🔒
                </span>
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-3 py-2 bg-neutral-800 border border-neutral-700 rounded-md text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-700"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-white text-black py-2 rounded-md font-medium hover:bg-neutral-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={loading}
            >
              {loading ? "Creating account..." : "Create account"}
            </button>

            <div className="text-center text-sm text-neutral-400">
              Already have an account?{" "}
              <a href="#" className="text-white hover:underline">
                Sign in
              </a>
            </div>
          </form>
        </div>

        <p className="text-center text-sm text-neutral-500">
          By signing up, you agree to our{" "}
          <a href="#" className="text-neutral-400 hover:underline">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="#" className="text-neutral-400 hover:underline">
            Privacy Policy
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignUpForm;
