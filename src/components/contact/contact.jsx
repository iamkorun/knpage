import "./contact.css";
import { AiOutlineYoutube } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";

function Contact() {
  return (
    <div id="contact" className="container contact-container">
      <h1>Contact Me</h1>
      <div className="contact-links">
        {/* <a
          href="#"
          className="contact youtube"
          target={"blank"}
        >
          <AiOutlineYoutube className="icon" />
          <h2>
            youtube <span>Creative Ambition</span>
          </h2>
        </a> */}

        {/* <a
          href="#"
          className="contact whatsapp"
          target={"blank"}
        >
          <AiOutlineWhatsApp className="icon" />
          <h2>
            whatsapp <span>+233 20 918 2598</span>
          </h2>
        </a> */}

        <a href="https://www.instagram.com/kn.tnk/" target="_blank" className="contact instagram">
          <AiOutlineInstagram className="icon" />
          <h2>
            Instagram
          </h2>
        </a>
        <a href="https://www.facebook.com/Kol2n.n/" target="_blank" className="contact instagram">
          <AiFillFacebook className="icon" />
          <h2>
            Facebook
          </h2>
        </a>
        <a href="https://github.com/iamkorun/" target="_blank" className="contact instagram">
          <AiFillGithub className="icon" />
          <h2>
            Github
          </h2>
        </a>
      </div>
    </div>
  );
}

export default Contact;
