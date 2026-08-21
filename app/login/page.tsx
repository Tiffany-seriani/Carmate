
import Link from "next/link";

 function Login() {
  return (
    <main className="auth-page">
      <div className="auth-card">
        <div className="auth-header">
          <h1>Welcome Back.</h1>
          <p>Log in</p>
        </div>

        <form className="auth-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
            />
          </div>

          <button type="submit" className="auth-button">
            Login
          </button>
        </form>

        <p className="auth-switch">
          Don't have an account?{" "}
          <Link href="/register">Create an account</Link>
        </p>
      </div>
    </main>
  );
}

export default Login