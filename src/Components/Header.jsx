import { TbListDetails } from "react-icons/tb";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom header">
      {" "}
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
      >
        {" "}
        <svg className="bi me-2" width="40" height="32" aria-hidden="true">
          <use xlinkHref="#bootstrap"></use>
        </svg>{" "}
        <span className="fs-4">
          <TbListDetails /> Employee Management
        </span>{" "}
      </a>{" "}
      <ul className="nav nav-pills">
        {" "}
        <li className="nav-item">
          <Link to="/" className="nav-link active" aria-current="page">
            Home
          </Link>
        </li>{" "}
        <li className="nav-item">
          <Link to="/signin" className="nav-link">
            Sign In
          </Link>
        </li>{" "}
        <li className="nav-item">
          <a href="#" className="nav-link">
            Achivements
          </a>
        </li>{" "}
        <li className="nav-item">
          <a href="#" className="nav-link">
            Contact
          </a>
        </li>{" "}
        <li className="nav-item">
          <a href="#" className="nav-link">
            About
          </a>
        </li>{" "}
      </ul>{" "}
    </header>
  );
};

export default Header;
