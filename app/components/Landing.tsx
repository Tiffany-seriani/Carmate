import Navbar from "./Navbar"
import Link from "next/link";
function Landing(){
    return(
        <>
        <Navbar/>
         <main className="landing-page">
        <section className="hero">
          <div className="hero-content">
            <p className="hero-tag">YOUR CAR. YOUR CARE. YOUR CARMATE.</p>

            <h1>
              Take care of your car.
            </h1>

            <p className="hero-description">
              Keep your car information, maintenance records, and service
              reminders organized in one simple place.
            </p>

            <div className="hero-buttons">
              <Link href="/register" className="primary-button">
                Get Started
              </Link>

              <Link href="/login" className="secondary-button">
                Login
              </Link>
            </div>
          </div>

          <div className="hero-car">
            <div className="car-placeholder">
            </div>
          </div>
        </section>

        <section className="features">
          <div className="feature-card">
            <h3>Manage Your Car</h3>
            <p>
              .
            </p>
          </div>

          <div className="feature-card">
            <h3>Track Maintenance</h3>
            
              
            
          </div>

          <div className="feature-card">
            <h3>Never Miss a Service</h3>
          </div>
        </section>
      </main>
        </>
    )
}
 export default Landing