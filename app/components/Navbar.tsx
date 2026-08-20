 import Link from "next/link"
function Navbar(){
    return(
   <nav>
  <div>
    <h2>CarMate</h2>
  </div>
 
 <div>
    <Link href= "/">Home</Link>
    <Link href= "/login">Login</Link>
    <Link href= "/dashboard">Dashboard</Link>
    <Link href= "/maintenance">Maintenance</Link>
 </div>
   </nav>
  
    )
}
export default Navbar