import { useForm } from "react-hook-form";

export default function SignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    alert(data.email + data.password); // Access the email and password values
  }
  return (
    <div style={{ maxWidth: 400, margin: "2rem auto" }}>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={{ marginBottom: "1rem" }}>
          <label>
            Email
            <input
              type="Email"
              placeholder="you@mail.com"
              {...register("email", { required: "Email is rquired" })}
            />
          </label>
          {errors.email && (
            <p style={{ color: "crimson" }}>{errors.email.message}</p>
          )}
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label>
            Password
            <input
              type="password"
              placeholder="*****"
              {...register("password", {
                required: "Password is rquired",
                minLength: {
                  value: 4,
                  message: "Password must be at least 4 chars",
                },
                maxLength: {
                  value: 12,
                  message: "Password must be at most 12 chars",
                },
              })}
            />
          </label>
          {errors.password && (
            <p style={{ color: "crimson" }}>{errors.password.message}</p>
          )}
        </div>
        <button type="submit">Create Account</button>
      </form>
    </div>
  );
}
