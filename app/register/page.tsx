

import Link from "next/link";

function Register() {
  return (
    <main className="auth-page">
      <div className="auth-card">
        <div className="auth-header">
          <h1>CarMate</h1>
          <p>Get started with CarMate.</p>
        </div>

        <form className="auth-form">
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter your full name"
            />
          </div>

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
              placeholder="Create a password"
            />
          </div>

          <button type="submit" className="auth-button">
            Create Account
          </button>
        </form>

        <p className="auth-switch">
          Already have an account?{" "}
          <Link href="/login">Login</Link>
        </p>
      </div>
    </main>
  );
}

export default Register