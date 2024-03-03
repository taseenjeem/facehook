import { Link } from "react-router-dom";

const RegisterForm = () => {
  return (
    <>
      <div className="card">
        <form className="border-b border-[#3F3F3F] pb-10 lg:pb-[30px]">
          {/* name */}
          <div className="form-control">
            <label className="auth-label" htmlFor="name">
              Name
            </label>
            <input className="auth-input" name="name" type="text" id="name" />
          </div>
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
          {/* confirm password */}
          <div className="form-control">
            <label className="auth-label" htmlFor="confirmPassword">
              Retype Password
            </label>
            <input
              className="auth-input"
              name="confirmPassword"
              type="password"
              id="confirmPassword"
            />
          </div>
          {/* Submit */}
          <button
            className="auth-input bg-lwsGreen font-bold text-deepDark transition-all hover:opacity-90"
            type="submit"
          >
            Register
          </button>
        </form>
        <div className="py-4 lg:py-4">
          <p className="text-center text-xs text-gray-600/95 lg:text-sm">
            Already have an account?
            <Link
              className="hover:text-lwsGreen text-white transition-all hover:underline"
              to="/login"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default RegisterForm;
