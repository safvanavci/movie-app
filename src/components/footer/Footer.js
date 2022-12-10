import { RiMovie2Line } from "react-icons/ri";
import { FaTwitter, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { memo } from "react";

export default memo(function Footer() {
  
  return (
    <footer>
      <div className="logo">
        <RiMovie2Line size={100} />
        <h1>Movie</h1>
      </div>
      <div className="social">
        <a
          href="https://twitter.com/safvanavci"
          className="twitter"
          target="blank"
        >
          <FaTwitter size={30} />
        </a>
        <a
          href="https://www.facebook.com/safvan.avci/"
          className="facebook"
          target="blank"
        >
          <FaFacebook size={30} />
        </a>
        <a
          href="https://www.instagram.com/safvanavci/"
          className="instagram"
          target="blank"
        >
          <FaInstagram size={30} />
        </a>
        <a
          href="https://www.youtube.com/@safvanavci/featured"
          className="youtube"
          target="blank"
        >
          <FaYoutube size={30} />
        </a>
      </div>
    </footer>
  );
})
