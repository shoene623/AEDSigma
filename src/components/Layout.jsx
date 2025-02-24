import { Link } from "react-router-dom"

const Layout = ({ children }) => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Dashboard</Link>
          </li>
          <li>
            <Link to="/sites">Sites</Link>
          </li>
          <li>
            <Link to="/units">Units</Link>
          </li>
          <li>
            <Link to="/inspections">Inspections</Link>
          </li>
        </ul>
      </nav>
      <main>{children}</main>
    </div>
  )
}

export default Layout

