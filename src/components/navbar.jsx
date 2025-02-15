import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul className="nav-links">
        <li>
          <Link to="/">Hem</Link>
        </li>
        <li>
          <Link to="/todo">Att göra</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
