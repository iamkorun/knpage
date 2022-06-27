import "./footer.css";
import { BsMouse } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { TiSocialDribbble } from "react-icons/ti";
import { TiSocialYoutube } from "react-icons/ti";
import { TiSocialGithub } from "react-icons/ti";

function Footer() {
  return (
    <div id="footer" className="container footer-container">
      <h1>
        That's all{" "}
        <a href="#home">
          <h2>
            <BsMouse /> - scroll up -
          </h2>
        </a>
      </h1>
      <div className="social-links">
        <a href="https://www.instagram.com/kn.tnk/" target="_blank">
          <BsInstagram className="social" />
        </a>
        <a href="https://www.facebook.com/Kol2n.n/" target="_blank">
          {" "}
          <FaFacebookF className="social" />
        </a>

        <a href="https://twitter.com/Korunnnn" target="_blank">
          {" "}
          <FaTwitter className="social" />
        </a>
        
        {/* <a href="#">
          {" "}
          <TiSocialDribbble className="social" />
        </a>

        <a href="#">
          <TiSocialYoutube className="social" />
        </a> */}

        <a href="https://github.com/iamkorun/" target="_blank">
          <TiSocialGithub className="social" />
        </a>
      </div>
    </div>
  );
}
export default Footer;
