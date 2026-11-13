import { Link } from 'react-router-dom'

function ErrorPage() {
  return (
    <main className="main bg-dark">
      <div className="header">
        <h1>404</h1>
        <p>Oops! This page does not exist.</p>
        <Link to="/" className="main-nav-item">Back to home</Link>
      </div>
    </main>
  )
}

export default ErrorPage