import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin, faYelp } from "@fortawesome/free-brands-svg-icons";

export default function Socials() {
  return (
    <section className="bg-foreground">
      <div className="container">
        <div className="flex w-full justify-center items-center gap-14">
          <a href="https://www.facebook.com/MarciHomes/" target="_blank" className="hover:opacity-50 transition-opacity duration-500">
            <FontAwesomeIcon icon={faFacebook} className="text-background text-4xl" />
          </a>
          <a href="https://www.instagram.com/marciandlauren_nvrealtors/" target="_blank" className="hover:opacity-50 transition-opacity duration-500">
            <FontAwesomeIcon icon={faInstagram} className="text-background text-4xl" />
          </a>
          <a href="https://www.linkedin.com/in/marci-metzger-30642496/" target="_blank" className="hover:opacity-50 transition-opacity duration-500">
            <FontAwesomeIcon icon={faLinkedin} className="text-background text-4xl" />
          </a>
          <a href="https://www.yelp.com/biz/xr3yQN_m2SgO0R_7S6p62w" target="_blank" className="hover:opacity-50 transition-opacity duration-500">
            <FontAwesomeIcon icon={faYelp} className="text-background text-4xl" />
          </a>
        </div>
      </div>
    </section>
  )
}