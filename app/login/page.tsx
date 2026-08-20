import Link from "next/link";
function Login(){
    return(
        <>
           <h1>Good to see you.Welcome Back</h1>
      <p>Log in to CarMate.</p>

      <form>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
          />
        </div>

        <button type="submit">Login</button>
      </form>
      <p>
       Don't have an account?{" "}
      <Link href="/register">Create an account</Link>
      </p>
        </>
    )
}
export default Login