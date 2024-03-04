import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Field from "../../global/Field";

const LoginForm = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitForm = (data) => {
    console.log(data);
    navigate("/");
  };

  return (
    <>
      <div className="card">
        <form
          onSubmit={handleSubmit(submitForm)}
          className="border-b border-[#3F3F3F] pb-10"
        >
          {/* email */}
          <Field label={`Email`} error={errors.email}>
            <input
              {...register("email", { required: "Email is required" })}
              className={`auth-input ${
                errors.email ? "border-red-500" : "border-gray-200"
              }`}
              type="email"
              name="email"
              id="email"
            />
          </Field>
          {/* password */}
          <Field label={`Password`} error={errors.password}>
            <input
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Your password must be at least 8 characters",
                },
              })}
              className={`auth-input ${
                errors.password ? "border-red-500" : "border-gray-200"
              }`}
              type="password"
              name="password"
              id="password"
            />
          </Field>
          {/* Submit */}
          <Field>
            <button
              className="auth-input bg-lwsGreen font-bold text-deepDark transition-all hover:opacity-90"
              type="submit"
            >
              Login
            </button>
          </Field>
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
