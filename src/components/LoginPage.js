import React from 'react'
import { Link } from 'react-router-dom'

export default function LoginPage() {
  return (
    <div>
      <div className="d-flex justify-content-center align-items-center min-vh-100">
      <div className="card p-4 shadow">
        <div className="card-body">
          <h3 className="card-title text-center mb-4">Logo</h3>
          <form>
            <div className="form-group mb-3">
              <label htmlFor="username mb-2">Username</label>
              <input type="text" className="form-control mt-2" id="username" placeholder="Enter username" />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="password">Password</label>
              <input type="password" className="form-control mt-2" id="password" placeholder="Enter password" />
            </div>
            <Link to="/"><button type="submit" className="btn btn-primary w-100">Sign In</button></Link>
          </form>
        </div>
      </div>
    </div>
    </div>
  )
}
