import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <>
      <div className="card">
        <form className="border-b border-[#3F3F3F] pb-10 lg:pb-[60px]">
          {/* email */}
          <div className="form-control">
            <label className="auth-label" htmlFor="email">
              Email
            </label>
            <input
              className="auth-input"
              name="email"
              type="email"
              id="email"
            />
          </div>
          {/* password */}
          <div className="form-control">
            <label className="auth-label" htmlFor="email">
              Password
            </label>
            <input
              className="auth-input"
              name="password"
              type="password"
              id="password"
            />
          </div>
          {/* Submit */}
          <button
            className="auth-input bg-lwsGreen font-bold text-deepDark transition-all hover:opacity-90"
            type="submit"
          >
            Login
          </button>
        </form>
        <div className="py-4 lg:py-6">
          <p className="text-center text-xs text-gray-600/95 lg:text-sm">
            Don’t have account?
            <Link
              className="text-white transition-all hover:text-lwsGreen hover:underline"
              to="/create-new-account"
            >
              Create New
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
