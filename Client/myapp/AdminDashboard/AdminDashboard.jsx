import React from "react";

export default function AdminDashboard() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <div className="container-fluid">
          <a className="navbar-brand fw-bold" href="#">
            Admin Panel
          </a>
          
          <div
            className="collaps navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Dashboard
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Profile
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Lougout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container-fluid">
        <div className="row">
          <nav
            id="sidebar"
            className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
          >
            <div className="position-sticky pt-3">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    🏠 Dashboard
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    👥 Users
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    📦 Products
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    🧾 Orders
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    📊 Reports
                  </a>
                </li>
              </ul>
            </div>
          </nav>

          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 py-4">
            <h2 className="fw-bold mb-4">Dashboard Overview</h2>

            <div className="row g-4 mb-4">
              <div className="col-sm-6 col-lg-3">
                <div className="card text-bg-primary text-center shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title">Users</h5>
                    <p className="card-text fs-3">1,245</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <div className="card text-bg-success text-center shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title">Sales</h5>
                    <p className="card-text fs-3">$8,460</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <div className="card text-bg-warning text-center shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title">Orders</h5>
                    <p className="card-text fs-3">234</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <div className="card text-bg-danger text-center shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title">Pending</h5>
                    <p className="card-text fs-3">12</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card shadow-sm">
              <div className="card-header bg-dark text-white fw-bold">
                Recent Orders
              </div>
              <div className="card-body">
                <table className="table table-striped align-middle">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Customer</th>
                      <th>Product</th>
                      <th>Amount</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>John Doe</td>
                      <td>iPhone 15</td>
                      <td>$999</td>
                      <td>
                        <span className="badge bg-success">Delivered</span>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Jane Smith</td>
                      <td>MacBook Air</td>
                      <td>$1200</td>
                      <td>
                        <span className="badge bg-warning text-dark">
                          Pending
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Mark Brown</td>
                      <td>iPad Pro</td>
                      <td>$850</td>
                      <td>
                        <span className="badge bg-danger">Cancelled</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
