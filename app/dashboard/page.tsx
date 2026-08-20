import Link from "next/link";
 export default function Dashboard() {
  return (
    <main className="dashboard">
      <aside className="sidebar">
        <h1>CarMate</h1>

        <nav>
          <a href="/dashboard">Dashboard</a>
          <a href="/add-car">My Car</a>
          <a href="#">Maintenance</a>
          <a href="#">Reminders</a>
          <a href="#">Service History</a>
        </nav>

        <div className="sidebar-bottom">
          <a href="/login">Logout</a>
        </div>
      </aside>

      <section className="dashboard-content">
        <header className="dashboard-header">
          <div>
            
            <h2>Welcome to CarMate</h2>
          </div>

          <div className="profile">
            <span>TS</span>
          </div>
        </header>

        <section className="welcome-card">
          <div>
            <p className="small-text">YOUR CAR</p>
            <h2>Your car hasn't been added yet</h2>
            <p>
              Add your car to start tracking maintenance, services and
              reminders.
            </p>

            <a href="/add-car" className="add-button">
              + Add Your Car
            </a>
          </div>

          <div className="car-placeholder">
            
          </div>
        </section>

        <section className="stats">
          <div className="stat-card">
            <p>Mileage</p>
            <h3>-- km</h3>
          </div>

          <div className="stat-card">
            <p>Services</p>
            <h3>0</h3>
          </div>

          <div className="stat-card">
            <p>Reminders</p>
            <h3>0</h3>
          </div>
        </section>

        <section className="maintenance-card">
          <div className="section-heading">
            <h2>Upcoming Maintenance</h2>
            <span>View all</span>
          </div>

          <div className="empty-state">
            
            <h3>No maintenance scheduled</h3>
            <p>
              Your upcoming maintenance will appear here once you add your car.
            </p>
          </div>
        </section>
      </section>
    </main>
  );
}