import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin, faYelp } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  const socialsData = [
    {icon: faFacebook, link: 'https://www.facebook.com/MarciHomes/'},
    {icon: faInstagram, link: 'https://www.instagram.com/marciandlauren_nvrealtors/'},
    {icon: faLinkedin, link: 'https://www.linkedin.com/in/marci-metzger-30642496/'},
    {icon: faYelp, link: 'https://www.yelp.com/biz/xr3yQN_m2SgO0R_7S6p62w'},
  ];

  return (
    <footer className="relative bg-foreground">
      <div className="relative flex flex-col justify-center items-center gap-7 py-10">
        <div className="flex w-full justify-center items-center gap-7 max-sm:gap-3">
          {
            socialsData.map((social, i) => (
              <a href={social.link} key={i} target="_blank" className="hover:opacity-50 transition-opacity duration-500">
                <FontAwesomeIcon icon={social.icon} className="text-background text-3xl max-sm:text-[1.5rem]" />
              </a>
          ))}
        </div>
        <p className="font-sans uppercase text-[0.9rem] max-sm:text-[0.7rem] text-background/50">Copyright &copy; 2023 Marci METZGER Homes - All Rights Reserved</p>
        <div className="absolute top-[-9.3rem] rotate-180" style={{left: 'calc(50% - 17rem)'}}>
          <svg data-ux="SVG" className="x-el x-el-svg c1-1 c1-2 c1-3z c1-53 c1-54 c1-h5 c1-3y c1-h6 c1-h7 c1-b c1-c c1-d c1-e c1-f c1-g">
            <g fill="#1b1b1b" fillRule="evenodd" width={53} height={24}>
              <path d="M26.5 24L53 0H0z"></path>
            </g>
          </svg>
        </div>
      </div>
    </footer>
  )
}