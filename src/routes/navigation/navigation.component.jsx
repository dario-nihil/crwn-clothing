import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";

import "./navigation.styles.scss";

const Navigation = () => {
  return (
    <>
      <header className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo />
        </Link>
        <nav className="nav-links-container">
          <ul>
            <Link className="nav-link" to="/shop">
              SHOP
            </Link>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default Navigation;
