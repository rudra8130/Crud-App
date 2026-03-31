const SignIn = () => {
  return (
    <div className="blur-bg d-flex justify-content-center align-items-center">
      <div className="card glass-card p-4">
        <h3 className="text-center mb-4">Sign In</h3>

        <form>
          {/* Email */}
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password */}
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Remember + Forgot */}
          <div className="d-flex justify-content-between mb-3">
            <div>
              <input type="checkbox" className="form-check-input me-2" />
              <label className="form-check-label">Remember me</label>
            </div>

            <a href="#" className="text-decoration-none">
              Forgot Password?
            </a>
          </div>

          {/* Button */}
          <button type="submit" className="btn btn-primary w-100">
            Sign In
          </button>

          {/* Signup link */}
          <p className="text-center mt-3 mb-0">
            Don't have an account?{" "}
            <a href="#" className="text-decoration-none fw-bold">
              Sign Up
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};
export default SignIn;
