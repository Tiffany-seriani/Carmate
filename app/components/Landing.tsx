import Navbar from "./Navbar"
import Link from "next/link";
function Landing(){
    return(
        <>
        <Navbar/>
        <h1>Welcome to CarMate.</h1>
        <p> your car care, All in one place.</p>

        <Link href="/register">
        <button>Get Started</button>
      </Link>
        </>
    )
}
 export default Landing