import Link from "next/link";
function Register(){
    return(
        <>
        <h1> Create your CarMate account.</h1>
         <p>Get started in seconds</p>
          
      <form>
        <div>
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your full name"
          />
        </div>

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
            placeholder="Create a password"
          />
        </div>

        <button type="submit">Create Account</button>
      </form>
      <p>
         Already have an account?{" "}
      <Link href="/login">Login</Link>
     </p>
        </>
    )
}
export default Register