// importing logo from images folder
import logo from "../images/logo.svg";

// named import
import { socialLinks } from "../data";
import PageLinks from "./PageLinks";
import SocialLink from "./SocialLink";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>

        <PageLinks parentClass="nav-links" itemClass="nav-link" />

        <ul className="nav-icons">
          {/* mapping over socialLinks array, rendering the li elements */}
          {socialLinks.map((link) => {
            return <SocialLink key={link.id} {...link} itemClass="nav-icon" />;
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
